<template>
    <div>
        <MyHeader />
        <Designers v-bind:users="users"/>
        <MyFooter />
    </div>    
</template>

<script>
import MyHeader from "./MyHeader"
import MyFooter from "./MyFooter"
import Designers from "./Designers"


export default {
  name: "OurDesigners",
  components: {
    MyHeader,
    MyFooter,
    Designers
  },
  data: function() {
    return {
      users: []
    }
  },
    created: function() {
    this.$http
        .get("https://behance-mock-api.glitch.me/api/users" + this.userId) 
        .then(function(data) {
          this.users = data.body.users;          
        });
    },
    methods: {
    navigateTo: function(UserId) {
      this.$router.push({ name: "", params: { UserId: UserId } });
      }
    }
};


</script>

<style scoped>

myheader {
  background-image: url(./images/heroImage.jpg);
  height: 50vh;
}


</style>