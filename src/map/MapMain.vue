<template>
  <div :id="mapConfig.id" class="map-panel">
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import {mapMutations} from 'vuex'

  export default {
    name: 'MapMain',
    data () {
      return {};
    },
    props:['mapConfig'],
    computed: {
      ...mapState({
        count: state => state.mapStore.count
      })
    },
    created(){
    },
    mounted(){
      let mapBox = require('mapbox-gl/dist/mapbox-gl.js');
      mapBox.accessToken = 'pk.eyJ1IjoiemVyby1kciIsImEiOiJjajZvaG54bWcwamEwMndvMWJma3ZyaXViIn0.f4-UmzEOMhLdbB_K9-cpqA';
      let map = new mapBox.Map({
        container: this.mapConfig.id,
        center: this.mapConfig.center,
        zoom: this.mapConfig.zoom,
        style: 'mapbox://styles/mapbox/streets-v9'
      });
      if(this.mapConfig.id === 'travelMap') {
        this.$store.commit('setBox', map);
      }
    },
    methods: {
    },
    components:{}
  };
</script>
<style scoped>
  .map-panel {
    width: 100%;
    height: 500px;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
</style>
