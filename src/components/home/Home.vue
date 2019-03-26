<template>
    <div class="container">
      <div class="row">
        <div class="col ash"><router-link v-bind:to="'/ash'">Ash</router-link></div>
        <div class="col tj"><router-link v-bind:to="'/tj'">Tj</router-link></div>
        <div class="w-100"></div>
        <div class="col matt"><router-link v-bind:to="'/matt'">Matt</router-link></div>
        <div class="col lyndon"><router-link v-bind:to="'/lyndon'">Lyndon</router-link></div>
      </div>

      <MyFooter />
    </div>

  <!-- <div>
    <h1>Hello</h1>
    <ul>
        <li><router-link v-bind:to="'/ash'">Ash</router-link></li>
        <li><router-link v-bind:to="'/tj'">Tj</router-link></li>
        <li><router-link v-bind:to="'/matt'">Matt</router-link></li>
        <li><router-link v-bind:to="'/lyndon'">Lyndon</router-link></li>
    </ul>
          
    <MyFooter />
  </div> -->
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
</style>
