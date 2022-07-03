<template>
    <div class="usermessage">
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
                <el-button @click="userEdit" type="primary" size="min">编辑</el-button>
            </ul>
            <!-- <p>
                <span>姓名</span>
                <span>{{$route.query.NAME}}</span>
            </p> -->
            <p>
                <span>所属部门</span>
                <span>{{$route.query.DEPARTMENT}}</span>
            </p>
            <p>
                <span>职位</span>
                <span>{{$route.query.POSITION}}</span>
            </p>
            <p>
                <span>角色</span>
                <span>{{$route.query.ROLE}}</span>
            </p>
            <p>
                <span>邮箱</span>
                <span>{{$route.query.MAIL}}</span>
            </p>
            <!-- <div class="introduce">
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

    </div>
</template>

<script>


export default {
    name: "userMessage",
    data() {
        return {
            data: {},
        };
    },
    mounted() {
        this.data=this.$route.query
    },
    methods: {
        userEdit() {
            this.$router.push({
                name: "UserEdit",
                query: { ...this.data },
            
            });
        },
    },
}
</script>

<style lang="less" scoped>
    .usermessage{
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
    }
</style>