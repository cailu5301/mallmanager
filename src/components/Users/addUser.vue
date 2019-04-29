<template>
  <!-- 对话框-添加用户 -->
    <el-dialog title="添加用户" :visible.sync="dialogFormVisible" :rules="rules">
      <!-- 表单 -->
      <el-form label-position="right" label-width="80px" :model="addFormData" :rules="rules">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="addFormData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="addFormData.password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="addFormData.email"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="mobile">
          <el-input v-model="addFormData.mobile"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmit()">确 定</el-button>
      </div>
    </el-dialog>
</template>

<script>
export default {
  data () {
    return {
      dialogFormVisible: false,
      addFormData: {
        username: '',
        password: '',
        email: '',
        mobile: ''
      },
      rules: {
        username: [
          { required: true, message: '请填写用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    showAddDialog () {
      this.dialogFormVisible = true
    },
    async handleSubmit () {
      const { data: {data, meta: {status, msg}} } = await this.$http.post('users', this.addFormData)
      if (status === 201 ) {
        this.dialogFormVisible = false
        this.addFormData = {}
        this.$emit('success-add')
        this.$message.success('添加成功')
      }
    }
  }
}
</script>

<style>

</style>
