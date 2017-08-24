<template>
  <div @scroll="scrollEvent($event)" class='features'>
    <section id='baker' class='active'>
      <h3>郑州</h3>
      <p>河南省省会，中国中部地区重要的中心城市，国家重要的综合交通枢纽，中原经济区核心城市，地处华北平原南部、黄河下游，居河南省中部偏北，东接开封市，西依洛阳市，南与许昌市、平顶山市接壤，北隔黄河与新乡市、焦作市相望，介于东经112°42′-114°14′、北纬34°16′-34°58′之间。</p>
    </section>
    <section id='aldgate'>
      <h3>新密</h3>
      <p>新密市位于河南省中部的嵩山东麓，隶属省会郑州，处于北纬39°19′—34°40′、东经113°09′—113°41′之间，位于省会郑州西南40公里处，总面积1001平方公里，辖13个乡镇、3个街道办事处，人口79.7万（2010年）。</p>
    </section>
    <section id='london-bridge'>
      <h3>武汉</h3>
      <p>武汉，简称“汉”，别称“江城”，是湖北省省会、中部六省唯一的副省级市和特大城市、中国中部地区的中心城市，全国重要的工业基地、科教基地和综合交通枢纽[1-2]  。截至2016年末，全市下辖13个市辖区，3个国家级开发区，总面积8494.41平方公里，全市常住人口1076.62万人，常住人口城镇化率79.77%，户籍人口城镇化率68%。</p>
    </section>
    <section id='woolwich'>
      <h3>北京</h3>
      <p>北京，简称“京”，是中华人民共和国的首都、直辖市、国家中心城市、超大城市、国际大都市，全国政治中心、文化中心、国际交往中心、科技创新中心，是中国共产党中央委员会、中华人民共和国中央人民政府、全国人民代表大会、中国人民政治协商会议全国委员会、中华人民共和国中央军事委员会所在地，是中部战区司令部驻地。</p>
    </section>
    <section id='gloucester'>
      <h3>天津</h3>
      <p>天津，简称津，中华人民共和国直辖市、国家中心城市、超大城市、[1-2]  环渤海地区经济中心、首批沿海开放城市，全国先进制造研发基地、北方国际航运核心区、金融创新运营示范区、改革开放先行区。</p>
    </section>
    <section id='caulfield-gardens'>
      <h3>开封</h3>
      <p>开封，古称老丘、大梁、陈留、东京、汴京、汴梁等，简称汴，是河南省地级市，中国六大古都之一、八朝古都，国务院首批公布的国家历史文化名城，地处中原腹地、河南省东部、黄河下游南岸之滨，西与省会郑州市毗邻，东与商丘市相连，南接许昌市和周口市，北隔黄河与新乡市相望，为河南省新兴副中心城市，国家区域中心城市，中原城市群核心发展区城市，郑州大都市区核心成员城市。开封自贸区也是中国（河南）自由贸易试验区三大片区之一。</p>
    </section>
    <section id='telegraph'>
      <h3>绩溪</h3>
      <p>绩溪县位于安徽省南部，徽州六县之一，徽州文化的发源地之一，被称为“徽厨之乡”，“无徽无成镇，无绩不成街”，现隶属于宣城市管辖。[1]  绩溪位于皖南山区，地处黄山山脉和西天目山山脉结合带，长江水系与钱塘江水系分水岭，东与临安市交界，北与宁国市、旌德县毗连，西与旌德县、黄山市黄山区及歙县接壤，南与歙县相邻；介于北纬29°57′～30°20′，东经118°20′～118°55′之间；县境总面积1126平方公里；辖辖8个镇、3个乡；总人口17.68万人（2014年）。2015年，绩溪县完成地区生产总值57亿元。</p>
    </section>
    <section id='charing-cross'>
      <h3>成都</h3>
      <p>成都，简称蓉，四川省省会、副省级市，中国西南地区的科技、商贸、金融中心和交通枢纽[1]  ，国家重要的高新技术产业基地、商贸物流中心和综合交通枢纽、西部地区重要的中心城市</p>
    </section>
  </div>
</template>
<script>
  import {mapState} from 'vuex'

  export default {
    name: 'MapActive',
    data () {
      return {
        activeChapterName: 'baker',
        chapters: {
          'baker': {
            bearing: 0,
            center: [113.62, 34.75],
            zoom: 12,
            pitch: 20
          },
          'aldgate': {
            duration: 6000,
            center: [113.38, 34.54],
            bearing: 0,
            zoom: 10,
            pitch: 90
          },
          'london-bridge': {
            bearing: 0,
            center: [114.30, 30.59],
            zoom: 13,
            speed: 0.6,
            pitch: 40
          },
          'woolwich': {
            bearing: 0,
            center: [116.43, 39.93],
            zoom: 12.3
          },
          'gloucester': {
            bearing: 0,
            center: [117.21, 39.11],
            zoom: 15.3,
            pitch: 20,
            speed: 0.5
          },
          'caulfield-gardens': {
            bearing: 0,
            center: [114.32, 34.79],
            zoom: 12.3
          },
          'telegraph': {
            bearing: 0,
            center: [118.73, 29.55],
            zoom: 17.3,
            pitch: 40
          },
          'charing-cross': {
            bearing: 0,
            center: [104.07, 30.65],
            zoom: 14.3,
            pitch: 20
          }
        }
      };
    },
    computed: {
      ...mapState({
        map: state => state.mapStore.boxView
      })
    },
    created(){
    },
    mounted(){
    },
    methods: {
      scrollEvent(event){
        let chapterNames = Object.keys(this.chapters);
        for (let i = 0; i < chapterNames.length; i++) {
          let chapterName = chapterNames[i];
          if (this.isElementOnScreen(chapterName)) {
            this.setActiveChapter(chapterName);
            break;
          }
        }
      }, setActiveChapter(chapterName) {
        if (chapterName === this.activeChapterName) return;
        this.map.flyTo(this.chapters[chapterName]);

        document.getElementById(chapterName).setAttribute('class', 'active');
        document.getElementById(this.activeChapterName).setAttribute('class', '');

        this.activeChapterName = chapterName;
      }, isElementOnScreen(id) {
        let element = document.getElementById(id);
        let bounds = element.getBoundingClientRect();
        return bounds.top < window.innerHeight && bounds.bottom > 0;
      }
    }
  };
</script>
<style scoped>
  .features {
    width: 35%;
    height: 100%;
    font-family: sans-serif;
    overflow-y: scroll;
    background-color: #fafafa;
    position: absolute;
    right: 0;
    top: 0;
  }

  section {
    padding: 50% 50px;
    line-height: 25px;
    border-bottom: 1px solid #ddd;
    opacity: 0.25;
    font-size: 13px;
  }

  section.active {
    opacity: 1;
  }

  section:last-child {
    border-bottom: none;
    margin-bottom: 200px;
  }
</style>
