<template>
    <div>
      <MyHeader />
      <FeaturedDesigners v-bind:users="users"/>
      <MyFooter />
    </div>  
</template>


<script>
import FeaturedDesigners from "./FeaturedDesigners"
import MyHeader from "./MyHeader"
import MyFooter from "./MyFooter"

export default {
  name: "Matt",
  components: {
    FeaturedDesigners,
    MyHeader,
    MyFooter
  },
    props: ['users'],
    data: function() {
    return {
      user: []
    }
  },
    created: function() { 
    this.$http
        .get("https://behance-mock-api.glitch.me/api/users") 
        .then(function(data) {
          this.users = data.body.users;
        });
    },
    methods: { 
    navigateTo: function(userId) {
      this.$router.push({ name: "Profile", params: { userId: userId } });
      }
    }
};

</script>

<style scoped>

</style>