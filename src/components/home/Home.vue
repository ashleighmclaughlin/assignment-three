<template>
  <div class="home-page">
    <div class="container">
      <div class="heading">
          <h1>SUMMATIVE ASSESSMENT</h1>
          <hr>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum corporis ipsum animi magni dolore assumenda amet quos, architecto impedit inventore consequatur</p>
      </div>
      <div class="row">
        <div class="col ash">
          <router-link v-bind:to="'/ash'">
            <img class="home-icons" src="../../assets/ash-image.jpg">
            <h2>Ashleigh McLaughlin</h2>
          </router-link>
        </div>
<div class="col tj">
          <router-link v-bind:to="'/tj'">
            <img class="home-icons" src="https://placeimg.com/400/400/any">
            <h2>Tj Lee</h2>
          </router-link>
        </div>
      </div>
      <div class="row">
        <div class="col matt">
          <router-link v-bind:to="'/matt'">
            <img class="home-icons" src="https://placeimg.com/400/400/any">
            <h2>Matt</h2>
          </router-link>
        </div>
        <div class="col lyndon">
          <router-link v-bind:to="'/lyndon'">
            <img class="home-icons" src="https://placeimg.com/400/400/any">
            <h2>Lyndon Fox</h2>
          </router-link>
        </div>

      </div>
      <MyFooter />
    </div>
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
  .col{
    min-height: 100px;
    margin-bottom: 40px;
  }
  .col h2{
    color: white;
  }
  .home-icons{
    max-width: 300px;
    border-radius: 50%;
    padding: 20px;
  }
  .heading{
    width: 80%;
    margin: 0 auto;
    /* margin-top: 60px; */
    margin-bottom: 60px;
  }
  .heading h1, .heading p{
    color: white;
  }
  .heading h1{
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: bold;
    font-size: 50px;
  }
  .heading p{
    font-family: 'Lora', serif;
  }
  .home-page{
    background-image: url("../../assets/stardust.png");
  }
  a:-webkit-any-link{
    text-decoration: none;
  }
</style>
