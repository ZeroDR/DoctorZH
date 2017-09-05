<template>
  <div class="travel-panel">
    <ul>
      <li v-for="(item,index) in messages">
        <message-item :mTitle="item.title" :mTime="item.time" :mAddress="item.address" :mContent="item.content"></message-item>
      </li>
    </ul>
  </div>
</template>
<script>
  import MessageItem from '@/components/MessageItem'

  export default {
    name: 'TravelMessage',
    data () {
      return {
        messages: [
          {
            title: '郑州',
            time:'2017-09-01',
            address:'郑州',
            content:'123'
          },
          {
            title: '新密',
            time:'2017-09-01',
            address:'新密',
            content:'1123'
          },
          {
            title: '武汉',
            time:'2017-09-02',
            address:'武汉',
            content:'1789'
          }
        ]
      };
    },
    components: {MessageItem}
  };
</script>
<style scoped>
  .travel-panel {
    height: 100%;
    margin: 5px 0;
  }

  .travel-panel ul {
    margin: 0;
    padding: 0;
  }

  .travel-panel li {
    list-style: none;
    width: 100%;
    margin: 10px 0;
  }
</style>
