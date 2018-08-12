<style scoped>
  .alert {
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
  <div class="alert">
    <Alert show-icon>An info prompt</Alert>
    <Alert type="success" show-icon>A success prompt</Alert>
    <Alert type="warning" show-icon>A warning prompt</Alert>
    <Alert type="error" show-icon>An error prompt</Alert>
    <Alert show-icon>
      An info prompt
      <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>
    </Alert>
    <Alert type="success" show-icon>
      A success prompt
      <span slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </span>
    </Alert>
    <Alert type="warning" show-icon>
      A warning prompt
      <template slot="desc">
        Content of prompt. Content of prompt. Content of prompt.
      </template>
    </Alert>
    <Alert type="error" show-icon>
      An error prompt
      <span slot="desc">
            Custom error description copywriting.
        </span>
    </Alert>
    <Alert show-icon>
      Custom icon
      <Icon type="ios-lightbulb-outline" slot="icon"></Icon>
      <template slot="desc">Custom icon copywriting. Custom icon copywriting. Custom icon copywriting. </template>
    </Alert>
    <Alert closable>An info prompt</Alert>
    <Alert type="success" show-icon closable>
      A success prompt
      <span slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </span>
    </Alert>
    <Alert type="warning" closable>
      Custom closing content
      <span slot="close">No longer prompt</span>
    </Alert>
  </div>

</template>

<script>

  export default {
    data() {
      return {
      }
    },
    methods: {

    }
  }
</script>
