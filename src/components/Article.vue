<template>
  <div class="article">
    <h1>{{ data.article_title }}</h1>
    <p class="author">作者：{{ data.article_author }}</p>
    <p class="time">发布时间：{{ data.publish_time ? data.publish_time.substr(0, 10) : '' }}</p>
    <p class="content">{{ data.article_content }}</p>
  </div>
</template>
<script setup lang="ts">
// 获取通过路由得到的参数
import { useRoute } from 'vue-router'
import axios from 'axios'
import { ref } from 'vue'
// 从global.d.ts获取Article类型
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
  text-align: justify;
}
</style>