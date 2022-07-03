<template>
    <div class="useredit">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{path: '/menus/usermanage'}">用户管理</el-breadcrumb-item>
            <el-breadcrumb-item >用户信息</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="message-header">
            <img src="../images/u4103.png">
            <div class="name">{{$route.query.NAME}}</div>
            <ul class="list">
                <li class="shu"></li>
                <li>基本信息</li>
            </ul>
            <!-- <p>
                <span>姓名</span>
                <span>{{$route.query.NAME}}</span>
            </p> -->
            <p>
                <span>所属部门</span>
                <span>
                    <el-select
                    v-model="DEPARTMENT"
                    style="width: 358px"

                    placeholder="请选择"
                    >
                    <el-option
                        v-for="item in department"
                        :key="item.value"
                        :label="item.label"
                        :value="item.DEPARTMENT"
                    >
                    </el-option>
                    </el-select>
                </span>
            </p>
            <p>
                <span>职位</span>
                <span>
                    <el-select
                    v-model="POSITION"
                    style="width: 358px"

                    placeholder="请选择"
                    >
                    <el-option
                        v-for="item in position"
                        :key="item.value"
                        :label="item.label"
                        :value="item.POSITION"
                    >
                    </el-option>
                    </el-select>
                </span>
            </p>
            <p>
                <span>角色</span>
                <span>
                    <el-select
                    v-model="ROLE"
                    style="width: 358px"

                    placeholder="请选择"
                    >
                    <el-option
                        v-for="item in role"
                        :key="item.value"
                        :label="item.label"
                        :value="item.ROLE"
                    >
                    </el-option>
                    </el-select>
                </span>
            </p>
            <p>
                <span>邮箱</span>
                <span>
                    <el-input
                    v-model="MAIL"
                    placeholder="请输入内容"
                    style="width: 358px"
                    ></el-input>
                </span>
            </p>
            <!-- <div class="intro">
                <span>个人介绍</span>
                <span>香港大学博士、中南财经政法大学金融学教授，研究方向为公司治理、企业创新。有多年Stata研究工作经验</span>
            </div> -->
        </div>
        <div class="message-footer">
            <ul class="list1">
                <li class="shu1"></li>
                <li>状态信息</li>
            </ul>
            <p>
                <span>用户状态</span>
                <span>{{$route.query.FORBIDDEN}}</span>
            </p>
            <p>
                <span>创建时间</span>
                <span>{{$route.query.TIMESTAMP}}</span>
            </p>
        </div>
        <div class="button">
            <el-button @click="useredit" type="primary" >保存</el-button>
            <el-button>取消</el-button>
        </div>

    </div>
</template>

<script>
// 引入 dayjs
import dayjs from "dayjs";
import axios from "axios";

export default {
    name: "userMessage",
    data(){
        return {
            department:[{DEPARTMENT:"校长办公室"},
                        {DEPARTMENT:"院长办公室"},
                        {DEPARTMENT:"主任办公室"},
                        ],
            DEPARTMENT:"",
            position:[{POSITION:"校长"},
                        {POSITION:"副校长"},
                        {POSITION:"教导主任"},
                        ],
            POSITION: "",
            role:   [{ROLE:"管理员"},
                        {ROLE:"教师"},
                        ],
            ROLE: "",
            MAIL: "",
            mail:""
        }
    },
    mounted() {
        console.log(this.$route.query);
        this.NAME = this.$route.query.NAME;
        this.DEPARTMENT = this.$route.query.DEPARTMENT;
        this.POSITION = this.$route.query.POSITION;
        this.ROLE = this.$route.query.ROLE;
        this.MAIL = this.$route.query.MAIL;
        this.mail= this.$route.query.MAIL;
        this.FORBIDDEN = this.$route.query.FORBIDDEN;
        this.TIMESTAMP = this.$route.query.TIMESTAMP;
    },
    methods:{
        useredit(){
            //跳转到 usermanage
            this.$router.push('/menus/usermanage');
            const data = {};
                if (this.DEPARTMENT) {
                    data.department = this.DEPARTMENT;
                }else {alert("部门为空!")
                    return}
                if (this.POSITION) {
                    data.position = this.POSITION;
                }else {alert("职位为空!")
                    return}
                if (this.ROLE) {
                    data.role = this.ROLE;
                }else {alert("角色为空!")
                    return}
                if (this.MAIL) {
                    data.newMail = this.MAIL;
                }else {alert("邮箱为空!")
                    return}
                    // console.log(this.$route.query)
                data.mail = this.mail
                console.log(data.mail)
                    console.log(this.NAME);
                    console.log(this.DEPARTMENT);
                    console.log(this.POSITION);
                    console.log(this.ROLE);
                    console.log(this.MAIL);
                    console.log(data)
            axios
                .post(
                "http://127.0.0.1:3000/api/user/setUserInfo",
                data,
                {
                    headers: {
                        Authorization: localStorage.token,
                    },
                }
                )
                .then((response) => {
                console.log(response.data);
                    // this.tableData = response.data.message;
                    // console.log(this.tableData);
                    if (response.data.status == 1){
                    this.$message({
                        message: '修改成功！',
                        type: 'success',
                    })
                    }else {
                        return
                    }
                })
                .catch((error)=> {
                    console.log(error);
                });
        }
    }
}
</script>

<style lang="less" scoped>
    .useredit{
        margin-left: 20px;
        width: 1000px;
        height: (100vh-20px);
        .el-breadcrumb{
            color: #000;
            line-height: 56px;
        }
        p{
            line-height: 36px;
            margin-top: 20px;
            text-align: center;
            display: flex;
            span:first-child{
                width: 100px;
                height: 34px;
                text-align: right;
                padding-left: 30px;
                padding-right: 30px;
            }
            span:last-child{
                width: 300px;
                height: 34px;
                text-align: left;
                display: block;
            }
        }
        .intro{
            line-height: 36px;
            margin-top: 20px;
            text-align: center;
            display: flex;
            span:first-child{
                width: 100px;
                height: 34px;
                text-align: right;
                padding-left: 30px;
                padding-right: 30px;
            }
            span:last-child{
                width: 800px;
                height: 100px;
                text-align: left;
            }
            }
        .message-header{
            height: 470px;
            background-color: #fff;
            img{
                margin: 20px 0 0 430px;
            }
            .name{
                margin: 10px 0 0 465px;
            }
            .list{
                display: flex;
                margin: 20px 0 0 30px;
                .el-button{
                    margin-left: 795px;
                }
                .shu{
                    height: 18px;
                    margin-right: 17px;
                    border: 2px solid #2b96e5;
                }
            }
        }
        .message-footer{
            margin-top: 30px;
            height: 236px;
            background-color: #fff;
            .list1{
                display: flex;
                padding: 50px 0 0 30px;
                .shu1{
                    height: 18px;
                    margin-right: 17px;
                    border: 2px solid #2b96e5;
                }
            }
            .time{
                    width: 670px;
                    height: 87px;
                }
        }
        .button {
            width: 90px;
            margin: 0 auto;
            display: flex;
        }
    }
</style>