<template>
  <el-container class="container">
    <el-header>
      <el-row>
        <el-col :span="4">
          <img src="../../assets/logo.png" width="50%"  class="image">
        </el-col>
        <el-col :span="18">
          <h2 class="title">电商后台管理系统</h2>
        </el-col>
        <el-col :span="2">
          <a href="#" class="logout">退出</a>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside class="aside" width="200px">Aside</el-aside>
      <el-main class="main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
  height: 100%;
  background-color: khaki;
}
.aside {
  background-color: lightgreen;
}
.main {
  background-color: powderblue;
}
.image {
  margin-top: 10px;
}
.title {
  text-align: center;
}
.logout {
  line-height: 60px;
  text-decoration: none;
  color: black;
}
</style>
