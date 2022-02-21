<template>
  <div class="container">
    <header>
      <img src="@/assets/logo.png" alt="logo">
      <nav>
        <ul>
          <router-link :to="{name: 'StoreManagerPage'}"><li>responsable magasin</li></router-link>
          <router-link :to="{name: 'RSEManagerPage'}"><li>responsable RSE</li></router-link>
        </ul>
        <img src="@/assets/profile.png" alt="profile">
      </nav>
    </header>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.container {
  height: 75px;
  width: 100%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
header {
  height: 100%;
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    width: 40%;
    display: flex;
    justify-content: space-between;

    img {
      max-width: 50px;
    }
  }
}
ul {
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;

  a {
    font-size: 20px;
    color: #127475;

    &:hover {
      text-decoration: underline;
    }
  }
}
.router-link-exact-active {
  text-decoration: underline;
}

</style>