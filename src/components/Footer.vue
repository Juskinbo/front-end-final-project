<template>
  <el-row>
    <el-col :span="24" v-for="msg in msgs.slice(0, 2)" :key="msg.id">{{ msg.info }}</el-col>
    <el-col :span="24" v-for="msg in msgs.slice(2, 4)" :key="msg.id"><el-link :href="msg.link" :underline="false" style="color:aliceblue">{{
      msg.info }}</el-link></el-col>
  </el-row>
</template>
<script setup lang="ts">
const msgs = [
  { id: 1, info: '© 2021-2026 信息科学与技术学院 All Rights Reserved' },
  { id: 2, info: '浙江省杭州市余杭塘路2318号 邮编：311121' },
  { id: 3, info: "公安备案号：33011002011919", link: "https://www.beian.gov.cn/" },
  { id: 4, info: "浙ICP备11056902号-1", link: "https://beian.miit.gov.cn/" },
]
</script>
<style scoped>
.el-row {
  text-align: center;
  margin-bottom: 10px;
  color: aliceblue;
}

.el-col {
  font-size: 14px;
  margin-top: 10px;
}
.el-link{
  font-weight: 400;
}
</style>