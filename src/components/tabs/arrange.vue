<template>
    <div class="km-btn-group">
        <el-row>
            <el-link :disabled="isDisabled('ArrangeUp')" @click="minder.execCommand('ArrangeUp')" :underline="false" type="primary"><i class="el-icon-arrow-up"></i> 上移</el-link>
        </el-row>

        <el-row>
            <el-link :disabled="isDisabled('ArrangeDown')" @click="minder.execCommand('ArrangeDown')" :underline="false" type="primary"><i class="el-icon-arrow-down"></i> 下移</el-link>
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