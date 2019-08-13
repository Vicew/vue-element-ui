<template>
  <div>
    <div class="head">
      <m-aside></m-aside>
      <m-head></m-head>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import MHead from 'components/m-head/m-head'
import MAside from 'components/m-aside/m-aside'

export default {
  components: {
    MHead,
    MAside
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .head
    display flex
</style>
