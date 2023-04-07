<template>
    <div>
        <div class="nav-bar">
            <div class="nav-btn zoom-in"
                 @click="minder.execCommand('zoomIn')"
                 :class="getZoomRadio(zoom) == 0 ? 'active' : ''">
                <div
                     class="icon"
                     :style="{background: `url(${icons})`, backgroundPosition: '0 -730px'}"
                >
                </div>
            </div>
            <div ref="zoomPan" class="zoom-pan">
                <div class="origin"
                     :style="originStyle"
                     @click="minder.execCommand('zoom', 100);"></div>
                <div class="indicator"
                     :style="indicatorStyle"></div>
            </div>
            <div class="nav-btn zoom-out"
                 @click="minder.execCommand('zoomOut')"
                 :class="getZoomRadio(zoom) == 1 ? 'active' : ''">
                <div
                    class="icon"
                    :style="{background: `url(${icons})`, backgroundPosition: '0 -750px'}"
                ></div>
            </div>
            <div class="nav-btn"
                 @click="minder.execCommand('hand')"
                 :class="minder.queryCommandState('hand') == 1 ? 'active' : ''">
                <!--div class="icon" :style="{background: `url(${icons})`, backgroundPosition: '0 -770px'}"></div-->
                <svg t="1680763116350" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17689" width="20" height="20"><path d="M830.27027 307.2c-11.07027 0-24.908108 2.767568-38.745946 8.302703C777.686486 271.221622 752.778378 249.081081 719.567568 249.081081c-19.372973 0-44.281081 5.535135-66.421622 22.140541C633.772973 229.708108 603.32973 221.405405 581.189189 221.405405c-19.372973 0-35.978378 5.535135-55.351351 19.372973V107.935135C512 13.837838 451.113514 0 415.135135 0 381.924324 0 318.27027 13.837838 304.432432 105.167568v434.508108C257.383784 498.162162 204.8 470.486486 152.216216 503.697297c-19.372973 11.07027-30.443243 30.443243-35.978378 55.351352-5.535135 38.745946 8.302703 85.794595 35.978378 124.54054l249.081081 312.735135h329.340541c69.189189 0 154.983784-38.745946 179.891892-218.637838L913.297297 415.135135c0-71.956757-27.675676-107.935135-83.027027-107.935135z m27.675676 464.951351c-22.140541 168.821622-99.632432 168.821622-124.540541 168.821622h-304.432432L196.497297 650.378378c-16.605405-22.140541-27.675676-55.351351-24.908108-80.259459 2.767568-8.302703 5.535135-16.605405 11.07027-19.372973 11.07027-5.535135 38.745946-24.908108 130.075676 74.724324l49.816216 55.351352V113.47027C368.086486 60.886486 392.994595 55.351351 415.135135 55.351351c22.140541 0 47.048649 8.302703 55.351351 58.118919V415.135135c0 16.605405 11.07027 27.675676 27.675676 27.675676s27.675676-11.07027 27.675676-27.675676v-99.632432c19.372973-24.908108 38.745946-38.745946 55.351351-38.745946 8.302703 0 24.908108 0 27.675676 58.118919V442.810811c0 16.605405 11.07027 27.675676 27.675676 27.675675s27.675676-11.07027 27.675675-27.675675v-102.4c19.372973-30.443243 41.513514-35.978378 55.351352-35.978379 11.07027 0 22.140541 19.372973 27.675675 55.351352v110.702702c0 16.605405 11.07027 27.675676 27.675676 27.675676s27.675676-11.07027 27.675676-27.675676v-96.864864c13.837838-11.07027 24.908108-13.837838 27.675675-13.837838 13.837838 0 27.675676 0 27.675676 55.351351v357.016216z" fill="#ffffff" p-id="17690"></path></svg>
            </div>

            <el-popover
                placement="right-end"
                width="400"
                v-model="searchVisible"
                trigger="manual"
                :visible-arrow="false"
            >
                <el-input
                    ref="search"
                    v-model="search"
                    :autofocus="true"
                    @keyup.enter.native="selectAuto"
                    prefix-icon="el-icon-search"
                    placeholder="节点查找"
                >
                    <div slot="suffix">
                        <span style="line-height: 40px;">{{(current + 1) + "/" + results.length}}</span>
                    </div>
                    <template slot="append">
                        <div>
                            <div>
                                <el-link @click="selectPrev" :disabled="results.length == 0 || current < 1" icon="el-icon-arrow-up" :underline="false"/>
                            </div>
                            <div>
                                <el-link @click="selectNext" :disabled="results.length == 0 || current >= results.length - 1" icon="el-icon-arrow-down" :underline="false"/>
                            </div>
                        </div>
                    </template>
                </el-input>
                <div @click="searchVisible = !searchVisible" slot="reference" :class="'nav-btn' + (searchVisible ? ' active' : '')">
                    <svg t="1680764241594" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19631" width="20" height="20"><path d="M797.525333 752.266667c62.069333-72.736 97.28-165.002667 97.28-262.186667C894.816 266.528 713.621333 85.333333 490.08 85.333333 266.538667 85.333333 85.333333 266.538667 85.333333 490.069333 85.333333 713.610667 266.538667 894.826667 490.069333 894.826667a404.693333 404.693333 0 0 0 118.208-17.546667 32 32 0 0 0-18.666666-61.216 340.693333 340.693333 0 0 1-99.541334 14.762667C301.888 830.816 149.333333 678.261333 149.333333 490.069333 149.333333 301.888 301.888 149.333333 490.069333 149.333333 678.261333 149.333333 830.826667 301.888 830.826667 490.069333c0 89.28-35.381333 173.696-97.141334 237.322667a36.992 36.992 0 0 0 0.384 51.925333l149.973334 149.973334a32 32 0 0 0 45.258666-45.248L797.525333 752.266667z" fill="#ffffff" p-id="19632"></path></svg>
                </div>
            </el-popover>
            <div  class="nav-btn"
                 @click="$emit('update:fullscreen', !fullscreen)"
            >
                <svg v-if="!fullscreen" t="1680761842081" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10152" width="18" height="18"><path d="M0 921.59115V102.394401C0 45.838157 45.8508 0 102.405238 0h819.196749c56.556244 0 102.394401 45.838157 102.394401 102.394401v819.198555c0 56.556244-45.838157 102.407044-102.394401 102.407044H102.405238C45.8508 1023.998194 0 978.147394 0 921.59115zM921.601987 76.796704H102.405238c-18.109124 0-25.610341 7.49941-25.610341 25.597697v819.198555c0 18.109124 7.501216 25.610341 25.610341 25.61034h844.796252V102.394401c0-18.098287-7.49941-25.597697-25.599503-25.597697z" fill="#ffffff" p-id="10153"></path><path d="M153.602438 204.799639v127.993904c0 21.215816 17.187954 38.401964 38.403771 38.401964 21.204979 0 38.392933-17.187954 38.392933-38.401964v-102.394401h102.403432c21.204979 0 38.40377-17.196985 38.40377-38.40377s-17.198791-38.392933-38.40377-38.392934h-128.002935c-28.278122 0-51.1972 22.919078-51.197201 51.197201zM870.395755 204.799639v127.993904c0 21.215816-17.187954 38.401964-38.392933 38.401964s-38.40377-17.187954-38.40377-38.401964v-102.394401h-102.392595c-21.215816 0-38.40377-17.196985-38.40377-38.40377s17.187954-38.392933 38.40377-38.392934h127.992098c28.278122 0 51.1972 22.919078 51.1972 51.197201zM153.602438 819.198555v-128.006548c0-21.203173 17.187954-38.401964 38.403771-38.401964 21.204979 0 38.392933 17.198791 38.392933 38.401964v102.407045h102.403432c21.204979 0 38.40377 17.187954 38.40377 38.392933 0 21.215816-17.198791 38.40377-38.40377 38.40377h-128.002935c-28.278122 0-51.1972-22.920885-51.197201-51.1972zM819.196749 870.395755h-127.992098c-21.215816 0-38.40377-17.187954-38.40377-38.40377 0-21.204979 17.187954-38.392933 38.40377-38.392933h102.392595v-102.407045c0-21.203173 17.196985-38.401964 38.40377-38.401964s38.392933 17.198791 38.392933 38.401964v128.006548c0.001806 28.276316-22.917272 51.1972-51.1972 51.1972z" fill="#ffffff" p-id="10154"></path></svg>
                <svg v-else t="1680762527626" viewBox="0 0 1091 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12159" width="17" height="17"><path d="M648.047 369.879H414.216c-9.718 0-17.613 7.896-17.613 17.613v233.832c0 9.718 7.895 17.613 17.613 17.613h233.831c9.718 0 17.614-7.895 17.614-17.613v-234.44c-0.608-9.11-7.896-17.005-17.614-17.005z m-34.619 199.212c0 9.718-7.895 17.614-17.613 17.614H465.84c-9.718 0-17.613-7.896-17.613-17.614V439.117c0-9.717 7.895-17.613 17.613-17.613h129.974c9.718 0 17.613 7.896 17.613 17.613v129.974zM437.295 18.221H91.103c-24.294 0-42.515 18.22-42.515 36.44v352.267c0 24.294 18.221 42.514 42.515 42.514 18.22 0 36.441-18.22 36.441-42.514v-284.85c0-13.969 11.54-24.901 24.902-24.901h284.85c24.294 0 42.514-24.294 42.514-42.515S461.59 18.22 437.295 18.22zM977.841 564.84c-18.22 0-36.441 18.22-36.441 42.515v291.53c0 10.325-7.896 18.22-18.22 18.22H631.648c-24.294 0-42.515 12.148-42.515 36.442 0 18.22 18.22 36.441 42.515 36.441H977.84c24.294 0 36.441-16.398 36.441-30.368V607.355c0-24.295-12.147-42.515-36.441-42.515zM747.046 321.898h224.721c24.295 0 42.515-18.22 42.515-36.441 0-24.294-18.22-36.442-42.515-36.442H835.113L1000.92 83.208c17.005-17.006 17.005-43.123 4.251-55.877-12.754-12.754-38.87-12.754-55.877 4.251L783.488 197.39V60.735c0-24.294-18.221-42.514-36.442-42.514-24.294 0-36.441 18.22-36.441 42.514V291.53c0 13.97 12.147 30.368 36.441 30.368zM315.824 686.311H91.104c-24.295 0-42.516 18.22-42.516 36.441s18.221 36.441 42.515 36.441h136.655L61.95 925.001c-17.006 17.006-17.006 43.122-4.251 55.877s38.87 12.754 55.876-4.252L279.383 810.82v136.654c0 24.294 18.22 42.515 36.441 42.515 24.295 0 36.442-18.22 36.442-42.515v-224.72c0-21.866-12.147-36.442-36.442-36.442z" p-id="12160" fill="#ffffff"></path></svg>
            </div>
        </div>
    </div>
