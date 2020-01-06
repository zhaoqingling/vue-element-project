<template>
<div class="login-wrapper">
  <div class="login-box">
    <h2 class="tit">CMDB 系统</h2>
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="login-form">
    <el-form-item prop="userName">
      <el-input v-model.number="ruleForm2.userName"></el-input>
      <i class="iconfont icon-user"></i>
    </el-form-item>
    <el-form-item prop="pass">
      <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
      <i class="iconfont icon-password"></i>
    </el-form-item>
    <p class="forget">找回密码</p>
    <el-form-item class="btn-login">
      <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
    </el-form-item>
  </el-form>
  </div>
</div>  
</template>
<script>
import { mapMutations,mapGetters, mapState} from 'vuex'
export default {
  data(){
    var checkAge = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        pass: '',
        userName: ''
      },
      rules2: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        userName: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    }
  },
  methods:{
    ...mapMutations({
        intoLogin:'intoLogin'
    }),
     submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 存入store
            this.intoLogin(this.ruleForm2);
            this.$router.push('/');
          } else {
            // console.log('error submit!!');
            return false;
          }
        });
      }
  }
}  
</script>
<style lang="scss" scoped>
@import '../../style/primary.scss';
.login-wrapper{
  width: 100%;
  height: 100%;
  background: url(/static/image/logins.png) #f1f1f1 center bottom no-repeat;
  background-size: 100% auto;
  .login-box {
    padding:30px 35px 0;
    width: 380px;
    height: 370px;
    background: #fff;
    position: fixed;
    top: 120px;
    left: 50%;
    margin-left: -190px;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
    .tit {
      margin-top: 10px;
      margin-bottom: 30px;
      font-weight: normal;
      text-align: center;
      color: $color;
      font-size: 26px;
    }
    .forget {
      padding: 0 3px 10px 0;
      color: $color;
      text-align: right;
      cursor: pointer;
    }
  }
  .el-form {
    .el-form-item {
      padding-top: 5px;
      position: relative;
    }
    .icon-user{
      position: absolute;
      top: 2px;
      left: 10px;
      font-size: 20px;
      color:#615f5f;
    }
    .icon-password {
      position: absolute;
      top: 2px;
      left: 10px;
      font-size: 22px;
      color:#615f5f;
    }
  }
  .login-form{
    .btn-login{
      button{
        width: 100%;
      }
    }
  }
}

</style>