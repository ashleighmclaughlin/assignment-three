<template>
  <div>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
          </div>
          <div class="modal-body">
            <img class="user-icon" :src="userdata.user.images['115']">
            <h1>{{ userdata.user.display_name }}</h1>
            <h1 class="modal-title">{{ projectdata.project.name }}</h1>
            <div class="lrg-images">
              <img v-for="image in images" :key="image" v-bind:src="image" class="modal-image">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from "jquery";
  
  export default {
    name: "ProjectModal",
    props: ['projectId', 'userdata'],
    data: function() {
      return {
        projectdata: {},
        // getImages: {}
      }
    },
    methods: {
      getProject: function(projectId) {
        if (projectId) {
          this.$http
            .get("https://behance-mock-api.glitch.me/api/projects/" + projectId)
            .then(function(projectdata) {
              this.projectdata = projectdata.body;
              this.getImages();
              this.getFields();
              // console.log("projectId", projectdata);
            });
        }
      },
      getImages: function() {
        let that = this;
        let test = this.projectdata.project.modules;
        that.images = [];
        $.each(test, function(i, image) {
          that.images.push(image.src);
        });
      },
    },
    watch: {
      projectId: function(val) {
        this.getProject(val);
      }
    }
  };
</script>

<style scoped>

.lrg-images img {
  max-width: 400px;
  padding-bottom: 30px;
}
  
</style>
