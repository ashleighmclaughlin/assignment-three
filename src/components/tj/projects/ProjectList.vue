<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm img-border" v-for="project in contentdata" v-bind:key="project.id">
          <p>{{ project.user.first_name}}</p>
          <!-- <img :src="projects.covers['404']" :alt="projects"> -->
          <!-- <h3>{{ projects.user.url }}</h3> -->
          <h1>{{ contentdata.user.display_name }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import MyHeader from "../designers/MyHeader";
  
  export default {
    name: "ProjectList",
    data: function() {
      return {
        // projects: [],
        // contentdata: {},
        // userId: ""
      };
    },
    components: {
      // MyHeader
    },
        props: ["projectdata", "userdata"],

    // created: function() {
    //   if (this.$route.params.userId) {
    //     // console.log(this.$route.params);
    //     this.userId = this.$route.params.userId;
    //     this.$http
    //       .get("https://behance-mock-api.glitch.me/api/projects/" + this.userId + "/projects")
    //       .then(function(contentdata) {
    //         console.log(contentdata)
    //         this.contentdata = contentdata.body;
    //         // console.log(this.contentdata)
    //       });
    //   }
    // }
  };
</script>

<style scoped>
  .router-link-active {
    font-weight: 400;
  }
  
  .container {
    margin-top: 70px;
  }
  
  .img-border img {
    border-radius: 10px;
  }
  
  
  /*
  * https://imgur.com/a/5nDMmmB  Link to Image
  */
  
  .landing {
    background-image: url("https://imgur.com/clOcGTs.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 25vh;
  }
  
  .logo-img {
    height: 60px;
  }
  
  .navbar {
    background-color: transparent !important;
    color: #ffffff;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 2;
  }
</style>