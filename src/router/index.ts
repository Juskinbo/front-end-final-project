import { createRouter, createWebHistory } from "vue-router"
import Main from "@/components/Main.vue"
import Article from "@/components/Article.vue"
import List from '@/components/List.vue'
const routes = [
  // 定义路由
  { path: "/", component: Main },
  { path: "/article:id", component: Article, props: true },
  { path: "/list:id", component: List, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
