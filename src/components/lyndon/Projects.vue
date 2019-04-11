<template>
    <div class="container">
                        <div class="media" v-for="user in users" v-bind:key="user.id">
 <h2>{{user.first_name}}</h2>
  <h2>{{user.last_name}}</h2>

 <img :src="user.images['115']">
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
    "app-footer": Footer,
  
  },
  data() {
    return {
    users: [],
     users: {},
      userId: "",
        users: { msg: "" }
    
    };
  },
  //   created: function(){
  //   this.$http
  //     .get("https://behance-mock-api.glitch.me/api/users")
  //     .then(function(data) {
  //       console.log(data);
  //       this.users = data.body.users;
        
  //     });
  // } 

    created: function() {
        console.log(this.$route.params);
    if (this.$route.params.userId) {
    
      this.userId = this.$route.params.userId;
       console.log("https://behance-mock-api.glitch.me/api/users")
        this.$http.get("https://behance-mock-api.glitch.me/api/users")
        
        .then(function( users) {
          this. users =  users.body.users;
          console.log('users',this.users)
         
        });
    }
  }
}
</script>

<style scoped>

</style>


