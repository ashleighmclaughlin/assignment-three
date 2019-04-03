<template>
  <div>
    <div class="hero">
      <header class="landing">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <router-link class="back" to="/">
            <a>Back</a>
          </router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
  
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Our Designers</a>
              </li>
            </ul>

            <form class="form-inline my-2 my-lg-0">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Our Designers</a>
                </li>
              </ul>
            </form>
          </div>
        </nav>
      </header>
      <div class="hero-text">
        <h1>Nooble Creative</h1>
      </div>
      <div class="logo">
        <img class="logo-img" src="../../assets/tj_img/logo.png" alt="Nooble Creative Logo">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Tj"
  };
</script>

<style scoped>
  .hero {
    background-image: url(../../assets/tj_img/studio-republic-644339-unsplash.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
  }
  
  .hero-text {
    color: #ffffff;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .nav-item .nav-link {
    color: #ffffff;
  }
  
  .logo {
    position: absolute;
    right: 30px;
    bottom: 20px;
  }

  .logo-img {
      height: 60px;
  }

  
  
  /* Override bootstrap styles */
  
  .navbar {
    background-color: transparent !important;
  }
</style>
