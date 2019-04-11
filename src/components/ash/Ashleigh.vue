<template>
  <div class="home">
    <Header/>
    <div class="home-title">
      <h1>
        welcome to
        <span class="nifty-orange">nifty</span>
      </h1>
      <p class="text-center mx-auto">
        We are an independent Design Studio based in Christchurch, New Zealand.
        We showcase beautiful designers in the Canterbury region.
      </p>
    </div>
    <div v-for="user in users" :key="user.id">
      <router-link to="/designer">
        <div class="img-container">
          <img
            @click="navigateToDesigner(user.id)"
            class="user-image"
            v-bind:src="user.images[138]"
          >
        </div>
        <h4 @click="navigateToDesigner(user.id)" class="user-name">
          {{ user.first_name }}
          <span>{{ user.last_name }}</span>
        </h4>
      </router-link>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";

export default {
  name: "Ashleigh",
  components: {
    Header,
    Footer
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
      this.$router.push({ name: "designer", params: { userId: userId } });
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Libre+Baskerville|Montserrat");

.home-title h1 {
  font-family: "Libre Baskerville", serif;
  font-weight: bold;
  font-size: 35px;
  color: #222;
  margin-top: 70px;
}
.home-title p {
  width: 50%;
  font-family: "Montserrat", sans-serif;
  margin-top: 16px;
  margin-bottom: 70px;
}
.nifty-orange {
  color: #feb954;
}
.user-name {
  text-transform: uppercase;
  font-weight: light;
  font-family: "Montserrat", sans-serif;
  font-size: 21px;
  color: #222;
  text-align: right;
  width: 90%;
  margin-bottom: 40px;
  margin-top: 20px;
}
.user-name span {
  color: #5b736a;
  font-weight: bold;
}
.img-container {
  width: 80%;
  height: 300px;
  box-shadow: 4px 4px 7px lightgrey;
  margin: 0 auto;
}
.user-image {
  height: 300px;
}
a:-webkit-any-link {
  text-decoration: none;
}
</style>
