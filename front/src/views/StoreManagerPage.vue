<template>
  <main>
    <div class="container">
      <AddFoodCard
        v-if="showAddPannel"
        @cancel="showAddPannel = false"
      />
      <VAddButton
        v-else
        title="Ajouter une denrée"
        width="400px"
        @click="showAddPannel = true"
      />
    </div>
  </main>
</template>

<script>
import VAddButton from '@/components/VAddButton.vue';
import AddFoodCard from '@/components/AddFoodCard.vue';
export default {
  components: {
    VAddButton,
    AddFoodCard
  },
  data() {
    return {
      showAddPannel: false
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 40%;
  margin: auto;

  button {
    margin: auto;
  }
}
</style>
