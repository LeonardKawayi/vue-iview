<style scoped>
  .message {
    width: 50%;
  }

  .nomal {
    font-size: 15px;
    margin-top: 10px;
  }

  .nomal-select {
    margin-top: 10px;
  }

</style>
<template>
  <div class="message">
    <ul class="nomal">
      <span>组合使用</span>
    </ul>
    <ul class="nomal-select">
      <RadioGroup v-model="phone">
        <Radio label="apple">
          <Icon type="social-apple"></Icon>
          <span>Apple</span>
        </Radio>
        <Radio label="android">
          <Icon type="social-android"></Icon>
          <span>Android</span>
        </Radio>
        <Radio label="windows">
          <Icon type="social-windows"></Icon>
          <span>Windows</span>
        </Radio>
      </RadioGroup>
      <RadioGroup v-model="animal">
        <Radio label="金斑蝶"></Radio>
        <Radio label="爪哇犀牛"></Radio>
        <Radio label="印度黑羚"></Radio>
      </RadioGroup>
    </ul>
    <ul class="nomal">
      <span>不可用(diasbled)</span>
    </ul>
    <ul class="nomal-select">
      <Radio v-model="disabledSingle" disabled>Radio</Radio>
    </ul>

    <ul class="nomal">
      <span>按钮样式</span>
    </ul>
    <ul class="nomal-select">
      <RadioGroup v-model="button1" type="button">
        <Radio label="北京"></Radio>
        <Radio label="上海"></Radio>
        <Radio label="深圳"></Radio>
        <Radio label="杭州"></Radio>
      </RadioGroup>
      <RadioGroup v-model="button2" type="button">
        <Radio label="北京"></Radio>
        <Radio label="上海" disabled></Radio>
        <Radio label="深圳"></Radio>
        <Radio label="杭州"></Radio>
      </RadioGroup>
      <RadioGroup v-model="button3" type="button">
        <Radio label="北京" disabled></Radio>
        <Radio label="上海" disabled></Radio>
        <Radio label="深圳" disabled></Radio>
        <Radio label="杭州" disabled></Radio>
      </RadioGroup>
    </ul>
  </div>

</template>

<script>

  export default {
    data() {
      return {
        phone: 'apple',
        animal: '爪哇犀牛',
        button1: '北京',
        button2: '北京',
        button3: '北京',
        disabledSingle: ''
      }
    },
    methods: {

    }
  }
</script>
