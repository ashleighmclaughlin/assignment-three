<template>
<div> 
  <header class="hero">
        <nav>
          <img class="logo" src="./images/TTAMLogo.png">
          <ul>
            <li><router-link to="./Matt">Home</router-link></li>
            <li>|</li>
            <li><router-link to="./OurDesigners">Our Designers</router-link></li>
          </ul>
        </nav>
      </header>  
  <Designers v-bind:users="users"/>   
  <MyFooter />
</div>
  


</template>

<script>
// import MyHeader from "./MyHeader"
import MyFooter from "./MyFooter"
import Designers from "./Designers"



export default {
  name: "OurDesigners",
  components: {
    // MyHeader,
    MyFooter,
    Designers
  },
  data: function() {
    return {
      users: []
    }
  },
    created: function() { 
        this.$http
        .get("https://behance-mock-api.glitch.me/api/users") 
        .then(function(data) {
          this.users = data.body.users;
        });
    }
}


</script>

<style scoped>
.col-sm {
     font-size: 30px;
     display: flex;  
     margin: 0 auto;
}

.designers img {
 height: 200px;
 width: 50%;
 padding-bottom: 10px;
 border-radius: 5%
}

.designer {
  padding: 0 20px;
  justify-content: center;
  margin: 0 auto;
}

.title {
  margin-top: 100px;
  margin-bottom: 35px;
  font-size: 60px;
  text-align: center;
}

.line {
  display: block;
    width: 80px;
    height: 3px;
    background: #f1cd8f;
    margin: 10px auto;
    text-align: center;
}

.designers h3 {
  border-bottom: 5px;
}

.row {
  margin: 0;
  padding: 70px;
  justify-content: center;
  
}


.hero{
  background-image: url(./images/ProjectImage2.jpg);
  height: 50vh;
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

</style>