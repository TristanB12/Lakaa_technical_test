<template>
    <div class="add-bar">
        <input type="text" v-model="input">
        <div class="add-button" @click="manageClick">
            <img src="@/assets/add_icon.png"/>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            placeholder: {
                type: String,
                default: ""
            },
        },
        data() {
            return {
                input: ""
            }
        },
        methods: {
            manageClick() {
                this.$emit('add', this.input);
                this.input = "";
            }
        },
    }
</script>

<style lang="scss" scoped>
.add-bar {
    border-radius: 3px;
    border: 1px solid#127475;
    display: flex;
}
input {
    padding: 8px;
    font-size: 18px;
    background-color: white;
    border: none;
    border-radius: 5px;
    outline: none;
}
.add-button {
    background-color: #127475;
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
        margin: 0 15px;
        max-width: 25px;
        max-height: 25px;
    }
}
</style>