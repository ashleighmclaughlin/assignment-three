<template>
  <div class="home-page">
    <div class="container">
      <div class="heading">
          <h1>SUMMATIVE ASSESSMENT</h1>
          <hr>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum corporis ipsum animi magni dolore assumenda amet quos, architecto impedit inventore consequatur</p>
      </div>
      <div class="row">
        <div class="col ash"><router-link v-bind:to="'/ash'">Ash</router-link></div>
        <div class="col tj"><router-link v-bind:to="'/tj'">Tj</router-link></div>
        <div class="w-100"></div>
        <div class="col matt"><router-link v-bind:to="'/matt'">Matt</router-link></div>
        <div class="col lyndon"><router-link v-bind:to="'/lyndon'">Lyndon</router-link></div>
      </div>
    </div>
    <img class="splatter" src="../../assets/home-background.png">
      <MyFooter />
  </div>
</template>

<script>
import MyFooter from "./MyFooter";

export default {
  name: "Home",
  components: {
      MyFooter
  }
};
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Lora|Open+Sans+Condensed:300');
  .splatter{
    /* position: relative; */
    max-width: 1200px;
  }
  .col{
    min-height: 100px;
  }
  .ash{
    background-color: pink;
  }
  .tj{
    background-color: lightgoldenrodyellow;
  }
  .matt{
    background-color: lightblue;
  }
  .lyndon{
    background-color: lightsalmon;
  }
  /* .home-page{
    background-image: url("../../assets/home-background.png");
  } */
  .heading{
    width: 50%;
  }
  .heading h1, .heading p{
    text-align: left;
    color: grey;
  }
  .heading h1{
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: bold;
    font-size: 50px;
  }
  .heading p{
    font-family: 'Lora', serif;
  }
</style>
