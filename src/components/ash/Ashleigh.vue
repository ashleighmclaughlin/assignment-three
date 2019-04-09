<template>
  <div>
    <MyHeader />
    <div class="home-title">
      <h1>welcome to <span class="nifty-orange">nifty</span></h1>
        <p class="text-center mx-auto"> 
            We are an independent Design Studio based in Christchurch, New Zealand.
            We showcase beautiful designers in the Canterbury region.
        </p>
    </div>

    <div  v-for="user in users" :key="user.id" >
      <router-link to="/designer">
      <img @click="navigateToDesigner(user.id)" class="user-image" v-bind:src="user.images[138]"/>
      <h4 @click="navigateToDesigner(user.id)" class="user-name"> {{ user.first_name }} <span>{{ user.last_name }}</span> </h4></router-link>
    </div>
    <AshFooter />


  </div>
</template>

<script>
import MyHeader from "./MyHeader";
import AshFooter from "./AshFooter";

export default {
  name: "Ashleigh",
  components: {
      MyHeader,
      AshFooter
  }, 
  data: function() {
    return {
      users: []
    };
  },
  created: function() {
    this.$http
      .get("https://behance-mock-api.glitch.me/api/users")
      .then(function(data) {
        this.users = data.body.users;
      });
  },
  methods: {
    navigateToDesigner: function(userId) {
      this.$router.push({name: "designer", params: {userId: userId} });
  }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Libre+Baskerville|Montserrat');

.user-name{
  text-transform: uppercase;
  font-weight: light;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  color: #222;
}

.user-name span{
  color: #5b736a;
  font-weight: bold;
}

.nifty-orange{
  color: #feb954;
}

.home-title h1{
  font-family: 'Libre Baskerville', serif;
  font-weight: bold;
  font-size: 35px;
  color: #222;
  margin-top: 80px;
}
.home-title p{
  width: 50%;
  font-family: 'Montserrat', sans-serif;
  margin-top: 16px;
}
</style>
