<template>
    <div>
      <Header />
        <p>Here are the designers!</p>
      <footer />
    </div>
</template>

<script>
import Header from "./Header";
import Header from "./Footer";

export default {
  name: "Designers",
  data: function() {
    return {
      source: ""
    };
  },
  components: {
      Header,
      Footer
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
