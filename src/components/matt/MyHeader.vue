<template>
    <div>
      <header class="hero">
        <nav>
          <img class="logo" src="./images/TTAMLogo.png">
          <ul>
            <li><router-link to="/Matt">Home</router-link></li>
            <li>|</li>
            <li><router-link to="/OurDesigners">Our Designers</router-link></li>
          </ul>
        </nav>
        <h1 class="headerText">TTAM Designs</h1>
      </header>
    </div>    
</template>


<script>

export default {
  name: "MyHeader",
  components: {
  }
};

</script>

<style scoped>

.hero{
  background-image: url(./images/heroImage.jpg);
  height: 100vh;
  background-size: cover;
  background-position: center;
}

.container {
  margin: 0 auto;
  overflow: hidden;

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
  color: white;
  font-size: 30px;
}

.logo {
  height: 80px;
  width: 55px;
}

.headerText {
  Padding: 300px;
  font-size: 100px;
  color: white
}

h1 { 
  text-align: center;
}

.col-sm {
    padding: 0 20px;
    font-size: 30px;
    text-align: left;
}

.featuredDesigners img {
 height: 380px;
 width: 100%
} 

.title {
  margin-top: 100px;
  margin-bottom: 35px;
  font-size: 60px;
}

.line {
  display: block;
    width: 80px;
    height: 3px;
    background: #f1cd8f;
    margin: 10px auto;
    text-align: center;
}

.featuredDesigners h3 {
  text-align: left;
  border-bottom: 5px;
}

.row {
  margin: 0;
  padding: 70px;
}

</style>