<template>
  <div class="navigation">
    <div class="container">
      <div class="row">
        <div class="col nav-button">
          <i class="fas fa-chevron-left" @click="$router.go(-1)"></i>
        </div>
        <div class="col-8">
          <router-link class="back" to="/ash">
            <img class="nav-logo" src="../../assets/ash/nifty-logo.png" alt="Logo">
          </router-link>
        </div>
        <div class="col nav-button">
          <!-- Side Nav -->
          <span style="font-size:30px;cursor:pointer" v-on:click="openNav">&#9776;</span>
          <div id="mySidenav" class="sidenav" v-bind:class="{ isOpen: isOpen }">
            <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav">&times;</a>
            <!-- Should be like this but need to get it to go to ash page without nav open -->
            <router-link class="back" to="/ash">home</router-link>
            <a href="#">about</a>
            <a href="#">contact</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 

<script>
export default {
  name: "Header",
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    openNav() {
      if (this.isOpen) {
        this.isOpen = false;
      } else {
        this.isOpen = true;
      }
    },
    closeNav() {
      if (this.isOpen) {
        this.isOpen = false;
      } else {
        this.isOpen = true;
      }
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Libre+Baskerville|Montserrat");

.navigation {
  margin-top: 30px;
}
.nav-logo {
  max-width: 130px;
}
i {
  font-size: 25px;
  color: #222;
  margin-top: 10px;
}
.nav-button {
  margin-top: 30px;
}

/* Side nav styling */
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #dbeedd;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  text-align: center;
}
.sidenav a {
  padding: 50px 8px 8px 32px;
  text-decoration: none;
  font-size: 30px;
  color: #5b736a;
  display: block;
  transition: 0.3s;
  font-family: "Libre Baskerville", serif;
}
.sidenav a:hover {
  color: #222;
}
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
.isOpen {
  width: 100%;
}
.container {
  min-width: 90%;
}
</style>
