<template>
  <div>
    <Header/>
    <div v-if="userdata.user" class="user-info">
      <h1>{{userdata.user.display_name}}</h1>
      <h3>{{userdata.user.occupation}}</h3>
      <h3>{{userdata.user.website}}</h3>
      <h3>{{userdata.user.city}}, {{userdata.user.country}}</h3>
      <Projects/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import Projects from "./Projects";

export default {
  name: "Designer",
  components: {
    Header,
    Footer,
    Projects
  },
  data: function() {
    return {
      userdata: {},
      userId: ""
    };
  },
  created: function() {
    if (this.$route.params.userId) {
      this.userId = this.$route.params.userId;
      this.$http
        .get("https://behance-mock-api.glitch.me/api/users/" + this.userId)
        .then(function(userdata) {
          this.userdata = userdata.body;
        });
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Libre+Baskerville|Montserrat");

.user-info h1 {
  font-family: "Libre Baskerville", serif;
  color: #5b736a;
  font-size: 36px;
  margin-top: 70px;
  margin-bottom: 25px;
}
.user-info h3 {
  color: #222;
  font-family: "Montserrat", sans-serif;
  font-size: 17px;
  margin-top: 15px;
}
</style>
