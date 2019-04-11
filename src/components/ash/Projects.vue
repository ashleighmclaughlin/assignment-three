<template>
  <div>
    <div v-for="project in projects" :key="project.id" class="project-list">
      <h3
        v-on:click="projectIdChanged(project.id)"
        data-toggle="modal"
        data-target="#exampleModal"
      >{{project.name}}</h3>
      <img
        v-on:click="projectIdChanged(project.id)"
        class="project-image"
        data-toggle="modal"
        data-target="#exampleModal"
        v-bind:src="project.covers[404]"
      >
    </div>
    <Modal v-bind:projectId="projectId"/>
  </div>
</template>

<script>
import Modal from "./Modal";

export default {
  name: "Designer",
  components: {
    Modal
  },
  data: function() {
    return {
      userId: "",
      projects: [],
      projectId: ""
    };
  },
  created: function() {
    if (this.$route.params.userId) {
      this.userId = this.$route.params.userId;
      this.$http
        .get(
          "https://behance-mock-api.glitch.me/api/users/" +
            this.userId +
            "/projects"
        )
        .then(function(data) {
          this.projects = data.body.projects;
        });
    }
  },
  methods: {
    projectIdChanged: function(projectId) {
      this.projectId = projectId;
    }
  }
};
</script>

<style scoped>
.row {
  margin: 0 auto;
}
.project-list {
  margin-top: 70px;
}
</style>
