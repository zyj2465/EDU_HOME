<template>
  <div>
<el-container>
  <el-aside width="200px">
    <!-- Aside -->
    <side-bar></side-bar>
    <!-- <side-bar></side-bar> -->
  </el-aside>
  <el-container>
    <el-header>
      <Top-bar></Top-bar>
    </el-header>
    <el-main>
            <Cont-bar></Cont-bar>
            <Table></Table>
    </el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
import SideBar from '@/components/sideBar.vue'
import TopBar from '@/components/topBar.vue'
import ContBar from '@/components/contBar.vue'
import Table from '@/components/table.vue'
// import SideBar from '@/components/SIDE_BAR.vue'

export default {
    data() {
        return {
            
        }
    },
    components:{
        SideBar,
        TopBar,
        ContBar,
        Table
    }
}
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>