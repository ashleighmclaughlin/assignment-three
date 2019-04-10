<template>
<div> 
        
<MyHeader />
    <div>
      <h1 class="title">Designers</h1>
      <h1 class="line"></h1>

      <div class="designers">
        <div class="row">
          <div class="col-sm">
            <div v-for="user in users" v-bind:key="user.id">
              <img v-bind:src="user.images['115']" @click="navigateTo('/Designers');"/>
              <h3>{{ user.first_name + " " + user.last_name}}</h3>
              <h3> {{user.occupation}}</h3>
            </div>
          </div>
        </div>
      </div>  
    </div>  
<MyFooter /> 
</div>   

</template>

<script>
import MyHeader from "./MyHeader"
import MyFooter from "./MyFooter"



export default {
  name: "OurDesigners",
  components: {
    MyHeader,
    MyFooter
  },
  data: function() {
    return {
      users: []
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
    navigateTo: function(path) {
      this.$router.push({ name: "designers", params: { searchQuery: path } });
      }
    }
}


</script>

<style scoped>
.col-sm {
     font-size: 30px;
  
}

.designers img {
 height: 150px;
 width: 10%;
 padding-bottom: 10px;
 border-radius: 5%
}

.title {
  margin-top: 100px;
  margin-bottom: 35px;
  font-size: 60px;
}

.line {
  display: block;
    width: 80px;
    height: 3px;
    background: #f1cd8f;
    margin: 10px auto;
    text-align: center;
}

.designers h3 {
  border-bottom: 5px;
}

.row {
  margin: 0;
  padding: 70px;
  align-content: center
  
}


</style>