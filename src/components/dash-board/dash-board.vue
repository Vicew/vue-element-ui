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
          <!-- <table>
            <thead class="table-header">
              <tr>
                <th><div class="table-cell">被邀请人</div></th>
                <th><div class="table-cell">被邀请人邮件</div></th>
                <th><div class="table-cell">邀请人</div></th>
                <th><div class="table-cell">邀请时间</div></th>
                <th><div class="table-cell">状态</div></th>
              </tr>
            </thead>
            <tbody class="table-body">
              <tr>
                <td>
                  <div class="cell-wrapper">
                    <div class="cell-review">
                      <i class="iconfont iconavatar1"></i>
                      <span class="item-name">李经理</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="cell-wrapper">
                    hi@example.com
                  </div>
                </td>
                <td>
                  <div class="cell-wrapper">
                    <div class="cell-review">
                      <i class="iconfont iconavatar1"></i>
                      <span class="item-name">王总</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="cell-wrapper">
                      2018年3月12日
                  </div>
                </td>
                <td>
                  <div class="cell-wrapper">
                    <el-button type="primary">已发送</el-button>
                  </div>
                </td>
              </tr>
              <tr v-for="index in Array(6)" :key="index">
                <td>
                  <div class="cell-wrapper">
                    <div class="cell-review">
                      <i class="iconfont iconavatar1"></i>
                      <span class="item-name">李经理</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="cell-wrapper">
                    hi@example.com
                  </div>
                </td>
                <td>
                  <div class="cell-wrapper">
                    <div class="cell-review">
                      <i class="iconfont iconavatar1"></i>
                      <span class="item-name">王总</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="cell-wrapper">
                      2018年3月12日
                  </div>
                </td>
                <td>
                  <div class="cell-wrapper">
                    <el-button type="warning">等待接受</el-button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table> -->
        </div>
      </div>
    </div>
    <div class="chart-block">
      <div class="chart-block-locate">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 4.5,
      tableData: [{
        date: '2018年3月12日',
        beInvited: '李经理',
        inviter: '王总',
        beInvitedIcon: 'iconfont iconavatar1',
        inviterIcon: 'iconfont iconavatar2',
        email: 'hi@example.com',
        type: 'primary'
      }, {
        date: '2018年3月12日',
        beInvited: '许经理',
        inviter: '罗总',
        beInvitedIcon: 'iconfont iconavatar1',
        inviterIcon: 'iconfont iconavatar2',
        email: 'hi@example.com',
        type: 'danger'
      }, {
        date: '2018年3月12日',
        beInvited: '王经理',
        inviter: '潘总',
        beInvitedIcon: 'iconfont iconavatar1',
        inviterIcon: 'iconfont iconavatar2',
        email: 'hi@example.com',
        type: 'warning'
      }, {
        date: '2018年3月12日',
        beInvited: '张经理',
        inviter: '王总',
        beInvitedIcon: 'iconfont iconavatar1',
        inviterIcon: 'iconfont iconavatar2',
        email: 'hi@example.com',
        type: 'info'
      }, {
        date: '2018年3月12日',
        beInvited: '张经理',
        inviter: '王总',
        beInvitedIcon: 'iconfont iconavatar1',
        inviterIcon: 'iconfont iconavatar2',
        email: 'hi@example.com',
        type: 'info'
      }, {
        date: '2018年3月12日',
        beInvited: '张经理',
        inviter: '王总',
        beInvitedIcon: 'iconfont iconavatar1',
        inviterIcon: 'iconfont iconavatar2',
        email: 'hi@example.com',
        type: 'info'
      }, {
        date: '2018年3月12日',
        beInvited: '张经理',
        inviter: '王总',
        beInvitedIcon: 'iconfont iconavatar1',
        inviterIcon: 'iconfont iconavatar2',
        email: 'hi@example.com',
        type: 'info'
      }]
    }
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
    //       table
    //         border-collapse collapse
    //         border-spacing 0
    //         width 100%
    //         background #fff
    //         .table-header
    //           overflow auto
    //           font-size 14px
    //           th
    //             padding 0
    //             background #ebecf0
    //             color #333
    //             text-align left
    //             font-weight 400
    //             border-bottom 1px solid #dcdee3
    //             .table-cell
    //               padding 12px 16px
    //               overflow hidden
    //               text-overflow ellipsis
    //               word-break break-all
    //         .table-body
    //           font-size 14px
    //           td
    //             padding 0
    //             border-bottom 1px solid #dcdee3
    //             .cell-wrapper
    //               padding 12px 16px
    //               overflow hidden
    //               text-overflow ellipsis
    //               word-break break-all
    //             .cell-wrapper >>> .el-button--primary
    //                 width 76px
    //                 height 29px
    //             .cell-wrapper >>> .el-button--warning
    //                 width 76px
    //                 height 29px
    //             .cell-wrapper >>> .el-button
    //                 padding 6px !important
    //                 font-size 13px
    //               .cell-review
    //                 display flex
    //                 align-items center
    //                 .iconavatar1
    //                   font-size 30px
    //                   margin-right 10px
    .chart-block
      width 100%
      display flex
      height 486px
      align-items center
      justify-content center
      .chart-block-locate
        background-color white
        border-radius 6px
        width 97.3%
        height 456px
</style>