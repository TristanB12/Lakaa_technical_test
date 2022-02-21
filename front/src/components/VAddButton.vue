<template>
    <button>
        <img src="@/assets/add_icon.png" alt="add-icon">
        <span>{{ title }}</span>
    </button>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: ""
            },
            width: {
                type: String,
                default: 'auto'
            }
        },
    }
</script>

<style lang="scss" scoped>
button {
    width: v-bind(width);
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: none;
    border-radius: 7px;
    color: #127475;
    font-size: 20px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    transition-duration: 200ms;

    &:hover {
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.40);
    }
}
img {
    max-width: 25px;
    margin-right: 20px;
}
</style>