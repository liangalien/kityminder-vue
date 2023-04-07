<template>

    <div class="km-btn-group">
        <el-row>
            <el-link :disabled="isDisabled('note')" @click="noteVisible = true" :underline="false" type="primary"><i class="el-icon-edit-outline"></i> 备注</el-link>
        </el-row>

        <el-row>
            <el-link :disabled="isDisabled('RemoveNode')" @click="minder.execCommand('RemoveNode')" :underline="false" type="primary"><i class="el-icon-delete"></i> 删除</el-link>
        </el-row>

        <el-drawer
            title="编辑备注"
            :visible.sync="noteVisible"
        >
            <div style="margin: 0 20px">
                <el-input v-model="note" rows="10" type="textarea"></el-input>
            </div>
        </el-drawer>
    </div>


</template>

<script>
    export default {
        props: {
            minder: Object
        },

        data() {
            return {
                noteVisible: false,
                note: this.minder.queryCommandValue("note")
            }
        },
        methods: {
            isDisabled: function (command) {
                return this.minder.queryCommandState(command) === -1
            },
        },
        watch: {
            note: function () {
                this.minder.execCommand("note", this.note);
            }
        },
        updated() {
            this.note = this.minder.queryCommandValue("note");
        }
    }
</script>