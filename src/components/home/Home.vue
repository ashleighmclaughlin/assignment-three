<template>
  <div class='home-page'>
    <div class='container'>
      <div class='heading'>
          <h1>THE BLOCKHEADS</h1>
      </div>
      <div class='row'>
        <div class='col ash'>
          <router-link v-bind:to="'/ash'">
            <img class='home-icons' src='../../assets/ash-icon.png'>
            <h2>Ashleigh McLaughlin</h2>
          </router-link>
        </div>
<div class='col tj'>
          <router-link v-bind:to="'/tj'">
            <img class='home-icons' src='../../assets/tj-icon.png'>
            <h2>Tj Lee</h2>
          </router-link>
        </div>
      </div>
      <div class='row'>
        <div class='col matt'>
          <router-link v-bind:to="'/matt'">
            <img class='home-icons' src='../../assets/matt-icon.png'>
            <h2>Matt Kennett-Ny</h2>
          </router-link>
        </div>
        <div class='col lyndon'>
          <router-link v-bind:to="'/lyndon'">
            <img class='home-icons' src='../../assets/lyndon-icon.png'>
            <h2>Lyndon Fox</h2>
          </router-link>
        </div>
      </div>
      <MyFooter />
    </div>
    </div>

</template>

<script>
import MyFooter from './MyFooter';

export default {
  name: 'Home',
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
    color: black;
  }
  .home-icons{
    max-width: 350px;
    border-radius: 50%;
    padding: 20px;
  }
  .heading{
    width: 80%;
    margin: 0 auto;
    margin-bottom: 60px;
  }
  .heading h1{
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: bold;
    font-size: 60px;
    padding-top: 50px;
  }
  .heading p{
    font-family: 'Lora', serif;
  }
  .home-page{
    background-color: #ffffff;
    background-image: url('https://www.transparenttextures.com/patterns/inflicted.png');
    background-attachment: fixed;
    margin-bottom: 0px;

  }
  a:-webkit-any-link{
    text-decoration: none;
  }
</style>
