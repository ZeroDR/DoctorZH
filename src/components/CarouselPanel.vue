<template>
  <div class="carousel-panel">
    <Carousel autoplay :height=320>
      <CarouselItem>
        <div class="img-panel"></div>
      </CarouselItem>
      <CarouselItem>
        <div class="img-panel"></div>
      </CarouselItem>
      <CarouselItem>
        <div class="img-panel"></div>
      </CarouselItem>
      <CarouselItem>
        <div class="img-panel"></div>
      </CarouselItem>
    </Carousel>
  </div>
</template>
<script>
  export default {
    name: 'CarouselPanel',
    data () {
      return {};
    }
  };
</script>
<style scoped>
  .carousel-panel {
    width: 100%;
    height: 320px;
    margin: auto;
  }

  .img-panel {
    height: 320px;
    width: 100%;
    background-image: url("/static/imgs/1.jpg");
    background-size: 90% 320px;
    background-position:center;
    background-repeat: no-repeat;
  }
</style>
