<template>
    <div>
      <MyHeader />
      <DesignerList />
      <MyFooter />
    </div>
</template>

<script>
import MyHeader from "./MyHeader";
import DesignerList from "./DesignerList";
import MyFooter from "./MyFooter"; 

export default {
  name: "Designers",
  data: function() {
    return {
      source: ""
    };
  },
  components: {
      MyHeader,
      DesignerList,
      MyFooter
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
