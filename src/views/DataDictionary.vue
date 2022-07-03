<template>
    <div class="DataDictionary">
        <p>数据字典</p>
        <div class="data">
            <el-row class="box">
                <el-button @click="knowledge">知识点目录维护</el-button>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    name: "DataDictionary",
    methods: {
        knowledge(){
            //指定跳转的地址
            this.$router.push('/menus/KnowLedge');
        }
    }
}
</script>

<style lang="less" scoped>
    .DataDictionary{
        margin-left: 20px;
        width: 100%;
        p{
            color: #000;
            line-height: 56px;
        }
        .data{
            // width: 960px;
            height: (100vh-30px);
            background-color: #fff;
        }
            .box{
                width: 150px;
                text-align: center;
                line-height: 30px;
                color: #7A7F85;
                .el-button{
                    margin: 40px 0 0 40px;

                }
            }
    }
</style>