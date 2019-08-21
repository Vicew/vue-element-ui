<template>
  <div>
    <m-head></m-head>
    <div class="aside-content">
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
  .aside-content
    min-width 1200px
    display flex
</style>
