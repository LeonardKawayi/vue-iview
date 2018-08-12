<style scoped>
  .tag {
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
  <div class="tag">
    <ul class="nomal">
      <span>各种颜色</span>
    </ul>
    <ul class="nomal-select">
      <Tag closable color="blue">标签一</Tag>
      <Tag closable color="green">标签二</Tag>
      <Tag closable color="red">标签三</Tag>
      <Tag closable color="yellow">标签四</Tag>
      <br><br>
      <Tag type="border" closable color="blue">标签一</Tag>
      <Tag type="border" closable color="green">标签二</Tag>
      <Tag type="border" closable color="red">标签三</Tag>
      <Tag type="border" closable color="yellow">标签四</Tag>
      <br><br>
      <Tag type="dot" closable color="blue">标签一</Tag>
      <Tag type="dot" closable color="green">标签二</Tag>
      <Tag type="dot" closable color="red">标签三</Tag>
      <Tag type="dot" closable color="yellow">标签四</Tag>
      <br><br>
      <Tag closable color="#EF6AFF" checkable>标签一</Tag>
      <Tag type="border" closable color="#EF6AFF" checkable>标签二</Tag>
      <Tag type="dot" closable color="#EF6AFF" checkable>标签三</Tag>
      <Tag closable color="default" checkable>标签四</Tag>
    </ul>
    <ul class="nomal">
      <span>可选择</span>
    </ul>
    <ul class="nomal-select">
      <Tag checkable color="blue">标签一</Tag>
      <Tag checkable color="green">标签二</Tag>
      <Tag checkable color="red">标签三</Tag>
      <Tag checkable color="yellow">标签四</Tag>
    </ul>
    <ul class="nomal">
      <span>动态添加和删除</span>
    </ul>
    <ul class="nomal-select">
      <Tag v-for="item in count" :key="item" :name="item" closable @on-close="handleClose2">标签{{ item + 1 }}</Tag>
      <Button icon="ios-plus-empty" type="dashed" size="small" @click="handleAdd">添加标签</Button>
    </ul>
  </div>

</template>

<script>

  export default {
    data() {
      return {
        count: [0, 1, 2]
      }
    },
    methods: {
      handleAdd () {
        if (this.count.length) {
          this.count.push(this.count[this.count.length - 1] + 1);
        } else {
          this.count.push(0);
        }
      },
      handleClose2 (event, name) {
        const index = this.count.indexOf(name);
        this.count.splice(index, 1);
      }
    }
  }
</script>
