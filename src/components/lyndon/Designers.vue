<template>
  <div class="bd-div">

    <app-header class="main-image-2" />
    <h1 class="our-designer">Designers</h1>
    <div class="container">
                 <div class="media" v-for="project in projects" v-bind:key="project.id">
 <h2>{{project.name}}</h2>

 <img :src="project.covers['115']">
           </div>
  <div class="row">
    <div class="col-md">
    <h3>Aldo Crusher</h3>
   <Aldo-Crusher />
    </div>
    <div class="col-md">
     <h3>Alessia Sistori</h3>
      <Alessia-Sistori />
    </div>
    <div class="col-md">
     <h3>Dani Diez</h3>
     <Dani-Diez />
    </div>
  </div>
</div>
  
    <app-footer />
  </div>
</template>
<script>
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import AldoCrusher from "./projects/AldoCrusher.vue";
import AlessiaSistori from "./projects/AlessiaSistori.vue";
import DaniDiez from "./projects/DaniDiez.vue";
export default {
  //   name: Designers
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "Aldo-Crusher": AldoCrusher,
    "Alessia-Sistori": AlessiaSistori,
    "Dani-Diez": DaniDiez
  },
  data() {
    return {
     projects: []
    };
  },
    created: function(){
    this.$http
      .get("https://behance-mock-api.glitch.me/api/projects")
      .then(function(data) {
        console.log(data);
        this.projects = data.body.projects;
        
      });
  } 
};
</script>

<style scoped>
.main-image-2 {
  height: 95vh;
  background-image: url(layout/img/header-2.jpg);
  background-repeat: no-repeat, repeat;
  background-size: cover;
}
h1 {
  text-align: center;
  font-size: 3em;
}
.bd-div {
  background-color: rgb(255, 241, 216);
}

</style>


