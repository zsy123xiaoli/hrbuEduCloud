<template>
    <div class="sidemenus">
        <h2> •系统管理</h2>
        <ul class="side">
            <router-link to="/menus/UserManage" tag="li">用户管理</router-link>
            <!-- 跳转到职位管理 /menus/positionmanage 为路径-->
            <router-link to="/menus/PositionManage" tag="li" >职位管理</router-link>
            <router-link to="/menus/RoleManage" tag="li" >角色管理</router-link>
            <router-link to="/menus/MenuManage" tag="li" >菜单管理</router-link>
            <router-link to="/menus/DataDictionary" tag="li" >数据字典</router-link>
            <router-link to="/menus/SchoolManage" tag="li" >学校管理</router-link>
            <router-link to="/menus/MajorManage" tag="li" >专业管理</router-link>
            <router-link to="/menus/OnlineUserManage" tag="li" >在线用户管理</router-link>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .sidemenus{
        //css中属性的计算
        //原生css
        // height: calc(100vh-60px);
        //less写法
        height: (120vh-10px);
        h2{
            width: 190px;
            line-height: 50px;
            font-weight: 700;
            font-size: 18px;
            color: #262C32;
            padding-left: 10px;
            background-color: #fff;
        }
        ul{
            border-top: 2px solid #e8e9eb;
            background-color: #fff;
            width: 200px; 
            cursor: pointer;
            li{
                line-height: 50px;
                padding-left: 20px;
            }
        }
    }
</style>