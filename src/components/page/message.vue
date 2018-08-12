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
      <span>普通提示</span>
    </ul>
    <ul class="nomal-select">
      <Button type="primary" @click="info">Display info prompt</Button>
    </ul>
    <ul class="nomal">
      <span>提示类型</span>
    </ul>
    <ul class="nomal-select">
      <Button @click="success">显示成功消息</Button>
      <Button @click="warning">显示警告消息</Button>
      <Button @click="error">显示错误消息</Button>
    </ul>
    <ul class="nomal">
      <span>可关闭 </span>
    </ul>
    <ul class="nomal-select">
      <Button @click="closable">可关闭消息</Button>
    </ul>
  </div>

</template>

<script>

  export default {
    data() {
      return {
      }
    },
    methods: {
      info () {
        this.$Message.info('This is a info tip');
      },
      success () {
        this.$Message.success('This is a success tip');
      },
      warning () {
        this.$Message.warning('This is a warning tip');
      },
      error () {
        this.$Message.error('This is an error tip');
      },
      closable () {
        this.$Message.info({
          content: 'Tips for manual closing',
          duration: 10,
          closable: true
        });
      }
    }
  }
</script>
