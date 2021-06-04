<template>
   <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180"></el-table-column>
      <el-table-column prop="course_name" label="课程名称" width="180"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column prop="sort_num" label="排序"></el-table-column>
      <el-table-column prop="status" label="状态"></el-table-column>
      <el-table-column prop="address" label="操作"></el-table-column>
    </el-table>
</template>

<script>
export default {
 data() {
        return {
          tableData: [{
            id:'1',
            course_name:'java快速入门',
            price:'18000',
            sort_num:'1',
            status:'red',
            date: '2016-05-02',
            name: '王小虎',
            address: '下架'
          },{
            id:'1',
            course_name:'java快速入门',
            price:'18000',
            sort_num:'1',
            status:'red',
            date: '2016-05-02',
            name: '王小虎',
            address: '下架'
          },{
            id:'1',
            course_name:'java快速入门',
            price:'18000',
            sort_num:'1',
            status:'red',
            date: '2016-05-02',
            name: '王小虎',
            address: '下架'
          },{
            id:'1',
            course_name:'java快速入门',
            price:'18000',
            sort_num:'1',
            status:'red',
            date: '2016-05-02',
            name: '王小虎',
            address: '下架'
          },{
            id:'1',
            course_name:'java快速入门',
            price:'18000',
            sort_num:'1',
            status:'red',
            date: '2016-05-02',
            name: '王小虎',
            address: '下架'
          },{
            id:'1',
            course_name:'java快速入门',
            price:'18000',
            sort_num:'1',
            status:'red',
            date: '2016-05-02',
            name: '王小虎',
            address: '下架'
          },{
            id:'1',
            course_name:'java快速入门',
            price:'18000',
            sort_num:'1',
            status:'red',
            date: '2016-05-02',
            name: '王小虎',
            address: '下架'
          },{
            id:'1',
            course_name:'java快速入门',
            price:'18000',
            sort_num:'1',
            status:'red',
            date: '2016-05-02',
            name: '王小虎',
            address: '下架'
          },{
            id:'1',
            course_name:'java快速入门',
            price:'18000',
            sort_num:'1',
            status:'red',
            date: '2016-05-02',
            name: '王小虎',
            address: '下架'
          },{
            id:'1',
            course_name:'java快速入门',
            price:'18000',
            sort_num:'1',
            status:'red',
            date: '2016-05-02',
            name: '王小虎',
            address: '下架'
          }]
        }
      }
    }
</script>

<style>

</style>