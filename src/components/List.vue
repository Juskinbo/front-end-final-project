<template>
  <div class="list">
    <div class="pagination-block">
      <ul>
        <li class="article" v-for="o in list" :key="o.article_id">
          <el-link :underline="false" :href="'/article' + o.article_id">{{ o.article_title }}</el-link>
        </li>
      </ul>
      <el-pagination layout="prev, pager, next" :total="total" :default-page-size="10" @current-change="pageChange" />
    </div>
  </div>
</template>
<script setup lang="ts">
// 获取通过路由得到的参数
import { useRoute } from 'vue-router'
import axios from 'axios'
import { ref, watch } from 'vue'
import url from '../../config.json'
console.log(url.baseUrl)
// data 是一个对象数组
// ref定义data
const data = ref<Article[]>([]) // 所有数据
const list = ref<Article[]>([])// 实时数据，默认是第一页的数据
console.log(list.value)
const total = ref(0)
// 监听路由的变化
const route = useRoute()
watch(
  () => route.params,
  (newValue, oldValue) => {
    list.value = []
    // console.log(newValue)
    // console.log(oldValue)
    
    axios.get(url.baseUrl + "/list" + newValue.id).then((result) => {
      data.value = result.data
      // 获取data中的数据长度
      total.value = data.value.length
      console.log(data.value)
      console.log(total.value)
      for (let i = 0; i < 10; i++) {
        if (data.value[i]) {
          list.value.push(data.value[i])
        }
      }
    }).catch((err) => {
      console.log('error')
    });
  },
  { immediate: true }
)
// console.log(route.params.id)

const pageChange = (val: number) => {
  console.log(val)
  // 1 0-9
  // 2 10-19
  // 3 20-29
  // 清空list
  list.value = []
  // 重新赋值
  for (let i = (val - 1) * 10; i < val * 10; i++) {
    if (data.value[i]) {
      list.value.push(data.value[i])
    }
  }
}

</script>
<style scoped>
.el-pagination {
  justify-content: center;
}

.pagination-block+.pagination-block {
  margin-top: 10px;
}

.pagination-block {
  margin-bottom: 16px;
}

.list {
  text-align: center;
  margin: 0 auto;
}

ul {
  padding-left: 0;
}

.article {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  /* text-align: left; */
  list-style: none;
  /* border-bottom: 1px solid #ccc; */
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  /* border-bottom: 1px solid #ccc; */
  /* border-radius: 5px; */
  /* box-shadow: 0 0 10px #ccc; */
}
</style>
