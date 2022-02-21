<template>
  <HeaderBar />
  <router-view/>
</template>

<script>
import HeaderBar from '@/components/HeaderBar.vue';
export default {
  components: {
    HeaderBar,
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
a {
  text-decoration: none;
}
h1 {
    font-size: 36px;
    font-weight: 700;
    color: #127475;
}
main {
  padding: 50px;
  height: calc(100vh - 75px);
  background-color: rgba(18, 116, 117, 0.1);
}
.error {
  color: red;
  font-size: 14px;
  text-align: center;
}
</style>
