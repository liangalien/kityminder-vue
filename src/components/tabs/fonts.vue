<template>
    <div class='km-btn-group'>
        <div class='km-fonts'>
            <el-row>
                <el-select :disabled="isDisabled('fontfamily')" style="width: 120px;" v-model="font" size="mini" clearable placeholder="字体">
                    <el-option
                            v-for="item in familyList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>

                <el-select :disabled="isDisabled('fontsize')" style="width: 65px;" v-model="size" size="mini" clearable placeholder="字号">
                    <el-option
                            v-for="sizeItem in sizeList"
                            :key="sizeItem"
                            :label="sizeItem"
                            :value="sizeItem">
                    </el-option>
                </el-select>
            </el-row>

            <el-row>
                <el-col :span="6">
                    <el-link :disabled="isDisabled('italic')" @click="italicChange" :style="{background: minder.queryCommandState('italic') == 1 ? '#e7e7e7' : 'none'}" :underline="false" type="primary">
                        <svg t="1680487034843" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9404" width="14" height="14"><path d="M768 85.792h-288a32 32 0 0 0 0 64h96.32l-230.336 704H256a32 32 0 0 0 0 64h288a32 32 0 0 0 0-64h-93.728l230.528-704H768a32 32 0 0 0 0-64z" p-id="9405"></path></svg>
                    </el-link>
                </el-col>

                <el-col :span="6">
                    <el-link :disabled="isDisabled('bold')" @click="boldChange" :style="{background: minder.queryCommandState('bold') == 1 ? '#e7e7e7' : 'none'}" :underline="false" type="primary">
                        <svg t="1680773375767" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21059" width="14" height="14"><path d="M 185.17 121.09 h 312.51 c 61.895 0 108.013 2.548 138.354 7.767 s 57.648 15.899 81.556 32.283 c 24.03 16.384 44.054 38.108 59.953 65.294 s 24.03 57.648 24.03 91.508 c 0 36.652 -9.83 70.269 -29.613 100.852 c -19.782 30.583 -46.482 53.521 -80.221 68.813 c 47.696 13.836 84.226 37.501 109.834 70.876 c 25.607 33.375 38.351 72.697 38.351 117.843 c 0 35.559 -8.253 70.147 -24.758 103.765 s -39.079 60.438 -67.721 80.586 c -28.641 20.146 -63.958 32.404 -105.828 37.015 c -26.336 2.791 -89.808 4.611 -190.418 5.34 h -266.028 v -781.941 Z M 343.062 251.19 v 180.831 h 103.402 c 61.531 0 99.76 -0.85 114.688 -2.67 c 27.065 -3.155 48.302 -12.5 63.715 -28.035 s 23.18 -35.803 23.18 -61.045 c 0 -24.151 -6.675 -43.812 -20.025 -58.982 c -13.349 -15.05 -33.132 -24.272 -59.468 -27.428 c -15.655 -1.821 -60.682 -2.67 -134.956 -2.67 h -90.537 Z M 343.062 562.123 v 209.108 h 146.122 c 56.919 0 92.964 -1.578 108.256 -4.854 c 23.423 -4.247 42.598 -14.685 57.283 -31.19 c 14.806 -16.506 22.087 -38.715 22.087 -66.386 c 0 -23.423 -5.703 -43.327 -17.113 -59.711 c -11.408 -16.384 -27.792 -28.277 -49.274 -35.681 c -21.482 -7.524 -68.206 -11.165 -140.052 -11.165 h -127.31 Z" fill="#272636" p-id="21060"></path></svg>

                    </el-link>
                </el-col>

                <el-col :span="6">
                    <el-popover
                            placement="bottom"
                            trigger="hover"
                    >
                        <color-picker v-model="color"/>

                        <el-link :disabled="isDisabled('forecolor')" slot="reference" :underline="false" type="primary">
                            <svg t="1680486355468" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5075" width="14" height="14">
                                <path d="M839 768H735.3l-74.1-192.7H358.6L288.7 768H185L461.8 64h100.4L839 768zM632.1 495.8L522.3 203.1c-3.4-9.4-7.2-25.7-11.3-49.1h-2.3c-3.4 21.2-7.4 37.6-11.7 49.1L388.1 495.8h244z" fill="#727272" p-id="5076"></path>
                                <path d="M64 832h896v128H64z" :fill="minder.queryCommandValue('forecolor')" p-id="5077"></path></svg>
                        </el-link>
                    </el-popover>
                </el-col>

                <el-col :span="6">
                    <el-popover
                            placement="bottom"
                            trigger="hover"
                    >
                        <color-picker v-model="backgroundColor"/>
                        <el-link :disabled="isDisabled('background')" slot="reference" :underline="false" type="primary">
                            <svg t="1680486320149" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4821" width="14" height="14">
                                <path :fill="minder.queryCommandValue('background')" d="M0 0m56.888889 0l910.222222 0q56.888889 0 56.888889 56.888889l0 910.222222q0 56.888889-56.888889 56.888889l-910.222222 0q-56.888889 0-56.888889-56.888889l0-910.222222q0-56.888889 56.888889-56.888889Z" p-id="4822"></path>
                                <path d="M284.444444 853.333333H227.555556L483.555556 170.666667h56.888888L284.444444 853.333333z" fill="#FFFFFF" p-id="4823"></path>
                                <path d="M540.444444 170.666667h-56.888888L739.555556 853.333333h56.888888L540.444444 170.666667z" fill="#FFFFFF" p-id="4824"></path><path d="M341.333333 625.777778h341.333334v56.888889H341.333333z" fill="#FFFFFF" p-id="4825"></path>
                            </svg>
                        </el-link>
                    </el-popover>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import { Sketch } from 'vue-color'

    export default {
        components: {
            ColorPicker: Sketch
        },
        props: {
            minder: Object
        },
        data() {
            return {
                familyList: [{
                    label: '宋体',
                    value: '宋体,SimSun'
                }, {
                    label: '微软雅黑',
                    value: '微软雅黑,Microsoft YaHei'
                    }, {
                        label: '楷体',
                        value: '楷体,楷体_GB2312,SimKai'
                    }, {
                        label: '黑体',
                        value: '黑体, SimHei'
                    }, {
                        label: '隶书',
                        value: '隶书, SimLi'
                    }, {
                        label: 'Andale Mono',
                        value: 'andale mono'
                    }, {
                        label: 'Arial',
                        value: 'arial,helvetica,sans-serif'
                    }, {
                        label: 'arialBlack',
                        value: 'arial black,avant garde'
                    }, {
                        label: 'Comic Sans Ms',
                        value: 'comic sans ms'
                    }, {
                        label: 'Impact',
                        value: 'impact,chicago'
                    }, {
                        label: 'Times New Roman',
                        value: 'times new roman'
                    }, {
                        label: 'Sans-Serif',
                        value: 'sans-serif'
                    }
                ],
                sizeList: [10, 12, 16, 18, 24, 32, 48],
                font: this.minder.queryCommandValue('fontfamily') || "微软雅黑,Microsoft YaHei",
                size: this.minder.queryCommandValue('fontsize') || 16,

                color: {hex: this.minder.queryCommandValue('forecolor')},
                backgroundColor: {hex: this.minder.queryCommandValue('background')}
            }
        },
        methods: {
            isDisabled: function (command) {
                return this.minder.queryCommandState(command) === -1
            },
            italicChange: function () {
                this.minder.execCommand('italic');
                this.$forceUpdate();
            },
            boldChange: function () {
                this.minder.execCommand('bold');
                this.$forceUpdate();
            },
        },
        watch: {
            font: function () {
                this.minder.execCommand('fontfamily', this.font);
            },
            size: function () {
                this.minder.execCommand('fontsize', this.size);
            },
            'color.hex': function () {
                this.minder.execCommand("forecolor", this.color.hex)
            },
            'backgroundColor.hex': function () {
                this.minder.execCommand("background", this.backgroundColor.hex)
            }
        },
        mounted() {
            this.minder.on("contentchange", () => this.$forceUpdate());
        }
    }
</script>
<style scope>
    .el-popover {
        padding: 0;
    }

    .el-col {
        text-align: center;
    }
</style>