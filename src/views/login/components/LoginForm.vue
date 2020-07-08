<template>
  <div class="login_container">
    <div class="header">登录</div>
    <a-form-model ref="LoginForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-model-item label="用户名" prop="name">
        <a-input v-model="form.name" />
      </a-form-model-item>

      <a-form-model-item label="密码" prop="password">
        <a-input v-model="form.password" />
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 17, offset: 4 }">
        <a-button type="primary" @click="onSubmit" class="login-btn">
          登录
        </a-button>
      </a-form-model-item>
    </a-form-model>

    <div class="login_config">
      <a-checkbox>下次自动登录</a-checkbox>
      <div class="tips">
        <span>忘记密码</span>丨<span @click="toRegist">注册</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      let validateName = (rule, value, callback) => {
        if (!value) {
          callback(new Error('用户名不能为空'));
        } else {
          // if (this.form.checkPass !== '') {
          //   this.$refs.ruleForm.validateField('checkPass');
          // }
          callback();
        }
      };
      let validatePass = (rule, value, callback) => {
        if (!value) {
          callback(new Error('密码不能为空'));
        }else {
          callback();
        }
      };
      return {
        labelCol: { span: 6 },
        wrapperCol: { span: 15 },
        form: {
          name: '',
          password: ''
        },
        rules: {
          name: [{ validator: validateName, trigger: 'change' }],
          password: [{ validator: validatePass, trigger: 'change' }],
        },
      };
    },
    methods: {
      // 跳转到注册页面
      toRegist() {
        this.$emit('showRegister')
      },
      onSubmit() {
        // 校验表单
        this.$refs.LoginForm.validate( valid => {
          if (valid) {
            this.$router.push({ path: '/home', replace: true})
            return true
          } else {
            return false
          }
        })
      },
    },
  };
</script>

<style lang="less">
  .pc {
    .login_container {
      .header {
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
      }
      width: 400px;
      height: 400px;
      box-sizing: border-box;
      border: 1px solid black;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -200px;
      margin-top: -200px;

      .login_config {
        display: flex;
        justify-content: space-between;
      }
      .login-btn {
        width: 100%;
      }
    }
  }
</style>
