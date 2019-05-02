<template>
  <el-card class="box-card">
    <!-- 面包屑 -->
    <cusBread level1="权限管理" level2="角色列表"></cusBread>
    <!-- 添加角色按钮 -->
    <el-row>
      <el-col>
        <el-button class="btn" type="primary">添加角色</el-button>
      </el-col>
    </el-row>
    <!-- 表格 -->
    <el-table
      border
      class="table"
      :data="rolesData" 
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="scope">
          <el-row v-for="first in scope.row.childrens" :key="first.id">
            <el-col :span="4">
              <el-tag closable class="first" @close="deleteRights(scope.row, first)">{{first.authName}}</el-tag>
              <i class="el-icon-arrow-right"></i>
            </el-col>
            <el-col :span="20">
              <el-row v-for="second in first.children" :key="second.id">
                <el-col :span="4">
                  <el-tag class="second" type="success" closable @close="deleteRights(scope.row, second)">{{second.authName}}</el-tag>
                  <i class="el-icon-arrow-right"></i>
                </el-col>
                <el-col :span="20">
                  <el-tag closable v-for="third in second.children" :key="third.id" class="third" type="warning" @close="deleteRights(scope.row, third)">{{third.authName}}</el-tag>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
          <el-row v-if="scope.row.childrens.length === 0">
            <span>没有相关权限</span>
          </el-row>
        </template>
      </el-table-column>
      <el-table-column type="index" label="#" width="120">
      </el-table-column>
      <el-table-column prop="roleName" label="角色名称" width="300">
      </el-table-column>
      <el-table-column prop="roleDesc" label="角色描述" width="400">
      </el-table-column>
      <el-table-column label="操作" width="500">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" circle size="mini" plain ></el-button>
          <el-button type="danger" icon="el-icon-delete" circle size="mini" plain ></el-button>
          <el-button type="success" icon="el-icon-check" circle size="mini" plain ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  created () {
    this.getRolesData()
  },
  data () {
    return {
      rolesData: []
    }
  },
  methods: {
    async getRolesData () {
      const {data: {data, meta: {status}}} = await this.$http.get(`roles`)
      data.forEach(item => {
        item.childrens = item.children
        delete item.children
      })
      if (status === 200) {
        this.rolesData = data
      }
    },
    async deleteRights (roles, rights) {
      const res = await this.$http.delete(`roles/${roles.id}/rights/${rights.id}`)
      const {data, meta: {status, msg}} = res.data
      if (status === 200) {
        this.$message.success(msg)
        roles.childrens = data
      }
    }
  }
}
</script>

<style>
.box-card {
  height: 100%;
}
.btn {
  margin: 30px 0;
}
.first,
.second,
.third {
  margin-bottom: 10px;
}
</style>
