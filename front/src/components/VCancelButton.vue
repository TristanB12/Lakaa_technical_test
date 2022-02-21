<template>
    <button>{{ title }}</button>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: ""
            },
        },
    }
</script>

<style lang="scss" scoped>
button {
    padding: 9px 15px;
    background-color: #F9F9F9;
    border: none;
    border-radius: 7px;
    color: #5C5C5C;
    font-size: 20px;
    cursor: pointer;
    transition-duration: 200ms;

    &:hover {
        background-color: #e6e6e6;
    }
}
</style>