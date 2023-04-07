<template>
    <div class="km-btn-group">
        <el-row>
            <el-link :disabled="isDisabled('copystyle')" @click="minder.execCommand('copystyle')" :underline="false" type="primary">
                <i class="el-icon-copy-document"></i> 复制样式</el-link>

            <el-link :disabled="isDisabled('clearstyle')"  @click="minder.execCommand('clearstyle')" :underline="false" type="primary">
                <i class="el-icon-delete-solid"></i> 清空样式</el-link>
        </el-row>
        <el-row>
                <el-link :disabled="isDisabled('pastestyle')"  @click="minder.execCommand('pastestyle')" :underline="false" type="primary">
                    <i class="el-icon-document"></i> 粘贴样式</el-link>
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
        mounted() {
            this.minder.on("contentchange", () => this.$forceUpdate());
        }
    }
</script>