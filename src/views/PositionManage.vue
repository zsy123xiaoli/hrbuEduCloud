<template>
    <div class="position">
        <el-tree
            :data="data"
            show-checkbox
            node-key="id"
            :default-expanded-keys="[2, 3]"
            :default-checked-keys="[5]">
        </el-tree>
    </div>
</template>

<script>
    export default {
        name: "positionManage",
        data() {
        return {
            data: [{
            id: 1,
            label: '中科安高',
            children: [{
                id: 2,
                label: '院长',
                // name: '张三丰',
                    children: [{
                    id: 3,
                    label: '计算机系主任',
                    children: [{
                        id: 5,
                        label: '教师'
                        }, {
                        id: 6,
                        label: '辅导员',
                        // disabled: true
                        }]
                    },
                    {
                    id: 4,
                    label: '通讯工程系主任',
                    // disabled: true,
                        children: [{
                        id: 7,
                        label: '教师'
                        }, {
                        id: 8,
                        label: '辅导员',
                        // disabled: true
                        }]
                    }]
                },]
            }],
            defaultProps: {
            children: 'children',
            label: 'label',
            name: "name",
            }
        };
        }
    };
</script>

<style lang="less" scoped>
    .position{
        margin-left: 20px;
        padding: 40px 0 0 100px;
        width: 1000px;
        height: (100vh-20px);
        background-color: #fff;
        /deep/ .el-tree-node__label{
            font-size: 20px;
        }
        /deep/ div.el-tree-node__content{
            margin-top: 10px;
        }
    }
</style>