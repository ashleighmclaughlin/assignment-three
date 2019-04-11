<template>
    <div>
      <MyHeader />
      <h3>{{ user.first_name + " " + user.last_name}}</h3>
      <h5> {{user.occupation}}</h5>
      <MyFooter />
    </div>  
</template>


<script>
import MyHeader from "./MyHeader"
import MyFooter from "./MyFooter"

export default {
  name: "Matt",
  components: {
    MyHeader,
    MyFooter
  },
  props: ["users"],
    watch: {
      users: function(val) {
        this.users=val;
      }
    }
}

</script>

<style scoped>

</style>