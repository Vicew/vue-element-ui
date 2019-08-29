<template>
  <div class="dash-board">
    <div class="evaluation-grade">
      <div class="evaluation-grade-locate">
        <div class="content">
          <h4>评价概况</h4>
          <div class="over-view">388<span class="over-view-unit">分</span></div>
          <div class="over-detail">
            <div>
              <div class="over-detail-count">+21.8%</div>
              <div class="over-detail-type">好评环比增长比例</div>
            </div>
            <div>
              <div class="over-detail-count">+10.2%</div>
              <div class="over-detail-type">好评同比增长比例</div>
            </div>
            <div>
              <div class="over-detail-count">+52</div>
              <div class="over-detail-type">好评环比增长数量</div>
            </div>
          </div>
          <div class="link"></div>
          <div class="title">扩展链接</div>
          <div class="el-link-all">
            <el-link type="primary">微博</el-link>
            <el-link type="primary">知乎</el-link>
            <el-link type="primary">头条</el-link>
          </div>
        </div>
      </div>
      <div class="evaluation-grade-locate">
        <div class="content">
          <h4>评分概况</h4>
          <el-rate
            v-model="value"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
          </el-rate>
          <div class="status">
            <span class="status-text">5 星</span>
            <div class="line"></div>
            <span>480</span>
          </div>
          <div class="status-other">
            <span class="status-text-other">4 星</span>
            <div class="line-four"></div>
            <span>270</span>
          </div>
          <div class="status-other">
            <span class="status-text-other">3 星</span>
            <div class="line-three"></div>
            <span>90</span>
          </div>
          <div class="status-other">
            <span class="status-text-other">2 星</span>
            <div class="line-two"></div>
            <span>80</span>
          </div>
          <div class="status-other">
            <span class="status-text-other">1 星</span>
            <div class="line-one"></div>
            <span>60</span>
          </div>
        </div>
      </div>
    </div>
    <div class="favourable-invitation-seniority">
      <div class="favourable-invitation-seniority-locate">
        <div class="content">
            <h4>好评比率</h4>
            <div class="rating-wrapper">
              <span class="rating-score">630</span>
              <i class="iconfont iconsmile"></i>
              <span class="rating-positive">67%</span>
            </div>
            <div class="rating-desc">好评</div>
            <div class="divide-line"></div>
            <div class="rating-wrapper">
              <span class="rating-score">310</span>
              <i class="iconfont icontear-face"></i>
              <span class="rating-positive">33%</span>
            </div>
            <div class="rating-desc">差评</div>
        </div>
      </div>
      <div class="favourable-invitation-seniority-locate">
        <div class="content">
          <h4>邀评目标</h4>
          <div class="progress">
            <el-progress type="circle" :percentage="55"></el-progress>
          </div>
          <div class="review">已经完成一半目标，加油！</div>
        </div>
      </div>
      <div class="favourable-invitation-seniority-locate">
        <div class="content">
          <h4>邀评排行</h4>
          <div class="leader-board-item">
            <i class="iconfont iconavatar1"></i>
            <span class="item-name">李总</span>
            <span>912 份</span>
          </div>
          <div class="leader-board-item">
            <i class="iconfont iconavatar2"></i>
            <span class="item-name">王总</span>
            <span>675 份</span>
          </div>
          <div class="leader-board-item">
            <i class="iconfont iconavatar3"></i>
            <span class="item-name">赵总</span>
            <span>588 份</span>
          </div>
          <div class="leader-board-item">
            <i class="iconfont iconavatar4"></i>
            <span class="item-name">马总</span>
            <span>462 份</span>
          </div>
          <div class="leader-board-item">
            <i class="iconfont iconavatar5"></i>
            <span class="item-name">雷总</span>
            <span>376 份</span>
          </div>
        </div>
      </div>
    </div>
    <div class="container-block">
      <div class="container-block-locate">
        <div class="content">
          <h4>最近邀评数据</h4>
            <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
                label="被邀请人"
                width="330">
                <template slot-scope="scope">
                  <i :class="scope.row.beInvitedIcon"></i>
                  <span style="margin-left: 10px">{{ scope.row.beInvited }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="被邀请人邮件"
                width="367">
                <template slot-scope="scope">
                  <span>{{ scope.row.email }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="邀请人"
                width="294">
                <template slot-scope="scope">
                  <i :class="scope.row.inviterIcon"></i>
                  <span>{{ scope.row.inviter }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="邀请时间"
                width="294">
                <template slot-scope="scope">
                  <span>{{ scope.row.date }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="状态"
                width="284">
                <template slot-scope="scope">
                  <el-button :type="scope.row.type">已发送</el-button>
                </template>
              </el-table-column>
            </el-table>
        </div>
      </div>
    </div>
    <div class="chart-block">
      <div class="chart-block-locate">
        <div class="content">
          <h4>图表数据</h4>
          <div class="near">近一月</div>
          <div class="detail">
            <div class="detail-display">
              <div class="count">135</div>
              <div class="status">
                <span class="line-one"></span>
                <span>已完成</span>
              </div>
            </div>
            <div class="detail-display">
              <div class="count">242</div>
              <div class="status">
                <span class="line-two"></span>
                <span>已邀请</span>
              </div>
            </div>
            <div class="detail-display">
              <div class="count">22</div>
              <div class="status">
                <span class="line-three"></span>
                <span>已回绝</span>
              </div>
            </div>
          </div>
          <highcharts class="highcharts" :defOptions="options" :styles="styles"></highcharts>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Highcharts from 'base/highcharts/highcharts'

const styles = {
  width: 1600,
  height: 350
}

const option = {
  title: {
    text: ''
  },
  chart: {
    type: 'column'
  },
  xAxis: {
    categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月'
    ]
  },
  yAxis: {
    title: {
      text: ''
    },
    // 标示线
    plotLines: [{
      value: 0,
      width: 1,
      color: '#808080'
    }]
  },
  tooltip: {
  },
  legend: {
    enabled: true //  禁用图例
  },
  credits: {
    enabled: false // 禁用版权信息
  },
  exporting: {
    enabled: false
  },
  series: [{
    name: '已完成',
    color: '#7695fc',
    data: [118, 128, 139, 181, 147, 120, 124, 135]
  }, {
    name: '已邀请',
    color: '#ee8280',
    data: [212, 223, 234, 299, 252, 235, 237, 242]
  }, {
    name: '已回绝',
    color: '#71d2a9',
    data: [12, 13, 24, 129, 122, 225, 117, 22]
  }]
}

export default {
  data() {
    return {
      value: 4.5,
      tableData: [],
      styles: styles,
      options: option
    }
  },
  created() {
    this._getTableData()
  },
  methods: {
    _getTableData() {
      axios.post('https://www.easy-mock.com/mock/5d5e38b76d7b847d9d307392/example/upload').then((res) => {
        this.tableData = res.data.data
      })
    }
  },
  components: {
    Highcharts
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .dash-board
    background-color #eee
    width 100%
    margin-top 65px
    margin-left 240px
    .evaluation-grade
      width 100%
      height 285px
      display flex
      align-items center
      justify-content space-evenly
      .evaluation-grade-locate
        background-color white
        border-radius 6px
        width 48%
        height 255px
        .content
          padding 20px
          margin-bottom 20px
          h4
            height 16px
            line-height 16px
            font-size 16px
            color rgb(51, 51, 51)
            font-weight bold
            margin 0px 0px 20px
            padding 0px
          .over-view
            margin-top 25px
            font-size 30px
            span
              font-size 18px
          .over-detail
            display flex
            justify-content space-between
            margin-top 10px
            .over-detail-count
              font-size 18px
            .over-detail-type
              margin-top 5px
              color #666
              font-size 12px
          .link
            margin-top 20px
            padding-top 20px
            border-top 1px solid #eee
          .title
            color #666
            font-size 12px
          .el-link-all
            margin-top 10px
            .el-link
              margin-right 5px
        .content >>> .el-rate__text
          font-size 30px
          float left
          padding-right 13px
        .content >>> .el-rate__icon
          font-size 26px
        .status
          display flex
          align-items center
          margin-top 30px
          .status-text
            margin-right 10px
          .line
            height 5px
            margin-right 5px
            width 85%
            background-color rgb(68, 126, 255)
        .status-other
          display flex
          align-items center
          margin-top 10px
          .status-text-other
            margin-right 10px
          .line-four
            height 5px
            margin-right 5px
            width 65%
            background-color rgb(247, 218, 71)
          .line-three
            height 5px
            margin-right 5px
            width 45%
            background-color rgb(88, 202, 154)
          .line-two
            height 5px
            margin-right 5px
            width 35%
            background-color rgb(238, 112, 109)
          .line-one
            height 5px
            margin-right 5px
            width 25%
            background-color rgb(153, 153, 153)
    .favourable-invitation-seniority
      width 100%
      display flex
      align-items center
      justify-content space-evenly
      .favourable-invitation-seniority-locate
        background-color white
        border-radius 6px
        width 31.5%
        height 316px
        .content
          padding 20px
          margin-bottom 20px
          h4
            height 16px
            line-height 16px
            font-size 16px
            color rgb(51, 51, 51)
            font-weight bold
            margin 0px 0px 20px
            padding 0px
          .rating-wrapper
            padding 15px 0
            display flex
            justify-content center
            align-items center
            .rating-score
              font-size 36px
            .iconsmile
              color #2ecc71
              width 48px
              font-size 48px
              margin 0 20px
            .icontear-face
              color #e74c3c
              width 48px
              font-size 48px
              margin 0 20px
            .rating-positive
              color #2ecc71
              font-size 26px
          .rating-desc
            padding-bottom 15px
            color #999
            text-align center
        .divide-line
          width 100px
          margin 0 auto
          border-top 1px solid #eee
        .progress
          padding 30px 0 20px 0
          text-align center
        .progress >>> .el-progress__text
          font-size 30px !important
        .review
          text-align center
        .leader-board-item
          margin-top 10px
          display flex
          justify-content center
          align-items center
          .iconfont
            font-size 30px
            margin-right 15px
            overflow hidden
            border-radius 50%
          .item-name
            flex 1
    .container-block
      width 100%
      display flex
      height 605px
      align-items center
      justify-content center
      .container-block-locate
        background-color white
        border-radius 6px
        width 97.3%
        height 575px
        .content
          padding 20px
          margin-bottom 20px
          h4
            height 16px
            line-height 16px
            font-size 16px
            color rgb(51, 51, 51)
            font-weight bold
            margin 0px 0px 20px
            padding 0px
        .content >>> .is-leaf
          background-color #ebecf0
        .content >>> .el-table::before
          width 1569px
        .content >>> .iconavatar1:before
          font-size 30px
        .content >>> .iconavatar2:before
          font-size 30px
    .chart-block
      width 100%
      display flex
      height 606px
      align-items center
      justify-content center
      .chart-block-locate
        background-color white
        border-radius 6px
        width 97.3%
        height 576px
        .content
          padding 20px 20px 0 20px
          h4
            height 16px
            line-height 16px
            font-size 16px
            color rgb(51, 51, 51)
            font-weight bold
            margin 0px 0px 20px
            padding 0px
          .near
            color #666
            font-size 12px
          .detail
            display flex
            margin-top 10px
            .detail-display
              margin-right 50px
              .count
                font-size 30px
              .status
                display flex
                align-items center
                .line-one
                  background-color rgb(94, 131, 251)
                  display inline-block
                  width 15px
                  height 3px
                  margin-right 5px
                .line-two
                  background-color rgb(238, 112, 109)
                  display inline-block
                  width 15px
                  height 3px
                  margin-right 5px
                .line-three
                  background-color rgb(88, 202, 154)
                  display inline-block
                  width 15px
                  height 3px
                  margin-right 5px
          .highcharts
            margin-top 35px
</style>