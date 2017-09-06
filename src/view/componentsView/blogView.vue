<template>
  <div class="blog-panel">
    <ul>
      <li v-for="(item,index) in blogItems">
        <blog-item :bConfig="item"></blog-item>
      </li>
    </ul>
  </div>
</template>
<script>
  import BlogItem from '@/components/BlogItem'

  export default {
    name: 'BlogView',
    data () {
      return {
        blogItems: [{
          title: '测试',
          label:'JavaScript',
          content:'123',
          time:'2017-09-06'
        },{
          title: '测试1',
          label:'CSS',
          content:'123',
          time:'2017-09-06'
        },{
          title: '测试2',
          label:'JavaScript',
          content:'123',
          time:'2017-09-06'
        }]
      };
    },
    components: {BlogItem}
  };
</script>
<style scoped>
  .blog-panel {
    height: 100%;
    margin: 5px 0;
  }

  .blog-panel ul {
    margin: 0;
    padding: 0;
  }

  .blog-panel li {
    list-style: none;
    width: 100%;
    margin: 20px 0;
  }
</style>
