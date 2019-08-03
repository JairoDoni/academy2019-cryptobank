<template>
  <div class="createaccount">
    <div class="content center">
      <img class="logo" :src="require('../assets/logo.png')" alt="Logo"/>

      <form class="createaccount-form" @submit.prevent="createAccount">
        <label for="email-input">E-mail</label>
        <div class="input-control">
          <input v-model="email" type="email" id="email-input" required name="email" class="input" placeholder="Digite seu e-mail">
        </div>

        <label for="password-input">Senha</label>
        <div class="input-control">
          <input v-model="password" type="password" id="password-input" required name="password" class="input" placeholder="Digite sua senha">
        </div>

        <div class="actions">
          <button type="submit" id="create-account-button" class="center">
            Criar conta
          </button>
        </div>

        <br/>

        <div class="actions">
          <center>
            <!-- user tag strong em "Acessar" tambem funciona -->
            <small class="dir-account">Ja é cadastrado? <span type="submit" class="bold" @click="returnToLogin">Acesse</span> </small>
         </center>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase'

export default {
  data: () => ({
    account:{
      email: '',
      password: '',
      saldo:0.00
    }
  }),

  methods: {
    createAccount (...args) {
      firebase.auth()
      .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert('Conta criada com sucesso !')
          this.$router.push({ path: '/login' })
        }).catch((error) => {
          alert('Erro ao criar conta. \n\n' + error)
        })
    },

    returnToLogin () {
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style scoped>
  .createaccount {
    overflow: auto;
    background: url("../assets/fundo.png") no-repeat center center fixed;
    background-color: #54C780;
    background-size: cover;
    padding: 106px 0;
    width: 100%;
    height: 100%;
  }
  .createaccount > .content {
    width: 395px;
    margin-top: 60px;
    margin-bottom: 60px;
    border-radius: 6px;
  }
  .center {
    display: block;
    margin: 0 auto;
  }
  .createaccount-form {
    margin-top: 30px;
  }
  .input-control {
    margin-bottom: 20px;
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
  .createaccount-form > .actions > button[type="submit"] {
    background-color: #FA7268;
    border: 0;
    border-radius: 8px;
    color: #FFF;
    font-family:'Roboto',sans-serif;
    font-weight: bold;
    font-size: 15px;
    width: 130px;
    height: 45px;
    cursor: pointer;
  }
  .dir-account{
    text-align: center;
    color: #FFF;
    font-family: 'Roboto', sans-serif; 
    font-weight: lighter;
    font-size: 15px;
    height: 18px;
    width: 172px;
    cursor: pointer;
  }
  .bold{
    font-weight: bold;
  }
  .logo {
    margin: auto;
    display: block;
    height: 80.66px;
    width:334px;
  }
  .createaccount > .content > .createaccount-form > .input-control > label {
    display: none;
  }
</style>
