<template>
  <div class="register-container">
    <div class="header">注册 <span class="login_tip" @click="toLogin">已有账号,去登录</span></div>
    <a-form-model ref="RegisterForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-model-item label="用户名" prop="name">
        <a-input v-model="form.name"/>
      </a-form-model-item>

      <a-form-model-item label="密码" prop="password">
        <a-input v-model="form.password"/>
      </a-form-model-item>
      <a-form-model-item label="再次输入密码" prop="password2">
        <a-input v-model="form.password2"/>
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 17, offset: 4 }">
        <a-button type="primary" @click="onSubmit" class="register-btn">
          注册
        </a-button>
      </a-form-model-item>
    </a-form-model>
    <div class="register-config">
      <a-form-model ref="AgreementForm" :model="agreementForm" :rules="agreementRules">
        <a-form-model-item prop="agree">
          <a-checkbox :defaultChecked="agreementForm.agree" v-model="agreementForm.agree">我已阅读[]</a-checkbox>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Register",
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
      let validatePass2 = (rule, value, callback) => {
        if (!value) {
          callback(new Error('密码不能为空'));
        } else if (value !== this.form.password) {
          callback(new Error('两次密码不一致'));
        } else {
          callback();
        }
      };

      let validateAgreement = (rule, value, callback) => {
        console.log("value", value)
        if (value) {
          callback()
        } else {
          callback(new Error('请先同意'))
        }
      }
      return {
        labelCol: { span: 6 },
        wrapperCol: { span: 15 },
        form: {
          name: '',
          password: '',
          password2: ''
        },
        agreementForm: {
          agree: false
        },
        rules: {
          name: [{ validator: validateName, trigger: 'change' }],
          password: [{ validator: validatePass, trigger: 'change' }],
          password2: [{ validator: validatePass2, trigger: 'change' }],
        },
        agreementRules: {
          agree: [{ validator: validateAgreement, trigger: 'change' }],
        },
        defaultChecked: false,
        isCheckedAgreement: false,
        showAlertMsg: false
      };
    },
    methods: {
      toLogin() {
        this.$emit('showLogin')
      },
      changeAgreeBtn(e) {
        this.isCheckedAgreement = e.target.checked
        console.log("this.isCheckedAgreement", this.isCheckedAgreement)
      },
      onSubmit() {
        const Forms = ['RegisterForm', 'AgreementForm']
        let flag = false
        flag = Forms.every( formName => {
          let current = false
          this.$refs[formName].validate( valid => {
            if (valid) {
              current = true
              return true
            } else {
              current = false
              return false
            }
          })
          return current
        })

        if (flag) {
          this.$emit('showLogin')
        }
        // 校验表单

      },
      onClose() {

      }
    }
  }
</script>

<style lang="less">
  .pc {
    .register-container {
      width: 400px;
      height: 400px;
      box-sizing: border-box;
      border: 1px solid black;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -200px;
      margin-top: -200px;

      .header {
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
      }
      .register-btn {
        width: 100%;
      }

      .register-config {
        padding-left: 50px;
      }
    }
  }
</style>
