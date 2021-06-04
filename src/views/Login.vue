<template>
  <div class="Login">
    <div class="Login_logo">
        <img src="../assets/logo.png" alt="">
        <h1>EDU_HOME</h1>
    </div>
    <div class="LoginBox">
        <div class="inputBox">
            <el-input  placeholder="请输入内容" id="username" v-model="username"></el-input>
            <br>
            <el-input placeholder="请输入密码" id="password" show-password v-model="password"></el-input>
        </div>
        <div class="buttonBox">
            <el-button type="primary" @click="Login">登录</el-button>
            <el-button type="info" @click="clear">重置</el-button>
        </div>
    </div>

  </div>
</template>

<script>
export default {
    data() {
        return {
          username:'',
          password:''  
        }
    },
    created: function () {
        this.open()
        this.open2()
        console.log("created生命周期")
    },
    methods:{
        open() {
            this.$message('小伙子，先登录啦');
        },
        open2() {
            console.log("open2被调用")
            const h = this.$createElement;

            this.$notify({
            title: '标题名称',
            message: h('i', { style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
            });
        },    
        successful() {
            this.$message({
            message: '登录成功！！！',
            type: 'success'
            });
        },
        Login(){
            console.log("账号："+this.username,"密码："+this.password);
            if(this.username === "admin" && this.password === "123456"){
                // console.log("登录成功")
                this.successful()
            }
        },
        clear(){
            this.username = "";
            this.password = "";
            console.log("清空输入栏成功")
        }

    }
}
</script>

<style>
html{
    height: 100%;
    width: 100%;
}
body{
        height: 100%;
    width: 100%;
}
.Login{
    height: 100%;
    width: 100%;
    background-color: skyblue;
}
.Login_logo{
    margin: auto;
    position: relative;
    top: 10%; /*偏移*/
    
}
.Login_logo>img{
    height: 10vh;
    width: 10vh;
    border-radius: 50%;
}
.LoginBox{
    height: 40vh;
    width: 70vh;
    padding: 10vh;
    /* border: 1px solid black; */
    background-color: red;
    margin: auto;
    position: relative;
    top: 50%; /*偏移*/
    margin-top: -35vh;
}
.el-input{
    margin: 1vh 0;
    width: 70%!important
    
}
.buttonBox{
    position: absolute;
    bottom: 5vh;
    right: 5vh;
}
</style>