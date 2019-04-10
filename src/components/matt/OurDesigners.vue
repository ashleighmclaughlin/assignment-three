<template>
<div> 
        
<MyHeader />
    <div>
      

      <div class="designers">
        <h1 class="title">Designers</h1>
        <h1 class="line"></h1>
        <div class="row">
          <div class="col-sm">
            <div class="designer" v-for="user in users" v-bind:key="user.id">
              <router-link to="./Profile"><img v-bind:src="user.images['115']"></router-link>
              <h3>{{ user.first_name + " " + user.last_name}}</h3>
              <h5> {{user.occupation}}</h5>
            </div>
          </div>
          <div class="row">
         <div class="col-sm">
          <img src="./images/MaciejDrabik-priject1.jpg">
          <h3>Maciej Drabik</h3>
          <h5>concept art / Illustration </h5>
        </div>
        <div class="col-sm">
          <img src="./images/MaciejDrabik-priject1.jpg">
          <h3>Jan Urschel</h3>
          <h5>Freelance Concept Designer</h5>
        </div>
        <div class="col-sm">
          <img src="./images/MaciejDrabik-priject1.jpg">
          <h3>Wojtek Fus</h3>
          <h5>Concept Designer</h5>
        </div>
      </div>
    </div>
        </div>
        <MyFooter />
      </div>
     

</template>

<script>
import MyHeader from "./MyHeader"
import MyFooter from "./MyFooter"



export default {
  name: "OurDesigners",
  components: {
    MyHeader,
    MyFooter
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
    },
    methods: { 
    navigateTo: function(path) {
      this.$router.push({ name: "designers", params: { searchQuery: path } });
      }
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
  margin: 0 auto
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


</style>