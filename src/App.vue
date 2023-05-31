<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <router-view>
        </router-view>
      </el-main>
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>
<style scoped>
.common-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.el-header {
  height: auto;
  padding: 0 !important;
}

.el-main {
  flex: 1;
  padding: 0 !important;
}

.el-footer {
  background-color: #075aa6;
  height: auto;
  /* position: fixed; */
  /* bottom: 0; */
  width: 100%;
  flex-shrink: 0;
}
</style>