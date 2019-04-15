 

  <template>
    <div>
      <div class="designers">
        <h1 class="title">Designers</h1>
        <h1 class="line"></h1>
        <div class="row">
                <router-link v-bind:to="'./Profile'"> <div v-for="user in users" v-bind:key="user.id" class="col-sm"> 
                <img v-bind:src="user.images['115']">
                <h3>{{ user.first_name + " " + user.last_name}}</h3>
                <h5> {{user.occupation}}</h5>
            </div></router-link>
        </div>  
    <div class="row">
      <div class="col-sm">
        <img src="./images/MaciejDrabik-DP.jpg">
        <h3>Maciej Drabik</h3>  
        <h5>concept art / Illustration </h5>
      </div>
      <div class="col-sm">
        <img src="./images/JanUrschel-DP.jpg">
        <h3>Jan Urschel</h3>
        <h5>Freelance Concept Designer</h5>
      </div>
      <div class="col-sm">
        <img src="./images/WojtekFus-DP.jpg">
        <h3>Wojtek Fus</h3>
        <h5>Concept Designer</h5>
      </div>
    </div>
  </div>
  
</div>  

</template>


<script>



export default {
  name: "Designers",
  components: {},
  props: ["users"]
}
</script>

<style scoped>
/* .col-sm {
     font-size: 30px;
     display: flex;  
     margin: 0 auto;
} */

.designers img {
 height: 200px;
 /* width: 35%; */
 padding-bottom: 10px;
 border-radius: 50%
}

.designer {
  padding: 0 20px;
  justify-content: center;
  margin: 0 auto;
}

.title {
  margin-top: 100px;
  margin-bottom: 35px;
  font-size: 60px;
  text-align: center;
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
  justify-content: center;
  
}
</style>