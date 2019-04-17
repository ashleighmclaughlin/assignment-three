<template>
  <div class='modal fade' id='exampleModal' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
    <div class='modal-dialog' role='document'>
      <div class='modal-content'>
  
        <div class='modal-header' v-if='userdata.user'>
          <img class='user-icon' :src='userdata.user.images["115"]'>
          <h5 class='modal-title' id='exampleModalLabel'>{{ userdata.user.display_name }}</h5>
          <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
      <span aria-hidden='true'>&times;</span>
    </button>
        </div>
  
        <div class='modal-body'>
          <div v-if='projectdata.project'>
            <h4 class='modal-title'>{{ projectdata.project.name }}</h4>
            <p>A dynamic set of images using exploding shaped water balloons lit with a triad of colors, to create incredible splashes on the heads of bald men.</p>
            <div class='lrg-images'>
              <img v-for='image in images' :key='image' v-bind:src='image' class='modal-image'>
            </div>
  
            <div class='modal-footer' v-if='projectdata.project'>
              <div class='container'>
                <div class='row stats'>
                  <div class='col-sm'>
                    <p>Views</p>
                    <h5>{{ projectdata.project.stats.views }}</h5>
                  </div>
                  <div class='col-sm'>
                    <p>Appreciations</p>
                    <h5>{{ projectdata.project.stats.appreciations }}</h5>
                    <p class='citation'>MEMBER SINCE MARCH 12 2014</p>
                  </div>
                  <div class='col-sm' v-if='userdata.user'>
                    <p>Comments</p>
                    <h5>{{ userdata.user.stats.comments }}</h5>
                  </div>
                </div>
              </div>
            </div>
  
          </div>
        </div>
  
      </div>
      <!-- End of modal-content -->
    </div>
  </div>
</template>

<script>
  import $ from 'jquery';
  
  export default {
    name: 'TjProjectModal',
    data: function() {
      return {
        projectdata: {}
      }
    },
    props: ['projectId', 'userdata'],
    methods: {
      getProject: function(projectId) {
        if (projectId) {
          this.$http
            .get('https://behance-mock-api.glitch.me/api/projects/' + projectId)
            .then(function(projectdata) {
              this.projectdata = projectdata.body;
              this.getImages();
            });
        }
      },
      getImages: function() {
        const that = this;
        const test = this.projectdata.project.modules;
        that.images = [];
        $.each(test, function(i, image) {
          that.images.push(image.src);
        });
      }
    },
    watch: {
      projectId: function(val) {
        this.getProject(val);
      }
    }
  };
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Merriweather|Montserrat:300,300i,400,600');
  .lrg-images img {
    max-width: 100%;
    border-radius: 5px;
    padding-bottom: 30px;
  }
  
  .user-icon {
    max-width: 50px;
    border-radius: 7%;
    padding-right: 10px;
  }
  
  .modal-title {
    padding-top: 5px;
  }
  
  .modal-dialog {
    max-width: 850px;
  }
  
  .citation {
    font-size: 9px;
    padding-top: 20px;
    color: rgba(0, 0, 0, 0.3);
  }
  
  .modal-header {
    font-family: Montserrat;
  }
  
  .modal-body {
    font-family: Montserrat;
  }
  
  .modal-body h4 {
    font-weight: 400;
  }
</style>
