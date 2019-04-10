<template>
    <div class="container">
                        <div class="media" v-for="project in projects" v-bind:key="project.id">
 <h2>{{project.name}}</h2>

 <img :src="project.covers['115']">
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
import Header from "./layout/Header";
import Footer from "./layout/Footer";
export default {
  name: "projects",
  props: [""],
      components: {
    "app-header": Header,
    "app-footer": Footer,
  
  },
  data() {
    return {
     projects: [],
    
    };
  },
    created: function(){
    this.$http
      .get("https://behance-mock-api.glitch.me/api/users/a4d57bd1-a9b9-4c6c-af55-767537bab564/projects")
      .then(function(data) {
        console.log(data);
        this.projects = data.body.projects;
        
      });
  } 
}
</script>

<style scoped>

</style>


