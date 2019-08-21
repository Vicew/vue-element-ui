<template>
 <div class="m-aside">
   <div class="aside-logo">
     <a href="#">LOGO</a>
   </div>
   <!-- <el-row class="tac"> -->
    <!-- <el-col :span="3"> -->
      <el-menu
        default-active="1-1"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index='1'>
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>Dashboard</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index='1-1'>数据概况</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index='2'>
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>邀请概况</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index='2-1'>邀请列表</el-menu-item>
            <el-menu-item index='2-2'>评测团队</el-menu-item>
            <el-menu-item index='2-3'>新增成员</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index='3'>
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>邀评设置</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index='3-1'>话题列表</el-menu-item>
            <el-menu-item index='3-2'>新增话题</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index='4'>
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>基本设置</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index='4-1'>个人设置</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    <!-- </el-col> -->
  <!-- </el-row> -->
 </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .m-aside
    position fixed
    width 240px
    height 100%
    z-index 1000
    background-color #545c64
    .aside-logo
      display flex
      align-items center
      justify-content center
      height 62px
      box-shadow 0 1px 4px rgba(0,21,41,.5)
      a
        display block
        max-width 180px
        overflow hidden
        color #fff
        font-weight 700
        font-size 28px
        white-space nowrap
        text-decoration none
        text-overflow ellipsis
        &:hover
          color red
  .m-aside >>> .el-menu-vertical-demo
    padding-top 18px
    border-right 0
    .el-menu
      border-right 0
</style>