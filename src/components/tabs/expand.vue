<template>
    <div class='km-btn-group'>
        <div class='km-theme'>
            <el-row>
                <el-dropdown  @command="handleExpand" :disabled="isDisabled()">
                    <span class="el-dropdown-link">
                    <el-link :underline="false" type="primary">
                        <i class="el-icon-folder-opened"></i> 展开
                    </el-link>
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item v-for="(item, index) in expandItems" :command="index">
                            {{"展开" + item + "节点"}}
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-row>

            <el-row>
                <el-dropdown  @command="handleSelected" :disabled="isDisabled()">
                    <span class="el-dropdown-link">
                    <el-link :underline="false" type="primary">
                        <i class="el-icon-document-checked"></i> 选择
                    </el-link>
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item v-for="item in Object.keys(selectedItems)" :command="item">
                            {{selectedItems[item]}}
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            minder: Object
        },
        data() {
            return {
                expandItems: ['全部', '一级', '二级', '三级', '四级', '五级', '六级'],
                selectedItems: {
                    'selectall': '全选',
                    'selectrevert': '反选',
                    'selectsiblings': '选择兄弟节点',
                    'selectlevel': '选择同级节点',
                    'selectpath': '选择路径',
                    'selecttree': '选择子树'
                }
            }
        },
        methods: {
            isDisabled: function () {
                return this.minder.queryCommandState('theme') === -1
            },
            handleExpand(level) {
                this.minder.execCommand('ExpandToLevel', level || 999);
            },
            handleSelected(key) {
                this.selectNode(key);
            },
            selectNode(key) {
                if (this.minder && key) {
                    let minder = this.minder;
                    const methods = {
                        selectall: function () {
                            let selection = [];
                            minder.getRoot().traverse(function (node) {
                                selection.push(node);
                            });
                            minder.select(selection, true);
                            minder.fire('receiverfocus');
                        },
                        selectrevert: function () {
                            let selected = minder.getSelectedNodes();
                            let selection = [];
                            minder.getRoot().traverse(function (node) {
                                if (selected.indexOf(node) == -1) {
                                    selection.push(node);
                                }
                            });
                            minder.select(selection, true);
                            minder.fire('receiverfocus');
                        },
                        selectsiblings: function () {
                            let selected = minder.getSelectedNodes();
                            let selection = [];
                            selected.forEach(function (node) {
                                if (!node.parent) return;
                                node.parent.children.forEach(function (sibling) {
                                    if (selection.indexOf(sibling) == -1) selection.push(sibling);
                                });
                            });
                            minder.select(selection, true);
                            minder.fire('receiverfocus');
                        },
                        selectlevel: function () {
                            let selectedLevel = minder.getSelectedNodes().map(function (node) {
                                return node.getLevel();
                            });
                            let selection = [];
                            minder.getRoot().traverse(function (node) {
                                if (selectedLevel.indexOf(node.getLevel()) != -1) {
                                    selection.push(node);
                                }
                            });
                            minder.select(selection, true);
                            minder.fire('receiverfocus');
                        },
                        selectpath: function () {
                            let selected = minder.getSelectedNodes();
                            let selection = [];
                            selected.forEach(function (node) {
                                while (node && selection.indexOf(node) == -1) {
                                    selection.push(node);
                                    node = node.parent;
                                }
                            });
                            minder.select(selection, true);
                            minder.fire('receiverfocus');
                        },
                        selecttree: function () {
                            let selected = minder.getSelectedNodes();
                            let selection = [];
                            selected.forEach(function (parent) {
                                parent.traverse(function (node) {
                                    if (selection.indexOf(node) == -1) selection.push(node);
                                });
                            });
                            minder.select(selection, true);
                            minder.fire('receiverfocus');
                        }
                    };

                    methods[key]();
                }
            }
        }
    }
</script>
