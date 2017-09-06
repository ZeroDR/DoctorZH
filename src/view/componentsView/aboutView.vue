<template>
  <div>
    <Row>
      <Col>
        <me-card></me-card>
      </Col>
    </Row>
  </div>
</template>
<script>
  import MeCard from '@/components/MeCard'

  export default {
    name: 'AboutView',
    data () {
      return {};
    },
    components:{MeCard}
  };
</script>
<style scoped>
</style>
