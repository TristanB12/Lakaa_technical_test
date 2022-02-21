<template>
  <main>
    <div class="container">
      <FoodList />
      <IndicatorsManager />
    </div>
  </main>
</template>

<script>
import FoodList from '@/components/FoodList.vue';
import IndicatorsManager from '@/components/IndicatorsManager.vue';
  export default {
    components: {
      FoodList,
      IndicatorsManager
    },
  }
</script>

<style lang="scss" scoped>
.container {
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: space-around;
}
</style>