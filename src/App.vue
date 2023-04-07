<template>
    <minder @finished="onFinished" @change="onChange"/>
</template>

<script>

    export default  {
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
