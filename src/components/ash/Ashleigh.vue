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

    <div @click="getUserId" v-for="user in users" v-bind:key="user.id" v-bind:value="user.id" >
      <router-link to="/designer">
      <img class="user-image" v-bind:src="user.images[138]" />
      <h4 class="user-name"> {{ user.first_name }} <span>{{ user.last_name }}</span> </h4></router-link>
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
    getUserId: function(evt) {
      this.$router.push({name: "designer", params: {userId: evt.target.value} });
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
}

.user-name span{
  color: #5b736a;
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
