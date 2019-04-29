<template>
  <el-dialog title="分配用户角色" :visible.sync="dialogFormVisible">
    <el-form :model="formData">
      <el-form-item label="用户名" label-width="120px">
        <el-input v-model="formData.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="用户角色" label-width="120px">
        <el-select v-model="selectVal" placeholder="请选择活动区域">
          <el-option label="请选择" :value="-1"></el-option>
          <el-option
            v-for="item in roleList"
            :key="item.id"
            :label="item.roleName"
            :value="item.id"
          ></el-option>
        </el-select>
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
  name: 'editRole',
  data () {
    return {
      dialogFormVisible: false,
      selectVal: -1,
      formData: {},
      roleList: [],
      currentId: ''
    }
  },
  methods: {
    async showEditRoleDialog (user) {
      this.dialogFormVisible = true
      this.formData = user
      this.currentId = this.formData.id
      const [ roleData, userData ] = await Promise.all([
        this.$http.get(`roles`),
        this.$http.get(`users/${this.currentId}`)
      ])
      // const { data: {data} } = await this.$http.get(`roles`)
      this.roleList = roleData.data.data
      // const res = await this.$http.get(`users/${this.currentId}`)
      this.selectVal = userData.data.data.rid
    },
    async handleSubmit () {
      const { data: {data, meta: {status, msg}} } = await this.$http.put(`users/${this.currentId}/role`, {rid: this.selectVal})
      if (status === 200) {
        this.dialogFormVisible = false
        this.$message.success(msg)
        this.$emit('success-editRole')
      }
    }
  }
}
</script>

<style>

</style>
