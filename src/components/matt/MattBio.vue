  <template>
    <div>
        <div v-if="userdata.user">
        <h3>{{ userdata.user.display_name}}</h3>
        </div>
    </div>
</template>


<script>


export default {
  name: "Designers",
  props: ["userdata"],
   watch: {
     userdata: function(val) {
       this.userdata=val;
    }
  }
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