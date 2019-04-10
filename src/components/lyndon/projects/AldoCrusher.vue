<template>
    <div>
      <p>hi</p>
           <!-- <div class="media" v-for="project in projects" v-bind:key="project.id">
 <h2>{{project.name}}</h2>

 <img :src="project.covers['115']">
           </div>
    
       <h2>{{projects.body}}</h2>
       <article class="show-blogs">{{projects.covers}}</article> -->
    </div>
</template>
 
 <script>
 export default {
      data() {
    return {
      projects: []
    };
  },
  methods: {},
  // created: function(){
  //   this.$http
  //     .get("https://behance-mock-api.glitch.me/api/projects")
  //     .then(function(data) {
  //       console.log(data);
  //       this.projects = data.body.projects;
        
  //     });
  // } 
 }
 </script>

 <style scoped>
 body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
/* .single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: darkolivegreen;
} */
 </style>
 
 
