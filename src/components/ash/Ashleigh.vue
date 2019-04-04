<template>
  <div>
    <MyHeader />
    <div class="home-title">
      <h1>welcome to <span class="nifty-orange">nifty</span></h1>
        <p class="text-center mx-auto"> 
            We are an independent Design Studio based in Christchurch, New Zealand.
            We showcase beautiful designers in the Canterbury region.
        </p>
    </div>
    <AshFooter />
  </div>
</template>

<script>
import MyHeader from "./MyHeader";
import AshFooter from "./AshFooter";

export default {
  name: "Ashleigh",
  components: {
      MyHeader,
      AshFooter
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Libre+Baskerville|Montserrat');

.nifty-orange{
  color: #feb954;
}

.home-title h1{
  font-family: 'Libre Baskerville', serif;
  font-weight: bold;
  font-size: 35px;
  color: #222;
  margin-top: 80px;
}
.home-title p{
  width: 50%;
  font-family: 'Montserrat', sans-serif;
  margin-top: 20px;
}
</style>
