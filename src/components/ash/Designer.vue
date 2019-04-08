<template>
  <div>
    <!-- <MyHeader /> -->
        <h1>Hello</h1>
    <!-- <AshFooter /> -->
    <!-- <h1>{{ userdata.first_name }}</h1> -->
  </div>
</template>

<script>
// import MyHeader from "./MyHeader";
// import AshFooter from "./AshFooter";

export default {
  name: "Designer",
  components: {
    //   MyHeader,
    //   AshFooter
  },
  data: function(){
      return {
          userdata: {},
         
      }
  },
  created: function(){
      this.getId()
      this.$http
      .get("https://behance-mock-api.glitch.me/api/users/" + this.user.id)
      .then(function(data) {
        this.user = data.body.user;
        
      });
  },
  methods: {
    getId: function(){
        this.userData = this.$route.params.userId
        // console.log(this.userData)
  }
}
};

<style scoped>
</style>


