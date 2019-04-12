<template>
  <div class="container">
    <router-link
      class="back"
      to="/lyndon"
    ><i class="fas fa-long-arrow-alt-left"></i></router-link>
    <div
      class="media"
      v-for="project in projects"
      v-bind:key="project.id"
    >
      <h2>{{project.name}}</h2>
    
      
      <!-- <p>{{project.url}}</p> -->
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
     projects: [],
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
    console.log('params',this.$route.params);
    if (this.$route.params.userId) {
      console.log("something",
        "https://behance-mock-api.glitch.me/api/users/a4d57bd1-a9b9-4c6c-af55-767537bab564/projects"); 
      this.$http
        .get(
          "https://behance-mock-api.glitch.me/api/users/" + this.$route.params.userId + "/projects") 

        .then( response => {
          this.projects = response.body.projects;
          console.log("data", response);
        },
        response => {
            // error callback
        });
    }
  },
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


