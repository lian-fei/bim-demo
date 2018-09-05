let option = {
    title: {
        text: ''
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        icon: "icon",
        orient: 'horizontal', // 'vertical'
        x: 'right',
        data:['老年男性','老年女性','成年男性','成年女性','儿童'],
        textStyle:{//图例文字的样式
            color:'#fff',
            fontSize:16
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        show:false,
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['0:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00', ],
        axisLine: {
            lineStyle: {
                color:'#4a5d59',
                width:3
            }
        }
    },
    yAxis: {
        type: 'value',
        splitLine:{show: false},//去除网格线
        axisLine: {
            lineStyle: {
                color:'#4a5d59',
                width:3
            }
        }
    },
    series: [
        {
            name:'老年男性',
            type:'line',
            stack: '总量1',
            smooth: 0.5,
            data:[120, 132, 101, 134, 90, 230, 210, 150, 232, 201, 154, 190, 330]
        },
        {
            name:'老年女性',
            type:'line',
            stack: '总量2',
            smooth: 0.5,
            data:[220, 182, 191, 234, 290, 330, 310, 520, 332, 601, 534, 690, 530]
        },
        {
            name:'成年男性',
            type:'line',
            // stack: '总量',
            smooth: 0.5,
            data:[150, 232, 201, 154, 190, 330, 410, 320, 332, 301, 334, 390, 330]
        },
        {
            name:'成年女性',
            type:'line',
            stack: '总量3',
            smooth: 0.5,
            data:[320, 332, 301, 334, 390, 330, 320, 401, 300, 325, 421, 465, 501]
        },
        {
            name:'儿童',
            type:'line',
            stack: '总量4',
            smooth: 0.5,
            data:[520, 332, 601, 534, 690, 530, 793, 777, 831, 734, 693, 634, 801]
        }
    ],
    color: ["#017f7e", "#fff", "#898989", "#0b6abe", "#31a5e2"]
}
export default option