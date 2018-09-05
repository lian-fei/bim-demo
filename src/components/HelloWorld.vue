<template>
  <div class="main">
    <div class="mainbox" >
      <ul class="clearfix">
        <li v-for="(item, i) in list" :key="i" :class="{current: i===0}" >{{item.name}}</li>
      </ul>
      <div class="echartsbox" id="echartsbox" ></div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts"
import option from '../modules/data.js'

export default {
  name: 'index',
  data () {
    return {
      list: [
        {name: '入口区群体分布'},
        {name: '购物区群体分布'},
        {name: '娱乐区群体分布'},
        {name: '餐饮区群体分布'},
        {name: '休闲区群体分布'},
        {name: '服务区群体分布'}
      ]
    }
  },
  mounted () {
    this.initEcharts()
  },
  methods: {
    initEcharts: function () {
      let myChart = echarts.init(document.getElementById('echartsbox'))
      myChart.setOption(option)

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.main{
  background: #000;
  padding:20px;
}
  .mainbox{
    width:900px;
    background: #000;
    
  } 
  .mainbox ul{
    color:#30a9ee;
    position: relative;
    top:3px;
    z-index:1;
    border-left:#4a5d59 solid 3px;
  }
  .mainbox ul li{
    float:left;
    line-height: 40px;
    padding:0 15px;
    text-align:center;
    border-bottom:transparent solid 3px;
    border-right:#4a5d59 solid 3px;
    border-top:#4a5d59 solid 3px;
    border-right:#4a5d59 solid 3px;
  }
  .mainbox ul li.current{
    border-bottom:#000 solid 3px;
  }
  .echartsbox{
    width:100%;
    height:400px;
    padding-top:50px;
    padding:20px;
    box-sizing: border-box;
    border:#4a5d59 solid 3px;
  }
</style>
