<template>
  <div>
    <footer class="footer">
    <div class="container">
     
    </div>
    <div class="container">
  <div class="row">
    <div class="col-sm">
      <p>©Nooble Creative 2019, All rights reserved. Behance API </p>
    </div>
    <div class="col-sm">
       <i class="fab fa-adobe"></i>
      <i class="fab fa-behance"></i>
    </div>
    <div class="col-sm">
    <p>Designed by Nooble Creative Inc.</p>
    </div>
  </div>
</div>
</footer>
  </div>
</template>

<script>
  export default {
    name: "MyFooter",
    data: function() {
      return {
        source: ""
      };
    },
    components: {},
    methods: {
      sourceChanged: function(source) {
        this.source = source;
      }
    }
  };
</script>

<style scoped>
  .router-link-active {
    font-weight: 400;
  }
  
  /* .footer {
    background-color: #333;
    color: #fff;
    font-size: 12px;
    height: 50px;
    margin-top: -50px;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 20px;
    margin: 0 auto;
  } */
</style>


