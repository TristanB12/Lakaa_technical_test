<template>
    <div class="indicator-list">
        <IndicatorItem
            v-for="indicator in indicators"
            :key="indicator.title"
            :indicator="indicator"
            @indicator-deleted="$emit('indicator-deleted')"
        />
    </div>
</template>

<script>
import IndicatorItem from '@/components/IndicatorItem.vue';
    export default {
        components: {
            IndicatorItem,
        },
        props: {
            indicators: {
                type: Array,
                default: () => []
            },
        },
    }
</script>

<style lang="scss" scoped>
.indicator-item {
    margin-top: 10px;
}
</style>