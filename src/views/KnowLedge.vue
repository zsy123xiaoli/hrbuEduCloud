<template>
    <div class="KnowLedge">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{path: '/menus/DataDictionary'}">数据字典</el-breadcrumb-item>
            <el-breadcrumb-item >知识点目录维护</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="content">
            <el-row>
                <span>知识点</span>
                <el-select v-model="ALL" size="medium/small/mini	" clearable placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.ALL">
                    </el-option>
                </el-select>
                <el-select v-model="select1" style="width: 200px" size="medium/small/mini	" clearable placeholder="请选择">
                    <el-option
                    v-for="item in options1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.select1">
                    </el-option>
                </el-select>
                <el-select v-model="select2" style="width: 200px" size="medium/small/mini	" clearable placeholder="请选择">
                    <el-option
                    v-for="item in options2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.select2">
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
                :cell-style="{'text-align' : 'center'}"
                @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="50"></el-table-column>
                <el-table-column prop="knowledgename" label="知识点名称" width="300"></el-table-column>
                <el-table-column prop="catalog" label="目录" width="300"></el-table-column>
                <el-table-column prop="operate" label="操作" width="300"></el-table-column>
            </el-table>
            <div class="pagination">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[15, 30, 45, 60]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="60">
            </el-pagination>
        </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    name: "KnowLedge",
    data() {
        return {
            options: [{ALL:  '全部'}, 
                        {ALL: 'IT互联网'}, 
                        {ALL: '物联网'},
                    ],
            ALL:'全部',
            options1: [{select1:  '请选择'}, 
                        {select1: '大数据'}, 
                        {select1: '前端开发'},
                        {select1: '后端开发'},
                    ],
            select1:'请选择',
            options2: [{select2:  '请选择'}, 
                        {select2: 'HTML'}, 
                        {select2: 'CSS'},
                        {select2: 'JavaScript'},
                    ],
            select2:  '请选择',
            time: "",
            searchInput: "",
            tableData: [],
            multipleSelection: [],
            emailList:[],
            // total:0,
            pageSize: 1,
            currentPage: 1,
        }
    },
    methods:{
        handleSelectionChange(val){
            this.multipleSelection = val;
        },
        handleSizeChange(val) {
            this.pageSize = val;
            // this.search();
        },
        handleCurrentChange(val) {
            this.currentPage = val;
            // this.search();
        },
        getKnowList(){
            axios
            .post("http://127.0.0.1:3000/api/user/getFirstKnow",
            {
                num:"1",
            },
            {
                    headers: {
                        Authorization: localStorage.token,
                    },
            })
            .then((response) => {
                console.log(response.data);
                    // this.tableData = response.data.message;
                    // console.log(this.tableData);
                })
                .catch((error)=> {
                    console.log(error);
                });
        },
        search(){
            const data = {};
            if(this.searchInput){
                data.val = this.searchInput;
            }
        },
    }
}
</script>

<style lang="less" scoped>
    .KnowLedge{
        margin-left: 20px;
        width: 100%;
        .el-breadcrumb{
            color: #7A7F85;
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
                    margin: 0 10px
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
            margin-top: 60px;
            margin-bottom: 24px;
            // margin-right: -20px;
            width: 570px;
            height: 50px;
            background-color: #fff;
            float: right;
            .el-pagination{
                padding: 10px 0 0 20px;
            }
        }
    }
</style>