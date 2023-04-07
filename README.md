KityMinder Vue(ElementUI)
==========

百度脑图 For Vue
==========

### 使用element-ui组件库重制界面

## 预览
[![](https://raw.githubusercontent.com/liangalien/kityminder-vue/main/src/images/s1.png)](https://raw.githubusercontent.com/liangalien/kityminder-vue/main/src/images/s1.png)

[![](https://raw.githubusercontent.com/liangalien/kityminder-vue/main/src/images/s2.png)](https://raw.githubusercontent.com/liangalien/kityminder-vue/main/src/images/s2.png)



## 使用
```bash
npm i kityminder-vue
```

## main.js
```javascript
import Vue from 'vue';
import Minder from 'kityminder-vue';

Vue.use(Minder);
```

## xxxxx.vue
```javascript
<template>
    <minder @finished="onFinished" @change="onChange"/>
</template>

<script>
    export default {
        methods: {
            onFinished: function (minder, editor) {
                console.log("脑图组件已挂载", minder, editor);
            },
            onChange: function (data) {
                console.log("脑图已更新", data);
            }
        }
    }
</script>
```

## 开发
```bash
npm i
npm run dev
npm run build
```
