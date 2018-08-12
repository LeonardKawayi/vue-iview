<style media="screen">
  div > h1 {
    margin-bottom: 20px;
  }

  .upload {
    margin-top: 20px;
  }
</style>
<template>
    <div>
      <div>
        <h1>拖拽上传</h1>
        <Upload
            multiple
            type="drag"
            action="//jsonplaceholder.typicode.com/posts/">
            <div style="padding: 20px 0">
                <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                <p>点击或将文件拖拽到这里上传</p>
            </div>
        </Upload>
      </div>
      <div class="upload">
        <h1>点击上传</h1>
        <Upload action="//jsonplaceholder.typicode.com/posts/">
          <Button type="ghost" icon="ios-cloud-upload-outline">Upload files</Button>
        </Upload>
      </div>
    </div>
</template>
<script>
    export default {

    }
</script>
