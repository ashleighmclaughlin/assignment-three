<template>
    <div>
        <h1 class="title">Designers</h1>
        <h1 class="line"></h1>

        <div class="designers">
          <div class="row">
            <div class="col-sm">
              <div v-for="user in users" v-bind:key="user.id">
                <img v-bind:src="user.images" />
                <h3>{{ user.first_name + " " + user.last_name}}</h3>
              </div>
            </div>
          </div>
        </div>  
    </div>     
</template>


<script>

export default {
  name: "Matt",
  props: ["users"]
};

</script>

<style scoped>
.col-sm {
     font-size: 30px;
  
}

.designers img {
 height: 500px;
 width: 80%;
 padding-bottom: 10px;
}

.title {
  margin-top: 100px;
  margin-bottom: 35px;
  font-size: 60px;
}

.line {
  display: block;
    width: 80px;
    height: 3px;
    background: #f1cd8f;
    margin: 10px auto;
    text-align: center;
}

.designers h3 {
  border-bottom: 5px;
}

.row {
  margin: 0;
  padding: 70px;
  align-content: center
  
}
</style>