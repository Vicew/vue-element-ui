<template>
  <div class="head-locate">
    <a href="">LOGO</a>
    <div class="head-navbar">
      <div class="head-menu"><i class="justify el-icon-s-home"></i><span>首页</span></div>
      <div class="head-menu"><i class="justify el-icon-s-opportunity"></i><span>反馈</span></div>
      <div class="head-menu"><i class="justify el-icon-question"></i><span>帮助</span></div>
      <el-dropdown>
        <div class="head-user">
          <img width="40" height="40" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556871389161&di=37cea73f78200fcf22242b0ac8f67ac8&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F7f44cf839ef226956a92b15a4db61ed587e6253419e3c-EC0RVC_fw658">
          <div class="self">
            <span>小天才</span>
            <br>
            <span>潘显调</span>
          </div>
          <i class="el-icon-arrow-down"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>退出登录</el-dropdown-item>
          <el-dropdown-item>个人设置</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .head-locate
    display flex
    align-items center
    justify-content space-between
    width 100%
    min-width 1200px
    height 62px
    background #fff
    box-shadow 0 1px 4px rgba(0,21,41,.08)
    .head-navbar
      height 44px
      display flex
      .head-menu
        height 42px
        width 92px
        display flex
        align-items center
        justify-content center
        .justify
          margin-right 8px
      .head-user
        display flex
        align-items center
        img
          margin-right 12px
          border-radius 4px
        .self
          margin-right 12px
        .el-icon-arrow-down
          margin-right 10px
</style>
