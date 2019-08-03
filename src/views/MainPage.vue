<template>
  <div class="mainpage">
    <div class="content center">
      <img class="logo" :src="require('../assets/logo.png')" alt="Logo"/> 

         <div class="saldo">
           <div class="saldo-text">
            <small >Saldo disponivel</small>
           </div>
            <h1>0,00{{ saldo }}</h1>
          </div>    

      <div class="mainpage-home">
        
       
        <div class="actions">
          
          <button type="navigate" id="mainpage-button" class="center" @click="Deposit">
            <img class="icon" :src="require('../assets/piggy-bank.png')" alt="icon-depositar">
            <div class="button-text">
              <span>
                Depositar
              </span>
            </div>
          </button>
        </div>

        <br>

         <div class="actions">
          <button type="navigate" id="mainpage-button" class="center" @click="Pay">
            <img class="icon" :src="require('../assets/pay.png')" alt="icon-pagar">
            <div class="button-text">
              <span>
                Pagar
              </span>
            </div>
          </button>
        </div>

        <br>

         <div class="actions">
          <button type="navigate" id="mainpage-button" class="center">
            <img class="icon" :src="require('../assets/surface1.png')" alt="icon-tranferir">
            <div class="button-text">
              <span>
                Tranferir
              </span>
            </div>
          </button>
        </div>

        
        <br>

         <div class="actions">
          <button type="navigate" id="mainpage-button" class="center" @click="signOut">
            <img class="icon" :src="require('../assets/logout.png')" alt="icon-depositar">
            <div class="button-text">
              <span>
                Sair
              </span>
            </div>
          </button>
        </div>


       
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'mainpage',
  data () {
    return {
      account: []
    }
  },
  
  methods: {
    Deposit () {
      this.$router.push({ path: '/deposit' })
    },
    Pay () {
      this.$router.push({ path: '/pay' })
    },
    Tranferir () {
      this.$router.push({ path: '/tranferir' })
    },
    signOut () {
      firebase.auth().signOut().then(() => {
        alert('Desconectado com sucesso!')
        this.$router.push('/login')
      }).catch(error => {
        alert('Erro ao desconectar. \n\n' + error)
      })
    }
  }
}
</script>

<style scoped>
  .mainpage {
    overflow: auto;
    background-color: #333333;
    background-size: cover;
    width: 100%;
    height: 100%;
  }
  
  .mainpage > .content {
    width: 334px;
    border-radius: 6px;
    padding:21.67px 40px;
  }

  .center {
    display: block;
    margin: 0 auto;
  }
  .mainpage-home {
    margin-top: 80px;
  }
  .saldo{
    border:1px solid #fff;
    height: 104px;
    width: calc(100% - 50px);
    border-radius: 6px;
    padding: 0 25px 5px;
    font-family: 'Roboto', sans-serif;
    font-weight: lighter;
    background: #FFF;
    margin-bottom: 220px;
  }
  .saldo-text{
    margin: 18px 0;
    font-size: 18px;
    color:#515151;
    
  }
  .mainpage-home > .actions > button[type="navigate"] {
    background-color: #FA7268;
    border: 0;
    border-radius: 8px;
    color: #FFF;
    font-family: 'Roboto', sans-serif;
    font-weight: lighter;
    font-size: 18px;
    width: 300px;
    height: 48px;
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
    display: block;
    height: 80.66px;
    width:334px;
    margin-bottom: 21.67px;
  }
  .mainpage > .content > .mainpage-home > .input-control > label {
    display: none;
  }
</style>
