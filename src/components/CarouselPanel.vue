<template>
  <div class="carousel-panel">
    <Carousel autoplay :height=320>
      <CarouselItem>
        <div class="img-panel img-panel1"></div>
      </CarouselItem>
      <CarouselItem>
        <div class="img-panel img-panel2"></div>
      </CarouselItem>
      <CarouselItem>
        <div class="img-panel img-panel3"></div>
      </CarouselItem>
      <CarouselItem>
        <div class="img-panel img-panel4"></div>
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
    background-size: 90% 320px;
    background-position:center;
    background-repeat: no-repeat;
  }

  .img-panel1{
    background-image: url("../../static/imgs/1.png");
  }

  .img-panel2{
    background-image: url("../../static/imgs/2.png");
  }

  .img-panel3{
    background-image: url("../../static/imgs/3.png");
  }

  .img-panel4{
    background-image: url("../../static/imgs/4.png");
  }
</style>
