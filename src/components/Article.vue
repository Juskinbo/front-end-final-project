<template>
  <div class="article">
    <el-image style="height: 10vh;width: 100%;" src="https://s2.loli.net/2023/05/31/Hwr4ARUaF1zjMGo.png">
    </el-image>
    <h1>{{ data.article_title }}</h1>
    <p class="author">作者：{{ data.article_author }}</p>
    <p class="time">发布时间：{{ data.publish_time ? data.publish_time.substr(0, 10) : '' }}</p>
    <pre class="content" v-html="data.article_content"></pre>
  </div>
</template>
<script setup lang="ts">
// 获取通过路由得到的参数
import { useRoute } from 'vue-router'
import axios from 'axios'
import { ref } from 'vue'
// 初始化data，并且声明类型
const data = ref<Article>({
  article_id: 0,
  article_title: '',
  article_content: '',
  article_author: '',
  category_id: 0,
  publish_time: ''
})
const route = useRoute()

console.log(route.params.id)
// 从config.json获取api的地址
import url from '../../config.json'
console.log(url.baseUrl)

axios.get(url.baseUrl + "/article" + route.params.id).then((result) => {
  data.value = result.data[0]
  console.log(data.value.article_id)

}).catch((err) => {
  console.log('error')
});
</script>
<style scoped>
.article {
  width: 60%;
  margin: 0 auto;
  /* display: flex; */
  align-items: center;
  justify-content: center;
}

h1 {
  text-align: center;
}

.author {
  text-align: center;
}

.time {
  text-align: center;
}

.content {
  font-size: 16px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: justify;
  /* max-width: 100px; */
  white-space: pre-wrap;
}
</style>