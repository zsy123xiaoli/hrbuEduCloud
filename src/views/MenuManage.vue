<template>
    <div class="menumanage">
        <p>菜单管理</p>
        <div class="custom-tree-container">
            <div class="block">
                <el-tree
                :data="data"
                show-checkbox
                node-key="id"
                default-expand-all
                :expand-on-click-node="false"
                :render-content="renderContent">
                </el-tree>
            </div>
        </div>

    </div>
</template>

<script>
let id = 1000;

    export default {
        name: 'menuManage',  
        data() {
        const data = [{
            id: 1,
            label: '登录',
            children: [{
                id: 2,
                label: '运营端',
                children: [{
                    id: 5,
                    label: '首页',
                    },{
                    id: 9,
                    label: '用户管理',
                    children: [{
                        id: 10,
                        label: '用户信息',
                    }]
                }]
            },{
                id: 3,
                label: '学生端',
                children: [{
                    id: 6,
                    label: '首页',
                },{
                    id: 8,
                    label: '学生管理',
                }]
                },]
            },];
        return {
            data: JSON.parse(JSON.stringify(data)),
        }
        },

        methods: {
        append(data) {
            const newChild = { id: id++, label: 'testtest', children: [] };
            if (!data.children) {
            this.$set(data, 'children', []);
            }
            data.children.push(newChild);
        },

        remove(node, data) {
            const parent = node.parent;
            const children = parent.data.children || parent.data;
            const index = children.findIndex(d => d.id === data.id);
            children.splice(index, 1);
        },

        renderContent(h, { node, data, store }) {
            return (
            <span class="custom-tree-node">
                <span>{node.label}</span>
                <span class='button'>
                        <el-button  icon="el-icon-edit" style="border: none" size="mini" type="text" on-click={ () => this.remove(node, data) }></el-button>
                        <el-button icon="el-icon-delete" style="border: none" size="mini" type="text" on-click={ () => this.remove(node, data) }></el-button>
                        <el-button icon="el-icon-check" style="border: none" size="mini" type="text" on-click={ () => this.remove(node, data) }></el-button>
                </span>
            </span>);
        }
        }
    };
</script>

<style lang="less" scoped>
    .menumanage{
        margin-left: 10px;
        width: 1000px;
        height: (100vh-20px);
        background-color: #fff;
        p{
            font-size: 30px;
            font-weight: bolder;
            color: #000;
            line-height: 56px;
            padding-left: 20px;
        }
        .custom-tree-node {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        /deep/ .el-button{
            padding: 10px;
            &:first-child{
                margin-left: 20px;
            }
        }
        /deep/ div.el-tree-node__content{
            margin: 8px 0 0 100px;
        }
    }
</style>