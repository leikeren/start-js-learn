<template>
  <div v-loading="loading" class="example">
   <p> {{ msg }} </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello world Vue!',
    }
  },
}
</script>

<style>
.example {
  color: red;
}
</style>