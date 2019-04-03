<template>
  <header class="header">
    <h1>The Header</h1>
    <router-link to="/lyndon">Home</router-link>|
    <router-link to="/Designers">Designers</router-link>|
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>
<style scoped>
.header {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
}
.header a {
  color: rgb(158, 40, 40);
  padding-right: 5px;
  text-decoration: none;
  padding: 0 50px;
}
</style>


