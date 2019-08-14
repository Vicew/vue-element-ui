<template>
  <div style="height:100%">
    <m-head></m-head>
    <div class="head">
      <m-aside></m-aside>
      <router-view></router-view>
    </div>
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
    height 93%
    display flex
</style>
