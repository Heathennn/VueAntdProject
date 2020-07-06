<template>
  <div class="admin-login-page">
    <LoginForm v-if="isLogin" @showRegister="showRegister"></LoginForm>
    <Register v-else @showLogin="showLogin"></Register>
  </div>
</template>

<script>
  import LoginForm from './components/LoginForm'
  import Register from "./components/Register"
  export default {
    name: "LoginAndRegister",
    components: {
      LoginForm,
      Register
    },
    data() {
      return {
        isLogin: true
      }
    },
    methods: {
      showLogin() {
        this.isLogin = true;
      },
      showRegister() {
        this.isLogin = false;
      }
    }
  }
</script>

<style lang="less">
  .pc {
    .admin-login-page {
      width: 100%;
      height: 100%;
      position: relative;
    }
  }
</style>
