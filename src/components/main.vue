<template>
    <div>
      <fullscreen :fullscreen.sync="isFullscreen" :teleport="true">
          <el-tabs v-model="activeName">
              <el-tab-pane label="思路" name="1">
                  <undo-redo v-if="minder" :minder.sync="minder" :editor.sync="editor"/>
                  <append-node v-if="minder" :minder.sync="minder"/>
                  <arrange v-if="minder" :minder.sync="minder"/>
                  <operation v-if="minder" :minder.sync="minder"/>
                  <priority v-if="minder" :minder.sync="minder"/>
                  <progress-icon v-if="minder" :minder.sync="minder"/>
                  <resource v-if="minder" :minder.sync="minder"/>
              </el-tab-pane>
              <el-tab-pane label="外观" name="2">
                  <template-dropdown v-if="minder" :minder.sync="minder"/>
                  <theme v-if="minder" :minder.sync="minder"/>
                  <expand v-if="minder" :minder.sync="minder"/>
                  <layout v-if="minder" :minder.sync="minder"/>
                  <styles v-if="minder" :minder.sync="minder"/>
                  <fonts v-if="minder" :minder.sync="minder"/>
              </el-tab-pane>
          </el-tabs>
          <div ref="container" class="minder-container"></div>
          <navigator v-if="minder" :minder.sync="minder" :fullscreen.sync="isFullscreen"/>
      </fullscreen>
  </div>
</template>

<script>
    import 'hotbox-ui';
    import 'kity';
    import 'kityminder-core';
    import 'kityminder-core/dist/kityminder.core.css';

    import 'kityminder-editor-plugin';
    import 'kityminder-editor-plugin/src/style.css';

    import 'hotbox-ui/hotbox.css';

    import Navigator from './navigator';

    import UndoRedo from './tabs/undoRedo';
    import AppendNode from './tabs/appendNode';
    import Arrange from './tabs/arrange';
    import Operation from './tabs/operation';
    import Priority from './tabs/priority';
    import ProgressIcon from './tabs/progress';
    import Resource from './tabs/resource';

    import TemplateDropdown from './tabs/template';
    import Theme from './tabs/theme';
    import Styles from './tabs/style';
    import Layout from './tabs/layout';
    import Expand from './tabs/expand';
    import Fonts from './tabs/fonts';

    export default {
        components: {
            Navigator, UndoRedo, AppendNode, Arrange, Operation, Priority, ProgressIcon, Resource,
            TemplateDropdown, Theme, Styles, Layout, Expand, Fonts
        },

        data() {
            return {
                activeName: "1",
                minder: null,
                editor: null,
                isFullscreen: false,
            }
        },
        mounted() {
            this.editor = new window.kityminder.Editor(this.$refs.container);
            this.minder = window.minder = this.editor.minder;

            this.minder.on('contentchange', data => {
                this.$emit("change", data);
            });

            this.$emit("finished", this.minder, this.editor);
        },
        watch: {
            activeName: function () {
                this.$forceUpdate();
            }
        },
    }
</script>

<style>
    .el-tabs__header {
        margin: 0 !important;
    }

    .el-tab-pane {
        height: 54px;
    }

    .resource-item {
        box-sizing: border-box;
        color: rgba(0, 0, 0, .65);
        font-size: 11px;
        font-variant: tabular-nums;
        list-style: none;
        font-feature-settings: "tnum";
        display: inline-block;
        height: auto;
        margin: 0 8px 0 0;
        padding: 0 7px;
        line-height: 19px;
        white-space: nowrap;
        cursor: pointer;
        opacity: 1;
        transition: all .3s cubic-bezier(.78, .14, .15, .86);
    }

    .km-fonts-style {
        margin-top: 11px;
    }
    .km-btn-group {
        margin: 0;
        padding: 0 12px 0 8px;
    }

    .km-btn-group .el-link {
        font-size: 11px;
        color: #000000;
    }

    .km-btn-group button {
        color: #000000;
    }

    .km-btn-group .el-link.is-disabled {
        color: #d2d2d2;
        opacity: 0.5;
        cursor: not-allowed;
    }

    .km-btn-group  .el-icon-arrow-down {
        line-height: 20px;
    }

    .minder-container {
        height: calc(100vh - 109px);
    }

    .theme-item {
        padding: 0 !important;
    }
    
    .km-theme {
        margin-top: 5px;
    }

    .km-fonts {
        margin-top: 7px;
    }
</style>
