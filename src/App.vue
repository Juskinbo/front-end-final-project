<template>
  <div class="common-layout">
    <el-container>
      <el-header class="myHeader">
        <Header />
      </el-header>
      <el-main>
        <Main />
      </el-main>
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
</script>
<style scoped>
.el-header {
  height: auto;
  padding: 0 !important;
}

.el-main {
  padding: 0 !important;
}

.el-footer {
  background-color: #075aa6;
  height: auto;
}
</style>