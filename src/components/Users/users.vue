<template>
  <el-card class="box-card">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索框 -->
    <el-row class="search">
      <el-col>
        <el-input placeholder="请输入内容" v-model="searchText" class="input-with-select" clearable @clear="getAllUser()">
          <el-button slot="append" icon="el-icon-search" @click="searchUser()"></el-button>
        </el-input>
        <el-button type="primary" @click="$refs.isShowAdd.showAddDialog()">添加用户</el-button>
      </el-col>
    </el-row>
    <!-- 表格 -->
    <!--
    username: "admin" 
    id: 500
    email: "adsfad@qq.com"
    mobile: "12345678"
    create_time: 1486720211
    mg_state: true
    -->
    <el-table
      class="table"
      :data="usersData" style="width: 100%">
      <el-table-column prop="id" label="#" width="100">
      </el-table-column>
      <el-table-column prop="username" label="姓名" width="160">
      </el-table-column>
      <el-table-column prop="email" label="邮箱" width="180">
      </el-table-column>
      <el-table-column prop="mobile" label="电话" width="180">
      </el-table-column>
      <el-table-column label="创建日期" width="200">
        <template slot-scope="scope">
          {{ scope.row.create_time | fmtDate }}
        </template>
      </el-table-column>
      <el-table-column prop="state" label="用户状态" width="250">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.mg_state" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="280">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" circle size="mini" plain></el-button>
          <el-button type="danger" icon="el-icon-delete" circle size="mini" plain></el-button>
          <el-button type="success" icon="el-icon-check" circle size="mini" plain></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      class="page"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagenum"
      :page-sizes="[2, 4, 6, 8]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>

    <!-- 对话框 - 添加用户 -->
    <addUser ref="isShowAdd" @success-add="getUsersData()"></addUser>
  </el-card>
</template>

<script>
import addUser from './addUser'
export default {
  created () {
    this.getUsersData()
  },
  data () {
    return {
      searchText: '',
      usersData: [],
      pagenum: 1,
      pagesize: 2,
      total: -1,
    }
  },
  components: {
    addUser
  },
  methods: {
    async getUsersData () {
      const {data: {data, meta: {status, msg}}} = await this.$http.get(`users?query=${this.searchText}&pagenum=${this.pagenum}&pagesize=${this.pagesize}`)
      if (status === 200) {
        this.total = data.total
        this.usersData = data.users
      }
    },
    handleSizeChange(val) {
      this.pagenum = 1
      this.pagesize = val
      this.getUsersData()
    },
    handleCurrentChange(val) {
      this.pagenum = val
      this.getUsersData()
    },
    searchUser() {
      this.pagenum = 1
      this.getUsersData()
    },
    getAllUser() {
      this.pagenum = 1
      this.getUsersData()
    }
  }
}
</script>

<style>
.box-card {
  height: 100%;
}
.input-with-select {
  width: 350px;
}
.search {
  margin-top: 30px;
}
.page {
  position: absolute;
  bottom: 50px;
}
.table {
  height: 350px;
}
</style>
