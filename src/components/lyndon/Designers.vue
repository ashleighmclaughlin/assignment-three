<template>
  <div>

    <Header class="main-image-2" />
    <h1>Designers</h1>
    <ul>
      <li
        :key="designer"
        v-for="designer in designers"
        v-on:click="designer.show = !designer.show"
      >
        <h2>{{designer.name}}</h2>
        <h3
          class="speciality"
          v-show="designer.show"
        >{{designer.speciality}}</h3>
      </li>
    </ul>
      <Footer />
  </div>
</template>
<script>
import Header from "./layout/Header";
import Footer from "./layout/Footer";
export default {
  //   name: Designers
  components: {
    Header,
    Footer
  },
  data() {
    return {
      designers: [
        { name: "Ryu", speciality: "Art work", show: false },
        { name: "Crystal", speciality: "Pictures", show: false },
        { name: "James", speciality: "Click Events", show: false }
      ]
    };
  }
};
</script>

<style scoped>
.main-image-2 {
  background-image: url(layout/img/header-2.jpg);
  background-repeat: no-repeat, repeat;
  background-size: cover;
}
h1 {
  text-align: center;
  font-size: 3em;
}
#designers {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
  background: rgb(223, 216, 174);
  height: 350px;
}
.speciality {
  color: coral;
}
</style>


