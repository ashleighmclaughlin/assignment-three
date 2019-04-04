<template>
  <div>
    <Header class="main-image" />
<div>
    <h1>Our Designers</h1>
    <div>
      <img src="layout/img/allef.jpg">
    </div>
    <h3>hehehe</h3>
    </div>
  </div>
</template>

<script>
// import Designers from "./Designers";
import Header from "./layout/Header";
export default {
  name: "Lyndon",
  components: {
    Header
  }
};
</script>

<style scoped>
.main-image {
 
  background-image: url(layout/img/header.jpg);
  background-repeat: no-repeat, repeat;
   background-size: cover;
  
  
} 
h1 {
  text-align: center;
  font-size: 3em;
}
</style>
