<template>
  <div class="main-panel">
    <Row :className="headerName">
      <Col>
      <carousel-panel></carousel-panel>
      </Col>
    </Row>
    <Row :className="contentName">
      <Col className="col-panel">
      <content-view></content-view>
      </Col>
    </Row>
    <Row :className="footName">
      <Col><footer-panel></footer-panel></Col>
    </Row>
    <BackTop></BackTop>
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
    height: auto;
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
