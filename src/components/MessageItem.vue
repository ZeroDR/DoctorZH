<template>
  <div class="message-panel">
    <div class="m-header">
      <span class="m-title">{{mTitle}}</span>
      <span class="m-time">时间：{{mTime}}</span>
      <span class="m-address">地点：{{mAddress}}</span>
    </div>
    <div class="m-content">
      <p class="m-text">{{mContent}}</p>
    </div>
    <div class="m-footer">
      <Icon type="ios-arrow-down" :size="24" color="#2d8cf0"></Icon>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'MessageItem',
    data () {
      return {
        sourceData:"123"
      };
    },
    props:['mTitle','mTime','mAddress','mContent']
  };
</script>
<style scoped>
  .message-panel{
    height:240px;
    background:#333;
    margin:5px;
    box-shadow: 0 0 5px #2d8cf0;
  }

  .m-header{
    height:32px;
    background:#dddddd;
    font-family: "Microsoft YaHei";
  }

  .m-content{
    height:calc(100% - 56px);
    background:#fafafa;
  }

  .m-footer{
    height:24px;
    background: #fff;
    text-align: center;
    vertical-align: middle;
  }

  .m-title{
    font-size:18px;
    line-height: 32px;
  }

  .m-time{
    margin:0 0 0 25%;
  }

  .m-address{
    margin:0 0 0 25%;
  }

  .m-text{
    border:none;
    height:100%;
    width:100%;
    display: block;
  }
</style>
