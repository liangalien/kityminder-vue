<template>
    <div class='km-btn-group'>
        <div class='km-theme'>
            <el-dropdown  @command="handleCommand" :disabled="isDisabled()">
                <span class="el-dropdown-link">
                <a :style="curStyle" class="theme-item">{{names[curName]}}</a>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-row style="width: 330px">
                        <el-col :span="8" v-for="name in Object.keys(styles)">
                            <el-dropdown-item :command="name">
                                <a :style="getThemeThumbStyle(name)" class="theme-item">{{names[name]}}</a>
                            </el-dropdown-item>
                        </el-col>
                    </el-row>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            minder: Object
        },
        data() {
            return {
                names: {
                    'classic': '脑图经典',
                    'classic-compact': '紧凑经典',
                    'snow': '温柔冷光',
                    'snow-compact': '紧凑冷光',
                    'fish': '鱼骨图',
                    'wire': '线框',
                    'fresh-red': '清新红',
                    'fresh-soil': '泥土黄',
                    'fresh-green': '文艺绿',
                    'fresh-blue': '天空蓝',
                    'fresh-purple': '浪漫紫',
                    'fresh-pink': '脑残粉',
                    'fresh-red-compat': '紧凑红',
                    'fresh-soil-compat': '紧凑黄',
                    'fresh-green-compat': '紧凑绿',
                    'fresh-blue-compat': '紧凑蓝',
                    'fresh-purple-compat': '紧凑紫',
                    'fresh-pink-compat': '紧凑粉',
                    'tianpan':'经典天盘',
                    'tianpan-compact': '紧凑天盘'
                },
                styles: window.kityminder.Minder.getThemeList(),
                curName: "fresh-blue-compat",
                curStyle: {}
            }
        },
        methods: {
            isDisabled: function () {
                return this.minder.queryCommandState('theme') === -1
            },
            handleCommand(command) {
                this.curName = command;
                this.curStyle = this.getThemeThumbStyle(command);
                this.minder.execCommand('theme', command);
            },
            getThemeThumbStyle (name) {
                var themeObj = this.styles[name];
                if (!themeObj) {
                    return;
                }
                var style = {
                    'color': themeObj['root-color'],
                    'border-radius': themeObj['root-radius'] / 2,
                    'margin': '5px 0'
                };

                if (themeObj['root-background']) {
                    style['background'] = themeObj['root-background'].toString();
                }

                return style;
            }
        },
        mounted() {
            this.styles = window.kityminder.Minder.getThemeList();
            this.curName = this.minder.queryCommandValue("theme") || "fresh-blue-compat";
            this.curStyle = this.getThemeThumbStyle(this.curName);
        }
    }
</script>
