<template>
    <div>
      <MyHeader />
      <DesignerList />
    </div>
</template>

<script>
import MyHeader from "./MyHeader";
import DesignerList from "./DesignerList";

export default {
  name: "Designers",
  data: function() {
    return {
      source: ""
    };
  },
  components: {
      MyHeader,
      DesignerList
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
