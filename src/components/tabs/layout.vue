<template>
    <div class="km-btn-group">
        <el-row>
            <el-link @click="minder.execCommand('resetlayout')" :underline="false" type="primary">
                <i class="el-icon-thumb"></i> 整理布局</el-link>
        </el-row>

        <el-row>
            <el-tooltip content="调整视野中心位置到选中的节点上">
                <el-link @click="minder.execCommand('camera', minder.getSelectedNode() || minder.getRoot(), 600)" :underline="false" type="primary">
                    <i class="el-icon-view"></i> 调整视野</el-link>
            </el-tooltip>
        </el-row>
    </div>
</template>

<script>
    export default {
        props: {
            minder: Object
        },
        methods: {
            isDisabled: function (command) {
                return this.minder.queryCommandState(command) === -1
            },
        },
    }
</script>