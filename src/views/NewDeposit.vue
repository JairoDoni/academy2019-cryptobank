<template>
  <div class="deposit">
    <div class="content center">
      <img class="logo" :src="require('../assets/logo.png')" alt="Logo"/> 

      <form class="deposit-form">
        <div class="blue"></div>
        <div class="box">
          <small class="text" for="deposit-input">Informe a <strong>quantia</strong> desejada</small>
          <div class="input-control">
            <input v-model="dep.amount" type="amount" id="deposit-input" class="input">
          </div>
          <div class="actions">
            <button type="submit" id="deposit-button" class="center">
              Depositar
            </button>
          </div>
        </div>  
      </form>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name:'new-deposit',
  data () {
    return {
        dep: {
          amount: 0,
          data:''
      }
    }
  },
     methods: {
      newDeposit (...args) {
        const {amount, date} = this.dep
        // Função para atribuir a coleção users o id do usuário corrente.
        const userUid = firebase.auth().currentUser.uid
        const docUserId = firebase.firestore().collection('users').doc().id
        const docDepositId = firebase.firestore().collection('deposits').doc().id
        let total = 0
        firebase.firestore().collection('user').get()
        .then((querySnapShot) => {
          querySnapShot.forEach((doc) => {
            total += parseInt(doc.data().money)
          })
        })
        console.log(total)
        firebase.firestore().collection('users').doc(docUserId).set({ userUid })
          .then(() => {
            alert('O saldo foi atualizado!')
          }).catch(error => {
            alert('Erro ao criar usuário para depositar! \n\n' + error)
          })
        // para depositar
        firebase.firestore().collection('users').doc(docUserId).collection('deposits').doc(docDepositId).set({ id: docDepositId, amount, data })
          .then(() => {
            alert('Deposito Efetuado!')
            this.$router.push('/mainpage')
          }).catch(error => {
            alert('Erro ao criar depósito \n\n' + error)
          })
      }

     }

}
</script>

<style scoped>

   .deposit {
    overflow: auto;
    background-color: #333333;
    background-size: cover;
    padding: 106px 0;
    width: 100%;
    height: 100%;
  }
  
  .deposit > .content {
    width: 380px;
    margin-bottom: 60px;
    border-radius: 6px;
  }
  .box{
    height: 208px;
    width: calc(100% - 50px);
    border-radius: 8px;
    padding: 40px 25px 0px;
    font-family: 'Roboto', sans-serif;
    font-weight: lighter;
    background: #FFF;
    text-align: center;
    box-shadow: 0 24px inset #4076AD; 
  }
  .text{
    height: 24px;
    width: 244px;
    font-size: 20px;
   }
  
  .center {
    display: block;
    margin: 0 auto;
  }

  .deposit-form {
    margin-top: 80px;
  }

  .input-control {
    margin-bottom: 60px;
  }

  .input-control > label {
    display: block;
  }

  .input-control > .input {
    height: 45px;
    width: calc(100% - 50px);
    border-radius: 8px;
    border-width: 0;
    background: #FFF;
    font-family:'Roboto',sans-serif;
    font-size: 14px;
    padding: 0 25px;
  }
  
  .input-control > .input:focus {
    background: #F2F2F2;
  }

  .deposit-form > .actions > button[type="submit"] {
    background-color: #FA7268;
    border: 0;
    border-radius: 8px;
    color: #FFF;
    font-family:'Roboto',sans-serif;
    font-weight: bold;
    font-size: 15px;
    width: 100px;
    height: 45px;
    cursor: pointer;
  }
  .button-text{
    text-align: right;
    padding: 6px 0;
    
  }
  .icon{
    float: left;
    display: block;
  }
  
  .logo {
    margin: auto;
    display: block;
    height: 80.66px;
    width:334px;
  }
  .deposit > .content > .login-form > .input-control > label {
    display: none;
  }
</style>
