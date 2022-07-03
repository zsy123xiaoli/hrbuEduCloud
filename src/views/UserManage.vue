<template>
    <div class="usermanage">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{path: '/menus/usermanage'}">用户管理</el-breadcrumb-item>
            <!-- <el-breadcrumb-item :to="{ path: '/menus/usermessage' }">用户信息</el-breadcrumb-item> -->
        </el-breadcrumb>
        <el-row>
            <el-button type="primary" size="medium" @click="addUser">新增用户</el-button>
            <el-button size="medium" @click="resetPassword" :disabled="!multipleSelection.length">重置密码</el-button>
            <!-- <el-button size="medium" @click="disable(1)" :disabled="!multipleSelection.length">禁用</el-button> -->
            <el-button size="medium" @click="disable" :disabled="!multipleSelection.length">禁用</el-button>
            <!-- <el-button size="medium" @click="disable(0)" :disabled="!multipleSelection.length">激活</el-button> -->
            <el-button size="medium" @click="activate" :disabled="!multipleSelection.length">激活</el-button>
        </el-row>
        <div class="content">
            <el-row>
                <span>用户状态</span>
                <el-select v-model="FORBIDDEN" @change="selectForbiddenChange" size="medium/small/mini	" clearable placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <span class="ml20">创建日期</span>
                <el-date-picker
                    size="small"
                    v-model="time"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                </el-date-picker>
                <span class="ml20">关键字</span>
                <el-input placeholder="请输入内容" v-model="searchInput" clearable>
                </el-input>
                <el-button @click="search" type="primary" size="medium">搜索</el-button>
            </el-row>
            <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                :header-cell-style="{'text-align' : 'center'}"
                :cell-style="{'text-align' : 'center'}"
                @selection-change="handleSelectionChange"
                @cell-click="usermessage">
                <el-table-column type="selection" width="50"></el-table-column>
                <el-table-column prop="NAME" label="姓名" width="100">
                    <!-- <template slot-scope="scope">{{ scope.row.NAME }}</template> -->
                </el-table-column>
                <el-table-column prop="DEPARTMENT" label="所属部门" width="100"></el-table-column>
                <el-table-column prop="POSITION" label="职位" width="100"></el-table-column>
                <el-table-column prop="ROLE" label="角色" width="100"></el-table-column>
                <el-table-column prop="MAIL" label="邮箱" width="200"></el-table-column>
                <el-table-column prop="FORBIDDEN" label="用户状态" width="80"></el-table-column>
                <el-table-column prop="TIMESTAMP" label="创建时间" width="200"></el-table-column>
            </el-table>
        </div>
        <div class="pagination">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[15, 30, 50, 100]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="60">
            </el-pagination>
        </div>
    </div>
</template>

<script>
// 引入 dayjs
import dayjs from "dayjs";
import axios from "axios";

