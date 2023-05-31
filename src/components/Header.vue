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
  <el-menu router text-color="#FFF" background-color="#075aa6" :default-active="activeIndex" class="el-menu" mode="horizontal">
    <el-menu-item><el-link href="/">首页</el-link></el-menu-item>
    <el-sub-menu index="2">
      <template #title>学院概况</template>
      <el-menu-item index="list9">学院简介</el-menu-item>
      <el-menu-item index="list10">学院领导</el-menu-item>
      <el-menu-item index="list11">师资介绍</el-menu-item>
      <el-menu-item index="list12">机构设置</el-menu-item>
      <el-menu-item index="list13">校园风光</el-menu-item>
      <el-menu-item index="list14">联系我们</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>校园动态</template>
      <el-menu-item index="list15">新闻动态</el-menu-item>
      <el-menu-item index="list16">学校动态</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="4">
      <template #title>信息公开</template>
      <el-menu-item index="list17">党务信息</el-menu-item>
      <el-menu-item index="list18">院务信息</el-menu-item>
      <el-menu-item index="list19">通知公告</el-menu-item>
      <el-menu-item index="list20">学院文件</el-menu-item>
      <el-menu-item index="list21">办事指南</el-menu-item>
      <el-menu-item index="list22">会议纪要</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="5">
      <template #title>人才培养</template>
      <el-menu-item index="list23">本科生教育</el-menu-item>
      <el-menu-item index="list24">研究生教育</el-menu-item>
      <el-menu-item index="list25">国际化教育</el-menu-item>
      <el-menu-item index="list26">留学生培养</el-menu-item>
      <el-menu-item index="list27">特聘教授</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="6">
      <template #title>科学研究</template>
      <el-menu-item index="list28">科研通知</el-menu-item>
      <el-menu-item index="list29">教学科研动态</el-menu-item>
      <el-menu-item index="list30">研究机构</el-menu-item>
      <el-menu-item index="list31">重点实验室</el-menu-item>
      <el-menu-item index="list32">科研成果</el-menu-item>
      <el-menu-item index="list33">科研管理办法</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="7">
      <template #title>党建工作</template>
      <el-menu-item index="list34">组织机构</el-menu-item>
      <el-menu-item index="list35">热点动态</el-menu-item>
      <el-menu-item index="list36">规章制度</el-menu-item>
      <el-menu-item index="list37">党建平台</el-menu-item>
      <el-menu-item index="list38">学习园地</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="8">
      <template #title>招生就业</template>
      <el-menu-item index="list39">招生工作</el-menu-item>
      <el-menu-item index="list40">就业指导</el-menu-item>
      <el-menu-item index="list41">求职信息</el-menu-item>
      <el-menu-item index="list42">实习实践基地</el-menu-item>
      <el-menu-item index="list43">求职心得</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="9">
      <template #title>学生工作</template>
      <el-menu-item index="list44">思政动态</el-menu-item>
      <el-menu-item index="list45">创新创业</el-menu-item>
      <el-menu-item index="list46">学生事务</el-menu-item>
      <el-menu-item index="list47">校友风采</el-menu-item>
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
