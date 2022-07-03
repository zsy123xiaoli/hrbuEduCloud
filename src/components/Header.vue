<template>
    <div class="header">
        <div class="title">
            <img src="../assets/header-logo.png" alt="">
            <h2>大唐ICT云端实验室</h2>
        </div>
        <ul class="menus">
            <li>首页</li>
            <!-- <li>系统管理</li> -->
            <!-- 跳转到系统管理 /menus/usermanage 为路径-->
            <router-link to="/menus/usermanage" tag="li">系统管理</router-link>  
            <li>教务管理</li>
            <li>资源库</li>
            <li>教研管理</li>
            <li>教学管理</li>
            <li>考试测评</li>
        </ul>
        <ul class="unlogin">
            <li>管理员</li>
            <li> | </li>
            <li>帮助</li>
            <li> | </li>
            <li>退出</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "MyHeader",
}
</script>

<style lang="less" scoped>
    .header{
        width: 100%;
        height: 60px;
        background-color: rgba(53,55,58,1);
        display: flex; //弹性布局，使子集三个在从左往右仅靠排列
        .title{
            height: 60px;
            display: flex;
            align-items: center;  //垂直居中
            img{
                margin-left: 20px;
            }
            h2{
                color: #fff;
                font-size: 18px;
                margin-left: 20px;
            }
        }
        .menus{
            display: flex;  //使li水平展示
            margin-left: 50px;
            flex-grow: 1;
            cursor: pointer;
            li{
                line-height: 60px;
                padding: 0 13px ;
                color: #fff;
                font-size: 14px;
            }
        }
        .unlogin{
            display: flex; //使li水平展示
            margin-right: 20px;
            li{
                line-height: 60px;
                color: #fff;
                font-size: 14px;
                cursor: pointer;
                padding: 0 4px;
            }
        }
    }
</style>