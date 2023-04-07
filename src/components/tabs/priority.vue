<template>
    <div class="km-btn-group">
        <div class="km-priority">
            <el-row>
                <el-link
                        :underline="false"
                        @click="minder.execCommand('priority', 0)"
                        :disabled="isDisabled('priority')"
                        :style="{background: `url(${bg})`, backgroundPosition: '0 20px'}"
                        class="km-priority-icon"
                >
                </el-link>
                <el-link
                        :underline="false"
                        @click="minder.execCommand('priority', 1)"
                        :disabled="isDisabled('priority')"
                        :style="{background: `url(${bg})`, backgroundPosition: '0 0'}"
                        class="km-priority-icon"
                >
                </el-link>

                <el-link
                        :underline="false"
                        @click="minder.execCommand('priority', 2)"
                        :disabled="isDisabled('priority')"
                        :style="{background: `url(${bg})`, backgroundPosition: '0 -20px'}"
                        class="km-priority-icon"
                >
                </el-link>

                <el-link
                        :underline="false"
                        @click="minder.execCommand('priority', 3)"
                        :disabled="isDisabled('priority')"
                        :style="{background: `url(${bg})`, backgroundPosition: '0 -40px'}"
                        class="km-priority-icon"
                >
                </el-link>

                <el-link
                        :underline="false"
                        @click="minder.execCommand('priority', 4)"
                        :disabled="isDisabled('priority')"
                        :style="{background: `url(${bg})`, backgroundPosition: '0 -60px'}"
                        class="km-priority-icon"
                >
                </el-link>
            </el-row>

            <el-row>
                <el-link
                        :underline="false"
                        @click="minder.execCommand('priority', 5)"
                        :disabled="isDisabled('priority')"
                        :style="{background: `url(${bg})`, backgroundPosition: '0 -80px'}"
                        class="km-priority-icon"
                >
                </el-link>
                <el-link
                        :underline="false"
                        @click="minder.execCommand('priority', 6)"
                        :disabled="isDisabled('priority')"
                        :style="{background: `url(${bg})`, backgroundPosition: '0 -100px'}"
                        class="km-priority-icon"
                >
                </el-link>
                <el-link
                        :underline="false"
                        @click="minder.execCommand('priority', 7)"
                        :disabled="isDisabled('priority')"
                        :style="{background: `url(${bg})`, backgroundPosition: '0 -120px'}"
                        class="km-priority-icon"
                >
                </el-link>
                <el-link
                        :underline="false"
                        @click="minder.execCommand('priority', 8)"
                        :disabled="isDisabled('priority')"
                        :style="{background: `url(${bg})`, backgroundPosition: '0 -140px'}"
                        class="km-priority-icon"
                >
                </el-link>
                <el-link
                        :underline="false"
                        @click="minder.execCommand('priority', 9)"
                        :disabled="isDisabled('priority')"
                        :style="{background: `url(${bg})`, backgroundPosition: '0 -160px'}"
                        class="km-priority-icon"
                >
                </el-link>
            </el-row>

        </div>
    </div>
</template>

<script>
    import bg from '../../images/iconpriority.png';

    export default {
        name: "",
        data() {
            return {
                bg: bg
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
    .km-priority .km-priority-icon {
        width: 20px;
        height: 20px;
        margin: 1px;
    }

</style>