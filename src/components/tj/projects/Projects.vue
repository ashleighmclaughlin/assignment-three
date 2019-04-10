<template>
  <div>
    <!-- <MyHeader /> -->
    <header class="landing">
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <router-link class="back" to="/tj">
          <div class="logo">
            <img class="logo-img" src="https://imgur.com/FIIcw2K.png" alt="Nooble Creative Logo Dark">
          </div>
        </router-link>
        <button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="navbar-toggler-icon"></i>
          </button>
  
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link">
                <router-link v-bind:to="'/tj'">Home</router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <router-link v-bind:to="'/designers'">Our Designers</router-link>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  
    <Bio :userdata="userdata" />
    <ProjectList :projectdata="projectdata" :userdata="userdata" />
  
    <!-- <MyFooter /> -->
  </div>
</template>

<script>
  // import MyHeader from "../designers/MyHeader";
  import ProjectList from "./ProjectList";
  import Bio from "./Bio";
  // import MyFooter from "../designers/MyFooter";
  
  export default {
    name: "Projects",
    data: function() {
      return {
        // users: [],
        projectdata: {},
        userdata: {},
        userId: ""
      };
    },
    components: {
      // MyHeader
      ProjectList,
      Bio,
      // MyFooter
    },
    created: function() {
      this.getProjectData();
      this.getUserData();
      // if (this.$route.params.userId) {
      //   // console.log(this.$route.params);
      //   this.userId = this.$route.params.userId;
      //   this.$http
      //     .get(
      //       "https://behance-mock-api.glitch.me/api/users/" +
      //         this.userId +
      //         "/projects"
      //     )
      //     .then(function(contentdata) {
      //       this.contentdata = contentdata.body;
      //       // console.log(this.contentdata)
      //     });
      // }
    },
    methods: {
      getProjectData() {
        if (this.$route.params.userId) {
          // console.log(this.$route.params);
          this.userId = this.$route.params.userId;
          this.$http
            .get(
              "https://behance-mock-api.glitch.me/api/users/" +
              this.userId +
              "/projects"
            )
            .then(function(data) {
              this.projectdata = data.body;
              // console.log("projectdata", this.projectdata)
              // console.log("data", data.body)
            });
        }
      },
      getUserData() {
        if (this.$route.params.userId) {
          // console.log(this.$route.params);
          this.userId = this.$route.params.userId;
          this.$http
            .get(
              "https://behance-mock-api.glitch.me/api/users/" +
              this.userId
            )
            .then(function(data) {
              this.userdata = data.body;
              // console.log(this.contentdata)
            });
        }
      },
  
    }
  };
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Merriweather|Montserrat:300,300i,400,600');

  a {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    color: #fff;
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