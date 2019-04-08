<template>
  <div>
        <div v-for="project in projects" :key="project.id" class="project-list">
             <router-link to="/modal">
            <h3 @click="navigateToProject(project.id)">{{project.name}}</h3>
            <img @click="navigateToProject(project.id)" class="project-image" v-bind:src="project.covers[230]"/>
             </router-link>
        </div>
  </div>
</template>

<script>


export default {
  name: "Designer",
  components: {
  }, 
  data: function() {
    return {
      userId: "",
      projects: []
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
      navigateToProject: function(projectId){
          this.$router.push({name: "modal", params: {projectId: projectId} });
      }
  }
};
</script>

<style scoped>

</style>
