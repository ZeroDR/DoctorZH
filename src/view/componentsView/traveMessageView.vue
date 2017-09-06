<template>
  <div class="travel-panel">
    <ul>
      <li v-for="(item,index) in messages">
        <message-item :mConfig="item"></message-item>
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
            content:'舒婷的诗，有明丽隽美的意象，缜密流畅的思维逻辑，从这方面说，她的诗并不“朦胧”。只是多数诗的手法采用隐喻、局部或整体象征，很少以直抒告白的方式，表达的意象有一定的多义性。把握了这一点，舒婷的朦胧诗是不难解读的。舒婷的诗，有明丽隽美的意象，缜密流畅的思维逻辑，从这方面说，她的诗并不“朦胧”。只是多数诗的手法采用隐喻、局部或整体象征，很少以直抒告白的方式，表达的意象有一定的多义性。把握了这一点，舒婷的朦胧诗是不难解读的。'
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
