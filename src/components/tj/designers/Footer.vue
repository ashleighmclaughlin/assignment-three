<template>
  <div>    
  </div>
</template>

<script>
  export default {
    name: "Footer",
    data: function() {
      return {
        source: ""
      };
    },
    components: {},
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
