<template>
  <div class="login-wrapper">
    <el-form :model="loginForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="loginForm" size="medium">
      <h2>用户登录界面</h2>
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="btn" @click="handleLogin">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    async handleLogin () {
      const {data: {data , meta: {status, msg}}} = await this.$http.post('login', this.loginForm)
      if (status === 200) {
        this.$message({
          type: 'success',
          message: msg
        })
        window.localStorage.setItem('token', data.token)
        this.$router.push({
          name: 'Home'
        })
      } else {
        this.$message({
          type: 'error',
          message: msg
        })
      }
    }
  }
}
</script>

<style scoped>
.login-wrapper {
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.loginForm {
  background-color: white;
  width: 500px;
  height: 300px;
  border-radius: 5px;
  padding: 20px;
}
.btn {
  width: 100%;
}
</style>
