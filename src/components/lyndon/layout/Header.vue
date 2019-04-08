<template>
  <div>
    <div class="nav">
      <router-link
        class="my-links"
        to="/lyndon"
      >Home</router-link>|
      <router-link
        class="my-links"
        to="/Designers"
      >Designers</router-link>|
    </div>
    <header>
      <!-- <img src='./img/header.jpg'> -->
      <div class="logo-box">
        <img
          class="logo"
          alt="logo"
          src='./img/Eage-logo-4.png'
        >

      </div>
      <div class="text-box">
        <h2 class="heading-secondary">Design Hub</h2>

        <p class="p-text">
          Take a look around and if you need anything,
          just let us know!
        </p>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>
import image from "./img"
<style scoped>
/* header {
  text-align: center;
  padding-top: 30px;
  padding-bottom: 700px;
} */
.our-designer {
  padding: 50px 0 20px 0;
}
.heading-secondary {
  padding: 0 0 15px 150px;
}
.my-links {
  color: rgb(254, 195, 58);
  margin-top: 15px;
  text-decoration: none;
  padding: 0 25px 0 25px;
  font-size: 1.2em;
  font-weight: bolder;
}
.nav {
  text-align: right;
  padding: 30px 60px 0 0;
  display: block;
}
.logo-box {
  position: absolute;
  top: 10%;
  left: 46%;
  transform: translate(-10%, -46%);
}

.text-box {
  position: absolute;
  top: 35%;
  left: 70%;
  transform: translate(-35%, -70%);
}
.logo {
  /* width: 300px; */
  display: block;
}
h2 {
  color: rgb(254, 195, 58);
}
p {
  color: rgb(254, 195, 58);
}
.p-text {
  font-size: 1.1em;
}
@media only screen and (max-width: 1280px) {
  .logo {
    width: 120px;
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translate(-5%, -50%);
  }
}
</style>


