<template>
    <div class="km-btn-group">
        <el-row>
            <el-tooltip content="撤销">
                <el-link :disabled="!hasUndo" :underline="false" @click="editor.history.undo()" type="primary"><i class="el-icon-d-arrow-left"></i></el-link>
            </el-tooltip>
        </el-row>
        <el-row>
            <el-tooltip content="重做">
                <el-link :disabled="!hasRedo" :underline="false" @click="editor.history.redo()" type="primary"><i class="el-icon-d-arrow-right"></i></el-link>
            </el-tooltip>
        </el-row>
    </div>
</template>

<script>
    export default {
        props: {
            editor: Object,
            minder: Object,
        },
        data() {
            return {
                hasUndo: false,
                hasRedo: false,
            }
        },

        mounted() {
            let that = this;
            minder.on('datachange contentchange', function () {
                that.hasUndo = that.editor.history.hasUndo();
                that.hasRedo = that.editor.history.hasRedo();
            })
        },
    }
</script>

<style>


</style>