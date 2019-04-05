<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm img-border" v-for="user in users" v-bind:key="user.id">
          <!-- {{ user.images['50'] }} -->
          <img :src="user.images['138']" :alt="designer">
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
        users: []
      };
    },
    created: function() {
      this.$http
        .get("https://behance-mock-api.glitch.me/api/users")
        .then(function(data) {
          this.users = data.body.users;
        });
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