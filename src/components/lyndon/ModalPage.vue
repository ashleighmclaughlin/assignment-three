<template>
  <div class="bd-div">
    <app-header class="main-image" />
    <h1>Hello</h1>
    <!-- <div
      class="media"
      v-for="project in projects"
      v-bind:key="project.id"
    ></div> -->
    <Project />
  </div>
</template>

<script>
import Header from "./layout/Header";
import Projects from "./Projects";

export default {
  name: "ModalPage",
  components: {
    "app-header": Header,
    "Projects": Projects
  },
   data: function() {
    return;
     projects: []
  },
  created: function() {
    console.log("params", this.$route.params);
    if (this.$route.params.userId) {
      console.log(
        "something",
        "https://behance-mock-api.glitch.me/api/projects"
      );
      this.$http
        .get(
          "https://behance-mock-api.glitch.me/api/projects" +
            this.$route.params.userId +
            "/projects"
        )

        .then(
          response => {
            this.projects = response.body.projects;
            console.log("data", response);
          },
          response => {
            console.log("error callback");
          }
        );
    }
  }
};
</script>

<style scoped>
</style>
