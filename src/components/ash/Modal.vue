<template>
  <div>
      <h1>{{projectdata.project.name}}</h1>
      <h2>Views | {{projectdata.project.stats.views}}</h2>
      <h2>Views | {{projectdata.project.stats.appreciations}}</h2>
      <h2>Views | {{projectdata.project.stats.comments}}</h2>

  </div>
</template>

<script>


export default {
  name: "Modal",
  components: {

  }, 
  data: function() {
    return {
      projectdata: {},
      projectId: ""
    };
  },
  created: function() {
      if (this.$route.params.projectId) {
        this.projectId = this.$route.params.projectId;
        this.$http
        .get("https://behance-mock-api.glitch.me/api/projects/" + this.projectId)
        .then(function(projectdata) {
        this.projectdata = projectdata.body;
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
