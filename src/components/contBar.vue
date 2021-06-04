<template>
  <section class="cont">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="课程名称">
        <el-input v-model="formInline.courses" placeholder="输入课程名称"></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="formInline.coursesStatus" placeholder="课程状态">
          <el-option label="全部" value="0"></el-option>
          <el-option label="已发布" value="1"></el-option>
          <el-option label="草稿" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
      <el-form-item class="addBtn">
        <el-button type="primary" icon="el-icon-plus">新建课程</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
export default {
    data() {
      return {
        formInline: {
          courses: '',
          coursesStatus: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log(this.formInline);
      }
    }
}
</script>

<style>
.el-form--inline .el-form-item__label{
  float: left !important;
}
</style>