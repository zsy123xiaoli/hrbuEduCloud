<template>
    <div class="add">
        <!-- 新增用户 -->
        <!-- @close="addDialogClosed" -->
        <div width="30%">
            <h1>新增用户*</h1>
            <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="160px">
                <el-form-item  label="姓名" prop="name">
                    <el-input v-model="addForm.name"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="addForm.password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input v-model="addForm.checkPass"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="mail">
                    <el-input v-model="addForm.mail"></el-input>
                </el-form-item>
                <el-form-item label="所属部门" prop="department">
                    <el-select v-model="addForm.department" placeholder="请选择部门" style="display: block">
                    <el-option label="校长办公室" value="校长办公室"></el-option>
                    <el-option label="院长办公室" value="院长办公室"></el-option>
                    <el-option label="主任办公室" value="主任办公室"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="设置职位" prop="position">
                    <el-select v-model="addForm.position" placeholder="请选择职位" style="display: block">
                    <el-option label="校长" value="校长"></el-option>
                    <el-option label="副校长" value="副校长"></el-option>
                    <el-option label="教导主任" value="教导主任"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="设置角色" prop="role">
                    <el-select v-model="addForm.role" placeholder="请选择角色" style="display: block">
                    <el-option label="管理员" value="管理员"></el-option>
                    <el-option label="教师" value="教师"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="resetForm">取 消</el-button>
                <el-button type="primary" @click="addUser">确 定</el-button>
            </span>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "addUser",
    data(){
        //自定义校验密码规则
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.addForm.checkPass !== '') {
                this.$refs.addForm.validateField('checkPass');
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.addForm.password) {
                callback(new Error('两次输入密码不一致!'));
            } else {
            callback();
            }
        };
        //自定义校验邮箱规则
        var checkEmail = (rule,value,cb) => {
            //验证邮箱的正则表达式
            const regEmail = /^\w+[@]\w{2,5}([.]\w{2,3}){1,3}$/
            if (regEmail.test(value)){
                return cb();
            }else {
                cb(new Error("请输入合法的邮箱！！！"));
            }
        }
        return{
            //控制新增用户对话框的显示与隐藏
            // addDialogVisible:false,
            //添加用户的表单数据
            addForm: {
                name: "",
                password: "",
                checkPass: "",
                mail: "",
                department: "",
                position: "",
                role: "",
            },
            //添加表单的验证规则对象
            addFormRules: {
                name: [
                    {  required: true,  message: '请输入姓名！',  trigger: 'blur',  }, 
                    {  min: 2, max: 10,  message: '姓名的长度在2~10之间！！！',  trigger: 'blur', }
                ],
                password: [
                    { required: true,},{ validator: validatePass, trigger: 'blur' }
                ],
                checkPass: [
                    { required: true, validator: validatePass2, trigger: 'blur' }
                ],
                mail: [
                    {  required: true, message: '请输入邮箱!', trigger: 'blur' },
                    { validator: checkEmail, trigger: 'blur' }
                ],
                department: [
                    {   required: true, message: '请选择部门！', trigger: 'change' }
                ],
                position: [
                    {  required: true, message: '请选择职位！', trigger: 'change' }
                ],
                role: [
                    {  required: true, message: '请选择角色！', trigger: 'change' }
                ],
            },
        }
    },
    methods:{
        //表单重置
        resetForm() {
            this.$refs.addFormRef.resetFields();
        },
        //点击按钮，添加新用户
        addUser(){
            //跳转到 usermanage
            this.$router.push('/menus/usermanage');
            const data = {};
            console.log(this.addForm.name);
            console.log(this.addForm.mail);
            console.log(this.addForm.password);
            console.log(this.addForm.department);
            console.log(this.addForm.position);
            console.log(this.addForm.role);
            
                
                if (this.addForm.name) {
                    data.name = this.addForm.name;
                }else {alert("姓名为空!") 
                    return}
                if (this.addForm.mail) {
                    data.mail = this.addForm.mail;
                }else {alert("邮箱为空!")
                    return}
                if (this.addForm.password) {
                    data.password = this.addForm.password;
                }else {alert("密码为空!")
                    return}
                if (this.addForm.department) {
                    data.department = this.addForm.department;
                }else {alert("部门为空!")
                    return}
                if (this.addForm.position) {
                    data.position = this.addForm.position;
                }else {alert("职位为空!")
                    return}
                if (this.addForm.role) {
                    data.role = this.addForm.role;
                }else {alert("角色为空!")
                    return}

            axios
            .post("http://127.0.0.1:3000/api/user/addUser",this.addForm,{
                //传递用户参数到后台
                headers:{
                    Authorization: localStorage.token,
                },
                
            })
            .then((response) => {
                console.log(response);
                if (response.data.status == 1){
                    this.$message({
                        message: '添加用户成功！',
                        type: 'success',
                    })
                }else {
                    return
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
    .add{
        margin-left: 20px;
        width: 1000px;
        height: 700px;
        background-color: #fff;
        h1{
            padding: 10px 0 20px 15px;

        }
        .el-form{
            width: 670px;
            height: 540px;
            padding-left: 75px;
        }
        .dialog-footer{
            padding-left: 380px;
        }
    }
</style>