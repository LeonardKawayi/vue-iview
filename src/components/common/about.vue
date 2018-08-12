<template>
<div class="about">
    <vue-markdown># VUE + iView 介绍</vue-markdown>
    <vue-markdown>-------------------</vue-markdown>
    <vue-markdown>### iView 是一套基于 Vue.js 的开源 UI 组件库，主要服务于 PC 界面的中后台产品。</vue-markdown>
    <vue-markdown>### VUE官方网站： [VUE官方网站](https://cn.vuejs.org/v2/guide/installation.html)</vue-markdown>
    <vue-markdown>### iView官网： [iView官网](https://www.iviewui.com/)</vue-markdown>
    <br/><br/>
    <vue-markdown># 环境搭建</vue-markdown>
    <vue-markdown>-------------------</vue-markdown>
    <vue-markdown>### vue开发环境搭建： [开发环境搭建](https://blog.csdn.net/weixin_38316338/article/details/80608450)</vue-markdown>
    <vue-markdown>### vue之Axios与Mock： [Axios与Mock](https://blog.csdn.net/weixin_38316338/article/details/80619183)</vue-markdown>
    <br/><br/>
    <vue-markdown># 目前实现的功能及用到的组件</vue-markdown>
    <vue-markdown>-------------------</vue-markdown>
    <vue-markdown>### 页面： [iView2.0--layout](https://www.iviewui.com/components/layout)</vue-markdown>
    <vue-markdown>### 表单： [iView2.0--Form](https://www.iviewui.com/components/form)</vue-markdown>
    <vue-markdown>### 表格： [iView2.0--Table](https://www.iviewui.com/components/table)</vue-markdown>
    <vue-markdown>### 其他： [iView2.0--其他](https://www.iviewui.com/components)</vue-markdown>
    <vue-markdown>### 图表： [百度Echarts](http://echarts.baidu.com)&amp[Vue-Echarts](https://github.com/xlsdg/vue-echarts-v3)</vue-markdown>
    <vue-markdown>### 文件上传： [使用iView自带的文件上传组件](https://www.iviewui.com/components/upload)</vue-markdown>
    <br/><br/>
</div>

</template>

<script>

import VueMarkdown from 'vue-markdown'
export default {
    components: {
        VueMarkdown
    }
}
</script>
<style scoped>

  .about {
    margin: 10px 20px 0 30px;
    color: black;
  }

</style>
