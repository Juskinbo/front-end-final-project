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
        <el-card class="box-card" :body-style="{ height: '306px' }">
          <template #header>
            <div class="card-header">
              <span>新闻动态</span>
              <router-link :to="'/list' + 15"><el-button class="button" text>更多<el-icon>
                    <ArrowRightBold />
                  </el-icon></el-button></router-link>
            </div>
          </template>

          <div v-for="o in news" :key="o.article_id" class="text item">
            <div class="title"><router-link :to="'/article' + o.article_id">{{
              o.article_title }}</router-link></div>
            <div class="time">{{ o.publish_time.substr(0, 10) }}</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card" :body-style="{ height: '326px', paddingTop: '0px' }">
          <template #header>
            <div class="card-header">
              <span>通知公告</span>
              <router-link :to="'/list' + 16"><el-button class="button" text>更多<el-icon>
                    <ArrowRightBold />
                  </el-icon></el-button></router-link>
            </div>
          </template>
          <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="综合" name="first">
              <div v-for="o in notices1" :key="o.article_id" class="text item">
                <div class="title"><router-link :to="'/article' + o.article_id">{{
                  o.article_title }}</router-link></div>
                <div class="time">{{ o.publish_time.substr(0, 10) }}</div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="教学" name="second">
              <div v-for="o in notices2" :key="o.article_id" class="text item">
                <div class="title"><router-link :to="'/article' + o.article_id">{{
                  o.article_title }}</router-link></div>
                <div class="time">{{ o.publish_time.substr(0, 10) }}</div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="科研" name="third">
              <div v-for="o in notices3" :key="o.article_id" class="text item">
                <div class="title"><router-link :to="'/article' + o.article_id">{{
                  o.article_title }}</router-link></div>
                <div class="time">{{ o.publish_time.substr(0, 10) }}</div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="学校" name="fourth">
              <div v-for="o in notices4" :key="o.article_id" class="text item">
                <div class="title"><router-link :to="'/article' + o.article_id">{{
                  o.article_title }}</router-link></div>
                <div class="time">{{ o.publish_time.substr(0, 10) }}</div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card" :body-style="{ height: '306px' }">
          <template #header>
            <div class="card-header">
              <span>科研成果</span>
              <router-link :to="'/list' + 32"><el-button class="button" text>更多<el-icon>
                    <ArrowRightBold />
                  </el-icon></el-button></router-link>
            </div>
          </template>
          <div v-for="o in researches" :key="o.article_id" class="text item">
            <div class="title"><router-link :to="'/article' + o.article_id">{{
              o.article_title }}</router-link></div>
            <div class="time">{{ o.publish_time.substr(0, 10) }}</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card" :body-style="{ height: '306px' }">
          <template #header>
            <div class="card-header">
              <span>学术动态</span>
              <router-link :to="'/list' + 29"><el-button class="button" text>更多<el-icon>
                    <ArrowRightBold />
                  </el-icon></el-button></router-link>
            </div>
          </template>
          <div v-for="o in academics" :key="o.article_id" class="text item">
            <div class="title"><router-link :to="'/article' + o.article_id">{{
              o.article_title }}</router-link></div>
            <div class="time">{{ o.publish_time.substr(0, 10) }}</div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card" :body-style="{ height: '306px' }">
          <template #header>
            <div class="card-header">
              <span>创新创业</span>
              <router-link :to="'/list' + 45"><el-button class="button" text>更多<el-icon>
                    <ArrowRightBold />
                  </el-icon></el-button></router-link>
            </div>
          </template>
          <div v-for="o in innovations" :key="o.article_id" class="text item">
            <div class="title"><router-link :to="'/article' + o.article_id">{{
              o.article_title }}</router-link></div>
            <div class="time">{{ o.publish_time.substr(0, 10) }}</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card" :body-style="{ height: '306px' }">
          <template #header>
            <div class="card-header">
              <span>信息公开</span>
              <router-link :to="'/list' + 17"><el-button class="button" text>更多<el-icon>
                    <ArrowRightBold />
                  </el-icon></el-button></router-link>
            </div>
          </template>
          <div v-for="o in information" :key="o.article_id" class="text item">
            <div class="title"><router-link :to="'/article' + o.article_id">{{
              o.article_title }}</router-link></div>
            <div class="time">{{ o.publish_time.substr(0, 10) }}</div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-divider content-position="left">校内链接</el-divider>
    <ul class="links">
      <li v-for="o in links" class="link"><a :href="o.url">{{ o.title }}</a></li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import type { TabsPaneContext } from 'element-plus'
