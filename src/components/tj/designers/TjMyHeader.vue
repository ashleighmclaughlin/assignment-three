<template>
  <div>
    <header class="landing">
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <router-link class="back" to="/tj">
          <div class="logo">
            <img class="logo-img" src="https://imgur.com/FIIcw2K.png" alt="Nooble Creative Logo Dark">
          </div>
        </router-link>
        <button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i class="navbar-toggler-icon"></i>
            </button>
  
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link"><router-link v-bind:to="'/tj'">Home</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <router-link v-bind:to="'/designers'">Our Designers</router-link>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="heading">
        <h1>Our Designers</h1>
      </div>
    </header>
  </div>
</template>

<script>
  export default {
    name: "TjMyHeader",
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
@import url('https://fonts.googleapis.com/css?family=Merriweather|Montserrat:300,300i,400,600');
/* https://imgur.com/a/WjEIC3Y  Image Source*/
  .landing {
    background-image: url("https://imgur.com/p33fpEW.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 40vh;
  }

  .heading {
    width: 400px;
    height: 200px;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    text-transform: uppercase;
  }

  .logo-img {
    height: 50px;
  }

  .navbar {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    background-color: transparent !important;
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 2;
  }

  a {
    color: #fff;
  } 

 .router-link-active {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    color: #fff;
  }

</style>