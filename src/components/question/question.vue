<template>
  <div>
    <div class="input-locate">
      <el-input v-model="input" placeholder="请输入内容"><span>2222</span></el-input>
      <span class="question">哈哈哈</span>
      <el-button @click="fangdou('222')">防抖</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      fangdou: ''
    }
  },
  created() {
    this.fangdou = this.debounce(this.returnOne)
  },
  methods: {
    returnOne(e) {
      console.log(e)
    },
    debounce(func, wait = 1000) {
      let timer = 0
      // 这里返回的函数是每次用户实际调用的防抖函数
      // 如果已经设定过定时器了就清空上一次的定时器
      // 开始一个新的定时器，延迟执行用户传入的方法
      return function(...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this, args)
        }, wait)
      }
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  // .input-locate
  //   height 200px
  // .input-locate >>> .el-input
  //   font-size 20px
  // .question // 样式穿透样式写在哪里最合适 写在这里破坏嵌套关系
  //   color red
  .input-locate >>> .el-input
    font-size 20px
  .input-locate
    height 200px
    .question
      color red
</style>
