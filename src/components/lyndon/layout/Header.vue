<template>
<div>
  <header class="header">
    <!-- <img src='./img/header.jpg'> -->
    <router-link class="my-links" to="/lyndon">Home</router-link>|
    <router-link class="my-links" to="/Designers">Designers</router-link>|
  </header>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>
import image from "./img"
<style scoped>
header {
  text-align: center;
padding-top: 30px;
  padding-bottom: 700px
}
.my-links {
  color: rgb(158, 40, 40);
 margin-top: 150px;
  text-decoration: none;
  padding: 0 25px 0 25px;
  font-size: 1.2em;
  font-weight: bolder;
  


}
</style>


