<template>
    <div class="km-btn-group">
        <div class="km-type">
            <el-row>
                <span :disabled="isDisabled('note')" :style="{background: bg1}" @click="minder.execCommand('type', 1)">模块</span>
                <span :disabled="isDisabled('note')" :style="{background: bg2}" @click="minder.execCommand('type', 2)">用例</span>
                <span :disabled="isDisabled('note')" :style="{background: bg3}" @click="minder.execCommand('type', 3)">步骤</span>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                bg1: this.minder.getResourceColor(1).toHEX(),
                bg2: this.minder.getResourceColor(2).toHEX(),
                bg3: this.minder.getResourceColor(3).toHEX(),
            }
        },
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

<style>


</style>