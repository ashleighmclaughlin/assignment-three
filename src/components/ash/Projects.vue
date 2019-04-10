<template>
  <div>
        <div v-for="project in projects" :key="project.id" class="project-list">
            <!-- <h3 @click="navigateToProject(project.id)">{{project.name}}</h3> -->
            <!-- <img @click="navigateToProject(project.id)" class="project-image" v-bind:src="project.covers[404]"/> -->
            <h3 v-on:click="projectIdChanged(project.id)" data-toggle="modal" data-target="#exampleModal">{{project.name}}</h3>
            <img v-on:click="projectIdChanged(project.id)" class="project-image" data-toggle="modal" data-target="#exampleModal" v-bind:src="project.covers[404]"/>
        </div>

        <TestModal v-bind:projectId="projectId" />

  </div>
</template>

<script>
import TestModal from "./TestModal";

export default {
  name: "Designer",
  components: {
    TestModal
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
        .get("https://behance-mock-api.glitch.me/api/users/" + this.userId + "/projects")
        .then(function(data) {
        this.projects = data.body.projects;
      });
    }
  },
  methods: {
      // navigateToProject: function(projectId){
      //     this.$router.push({name: "modal", params: {projectId: projectId} });
      // }
      projectIdChanged: function (projectId){
        this.projectId = projectId;
      }
  }
};
</script>

<style scoped>
.row{
  margin: 0 auto;
}

</style>
