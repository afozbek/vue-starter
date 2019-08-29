<template>
    <h1 class="header">{{ msg }}</h1>
</template>

<script>
export default {
    data() {
        return {}
    },
    props: {
        msg: {
            type: String,
            required: true,
            default: 'Hello World'
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    font-family: Arial, Helvetica, sans-serif;
    color: red;
    background: linear-gradient(to right, #98ee99, #98ee99);
}
</style>
