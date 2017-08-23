<template>
  <div class="contend">
    <map-main></map-main>
  </div>
</template>
<script>
  import MapMain from '@/map/MapMain'

  export default {
    name: 'Contend',
    data () {
      return {
        name: 'DR'
      };
    },
    mounted(){
    },
    components:{MapMain}
  };
</script>
<style scoped>
  .contend{
    width:100%;
    height:100%;
    margin:0;
    padding:0;
    overflow: hidden;
  }
</style>
