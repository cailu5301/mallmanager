<template>
  <el-card class="box-card">
    <!-- 面包屑 -->
    <cusBread level1="权限管理" level2="权限列表"></cusBread>
    <!-- 表格 -->
    <el-table
      class="table"
      border
      height="550"
      :data="RightsData"
      style="width: 100%">
      <el-table-column
        type="index"
        width="50">
      </el-table-column>
      <el-table-column
        label="权限名称"
        prop="authName">
      </el-table-column>
      <el-table-column
        label="路径"
        prop="path">
      </el-table-column>
      <el-table-column
        label="层级"
        prop="level">
        <template slot-scope="scope">
          <span v-if="scope.row.level === '0'">一级</span>
          <span v-if="scope.row.level === '1'">二级</span>
          <span v-if="scope.row.level === '2'">三级</span>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  created () {
    this.getRightsData()
  },
  data () {
    return {
      RightsData: []
    }
  },
  methods: {
    async getRightsData () {
      const {data: {data}} = await this.$http.get(`rights/list`)
      this.RightsData = data
    }
  }
}
</script>

<style>
.box-card {
  height: 100%;
}
.table {
  margin-top: 30px;
}
</style>
