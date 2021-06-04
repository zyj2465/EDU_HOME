<template>
  <el-aside class="sideBar" width="auto">
    <router-link :to="{name:'Home'}" title="back to home" class="logo">
        <img src="../assets/logo.png" alt="">
        <h1>EDU_HOME</h1>
    </router-link>    
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
    <el-button type="primary" @click="openORclose">展开收缩</el-button>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="1">
        <template slot="title">
        <i class="el-icon-location"></i>
            <span slot="title">教育业务</span>
        </template>
        <el-menu-item-group>
            <el-menu-item index="1-1">课程管理</el-menu-item>
        </el-menu-item-group>
        </el-submenu>
    </el-menu>

  </el-aside>
</template>

<script>
export default {
    data() {
      return {
        isCollapse: false
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      openORclose(){
        this.isCollapse = !this.isCollapse
        console.log(this.isCollapse)
      }
    }
}
</script>

<style>
.sidebar {
  position: sticky;
  top: 0;
  max-height: 100vh;
  background: #fff;
  user-select: none;
}
.sidebar::-webkit-scrollbar {
  width: 5px;
}
.sidebar::-webkit-scrollbar-track {
  border-radius: 2em;
}
.sidebar::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 2em;
}
.logo {
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #495057;
  line-height: 50px;
  text-decoration: none;
  text-align: center;
}
.logo:hover {
  color: #343a40;
  background-color: rgba(0, 0, 0, 0.05);
}

.logo>img {
  margin: 10px;
  width: 30px;
  height: 30px;
}
.logo h1 {
  display: inline-block;
  margin: 0px;
  width: 130px;
  overflow: hidden;
  font-size: 20px;
  white-space: nowrap;
  transition: width 0.3s;
}

</style>