<template>
  <div>
    <div id="tabs" class="container">
  
      <div class="tabs">
        <a v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]">Projects</a>
        <a v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]">About Me</a>
      </div>
  
      <div class="content">
        <div v-if="activetab === 1" class="tabcontent">
          <div class="container">
            <div class="row">
              <div class="col-sm img-border" v-for="project in projectdata.projects" v-bind:key="project.id">
                <!-- <h1>{{ projectdata.projects.name }}</h1> -->
                <!-- <h1>{{ projectdata.projects.name }}</h1> -->
                <h3>{{ project.name }}</h3>
                <img :src="project.covers['230']" :alt="project.name">
              </div>
            </div>
            <!-- project.covers[200] -->
            <!-- <p>Hello</p> -->
          </div>
        </div>
        <div v-if="activetab === 2" class="tabcontent">
          <h4>About</h4>
          <img class="user-icon" v-if="userdata.user.images['115']" :src="userdata.user.images['115']">
          <p>{{ userdata.user.first_name }}</p>
          <p>{{ userdata.user.last_name }}</p>
          <!-- <p>{{ userdata.user. }}</p> -->
          <h4>Fields</h4>
          <p>{{ userdata.user.fields }}</p>
          
          <!-- <p>{{ user.user.stats.following }}</p>
          <p>{{ user.user.stats.followers }}</p>
          <p>{{ user.user.stats.appreciations }}</p> -->
        
          <h4>Socials</h4>
          
        </div>
      </div>
  
    </div>
  
  </div>
</template>

<script>
  // import MyHeader from "../designers/MyHeader";
  // import ProjectList from "./ProjectList";
  
  export default {
    name: "ProjectList",
    el: "#tabs",
    data: function() {
      return {
        // users: [],
        // contentdata: {},
        // userId: ""
        // projects: []
      }, {
        activetab: 1
      }
    },
    components: {
      // MyHeader
      // ProjectList
    },
    props: ["projectdata", "userdata"]
  
    // created: function() {
    //     if (this.$route.params.userId) {
    //         // console.log(this.$route.params);
    //         this.userId = this.$route.params.userId;
    //         this.$http
    //             .get("https://behance-mock-api.glitch.me/api/users/" + this.userId)
    //             .then(function(contentdata) {
    //                 this.contentdata = contentdata.body;
    //                 // console.log(this.contentdata)
    //             });
    //     }
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
  
  .user-icon {
    border-radius: 100px;
  }
  
  .img-border img {
    border-radius: 10px;
  }
  
  .website {
    text-decoration: underline;
  }
  
  .stats div {
    padding: 0;
  }
  
  .stats p {
    margin-bottom: 0;
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
  
  
  /* RESET */
  
  
  /* * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  } */
  
  .container {
    max-width: 620px;
    min-width: 420px;
    margin: 40px auto;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.9em;
    color: #888;
  }
  
  
  /* Style the tabs */
  
  .tabs {
    overflow: hidden;
    margin-left: 20px;
    margin-bottom: -2px;
  }
  
  .tabs ul {
    list-style-type: none;
    margin-left: 20px;
  }
  
  .tabs a {
    /* float: left; */
    cursor: pointer;
    padding: 12px 24px;
    transition: background-color 0.2s;
    /* border: 1px solid #ccc; */
    border-right: none;
    background-color: #f1f1f1;
    /* border-radius: 10px 10px 0 0; */
    font-weight: bold;
  }
  
  .tabs a:last-child {
    border-right: 1px solid #ccc;
  }
  
  
  /* Change background color of tabs on hover */
  
  .tabs a:hover {
    background-color: #aaa;
    color: #fff;
  }
  
  
  /* Styling for active tab */
  
  .tabs a.active {
    background-color: #fff;
    color: #484848;
    border-bottom: 2px solid #fff;
    cursor: default;
  }
  
  
  /* Style the tab content */
  
  
  /* .tabcontent {
      padding: 30px;
      border: 1px solid #ccc;
      border-radius: 10px;
    box-shadow: 3px 3px 6px #e1e1e1
  } */
</style>