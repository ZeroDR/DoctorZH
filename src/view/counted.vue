<template>
  <div>{{name}}</div>
  <div v-text="shen"></div>
</template>
<script>
  export default {
    name: 'Counted',
    data () {
      return {
        name: 'DR'
      };
    }
  };
</script>
<style scoped>
</style>