</template>

<script>
    import icons from "../images/icons.png"

    export default {
        props: {
            minder: Object,
            fullscreen: Boolean
        },
        data() {
            return {
                zooms: [10, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200],
                zoom: 100,
                isNavOpen: false,
                originStyle: {},
                indicatorStyle: {},
                icons: icons,

                searchVisible: false,
                search: null,
                current: -1,
                results: []
            }
        },
        methods: {
            isDisabled: function (command) {
                return this.minder.queryCommandState(command) === -1
            },
            getZoomRadio: function(value) {
                var zoomStack = this.zooms;
                var minValue = zoomStack[0];
                var maxValue = zoomStack[zoomStack.length - 1];
                var valueRange = maxValue - minValue;

                return (1 - (value - minValue) / valueRange);
            },
            getHeight: function(value) {
                var totalHeight = this.$refs.zoomPan.clientHeight;
                return this.getZoomRadio(value) * totalHeight;
            },
            setIndicator: function (zoom) {
                this.indicatorStyle = {
                    transform: `translate(0, ${this.getHeight(zoom)}px)`,
                    transition: 'transform 200ms'
                };
            },
            searchHandle: function () {
                this.results = [];
                this.current = -1;

                if (this.search) {
                    this.searchNode(this.minder.getRoot());
                    this.selectNext();
                }
            },
            searchNode: function (node) {
                if (node.getData("text").indexOf(this.search) != -1) {
                    this.results.push(node.getData("id"));
                }

                let children = node.getChildren();
                if (children && children.length > 0) {
                    children.map(child => {
                        this.searchNode(child);
                    });
                }
            },
            selectNext: function () {
                if (this.results.length > 0 && this.current < this.results.length - 1) {
                    this.current ++;
                    this.selectHandle();
                }
            },
            selectPrev: function () {
                if (this.results.length > 0 && this.current >= 1) {
                    this.current --;
                    this.selectHandle();
                }
            },
            selectAuto: function () {
                if (this.current >= this.results.length - 1) {
                    this.current = -1;
                }
                this.selectNext();
            },
            selectHandle: function (id) {
                this.minder.removeAllSelectedNodes();
                this.minder.selectById(this.results[this.current]);
                this.minder.execCommand('camera', minder.getSelectedNode());
            }
        },
        mounted() {
            this.minder.setDefaultOptions({zoom: this.zooms})

            this.originStyle = {
                transform: `translate(0, ${this.getHeight(100)}px)`
            };

            this.setIndicator(this.zoom);

            let that = this;
            this.minder.on('zoom', function(e) {
                that.zoom = e.zoom;
                that.setIndicator(e.zoom);
            });

            /*document.onkeydown = event => {
                if (event.keyCode == 70 && event.ctrlKey) {
                    this.searchVisible = true;
                }
            };*/
        },
        watch: {
            search: function () {
                this.searchHandle();
            },
            searchVisible: function () {
                if (!this.searchVisible) {
                    this.search = null;
                } else {
                    this.$refs.search.focus();
                }
            }
        },
    }
</script>

<style>
    .nav-bar {
        height: 214px;
    }

    .nav-bar .nav-btn {
        cursor: pointer;
        height: 27px;
    }

    .nav-bar .zoom-pan .origin {
        cursor: pointer;
    }

    .fullscreen {
        background-color: #fff;
    }


    .el-input .el-input__decrease,el-input__increase {
        height: auto;
        line-height: 19px;
    }
</style>