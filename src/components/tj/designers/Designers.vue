<template>
    <div>
      <Header />
      <DesignerList />
      <!-- <footer /> -->
    </div>
</template>

<script>
import Header from "./Header";
import DesignerList from "./DesignerList";
// import Footer from "./Footer"; 

export default {
  name: "Designers",
  data: function() {
    return {
      source: ""
    };
  },
  components: {
      Header,
      DesignerList
      // Footer
  },
  methods: {
    sourceChanged: function(source) {
      this.source = source;
    }
  }
};
</script>

<style scoped>
.router-link-active {
  font-weight: 400;
}
</style>
