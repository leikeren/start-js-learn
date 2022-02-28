<template>
  <div class="loading-wrapper">
      <div class="loading-content">
          <p class="title"> {{ title }} </p>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            title: '正在加载中...'
        }
    },
}
</script>

<style scoped>
.title {
    color: #FF0000;
}
</style>