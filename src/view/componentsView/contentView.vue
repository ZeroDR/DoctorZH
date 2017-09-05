<template>
  <div class="content-panel">
    <Tabs class="tab-panel" value="TravelMap">
      <TabPane class="table-panel-item" label="旅行地图" name="TravelMap">
        <Row>
          <Col>
            <map-box></map-box>
            <map-active></map-active>
          </Col>
        </Row>
        <Row>
          <Col>
            <travel-message></travel-message>
          </Col>
        </Row>
      </TabPane>
      <TabPane class="table-panel-item" label="公益地图" name="CommonwealMap">公益地图</TabPane>
      <TabPane class="table-panel-item" label="关于" name="About">关于</TabPane>
    </Tabs>
  </div>
</template>
<script>
  import MapBox from '@/map/MapMain'
  import MapActive from '@/map/view/MapActive'
  import TravelMessage from '@/view/componentsView/traveMessageView'

  export default {
    name: 'ContentView',
    data () {
      return {};
    },
    components: {MapBox,MapActive,TravelMessage}
  };
</script>
<style scoped>
  .content-panel {
    height: 100%;
    width: 100%;
    background: #333;
  }

  .tab-panel {
    background: #fff;
    height: 100%;
    width: 100%;
    border: solid 1px #fff;
    box-shadow: 0 0 25px #333;
  }
</style>
