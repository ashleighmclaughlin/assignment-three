<template>
  <div>
    <MyHeader />
        <h1>{{projectdata.project.name}}</h1>

        <div class="row">
        <div class="project-img col-sm">
        <img v-for="image in images" :key="image" v-bind:src="image">
        </div>
        </div>

        <div class="row project-stats">
             <div class="col-sm">
                <h2><i class="fas fa-eye"></i> {{projectdata.project.stats.views}}</h2>
            </div>
            <div class="col-sm">
                <h2><i class="fas fa-thumbs-up"></i> {{projectdata.project.stats.appreciations}}</h2>
            </div>
            <div class="col-sm">
                <h2><i class="fas fa-comment-alt"></i> {{projectdata.project.stats.comments}}</h2>
            </div>
        </div>
  </div>
</template>

<script>
import MyHeader from "./MyHeader";

export default {
  name: "Modal",
  components: {
      MyHeader
  }, 
  data: function() {
    return {
      projectdata: {},
      projectId: "",
        images: []
    };
  },
  created: function() {
      if (this.$route.params.projectId) {
        this.projectId = this.$route.params.projectId;
        this.$http
        .get("https://behance-mock-api.glitch.me/api/projects/" + this.projectId)
        .then(function(projectdata) {
        this.projectdata = projectdata.body;
        console.log(this.projectdata)
        this.getImages();
      });
    }
},
    methods: {
        getImages: function(){
            let that = this;
            let test = this.projectdata.project.modules
            $.each(test, function (i, image) {
                that.images.push(image.src) 
            })
        }
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Libre+Baskerville|Montserrat');

.user-info h1{
    font-family: 'Libre Baskerville', serif;
    color: #5b736a;
    font-size: 36px;
    margin-top: 40px;
   
}

.user-info h3{
    color: #222;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    margin-top: 15px;
}
.project-stats h2{
    font-size: 20px;
    color: #222;
}
.row{
    width: 50%;
    margin: 0 auto;
    margin-top: 40px;
}
.project-stats i{
    margin-right: 10px;
}


</style>
