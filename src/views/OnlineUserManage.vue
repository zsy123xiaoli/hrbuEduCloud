<template>
    <div class="onlineusermanage">
        <p>在线用户管理管理</p>
        <div class="content">
            <el-row>
                <span>在线状态</span>
                <el-select v-model="onlineState" size="medium/small/mini	" clearable placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
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
                :cell-style="{'text-align' : 'center'}">
                <el-table-column type="selection" width="50"></el-table-column>
                <el-table-column prop="username" label="用户名" width="150"></el-table-column>
                <el-table-column prop="Name" label="姓名" width="150"></el-table-column>
                <el-table-column prop="school" label="学校" width="150"></el-table-column>
                <el-table-column prop="major" label="专业" width="150"></el-table-column>
                <el-table-column prop="pisotion" label="职位" width="150"></el-table-column>
                <el-table-column prop="onlinestate" label="在线状态" width="150"></el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "SchoolManage",
    data() {
        return {
            options: [{
                value: 2,
                label: '全部'
                }, {
                value: 1,
                label: '有效'
                }, {
                value: 0,
                label: '禁用'
                },
            ],
            onlineState: 2,
            searchInput: "",
            tableData: [],
            // multipleSelection: [],
        }
    },
        methods: {
            
        //禁用账户
        disable(state){
            // 拿ID
            const userIdArr = [];
            this.multipleSelection.forEach((item) => {
                //如果用户禁用则不向后台发送用户数据
                if (item.state == "有效" && !state){
                    userIdArr.push(item.id);
                }else if (item.state == "禁用" && state) {
                    userIdArr.push(item.id);
                }
            })
            this.$axios
            .post("/api/user/disableOractivatedUser",{
                //传递用户ID参数到后台
                userIds: userIdArr,
                state,
            })
            .then((response) => {
                const msg = {
                    type: 'success'
                }
                if (state){
                    msg.message = "激活用户成功！！！";
                }else{
                    msg.message = "禁用用户成功！！！";
                }
                this.$message(msg);
                this.search();
                console.log(response);
            })
            .catch((error) =>{
                console.log(error);
            })
            },
        search(){
            const data = {};
            if(this.userState == 1 || this.userState == 0){
                data.userState = this.userState;
            }
            // console.log("用户状态！",this.userState);
            // console.log("用户注册时间！",this.time);
            // console.log("用户注册时间！",dayjs(this.time[0]).format("YYYY-MM-DD HH:mm:ss"));
            // console.log("用户模糊搜素字段！",this.searchInput);
            // console.log(data);
            this.getUserInfo(data);
        },
        //监听添加用户对话框的关闭事件
        addDialogClosed(){
            this.$refs.addFormRef.resetFields();
        },
        //表单重置
        resetForm() {
            this.$refs.addFormRef.resetFields();
        },
    }
}
</script>

<style lang="less" scoped>
    .onlineusermanage{
        margin-left: 20px;
        width: 100%;
        p{
            color: #000;
            line-height: 56px;
        }
        .content{
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
        .dialog-footer{
            display: block;
            text-align: center;
        }

    }
</style>