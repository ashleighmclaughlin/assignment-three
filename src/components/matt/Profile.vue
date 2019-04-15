<template>
    <div>
      <MyHeader />
      <div>
    <b-tabs content-class="mt-3">
    <b-tab title="first" active><p>I'm the first fading tab</p></b-tab>
    <b-tab title="second"><p>I'm the second tab content</p></b-tab>
    <b-tab title="disabled" disabled><p>Disabled tab!</p></b-tab>
    </b-tabs>
</div>
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
    },
    methods: { 
    navigateTo: function(userId) {
      this.$router.push({ name: "Profile", params: { userId: userId } });
      }
    }
}

</script>

<style scoped>

</style>