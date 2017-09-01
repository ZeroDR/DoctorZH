<template>
  <div class="main-panel">
    <Row :className="headerName">
      <Col>
      <carousel-panel></carousel-panel>
      </Col>
    </Row>
    <Row :className="contentName">
      <Col className="col-panel" span="18" push="6">
      <content-view></content-view>
      </Col>
      <Col className="col-panel" span="6" pull="18">
      <left-view></left-view>
      </Col>
    </Row>
    <Row :className="footName">
      <Col><footer-panel></footer-panel></Col>
    </Row>
  </div>
</template>
<script>
  import CarouselPanel from '@/components/CarouselPanel'
  import FooterPanel from '@/components/FooterPanel'
  import LeftView from '@/view/componentsView/leftView'
  import ContentView from '@/view/componentsView/ContentView'

  export default {
    name: 'hello',
    data () {
      return {
        headerName: 'header-view',
        contentName: 'content-view',
        footName:'foot-view'
      };
    },
    components: {CarouselPanel, LeftView, ContentView,FooterPanel}
  };
</script>
<style scoped>
  .main-panel {
    height: 200%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .header-view {
    width: 80%;
    margin: auto;
  }

  .content-view {
    width: calc(75% - 30px);
    height: 100%;
    margin: 10px auto;
  }

  .foot-view{
    width: 80%;
    margin: auto;
  }

  .col-panel {
    height: 100%;
    padding: 0 5px;
  }
</style>
