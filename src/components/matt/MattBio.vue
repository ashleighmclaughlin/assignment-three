  <template>
    <div>
        <div class="container" v-if="userdata.user">
          <img :src="userdata.user.images['115']">
          <h1 class="username">{{ userdata.user.display_name }}</h1>
          <p>{{ userdata.user.occupation }}</p>
        <div>
        <span>{{ userdata.user.city }}, </span>
        <span>{{ userdata.user.country }}</span>
        </div>
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

img {
 height: 200px;
 /* width: 35%; */
 margin-top: 20px;
 border-radius: 50%
}
</style>