import axios from 'axios'
import { ref } from 'vue'
// 引入三张图
const img1 = 'https://s2.loli.net/2023/05/23/Q3VLtbAN1S9y6HY.webp'
const img2 = 'https://s2.loli.net/2023/05/23/jnPc1aU9KCHhxFm.webp'
const img3 = 'https://s2.loli.net/2023/05/23/8JVSNGRcTOnXW2u.webp'
// 创建一个数组，用于存放图片，数组可以用与于template
const images = [img1, img2, img3]
// 读取json文件
import url from '../../config.json'
const news = ref<Article[]>([])
const notices1 = ref<Article[]>([])
const notices2 = ref<Article[]>([])
const notices3 = ref<Article[]>([])
const notices4 = ref<Article[]>([])
const researches = ref<Article[]>([])
const academics = ref<Article[]>([])
const innovations = ref<Article[]>([])
const information = ref<Article[]>([])
axios.get(url.baseUrl + "/api/news").then((result) => {
  news.value = result.data
}).catch((err) => {
  console.log('error')
});
axios.get(url.baseUrl + "/api/notice/1").then((result) => {
  notices1.value = result.data
}).catch((err) => {
  console.log('error')
});
axios.get(url.baseUrl + "/api/notice/2").then((result) => {
  notices2.value = result.data
}).catch((err) => {
  console.log('error')
});
axios.get(url.baseUrl + "/api/notice/3").then((result) => {
  notices3.value = result.data
}).catch((err) => {
  console.log('error')
});
axios.get(url.baseUrl + "/api/notice/4").then((result) => {
  notices4.value = result.data
}).catch((err) => {
  console.log('error')
});
// console.log(news)
axios.get(url.baseUrl + "/api/researches").then((result) => {
  researches.value = result.data
}).catch((err) => {
  console.log('error')
});
axios.get(url.baseUrl + "/api/academics").then((result) => {
  academics.value = result.data
}).catch((err) => {
  console.log('error')
});
axios.get(url.baseUrl + "/api/innovations").then((result) => {
  innovations.value = result.data
}).catch((err) => {
  console.log('error')
});
axios.get(url.baseUrl + "/api/information").then((result) => {
  information.value = result.data
}).catch((err) => {
  console.log('error')
});
const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => { // 通知公告里面的tab切换点击事件
  console.log(tab, event)
}
const links = [
  {
    index: 1,
    title: '杭师大',
    url: 'https://www.hznu.edu.cn/'
  },
  {
    index: 2,
    title: '信息公开',
    url: 'https://xxgk.hznu.edu.cn/'
  },
  {
    index: 3,
    title: '科研系统',
    url: 'http://kyxt.hznu.edu.cn/'
  },
  {
    index: 4,
    title: '人文社科',
    url: 'http://rwskc.hznu.edu.cn/'
  },
  {
    index: 5,
    title: '教务处',
    url: 'https://jwc.hznu.edu.cn/'
  },
  {
    index: 6,
    title: '就业网',
    url: 'http://career.hznu.edu.cn/'
  },
  {
    index: 7,
    title: '计财处',
    url: 'https://jcc.hznu.edu.cn/'
  },
  {
    index: 8,
    title: '人事处',
    url: 'https://rsc.hznu.edu.cn/'
  },
  {
    index: 9,
    title: '科技处',
    url: 'https://kyc.hznu.edu.cn/kjc/index.shtml'
  },
  {
    index: 10,
    title: '团委',
    url: 'https://youth.hznu.edu.cn/'
  },
  {
    index: 9,
    title: '遥感与地球科学研究院',
    url: 'http://ires.hznu.edu.cn/'
  },
  {
    index: 10,
    title: '浙江省城市湿地与区域变化研究重点实验室',
    url: 'http://uwrl.hznu.edu.cn/'
  }
]
</script>
<style scoped>
a {
  /* 设置链接不变色 */
  color: #000;
  text-decoration: none;
}

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
  width: 80%;
}

.time {
  white-space: nowrap;
  float: right;
  font-size: 12px;
  text-align: right;
  /* margin-left: 10%; */
  width: 20%;
  /* 使得文字靠下 */
  line-height: 20px;
  /* right: 100px; */
  /* position: absolute; */
  color: #999;
}

.links {
  display: flex;
  flex-wrap: wrap;
  /* 删除标记 */
  list-style: none;
  padding-left: 0px;
}

.link {
  margin-right: 10px;
}

.link a {
  color: #999;
  font-size: 14px;
  text-decoration: none;
}
</style>