<template>
  <div>
    
    <Header class="main-image-2" />
    <h1>Designers</h1>
  
  </div>
</template>
<script>
import Header from "./layout/Header";
export default {
  //   name: Designers
  components: {
    Header
  }
};
</script>

<style scoped>
.main-image-2 {
 
  background-image: url(layout/img/header-2.jpg);
  background-repeat: no-repeat, repeat;
   background-size: cover;
   
} 
h1 {
  text-align: center;
  font-size: 3em;
}

</style>


