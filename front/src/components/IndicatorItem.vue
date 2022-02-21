<template>
    <div class="indicator-item">
        <span>{{ indicator.title }}</span>
        <img
            src="@/assets/delete_icon.png"
            alt="delete"
            @click="deleteIndicator"
        >
    </div>
</template>

<script>
import indicatorAPI from '@/api/indicator.js'
    export default {
        props: {
            indicator: {
                type: Object,
                default: undefined
            },
        },
        methods: {
            async deleteIndicator() {
                let res = await indicatorAPI.deleteIndicator(this.indicator.id.$oid);

                if (res[0]) {
                    this.$emit('indicator-deleted');
                } else {
                    this.error = res[1];
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
.indicator-item {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
}
span {
    font-size: 20px;
    font-weight: 700;
}
img {
    max-width: 25px;
    cursor: pointer;
}
</style>