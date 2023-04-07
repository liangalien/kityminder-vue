<template>
    <div class="km-btn-group">
        <div class="km-progress">
            <el-row>
                <el-link
                        :underline="false"
                        @click="minder.execCommand('progress', 0)"
                        :disabled="isDisabled('priority')"
                        :style="{background: `url(${bg})`, backgroundPosition: '0 20px'}"
                        class="km-progress-icon"
                >
                </el-link>
                <el-link
                        :underline="false"
                        @click="minder.execCommand('progress', 1)"
                        :disabled="isDisabled('priority')"
                        :style="{background: `url(${bg})`, backgroundPosition: '0 0'}"
                        class="km-progress-icon"
                >
                </el-link>

                <el-link
                        :underline="false"
                        @click="minder.execCommand('progress', 2)"
                        :disabled="isDisabled('priority')"
                        :style="{background: `url(${bg})`, backgroundPosition: '0 -20px'}"
                        class="km-progress-icon"
                >
                </el-link>

                <el-link
                        :underline="false"
                        @click="minder.execCommand('progress', 3)"
                        :disabled="isDisabled('priority')"
                        :style="{background: `url(${bg})`, backgroundPosition: '0 -40px'}"
                        class="km-progress-icon"
                >
                </el-link>

                <el-link
                        :underline="false"
                        @click="minder.execCommand('progress', 4)"
                        :disabled="isDisabled('priority')"
                        :style="{background: `url(${bg})`, backgroundPosition: '0 -60px'}"
                        class="km-progress-icon"
                >
                </el-link>
            </el-row>

            <el-row>
                <el-link
                        :underline="false"
                        @click="minder.execCommand('progress', 5)"
                        :disabled="isDisabled('priority')"
                        :style="{background: `url(${bg})`, backgroundPosition: '0 -80px'}"
                        class="km-progress-icon"
                >
                </el-link>
                <el-link
                        :underline="false"
                        @click="minder.execCommand('progress', 6)"
                        :disabled="isDisabled('priority')"
                        :style="{background: `url(${bg})`, backgroundPosition: '0 -100px'}"
                        class="km-progress-icon"
                >
                </el-link>
                <el-link
                        :underline="false"
                        @click="minder.execCommand('progress', 7)"
                        :disabled="isDisabled('priority')"
                        :style="{background: `url(${bg})`, backgroundPosition: '0 -120px'}"
                        class="km-progress-icon"
                >
                </el-link>
                <el-link
                        :underline="false"
                        @click="minder.execCommand('progress', 8)"
                        :disabled="isDisabled('priority')"
                        :style="{background: `url(${bg})`, backgroundPosition: '0 -140px'}"
                        class="km-progress-icon"
                >
                </el-link>
                <el-link
                        :underline="false"
                        @click="minder.execCommand('progress', 9)"
                        :disabled="isDisabled('priority')"
                        :style="{background: `url(${bg})`, backgroundPosition: '0 -160px'}"
                        class="km-progress-icon"
                >
                </el-link>
            </el-row>

        </div>
    </div>
</template>

<script>
    import bg from '../../images/iconprogress.png';

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
    .km-progress .km-progress-icon {
        width: 20px;
        height: 20px;
        margin: 1px;
    }

</style>