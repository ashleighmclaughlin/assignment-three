<template>
    <div>
      <TjMyHeader />
      <TjDesignerList />
      <TjMyFooter />
    </div>
</template>

<script>
import TjMyHeader from './TjMyHeader';
import TjDesignerList from './TjDesignerList';
import TjMyFooter from './TjMyFooter';

export default {
  name: 'TjDesigners',
  data: function() {
    return {
      source: ''
    };
  },
  components: {
      TjMyHeader,
      TjDesignerList,
      TjMyFooter
  },
  methods: {
    sourceChanged: function(source) {
      this.source = source;
    }
  }
};
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Merriweather|Montserrat:300,300i,400,600');

  .router-link-active {
    font-weight: 400;
  }

</style>
