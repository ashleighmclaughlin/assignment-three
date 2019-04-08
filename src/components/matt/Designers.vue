<template>
    <div>
        <h1 class="title">Designers</h1>
        <h1 class="line"></h1>
        <div v-for="user in users" v-bind:key="user.id" v-bind:value="user.id" {{ users.first_name }}>
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
</style>