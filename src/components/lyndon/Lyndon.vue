<template>
  <div>
    <Header class="main-image"/>
    <div class="container">
      <h1>Our Designers</h1>
      <div class="designers row">
        <div class="col-md">
          <img class="bg-color" src="./layout/img/allef.jpg" width="300">
        </div>
        <div class="col-md">
          <img class="bg-color" src="./layout/img/blake.jpg" width="300">
        </div>
        <div class="col-md">
          <img class="bg-color" src="./layout/img/caleb.jpg" width="300">
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
// import Designers from "./Designers";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
export default {
  name: "Lyndon",
  components: {
    Header,
    Footer
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
.designers {
  /* width: 1200px; */
  text-align: center;
  padding-top: 20px;
  margin: 0 auto;
}
img {
  margin: 0 20px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
.bg-color {
  background-color: rgb(213, 188, 142);
}
</style>
