<template>
  <div>
    <m-head></m-head>
    <aside></aside>
    <router-view></router-view>
  </div>
</template>

<script>
import MHead from 'components/m-head/m-head'
import Aside from 'components/aside/aside'

export default {
  components: {
    MHead,
    Aside
  }
}
</script>

<style>
</style>
