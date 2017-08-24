<template>
  <div id="map"></div>
</template>
<script>
  export default {
    name: 'MapMain',
    data () {
      return {};
    },
    mounted(){
      let mapBox = require('mapbox-gl/dist/mapbox-gl.js');

      mapBox.accessToken = 'pk.eyJ1IjoiemVyby1kciIsImEiOiJjajZvaG54bWcwamEwMndvMWJma3ZyaXViIn0.f4-UmzEOMhLdbB_K9-cpqA';
      let map = new mapBox.Map({
        container: 'map',
        center: [113.62, 34.75],
        zoom: 10,
        style: 'mapbox://styles/mapbox/light-v9'
      });
    }
  };
</script>
<style scoped>
  #map {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
</style>
