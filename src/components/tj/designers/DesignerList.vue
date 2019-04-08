<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm img-border" v-for="user in users" v-bind:key="user.id">
          <!-- {{ user.images['50'] }} -->
          <div class="projects" to="/projects" @click="navigateTo(user.id);">
          <img :src="user.images['138']" :alt="designer">
          {{ user.first_name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DesignerList",
    data: function() {
      return {
        users: [],
        designer: {}
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
      // console.log("path",path)
    this.$router.push({ name: "projects", params: { userId: userId } });
    }
  }
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


</style>