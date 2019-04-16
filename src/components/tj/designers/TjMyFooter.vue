<template>
  <div>
    <footer v-footer>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <p>©Nooble Creative 2019, All rights reserved. Behance API </p>
          </div>
          <div class="col-sm">
            <span>
         <i class="fab fa-adobe"></i>
        <i class="fab fa-behance"></i>
        </span>
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
    name: "TjMyFooter",
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
  
  footer {
    width: 100%;
    background-color: #333;
    color: #fff;
  }
  
  footer div p {
    /* line-height: 20px; */
    padding-top: 30px;
  }
  
  span i {
    margin-right: 20px;
    padding-top: 40px;
  }
 
</style>


