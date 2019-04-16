<template>
  <div>
    <div class="row">
      <div v-for="project in projects" :key="project.id" class="col project-list">
        <img
          v-on:click="projectIdChanged(project.id)"
          class="pointer project-image"
          data-toggle="modal"
          data-target="#exampleModal"
          v-bind:src="project.covers[404]"
        >
        <h3
          class="project-name pointer"
          v-if="project.name"
          v-on:click="projectIdChanged(project.id)"
          data-toggle="modal"
          data-target="#exampleModal"
        >{{project.name}}</h3>
      </div>
    </div>
    <AshModal v-bind:projectId="projectId"/>
  </div>
</template>

<script>
import AshModal from "./AshModal";

export default {
  name: "AshDesigner",
  components: {
    AshModal
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
@import url("https://fonts.googleapis.com/css?family=Libre+Baskerville|Montserrat");

.row {
  margin: 0 auto;
}
.project-list {
  margin-top: 70px;
}
.pointer {
  cursor: pointer;
}
.project-name {
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  margin-top: 10px;
}
</style>
