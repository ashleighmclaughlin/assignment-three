<template>
    <div class="container">
      <div class="hero">
        <header>
          <nav>
            <img class="logo" src="./images/TTAMLogo.png">
            <ul>
              <li>Home</li>
              <li>|</li>
              <li>Our Designers</li>
            </ul>
          </nav>
          <h1 class="headerText">TTAM Designs</h1>
        </header>
      </div>

      
 <h1>Featured Designers</h1>
    <div class="imageRow1">
      <img src="./images/MaciejDrabik-priject1.jpg">
      <img src="./images/MaciejDrabik-priject1.jpg">
      <img src="./images/MaciejDrabik-priject1.jpg">
    </div>
    </div>

    
</template>

<script>

export default {
  name: "Matt",
  components: {
  }
};
</script>

<style scoped>
.container {
  margin: 0;
  padding: 0;
}

#app {
  margin: 0;
  padding: 0;
}

.hero{
  background-image: url(./images/heroImage.jpg);
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
}

nav {
  padding: 10px 50px
}

nav, ul {
  display: flex;
  justify-content: space-between;

}

li {
  list-style: none;
  padding: 25px 5px;
  /* content: top-align; */
}

.logo {
  height: 80px;
  width: 55px;
}

li {
  color: white;
  font-size: 30px;
}

.headerText {
  Padding: 300px;
  font-size: 100px;
  color: white
}

h1 { 
  text-align: center;
}

.imageRow1 {
  display: flex;
  justify-content: space-between;
}

.imageRow1 img {
  height: 300px;
  width: auto;
  
}


</style>