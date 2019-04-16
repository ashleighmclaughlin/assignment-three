<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm img-border" v-for="user in users" v-bind:key="user.id">
          <div class="projects" to="/projects" @click="navigateTo(user.id);">
            <img v-if="user.images[138]" :src="user.images[138]" :alt="designer">
            <h4>{{ user.first_name }}</h4>
          </div>
           <div class="projects" to="/projects" @click="navigateTo(user.id);">
            <img v-if="user.images[138]" :src="user.images[138]" :alt="designer">
            <h4>{{ user.first_name }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DesignerList",
    // el: "#demo",
    data: function() {
      return {
        users: [],
        designer: {},
        active: false,
      };
    },
    created: function() {
      this.$http
        .get("https://behance-mock-api.glitch.me/api/users/")
        .then(function(data) {
          this.users = data.body.users;
        });
    },
    methods: {
      navigateTo: function(userId) {
        this.$router.push({
          name: "projects",
          params: {
            userId: userId
          }
        });
      },
      mouseOver: function() {
        this.active = !this.active;
      }
    }
  };
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Merriweather|Montserrat:300,300i,400,600');
  .router-link-active {
    font-weight: 400;
  }
  
  .container {
    margin-top: 70px;
  }
  
  .img-border img {
    border-radius: 10px;
    cursor: pointer;
  }
  
  .projects img {
    width: 200px;
    height: 200px;
  }
  
  .projects h4 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    padding-top: 5px;
  }

  .row {
    padding-bottom: 30px;
  }

</style>