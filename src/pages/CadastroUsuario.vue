<template>
  <q-page>
    <main class="fundo-imagem h-screen relative-main">

<div class="main wrapper">
<div class="w-full mt-20 logo-gigante">
  <img class="w-full" src="../assets/logoJJ.png" alt="Logo mangaJJ">
  <h3>Collection</h3>
</div>
<h3 class="title-page">Cadastrar</h3>
  <form action="" class="form-login">
    <div class="input-login">
      <span>
        <img  src="../assets/mdi_user.png" alt="">
      </span>
    <input class='cor-fonte' type="text" v-model="cadastrar.name" placeholder="Nome">
  </div>
    <div class="input-login">
      <span>
        <img  src="../assets/mdi_user.png" alt="">
      </span>
    <input class='cor-fonte' type="text" v-model="cadastrar.email" placeholder="Email">
  </div>
  <div class="input-login">
      <span>
        <img  src="../assets/mdi_password.png" alt="">
      </span>
    <input class='cor-fonte' type="password" v-model="cadastrar.password" placeholder="Password">
  </div>

    <button class="login-button" type="button" @click="loginSubmit">Registrar</button>
    <router-link class="link-cadastro" to="/">Cancelar</router-link>
  </form>
</div>
</main>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { MangaApiService } from '../js/services/manga-api.service.js'
import { useRouter } from 'vue-router'
const router = useRouter()
const mangaApiService = new MangaApiService()

const cadastrar = ref({
  email: '',
  password: '',
  name: ''
})

function loginSubmit () {
  mangaApiService.cadastrar(cadastrar.value.email, cadastrar.value.password, cadastrar.value.name)
    .then(response => {
      if (response.success && (response.status === 200 || response.status === 201)) {
        router.push('login')
      }
    })
}
</script>
<style scoped>
.fundo-imagem {
  background-image: url('../assets/backgroud-manga.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;

}
.relative-main{
  position: relative;
}
.logo-gigante{
  position: relative;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  width: 100%;
}
.title-page {
  font-size: 5rem;
  font-weight: bold;
  font-family: 'Roboto Condensed', sans-serif;
  text-align: center;
  color: rgba(37, 37, 37, 1);
  left: 20%;
  margin-top: 10%;
}
.logo-gigante h3{
  font-size: 3rem;
  font-weight: bold;
  font-family: 'Roboto Condensed', sans-serif;
  text-align: center;
  color: rgba(37, 37, 37, 1);
  position: absolute;
  bottom: 0;
  left: 20%;

}

.form-login {

  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.form-login .link-cadastro {
  color: red;
  font-size: 2rem;
  font-weight: 900;
  margin-top: 4rem;
  text-decoration: underline;
}
.input-login {
  border:  2px solid rgba(230, 230, 230, 1);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  background-color: #fff;
  border-radius: 3rem;
  margin-bottom: 1rem;
}

.input-login span {
  background-color: transparent;
  margin-left: 2rem;
  width: 5rem;
  height: 5rem;
  background-color: transparent;
  border-top-left-radius: 3rem;
  border-bottom-left-radius: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.input-login input {
  width: 100%;
  height: 5rem;
  background-color: transparent;
  border-top-right-radius: 3rem;
  border-bottom-right-radius: 3rem;
  padding-left: 1rem;
  font-size: 1.5rem;
  border : none;
  font-weight: 400;
  font-size: 1.5rem;
  outline: 0;
}

.login-button {
  width: 100%;
  height: 5rem;
  background-color: rgba(37, 37, 37, 1);
  border-radius: 3rem;
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: 900;
  font-size: 1.5rem;
  color: rgba(230, 230, 230, 1);
  border: 0.3rem solid rgba(230, 230, 230, 1);
}
.main {
  display: flex;
  flex-direction: column;
}

.mine-personagem {

  position: absolute;
  bottom: 0;
  left: 0;
  width: 45%;
}

</style>
