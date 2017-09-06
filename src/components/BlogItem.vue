<template>
  <div class="blog-panel">
    <div class="b-header">
      <span class="b-title">{{bConfig.title}}</span>
    </div>
    <div class="b-content">
      <p class="b-text">{{bConfig.content.length>400?(bConfig.content.substring(0,400-10)+'......'):bConfig.content}}</p>
      <span class="b-img"></span>
    </div>
    <div class="b-footer">
      <span class="b-time">时间：{{bConfig.time}}</span>
      <span class="b-label">标签：{{bConfig.label}}</span>
      <span class="b-more">阅读全文>></span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'BlogItem',
    data () {
      return {
      };
    },
    props:['bConfig'],
    method:{
    }
  };
</script>
<style scoped>
  .blog-panel{
    height:240px;
    margin:5px;
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
    border-color:#eee;
  }

  .b-header{
    height:32px;
    background:#42f2fb;
    font-family: "Microsoft YaHei";
  }

  .b-content{
    height:calc(100% - 84px);
    background:#fafafa;
    font-size:14px;
  }

  .b-footer{
    height:32px;
    background: #fff;
    vertical-align: middle;
    clear:both;
  }

  .b-title{
    font-size:18px;
    line-height: 32px;
  }

  .b-time{
    margin:7px 0;
  }

  .b-label{
    margin:7px 0 7px 25%;
  }

  .b-text{
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

  .b-img{
    height:100%;
    width:calc(20% - 10px);
    margin:7px 5px;
    display:block;
    float:right;
    background: #333;
  }

  .b-footer span{
    display:inline-block;
  }

  .b-more{
    height:24px;
    width:120px;
    float:right;
    margin:5px 5px 0 0;
    text-align: center;
    font-size:14px;
    line-height:24px;
    color:#fff;
    background:#00e2f0;
  }
</style>
