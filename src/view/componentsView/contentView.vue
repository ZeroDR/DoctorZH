<template>
  <div class="content-panel">
    <Tabs class="tab-panel" value="TravelMap">
      <TabPane class="table-panel-item" label="旅行地图" name="TravelMap">
        <Row>
          <Col>
          <map-box :mapConfig="travelMapConfig"></map-box>
          <map-active></map-active>
          </Col>
        </Row>
        <Row>
          <Col>
          <travel-message></travel-message>
          </Col>
        </Row>
      </TabPane>
      <TabPane class="table-panel-item" label="公益地图" name="CommonwealMap">
        <Row>
          <Col>
          <map-box :mapConfig="commonwealMapConfig"></map-box>
          </Col>
        </Row>
      </TabPane>
      <TabPane class="table-panel-item" label="个人博客" name="Blog">
        <blog-view></blog-view>
      </TabPane>
      <TabPane class="table-panel-item" label="关于" name="About">
        <about-view></about-view>
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
  import MapBox from '@/map/MapMain'
  import MapActive from '@/map/view/MapActive'
  import TravelMessage from '@/view/componentsView/traveMessageView'
  import BlogView from '@/view/componentsView/blogView'
  import AboutView from '@/view/componentsView/aboutView'

  export default {
    name: 'ContentView',
    data () {
      return {
        travelMapConfig: {id: 'travelMap', zoom: 10, center: [113.62, 34.75]},
        commonwealMapConfig: {id: 'commonwealMap', zoom: 3, center: [104.21, 38.92]}
      };
    },
    components: {MapBox, MapActive, TravelMessage, BlogView, AboutView}
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
