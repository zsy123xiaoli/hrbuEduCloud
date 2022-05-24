<template>
    <div class="usermanage">
        <p>用户管理</p>
        <el-row>
            <el-button type="primary" size="medium">新增用户</el-button>
            <el-button size="medium" @click="resetPassword" :disabled="false">重置密码</el-button>
            <el-button size="medium" :disabled="true">禁用</el-button>
            <el-button size="medium" :disabled="true">激活</el-button>
        </el-row>
        <div class="content">
            <el-row>
                <span>用户状态</span>
                <el-select v-model="value" size="medium/small/mini	" clearable placeholder="请选择">
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
                    v-model="value1"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                </el-date-picker>
                <span class="ml20">关键字</span>
                <el-input placeholder="请输入内容" v-model="input" clearable>
                </el-input>
                <el-button type="primary" size="medium">搜索</el-button>
            </el-row>
            <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="60"></el-table-column>
                <el-table-column prop="username" label="用户名" width="100"></el-table-column>
                <el-table-column prop="gender" label="性别" width="80"></el-table-column>
                <el-table-column prop="state" label="状态" width="80"></el-table-column>
                <el-table-column prop="ts" label="创建时间" width="200"></el-table-column>
            </el-table>
        </div>
        <div class="pagination">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
            </el-pagination>
        </div>
    </div>
</template>

<script>
// 引入 axios
import axios from "axios";
// 引入 dayjs
import dayjs from "dayjs";
export default {
    name: "UserManage",
    data() {
        return {
            options: [{
                value: '1',
                label: '全部'
                }, {
                value: '2',
                label: '有效'
                }, {
                value: '0',
                label: '禁用'
                },
            ],
            value: "",
            value1: "",
            input: "",
            tableData: [],
            multipleSelection: [],
            currentPage4: 4,
        }
    },
    mounted(){
        //默认调用获取用户接口
        axios
        .get("/api/user/userinfo")
        .then((response) => {
            // console.log(response);
            this.tableData = response.data.data;
            console.log(this.tableData);
        })
        .catch((error) =>{
            console.log(error);
        })
    },
    methods: {
        handleSelectionChange(val){
            this.multipleSelection = val;
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        //重置密码
        resetPassword(){
            console.log(this.multipleSelection);
            // 拿ID
            const userIdArr = []
            this.multipleSelection.forEach((item) => {
                userIdArr.push(item.id);
            })
        //重置密码接口
        axios
        .post("/api/user/resetpassword",{
            //传递用户ID参数到后台
            userIds: userIdArr
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) =>{
            console.log(error);
        })
        },
    },
}
</script>

<style lang="less" scoped>
    .usermanage{
        margin-left: 20px;
        width: 100%;
        p{
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