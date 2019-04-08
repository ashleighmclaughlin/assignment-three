<template>
  <div>
    <div class="featuredDesigners">
      <h1 class="title">Featured Designers</h1>
      <h1 class="line"></h1>
      <div class="row">
        <div class="col-sm">
          <img src="./images/MaciejDrabik-priject1.jpg">
          <h3>Maciej Drabik</h3>
          <h5>concept art / Illustration </h5>
        </div>
        <div class="col-sm">
          <img src="./images/MaciejDrabik-priject1.jpg">
          <h3>Jan Urschel</h3>
          <h5>Freelance Concept Designer</h5>
        </div>
        <div class="col-sm">
          <img src="./images/MaciejDrabik-priject1.jpg">
          <h3>Wojtek Fus</h3>
          <h5>Concept Designer</h5>
        </div>
      </div>
    </div>
      
</div>
  

    
</template>

<script>

export default {
  name: "FeaturedDesigners",
  components: {
  }
};

</script>

<style scoped>



.col-sm {
     font-size: 30px;
  
}

.featuredDesigners img {
 height: 500px;
 width: 80%;
 padding-bottom: 10px;
}

.title {
  margin-top: 100px;
  margin-bottom: 35px;
  font-size: 60px;
}

.line {
  display: block;
    width: 80px;
    height: 3px;
    background: #f1cd8f;
    margin: 10px auto;
    text-align: center;
}

.featuredDesigners h3 {
  border-bottom: 5px;
}

.row {
  margin: 0;
  padding: 70px;
  align-content: center
}

</style>