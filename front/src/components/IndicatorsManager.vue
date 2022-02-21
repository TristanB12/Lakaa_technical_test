<template>
    <div>
        <h1>Indicateurs</h1>
        <span class="error" v-if="error">{{ error }}</span>
        <IndicatorList
            v-if="indicators"
            :indicators="indicators"
            @indicator-deleted="fetchIndicators"
        />
        <VAddInput
            placeholder="Ajouter une denrée"
            @add="addIndicator"
        />
    </div>
</template>

<script>
import VAddInput from '@/components/VAddInput.vue'; 
import IndicatorList from '@/components/IndicatorList.vue';
import indicatorAPI from '@/api/indicator.js'
    export default {
        components: {
            IndicatorList,
            VAddInput
        },
        data() {
            return {
                error: undefined,
                indicators: undefined
            }
        },
        mounted () {
            this.fetchIndicators();
        },
        methods: {
            async fetchIndicators() {
                console.log("fetch indicator");
                let res = await indicatorAPI.getIndicator();

                if (res[0]) {
                    this.indicators = res[0];
                } else {
                    this.error = res[1];
                }
            },
            async addIndicator(title) {
                let indicator = {
                    title: title,
                    value: "",
                    type: ""
                }
                let res = await indicatorAPI.createIndicator(indicator);
                if (res[0]) {
                    this.fetchIndicators();
                } else {
                    this.error = res[1];
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
.add-bar {
    margin-top: 40px;
}
</style>