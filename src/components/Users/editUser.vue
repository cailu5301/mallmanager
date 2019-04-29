<template>
  <el-dialog title="修改用户信息" :visible.sync="dialogFormVisible">
    <!-- 表单 -->
    <el-form label-position="right" label-width="80px" :model="editFormData">
      <el-form-item label="用户名">
        <el-input v-model="editFormData.username" disabled=""></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="editFormData.email"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="editFormData.mobile"></el-input>
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
      editFormData: {}
    }
  },
  methods: {
    showEditDialog (userData) {
      this.dialogFormVisible = true
      this.editFormData = userData
    },
    async handleSubmit () {
      const id = this.editFormData.id
      const { data: {data, meta: {status, msg}} } = await this.$http.put(`users/${id}`, this.editFormData)
      if (status === 200) {
        this.dialogFormVisible = false
        this.$message.success('修改成功')
        this.$emit('success-edit')
      }
    }
  }
}
</script>

<style>

</style>
