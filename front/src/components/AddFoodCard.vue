<template>
    <article>
        <div class="input-container" v-if="indicators">
            <h3>Nom de la denrée</h3>
            <input type="text" v-model="foodName">
        </div>
        <div class="input-container">
            <h3>Association</h3>
            <input type="text" v-model="charity">
        </div>
        <div class="indicators-container">
            <h3>Indicateurs</h3>
            <div
                class="indicator"
                v-for="indicator in indicators"
                :key="indicator.title"
            >
                <span>{{ indicator.title }}</span>
                <input type="text" v-model="indicator.value">
            </div>
        </div>
        <span class="error">{{ error }}</span>
        <div class="action-container">
            <VCancelButton
                title="ANNULER"
                @click="$emit('cancel')"
            />
            <VButton
                title="AJOUTER"
                :isLoading="isLoading"
                @click="addFood"
            />
        </div> 
    </article>
</template>

<script>
import VCancelButton from '@/components/VCancelButton.vue';
import VButton from '@/components/VButton.vue';
import foodAPI from '@/api/food.js';
import indicatorsAPI from '@/api/indicator.js';
    export default {
        components: {
            VButton,
            VCancelButton
        },
        data() {
            return {
                error: undefined,
                isLoading: false,
                foodName: "",
                charity: "",
                indicators: undefined
            }
        },
        mounted () {
            this.fetchIndicators();
        },
        methods: {
            async fetchIndicators() {
                let res = await indicatorsAPI.getIndicator();
                console.log(res);

                if (res[0]) {
                    this.indicators = res[0];
                } else {
                    this.error = res[1];
                }
            },
            async addFood() {
                this.isLoading = true;

                const food = {
                    name: this.foodName,
                    charityName: this.charity,
                    indicators: this.indicators

                }
                let res = await foodAPI.createFood(food);

                if (res[0]) {
                    this.$emit('cancel');
                } else {
                    this.error = res[1];
                    this.isLoading = false;
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
article {
    width: 80%;
    margin: auto;
    padding: 20px;
    background-color: white;
    border-radius: 13px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}
h3 {
    font-size: 20px;
    color: #127475;
}
input {
    padding: 8px;
    font-size: 18px;
    background-color: #E8E8E8;
    border: none;
    border-radius: 5px;
}
.input-container {
    margin-bottom: 20px;
    min-height: 75px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
}
.indicator {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        color:#4E5555;
        font-size: 16px;
        font-weight: 300;
    }
}
.action-container {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.error {
    color: red;
    font-size: 14px;
    text-align: center;
}
</style>