<template>
    <button>
        <span v-if="!isLoading">{{ title }}</span>
        <ClipLoader
            v-else
            size="24px"
            color="#127475"
        />
    </button>
</template>

<script>
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
    export default {
        components: {
            ClipLoader,
        },
        props: {
            title: {
                type: String,
                default: ""
            },
            isLoading: {
                type: Boolean,
                default: false
            }
        },
    }
</script>

<style lang="scss" scoped>
button {
    padding: 9px 15px;
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
</style>