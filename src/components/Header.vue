<template>
  <div class="title">
    <div class="logos">
      <el-link href="https://hise.hznu.edu.cn" target="_blank" :underline="false">
        <img :src="hiseLogo" alt="学院 logo">
      </el-link>
      <el-link href="https://www.hznu.edu.cn/" target="_blank" :underline="false">
        <img :src="hznuLogo" alt="学校 logo" id="hznuLogo">
      </el-link>
    </div>
    <div class="identify">
      <ul v-for="id in identifies"><el-link href="#" :underline="false">{{ id.type }}</el-link></ul>
    </div>
  </div>
  <el-menu text-color="#FFF" background-color="#075aa6" :default-active="activeIndex" class="el-menu" mode="horizontal">
    <el-menu-item index="1"><el-link href="https://hise.hznu.edu.cn" target="_blank">首页</el-link></el-menu-item>
    <el-sub-menu index="2">
      <template #title>学院概况</template>
      <el-menu-item index="2-1">学院简介</el-menu-item>
      <el-menu-item index="2-2">学院领导</el-menu-item>
      <el-menu-item index="2-3">师资介绍</el-menu-item>
      <el-menu-item index="2-4">机构设置</el-menu-item>
      <el-menu-item index="2-5">校园风光</el-menu-item>
      <el-menu-item index="2-6">联系我们</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>校园动态</template>
      <el-menu-item index="3-1">新闻动态</el-menu-item>
      <el-menu-item index="3-2">学校动态</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="4">
      <template #title>信息公开</template>
      <el-menu-item index="4-1">党务信息</el-menu-item>
      <el-menu-item index="4-2">院务信息</el-menu-item>
      <el-menu-item index="4-3">通知公告</el-menu-item>
      <el-menu-item index="4-4">学院文件</el-menu-item>
      <el-menu-item index="4-5">办事指南</el-menu-item>
      <el-menu-item index="4-6">会议纪要</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="5">
      <template #title>人才培养</template>
      <el-menu-item index="5-1">本科生教育</el-menu-item>
      <el-menu-item index="5-2">研究生教育</el-menu-item>
      <el-menu-item index="5-3">国际化教育</el-menu-item>
      <el-menu-item index="5-4">留学生培养</el-menu-item>
      <el-menu-item index="5-5">特聘教授</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="6">
      <template #title>科学研究</template>
      <el-menu-item index="6-1">科研通知</el-menu-item>
      <el-menu-item index="6-2">教学科研动态</el-menu-item>
      <el-menu-item index="6-3">研究机构</el-menu-item>
      <el-menu-item index="6-4">重点实验室</el-menu-item>
      <el-menu-item index="6-5">科研成果</el-menu-item>
      <el-menu-item index="6-6">科研管理办法</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="7">
      <template #title>党建工作</template>
      <el-menu-item index="7-1">组织机构</el-menu-item>
      <el-menu-item index="7-2">热点动态</el-menu-item>
      <el-menu-item index="7-3">规章制度</el-menu-item>
      <el-menu-item index="7-4">党建平台</el-menu-item>
      <el-menu-item index="7-5">学习园地</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="8">
      <template #title>招生就业</template>
      <el-menu-item index="8-1">招生工作</el-menu-item>
      <el-menu-item index="8-2">就业指导</el-menu-item>
      <el-menu-item index="8-3">求职信息</el-menu-item>
      <el-menu-item index="8-4">实习实践基地</el-menu-item>
      <el-menu-item index="8-5">求职心得</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="9">
      <template #title>学生工作</template>
      <el-menu-item index="9-1">思政动态</el-menu-item>
      <el-menu-item index="9-2">创新创业</el-menu-item>
      <el-menu-item index="9-3">学生事务</el-menu-item>
      <el-menu-item index="9-4">校友风采</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

const activeIndex = ref('1')
const hiseLogo = '/hise-logo.png'
const hznuLogo = '/hznu-logo.png'
// 获取窗口的宽度
const identifies = [
  { id: 1, type: '访客' },
  { id: 1, type: '学生' },
  { id: 1, type: '教师' },
  { id: 1, type: '校友' }]

</script>
<style scoped>
/* img {
  margin-top: 10px;
}

#hiseLogo {
  margin-left: 10px;
} */
ul {
  padding-left: 10px;
}

.title {
  display: flex;
  align-items: center;
  position: relative;
}

.logos {
  display: flex;
  align-items: center;
  /* justify-content: center; */
  margin-top: 10px;
  /* width: 100%; */
  padding-left: 20px;
}

@media screen and (max-width: 768px) {
  .identify {
    display: none;
  }
}


@media screen and (max-width: 901px) {
  #hznuLogo {
    display: none;
  }
}

/* 699+152 = 851 */
@media screen and (min-width: 768px) {
  .identify {
    display: flex;
    /* position: relative; */
    right: 50px;
    position: absolute;
    float: right;
  }

}

#hznuLogo {
  margin-left: 20px;
}

.el-menu {
  margin-top: 10px;
  width: 100%;
  padding-left: 20px;
  border-bottom: 0;
}

</style>