export default {
    name: "UserManage",
    data() {
        return {
            options: [{
                value: 2,
                label: '全部'
                }, {
                value: 0,
                label: '有效'
                }, {
                value: 1,
                label: '禁用'
                },
            ],
            FORBIDDEN: 2,
            time: "",
            searchInput: "",
            tableData: [],
            multipleSelection: [],
            emailList:[],
            // total:1,
            pageSize: 15,
            currentPage: 1,
        }
    },
    mounted(){
        //默认调用获取用户信息接口
        this.getUserInfo();
        
    },
    methods: {
        getUserInfo() {
            //调用获取用户信息接口
            axios
                .post(
                "http://127.0.0.1:3000/api/user/selectUser",
                {
                    num: "1",
                },
                {
                    headers: {
                        Authorization: localStorage.token,
                    },
                }
                )
                .then((response) => {
                // console.log(response.data);
                    response.data.message.map((item) => {
                        item.FORBIDDEN = item.FORBIDDEN === 0 ? "有效" : "禁用";
                    });
                    this.tableData = response.data.message;
                    console.log(this.tableData);
                    //格式化时间
                    this.tableData.map((item) => {
                        item.TIMESTAMP = dayjs(new Date(Number(item.TIMESTAMP))).format("YYYY-MM-DD HH:mm:ss");
                    })
                })
                .catch((error)=> {
                    console.log(error);
                });
        },
        //格式化时间
        // FormatTime(TIMESTAMP){
        //     return dayjs(TIMESTAMP).format("YYYY-MM-DD HH:mm:ss");
        // },
        handleSelectionChange(val){
            // console.log(val);
            this.multipleSelection = val;
            // console.log(this.multipleSelection);
        },
        handleSizeChange(val) {
            this.pageSize = val;
            this.getUserInfo();
            console.log(`每页 ${val} 条`)
        },
        handleCurrentChange(val) {
            this.currentPage = val;
            this.getUserInfo();
            console.log(`当前页： ${val}`)
        },
        //重置密码接口
        resetPassword(){
            // console.log(this.multipleSelection);
            let mailList = '';
            this.multipleSelection.forEach((item) => {
                //如果用户禁用则不向后台发送用户数据
                if (item.FORBIDDEN == "有效"){
                    //拿 mail
                mailList+=item.MAIL+";";
                }
                console.log(item)
            })
            console.log(mailList);
        axios
        .post("http://127.0.0.1:3000/api/user/remakeUserPassword",
            {   
                users: mailList
            }
        ,{
            headers: {
                Authorization: localStorage.token,
            },
        }
        )
        .then((response) => {
            if (response.data.FORBIDDEN == 0){
                this.$message({
                    message: '修改成功！！！',
                    type: 'success',
                    status: 1
                });
            }else {
                this.$message({
                    message: response.data.message,
                });
            }
            console.log(response);
        })
        .catch((error) =>{
            console.log(error);
        })
        },
        //禁用用户接口
        disable(){
            let mailList = '';
            this.multipleSelection.forEach((item) => {
                if (item.FORBIDDEN == "有效"){
                    //拿 mail
                    mailList+=item.MAIL+";";
                }
                console.log(item)
            })
            console.log(mailList);
            axios
            .post("http://127.0.0.1:3000/api/user/disableUser",
            {   
                users: mailList
            },
            {
                headers: {
                    Authorization: localStorage.token,
                },
            })
            .then((response) => {
                this.$message({
                    message: '禁用用户成功！',
                    type: 'success',
                    status: 1
                })
                this.search();
                console.log(response);
            })
            .catch((error) =>{
                console.log(error);
            })
            },
        //激活用户接口
        activate(){
            let mailList = '';
            this.multipleSelection.forEach((item) => {
                if (item.FORBIDDEN == "禁用"){
                    //拿 mail
                    mailList+=item.MAIL+";";
                }
                console.log(item)
            })
            console.log(mailList);
            axios
            .post("http://127.0.0.1:3000/api/user/activateUser",
            {   
                users: mailList
            },
            {
                headers: {
                    Authorization: localStorage.token,
                },
            })
            .then((response) => {
                this.$message({
                    message: '激活用户成功！',
                    type: 'success',
                    status: 1
                })
                this.search();
                console.log(response);
            })
            .catch((error) =>{
                console.log(error);
            })
        },
        //模糊搜索接口
        search(){
            //模糊搜索参数
            const data = {};
            if(this.searchInput){
                data.val = this.searchInput;
                data.num = 1;
            }
            axios
                .post("http://127.0.0.1:3000/api/user/searchUser",
                data,
                {
                    headers: {
                        Authorization: localStorage.token,
                    },
                })
                .then((response) => {
                    console.log(response.data);
                    response.data.message.map((item) => {
                        item.FORBIDDEN = item.FORBIDDEN === 0 ? "有效" : "禁用";
                    });
                    console.log(response.data.message);
                    this.tableData = response.data.message;
                    //格式化时间
                    this.tableData.map((item) => {
                        item.TIMESTAMP = dayjs(new Date(Number(item.TIMESTAMP))).format("YYYY-MM-DD HH:mm:ss");
                    })
                })
                .catch((error) => {
                    console.log(error);
                });
            console.log(data);
            // this.getUserInfo();
        },
        //获取用户状态信息接口
        selectForbiddenChange(){
            console.log("用户状态",this.FORBIDDEN)
            if (this.FORBIDDEN == 2){
                this.getUserInfo();
            }
            axios
                .get("http://127.0.0.1:3000/api/system/user/getForbiddenUser",
                {
                    params:{
                        forbidden: this.FORBIDDEN,
                        num: 1
                    }
                },
                {
                    headers: {
                        Authorization: localStorage.token,
                    },
                })
                .then((response) => {
                    console.log(response.data);
                    response.data.message.map((item) => {
                        item.FORBIDDEN = item.FORBIDDEN === 0 ? "有效" : "禁用";
                    });
                    console.log(response.data.message);
                    this.tableData = response.data.message;

                    this.tableData.map((item) => {
                        item.TIMESTAMP = dayjs(new Date(Number(item.TIMESTAMP))).format("YYYY-MM-DD HH:mm:ss");
                    })
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        addUser(){
            //指定跳转的地址
            this.$router.push('/menus/addUser');
        },
        // 跳转到 用户信息页面
        usermessage(val){
            // console.log("val",val);
            this.multipleSelection = val;
            this.$router.push({
                name: "UserMessage",
                query:{...this.multipleSelection },
            });
            console.log(this.multipleSelection);
        }
    }
}
</script>

<style lang="less" scoped>
    .usermanage{
        margin-left: 20px;
        width: 100%;
        .el-breadcrumb{
            color: #7A7F85;
            line-height: 56px;
        }
        .content{
            margin-top: 20px;
            width: 960px;
            background-color: #fff;
            padding: 20px;
            .el-row{
                span{
                    font-size: 14px;
                    color: #262c32;
                    line-height: 36px;
                    margin-right: 10px;
                }
                .ml20{
                    margin-left: 20px;
                    }
                .el-select{
                    width: 95px;
                }
                .el-date-picker{
                    width: 300px;
                }
                .el-input{
                    width: 187px;
                }
                .el-button{
                    margin-left: 20px;
                }
            }
            .el-table{
                margin-top: 20px;
                /deep/.el-table__header-wrapper{
                    .el-table__cell{
                        background-color: #f3f5f7;
                    }
                }
                /deep/ .el-table__cell{
                    padding: 6px 0;
                    border-left: 1px solid #EBEEF5;
                    &:last-child{
                        border-right: 1px solid #EBEEF5;
                    }
                }
            }
        }
        .pagination{
            margin-top: 20px;
            margin-bottom: 24px;
            width: 570px;
            height: 50px;
            background-color: #fff;
            float: right;
            .el-pagination{
                margin: 10px 0 0 20px;
            }
        }
        
    }
</style>