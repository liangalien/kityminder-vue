<template>
    <div class='km-btn-group'>
        <div class='km-theme'>
            <el-dropdown  @command="handleCommand" :disabled="isDisabled()">
                <span class="el-dropdown-link">
                <a :style="{backgroundImage: `url(${tp})`}" :class="'temp-item ' + curName"></a>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-row style="width: 180px">
                        <el-col :span="12" v-for="name in Object.keys(templateList)">
                            <el-dropdown-item :command="name">
                                <a :style="{backgroundImage: `url(${tp})`}" :class="'temp-item ' + name"></a>
                            </el-dropdown-item>
                        </el-col>
                    </el-row>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
    import TemplatePng from '../../images/template.png';

    export default {
        props: {
            minder: Object
        },
        data() {
            return {
                tp: TemplatePng,
                templateList: window.kityminder.Minder.getTemplateList(),
                curName: "right"
            }
        },
        methods: {
            isDisabled: function () {
                return this.minder.queryCommandState('template') === -1
            },
            handleCommand(command) {
                this.curName = command;
                this.minder.execCommand('template', command);
            }
        },
        mounted() {
            this.curName = this.minder.queryCommandValue("template") || "right";
        }
    }
</script>