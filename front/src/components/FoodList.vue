<template>
    <article>
        <h1>Denrées</h1>
        <span class="error">{{ error }}</span>
        <div class="foods-container" v-if="foods">
            <FoodItem
                v-for="food in foods"
                :key="food.id.$oid"
                :food="food"
            />
        </div>
    </article>
</template>

<script>
import FoodItem from '@/components/FoodItem.vue';
import foodAPI from '@/api/food.js';
    export default {
        components: {
            FoodItem,
        },
        data() {
            return {
                error: undefined,
                foods: undefined
            }
        },
        mounted () {
            this.fetchFoods();
        },
        methods: {
            async fetchFoods() {
                let res = await foodAPI.getFood();

                if (res[0]) {
                    this.foods = res[0];
                } else {
                    this.error = res[1];
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
article {
    width: 30%;
}
.error {
    color: red;
    font-size: 14px;
    text-align: center;
}
.food-item {
    margin-bottom: 10px;
}
</style>