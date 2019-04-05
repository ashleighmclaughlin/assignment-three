<template>
  <div>
    <footer class="footer">
      <div class="container">
          <div class="ear">
        <img class="eagle-footer" src="./img/eagle-logo-1.png">
        </div>
        <p class="footer-pr">Contact : 534 5678</p>
        <p class="footer-pr">
          Address : 45 Tanners St
          Avonhead
          Christchurch
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>
import image from "./img"
<style scoped>
footer {
  background-image: url(./img/footer.jpg);
  background-repeat: no-repeat, repeat;
  background-size: cover;
  height: 450px;
  margin-top: 100px;
}
.eagle-footer {
  width: 300px;
  text-align: center;
  margin: 0 auto;
}
h2 {
  color: rgb(254, 195, 58);
}
p {
  color: rgb(254, 195, 58);
}
.footer-pr {
  text-align: center;
}
.ear {
    text-align: center;
}
</style>