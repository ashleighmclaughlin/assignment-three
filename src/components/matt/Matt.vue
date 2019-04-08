<template>
    <div>
      <MyHeader />
      <FeaturedDesigners />
      <MyFooter />
    </div>  
</template>


<script>
import FeaturedDesigners from "./FeaturedDesigners"
import MyHeader from "./MyHeader"
import MyFooter from "./MyFooter"

export default {
  name: "Matt",
  components: {
    FeaturedDesigners,
    MyHeader,
    MyFooter
  }
};

</script>

<style scoped>

</style>