<template>
  <div class="contend">
    <map-main></map-main>
    <map-active></map-active>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import {mapMutations} from 'vuex'
  import MapMain from '@/map/MapMain'
  import MapActive from '@/map/view/MapActive'

  export default {
    name: 'Contend',
    data () {
      return {
        name: 'DR'
      };
    },
    computed: {
      ...mapState({
        count:state => state.mapStore.count
      })
    },
    mounted(){
    },
    methods: {},
    components: {MapMain,MapActive}
  };
</script>
<style scoped>
  .contend {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
</style>
