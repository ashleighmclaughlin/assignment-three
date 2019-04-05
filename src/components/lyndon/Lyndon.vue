<template>
  <div>
    <Header class="main-image" />
    <div>
      <h1>Our Designers</h1>
      <div class="designers">
        <img
          src="./layout/img/allef.jpg"
          width="300"
        >
        <img
          src="./layout/img/blake.jpg"
          width="300"
        >
        <img
          src="./layout/img/caleb.jpg"
          width="300"
        >
      </div>

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
.designers {
  width: 1200px;
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
</style>
