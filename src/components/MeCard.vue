<template>
    <div class="c-panel">
      <div class="c-logo"></div>
      <div class="c-message">
        <Card>
          <p slot="title">个人介绍</p>
          <ul>
            <li><span>网名：</span><span>蒲公英</span></li>
            <li><span>籍贯：</span><span>河南省郑州市</span></li>
            <li><span>现居地：</span><span>北京市昌平区</span></li>
            <li><span>职业：</span><span>Web前段、GIS开发</span></li>
            <li><span>梦想：</span><span>自由、简单、平凡</span></li>
            <li><span>个性签名：</span><span>等风来......</span></li>
          </ul>
        </Card>
      </div>
    </div>
</template>
<script>
    export default {
        name: 'MeCard',
        data () {
            return {};
        }
    };
</script>
<style scoped>
  .c-panel{
    box-shadow:0 1px 6px rgba(0,0,0,.2);
    border-color:#eee;
    height:240px;
    margin:1px 5px;
  }

  .c-logo{
    width:200px;
    height:200px;
    margin:20px 10px;
    background: url('/static/imgs/timg.jpg') no-repeat center;
    float:left;
    border-radius: 50%;
  }

  .c-message{
    float:left;
    width:calc(100% - 240px);
    margin:20px 10px;
    height:200px;
  }

  .c-message li span:first-child{
    width:80px;
    display:inline-block;
    text-align: right;
  }

  .c-message span{
    margin:0 5px;
  }
</style>
