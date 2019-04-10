<template>
  <div>
    <MyHeader />
        <div class="user-info">
            <h1>{{userdata.user.display_name}}</h1>
            <h3>{{userdata.user.occupation}}</h3>
            <h3>{{userdata.user.website}}</h3>
            <h3>{{userdata.user.city}}, {{userdata.user.country}}</h3>

            <Projects />
        </div>
    <AshFooter />
  </div>
</template>

<script>
import MyHeader from "./MyHeader";
import AshFooter from "./AshFooter";
import Projects from "./Projects"

export default {
  name: "Designer",
  components: {
      MyHeader,
      AshFooter,
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
        // console.log(user)
      });
    }
}
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Libre+Baskerville|Montserrat');

.user-info h1{
    font-family: 'Libre Baskerville', serif;
    color: #5b736a;
    font-size: 36px;
    margin-top: 40px;
   
}

.user-info h3{
    color: #222;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    margin-top: 15px;
}
</style>
