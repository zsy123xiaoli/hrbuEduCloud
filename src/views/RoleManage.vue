<template>
    <div class="rolemanage">
        <p>角色管理</p>
        <el-row>
            <el-button type="primary" size="medium" @click="addDialogVisible = true">新增角色</el-button>
            <el-button size="medium" @click="disable(0)" :disabled="!multipleSelection.length">禁用</el-button>
            <el-button size="medium" @click="disable(1)" :disabled="!multipleSelection.length">激活</el-button>
        </el-row>
        <!-- 新增角色 -->
        <el-dialog title="新增角色*" :visible.sync="addDialogVisible" width="30%" @close="addDialogClosed">
            <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="80px">
                <el-form-item label="角色名称" prop="rolename">
                    <el-input v-model="addForm.rolename"></el-input>
                </el-form-item>
                <el-form-item label="角色描述" prop="roledescription">
                    <el-input v-model="addForm.roledescription"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="addDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addRole">确 定</el-button>
                <el-button type="primary" @click="resetForm">重置</el-button>
            </span>
        </el-dialog>
        <div class="content">
            <el-row>
                <span>角色状态</span>
                <el-select v-model="roleState" size="medium/small/mini	" clearable placeholder="请选择">
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
                    v-model="timestamp"
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
                @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="50"></el-table-column>
                <el-table-column prop="rolename" label="角色名称" width="100"></el-table-column>
                <el-table-column prop="school" label="院校" width="80"></el-table-column>
                <el-table-column prop="roledescription" label="角色描述" width="200"></el-table-column>
                <el-table-column prop="timestamp" label="创建时间" width="200"></el-table-column>
            </el-table>
        </div>
        <div class="pagination">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pageNumber"
                :page-sizes="[3, 20, 50]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
            </el-pagination>
        </div>
        
    </div>

</template>

<script>
import axios from 'axios'
import dayjs from 'dayjs'
export default {
    name: "RoleManage",
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
            roleState: 2,
            timestamp: "",
            searchInput: "",
            tableData: [],
            multipleSelection: [],
            total:0,
            pageSize: 3,
            pageNumber: 1,
            //控制新增角色对话框的显示与隐藏
            addDialogVisible:false,
            //添加角色的表单数据
            addForm: {
                rolename: "",
                school: "",
                roledescription: "",
            },
            //添加表单的验证规则对象
            addFormRules: {
                rolename:[
                {   
                    required: true,
                    message: '请输入角色名称！',
                    trigger: 'blur',  
                }, { 
                    min: 3,
                    max: 10,
                    message: '角色名称的长度在3~10之间！！！',
                    trigger: 'blur',
                    }
                ],
                roledescription: [
                    {   
                    required: true,
                    message: '请描述！',
                    trigger: 'blur',  
                }, { 
                    min: 2,
                    max: 10,
                    message: '描述的长度在2~20之间！！！',
                    trigger: 'blur',
                    }
                ],
                
            },
        }
    },
    methods: {
        handleSelectionChange(val){
            this.multipleSelection = val;
        },
        handleSizeChange(val) {
            this.pageSize = val;
            this.search();
        },
        handleCurrentChange(val) {
            this.pageNumber = val;
            this.search();
        },
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
            if(this.time){
                data.startTime = dayjs(this.time[0]).format("YYYY-MM-DD HH:mm:ss");
                data.endTime = dayjs(this.time[1]).format("YYYY-MM-DD HH:mm:ss");
            }
            if(this.searchInput){
                data.searchInput = this.searchInput;
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
        //点击按钮，添加新用户
        addRole(){
            console.log(this.name);
            console.log(this.mail);
            console.log(this.password);
            console.log(this.department);
            console.log(this.position);
            console.log(this.role);
            console.log(this.timestamp);
            const data={};
            if (this.name) {
                data.name = this.name;
            }else {alert("用户名为空!")}
            if (this.mail) {
                data.mail = this.mail;
            }else {alert("用户名为空!")}
            if (this.password) {
                data.password = this.password;
            }else {alert("用户名为空!")}
            if (this.department) {
                data.department = this.department;
            }else {alert("用户名为空!")}
            if (this.position) {
                data.position = this.position;
            }else {alert("用户名为空!")}
            if (this.position) {
                data.position = this.position;
            }else {alert("用户名为空!")}
            if (this.role) {
                data.role = this.role;
            }else {alert("用户名为空!")}
            if (this.timestamp) {
                data.timestamp = this.timestamp;
            }else {alert("用户名为空!")}
            console.log(data);
            axios
            .post("http://127.0.0.1:3000/api/user/rolemanage",data,{
                //传递用户参数到后台
                headers:{
                    'Authorization':localStorage.token,
                }
                
            })
            .then((response) => {
                console.log(response);
                if (response.data.status == 1){
                    alert('添加成功！')
                    return
                }else {
                    alert('添加失败！')
                }
            })
            .catch((error) =>{
                console.log(error);
            })
            },
    }
}
</script>

<style lang="less" scoped>
    .rolemanage{
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
        .dialog-footer{
            display: block;
            text-align: center;
        }

    }
</style>