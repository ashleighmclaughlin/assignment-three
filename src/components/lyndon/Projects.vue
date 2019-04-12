<template>
  <div class="container">
    <router-link
      class="back"
      to="/lyndon"
    ><i class="fas fa-long-arrow-alt-left"></i></router-link>
    <div
      class="media"
      v-for="user in users"
      v-bind:key="user.id"
    >
      <h2>{{users.name}}</h2>
      <h2>{{userId.name}}</h2>
        <h2>{{projects.name}}</h2>
      <h2>{{users.url}}</h2>
      <img :src="projects.covers['115']">
      
    </div>
    <div class="row">
      <div class="col-sm">
        One of three columns
      </div>
      <div class="col-sm">
        One of three columns
      </div>
      <div class="col-sm">
        One of three columns
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./layout/Header.vue";
import Footer from "./layout/Footer.vue";
import Content from "./Content.vue";
export default {
  name: "Projects",
  props: [""],
  components: {
    "app-header": Header,
    "app-footer": Footer
  },
  data() {
    return {
      users: [],
      users: {},
      projectId: "",
      projects: { msg: "" },
      userId: {}
    };
  },
  //   created: function(){
  //   this.$http
  //     .get("https://behance-mock-api.glitch.me/api/projects")
  //     .then(function(data) {
  //       console.log(data);
  //       this.projects = data.body.projects;

  //     });
  // }

  created: function() {
    console.log(this.$route.params);
    if (this.$route.params.userId) {
      this.projectId = this.$route.params.userId;
      console.log(
        "https://behance-mock-api.glitch.me/api/users/a4d57bd1-a9b9-4c6c-af55-767537bab564/projects"
      );
      this.$http
        .get(
          "https://behance-mock-api.glitch.me/api/users/a4d57bd1-a9b9-4c6c-af55-767537bab564/projects"
        )

        .then(function(data) {
          this.data = data.body.projects;
          console.log("data", this.projects);
        });
    }
  }
};
</script>

<style scoped>
i {
  color: rgb(254, 195, 58);
  font-size: 40px;
}
i:hover {
  text-shadow: 0 0 25px rgb(138, 88, 0), 0 0 5px rgb(28, 24, 20);
}
</style>


