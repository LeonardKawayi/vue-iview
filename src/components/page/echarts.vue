<template>

<div class="echarts">
    <div class="echarts-item">
        <IEcharts :option="pie"></IEcharts>
    </div>
    <div class="echarts-item">
        <IEcharts :option="pie_radius"></IEcharts>
    </div>
    <div class="echarts-item">
        <IEcharts :option="line"></IEcharts>
    </div>
    <div class="echarts-item">
        <IEcharts :option="bar"></IEcharts>
    </div>
    <div class="echarts-item">
      <IEcharts :option="dubble_yAxis"></IEcharts>
    </div>
</div>

</template>

<script>

import IEcharts from 'vue-echarts-v3';

export default {
    components: {
        IEcharts
    },
    data: () => ({
        line: {
            title: {
                text: '曲线图'
            },
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: "销量",
                type: "line",
                data: [5, 20, 36, 10, 10, 20]
            }]
        },
        bar: {
            title: {
                text: '柱状图'
            },
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: "销量",
                type: "bar",
                data: [5, 20, 36, 10, 10, 20]
            }]
        },
        pie: {

            title: {
                text: '饼状图',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋"]
            },
            series: [{
                name: '销量',
                type: 'pie',
                radius: '55%',
                center: ['50%', '50%'],
                data: [{
                    value: 335,
                    name: '衬衫'
                }, {
                    value: 310,
                    name: '羊毛衫'
                }, {
                    value: 234,
                    name: '雪纺衫'
                }, {
                    value: 135,
                    name: '裤子'
                }, {
                    value: 548,
                    name: '高跟鞋'
                }],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }]
        },
        pie_radius: {
            title: {
                text: '环形图',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋"]
            },
            series: [{
                name: '销量',
                type: 'pie',
                radius: ['40%', '60%'],
                data: [{
                    value: 335,
                    name: '衬衫'
                }, {
                    value: 310,
                    name: '羊毛衫'
                }, {
                    value: 234,
                    name: '雪纺衫'
                }, {
                    value: 135,
                    name: '裤子'
                }, {
                    value: 548,
                    name: '高跟鞋'
                }],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }]
        },
        dubble_yAxis: {
          title: {
            text: '双纵坐标',
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)",
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#5793f3'
              }
            }
          },
          toolbox: {
            right: '5%',
            feature: {
              magicType: {show: true, type: 'line'},
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          legend: {
            data: ["销量", "需求百分比"],
            left: 'left'
          },
          xAxis: [
            {
              type: 'category',
              data: ['2018-05-01', '2018-05-02', '2018-05-03', '2018-05-04', '2018-05-05', '2018-05-06', '2018-05-07', '2018-05-08', '2018-05-09'],
              splitLine: {show: false},
              axisTick: {
                alignWithLabel: true
              },
              axisLine: {
                onZero: false,
                lineStyle: {
                  color: '#d14a61'
                }
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '数量',
              min: 0,
              spiltNumber: 5,
              axisLabel: {
                formatter: '{value} '
              },
              splitLine: {show: false}
            },
            {
              type: 'value',
              name: '百分比',
              min: 0,
              spiltNumber: 5,
              axisLabel: {
                formatter: '{value} %'
              }
            }
          ],
          dataZoom: [{
            type: 'inside',
            start: 0,
            end: 100
          }, {
            start: 0,
            end: 10,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '75%',
            handleStyle: {
              color: '#fff',
              shadowBlur: 3,
              shadowColor: 'rgba(0, 0, 0, 0.8)',
              shadowOffsetX: 2,
              shadowOffsetY: 2
            }
          }],
          series: [
            {
              name: '销量',
              type: 'line',
              smooth: true,
              data: [100, 125, 150, 175, 160, 125, 150, 175, 200]
            },
            {
              name: '百分比',
              type: 'line',
              yAxisIndex: 1,
              smooth: true,
              data: ['75', '80', '85', '90', '87', '82', '78', '83', '86']
            }
          ]
        }
    })
}
</script>

<style scoped>
  .echarts {
    margin-left: 20px;
  }
  .echarts-item {
    float: left;
    width: 500px;
    height: 400px;
  }

</style>
