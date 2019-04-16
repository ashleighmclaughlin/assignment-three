<template>
   <div>
     <header class="hero">
       <nav>
         <router-link v-bind:to="'./OurDesigners'"><img class="logo" src="./images/TTAMLogo.png"></router-link>
         <ul>
           <li><router-link to="./Matt">Home</router-link></li>
           <li>|</li>
           <li><router-link to="./OurDesigners">Our Designers</router-link></li>
         </ul>
       </nav>
     </header>

     <Bio :userdata="userdata"/>
     <MyFooter />
   </div> 
   </template>


<script>
import Bio from "./Bio"
import MyFooter from "./MyFooter"

export default {
 name: "Matt",
 components: {
   Bio,
   MyFooter
 },

data: function() {
    return {
      userId: "",
      userdata: {}, 
    }
  }, 
  created: function() {
      this.getUserData();
  },
  methods: {
    getUserData() {
      if (this.$route.params.userId) {
       this.userId = this.$route.params.userId;
       this.$http
         .get(
           "https://behance-mock-api.glitch.me/api/users/" +
            this.userId
          )
          .then(function(data) {
          this.userdata = data.body;
        });
      }
     }
   },
  
}

</script>

<style scoped>
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

