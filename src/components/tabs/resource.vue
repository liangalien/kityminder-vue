<template>
    <div class="km-btn-group">
        <el-row>
            <el-select
                size="small"
                v-model="value"
                multiple
                filterable
                allow-create
                default-first-option
                clearable
                @change="onChange"
                :disabled="isDisabled('resource')"
            >
                <el-option
                    v-for="item in options"
                    :key="item"
                    :label="item"
                    :value="item"
                >
                    <span class="resource-item" :style="{background: minder.getResourceColor(item).toHEX()}">{{item}}</span>
                </el-option>
            </el-select>
        </el-row>
    </div>
</template>

<script>
    export default {
        props: {
            minder: Object
        },
        data() {
            return {
                options: this.getOptions(),
                value: null
            }
        },
        methods: {
            isDisabled: function (command) {
                return this.minder.queryCommandState(command) === -1
            },
            onChange: function (value) {
                this.minder.execCommand("resource", value);
                if (value && value.length > 0)
                    this.options = this.options.concat(value.filter(v => this.options.indexOf(v) == -1));
            },
            getOptions: function () {
                return this.minder.getUsedResource();
            }
        },
        mounted() {
            this.minder.on('interactchange', () => {
                this.value = minder.queryCommandValue('resource');

                this.options = this.getOptions();
            });
        },
    }
</script>