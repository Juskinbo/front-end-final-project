<template>
  <div class="block text-center">
    <el-carousel height="50vh">
      <el-carousel-item v-for="img in images" :key="img">
        <h3 class="small justify-center" text="2xl"><img :src="img"></h3>
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="container">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>新闻动态</span>
              <el-button class="button" text>更多<el-icon>
                  <ArrowRightBold />
                </el-icon></el-button>
            </div>
          </template>
          <div v-for="o in news" :key="o.id" class="text item">
            <div class="title">{{ o.title }}</div>
            <div class="time">{{ o.time }}</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>通知公告</span>
              <el-button class="button" text>更多<el-icon>
                  <ArrowRightBold />
                </el-icon></el-button>
            </div>
          </template>
          <div v-for="o in news" :key="o.id" class="text item">
            <div class="title">{{ o.title }}</div>
            <div class="time">{{ o.time }}</div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>科研成果</span>
              <el-button class="button" text>更多<el-icon>
                  <ArrowRightBold />
                </el-icon></el-button>
            </div>
          </template>
          <div v-for="o in news" :key="o.id" class="text item">
            <div class="title">{{ o.title }}</div>
            <div class="time">{{ o.time }}</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>学术动态</span>
              <el-button class="button" text>更多<el-icon>
                  <ArrowRightBold />
                </el-icon></el-button>
            </div>
          </template>
          <div v-for="o in news" :key="o.id" class="text item">
            <div class="title">{{ o.title }}</div>
            <div class="time">{{ o.time }}</div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>创新创业</span>
              <el-button class="button" text>更多<el-icon>
                  <ArrowRightBold />
                </el-icon></el-button>
            </div>
          </template>
          <div v-for="o in news" :key="o.id" class="text item">
            <div class="title">{{ o.title }}</div>
            <div class="time">{{ o.time }}</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>信息公开</span>
              <el-button class="button" text>更多<el-icon>
                  <ArrowRightBold />
                </el-icon></el-button>
            </div>
          </template>
          <div v-for="o in news" :key="o.id" class="text item">
            <div class="title">{{ o.title }}</div>
            <div class="time">{{ o.time }}</div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
// 引入三张图
import img1 from '../assets/images/banner1.jpg'
import img2 from '../assets/images/banner2.jpg'
import img3 from '../assets/images/banner3.jpg'
// 创建一个数组，用于存放图片，数组可以用与于template

const images = [img1, img2, img3]
const news = [
  { id: 1, title: '博物馆进校园——地图上的党史主题展览活动', time: '2023-05-18' },
  { id: 2, title: '喜报|电子211班心理委员张梦婷获得校“十佳心理委员”', time: '2023-05-18' },
  { id: 3, title: '信息学院召开第二届校友理事会换届大会', time: '2023-05-15' },
  { id: 4, title: '喜报|我院团员青年谢文龙入选2022年度杭州市优秀共青团员', time: '2023-05-12' },
  { id: 5, title: '享受运动乐趣，做全民健身的先行者————学院工会组织开展教职工共跳亚运曲目健身舞蹈活动', time: '2023-05-12' },
  { id: 6, title: '我院学生在第四届长三角师范生教学基本功大赛中荣获一等奖', time: '2023-05-12' },
  { id: 7, title: '我院顺利完成2019级师范生中小学教师资格考试（面试）工作', time: '2023-05-09' },
  { id: 8, title: '学院2021年校级教改项目顺利通过验收检查', time: '2023-05-09' },
  { id: 9, title: '“智能图形学与视觉前沿技术及行业应用”————CCF CAD&CG 第十五期 走进杭州师范大学', time: '2023-05-08' },
]
const notices = [
  { id: 1, title: '博物馆进校园——地图上的党史主题展览活动', time: '2023-05-18' },
  { id: 2, title: '喜报|电子211班心理委员张梦婷获得校“十佳心理委员”', time: '2023-05-18' },
  { id: 3, title: '信息学院召开第二届校友理事会换届大会', time: '2023-05-15' },
  { id: 4, title: '喜报|我院团员青年谢文龙入选2022年度杭州市优秀共青团员', time: '2023-05-12' },
  { id: 5, title: '享受运动乐趣，做全民健身的先行者————学院工会组织开展教职工共跳亚运曲目健身舞蹈活动', time: '2023-05-12' },
  { id: 6, title: '我院学生在第四届长三角师范生教学基本功大赛中荣获一等奖', time: '2023-05-12' },
  { id: 7, title: '我院顺利完成2019级师范生中小学教师资格考试（面试）工作', time: '2023-05-09' },
  { id: 8, title: '学院2021年校级教改项目顺利通过验收检查', time: '2023-05-09' },
  { id: 9, title: '“智能图形学与视觉前沿技术及行业应用”————CCF CAD&CG 第十五期 走进杭州师范大学', time: '2023-05-08' },
]
</script>
<style scoped>
.container {
  /* 居中 */
  margin: 0 auto;
  margin-top: 2vh;
  margin-bottom: 2vh;
}

@media screen and (max-width: 768px) {
  .container {
    width: 100%;
  }
}

@media screen and (min-width: 768px) {
  .container {
    width: 80%;
  }
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

img {
  height: 50vh;
  width: 100%;
}



.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 14px;
}

.text.item {
  display: flex;
  /* max-width: 70%; */
  overflow: hidden;
}

.title {
  white-space: nowrap;
  /* 不换行 */
  text-overflow: ellipsis;
  /* 超出部分显示省略号 */
  overflow: hidden;
  /* 超出部分隐藏 */
  /* position: relative; */
  float: left;
  width: 70%;
}

.time {
  white-space: nowrap;
  float: right;
  font-size: 12px;
  margin-left: 20%;
  /* 使得文字靠下 */
  line-height: 20px;
  /* right: 100px; */
  /* position: absolute; */
  color: #999;
}

.box-card {
  /* width: 480px; */
}
</style>