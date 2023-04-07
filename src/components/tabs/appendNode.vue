<template>
    <div class="km-btn-group">
        <el-row>
            <el-link :disabled="isDisabled('AppendChildNode')" @click="minder.execCommand('AppendChildNode', '分支主题')" :underline="false" type="primary"><i class="el-icon-bottom-right"></i> 插入下级</el-link>
            <el-link :disabled="isDisabled('AppendParentNode')" @click="minder.execCommand('AppendParentNode', '分支主题')" :underline="false" type="primary"><i class="el-icon-top-left"></i> 插入上级</el-link>
        </el-row>
        
        <el-row>
            <el-link :disabled="isDisabled('AppendSiblingNode')" @click="minder.execCommand('AppendSiblingNode', '分支主题')" :underline="false" type="primary"><i class="el-icon-refresh"></i> 插入同级</el-link>
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
            }
        }
    }
</script>