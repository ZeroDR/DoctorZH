<template>
  <div class="message-panel">
    <div class="m-header">
      <span class="m-title">{{mConfig.title}}</span>
      <span class="m-time">时间：{{mConfig.time}}</span>
      <span class="m-address">地点：{{mConfig.address}}</span>
    </div>
    <div class="m-content">
      <p class="m-text">{{mConfig.content.length>400?(mConfig.content.substring(0,400-10)+'......'):mConfig.content}}</p>
      <span class="m-img"></span>
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
      };
    },
    props:['mConfig'],
    created(){
        console.log(this.mConfig);
    }
  };
</script>
<style scoped>
  .message-panel{
    height:240px;
    margin:5px;
    box-shadow: 0 0 2px #333;
  }

  .m-header{
    height:32px;
    background:#42f2fb;
    font-family: "Microsoft YaHei";
  }

  .m-content{
    height:calc(100% - 66px);
    background:#fafafa;
    font-size:14px;
  }

  .m-footer{
    height:24px;
    background: #fff;
    text-align: center;
    vertical-align: middle;
    clear:both;
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
    width:calc(80% - 10px);
    margin:5px 0;
    display: block;
    float:left;
    overflow:hidden;
    text-overflow:ellipsis;
    word-wrap: break-word;
    word-break: normal;
  }

  .m-img{
    height:100%;
    width:calc(20% - 10px);
    margin:0 5px;
    display:block;
    float:right;
    background: #333;
  }
</style>
