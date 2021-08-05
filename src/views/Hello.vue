<template>
  <el-row>
    <el-col :xs="7" :sm="7" :md="7" :lg="7" :xl="7">
      <div class="grid-content">
        <img src="./images/bcg.jpg" id="home_main_content_img1" />
      </div>
    </el-col>
    <el-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10">
      <div id="home_main_content_title" class="grid-content">
        <h1 class="home_main_content_title1">你好，</h1>
        <h1 class="home_main_content_title1">我是 Z.，</h1>
        <h1 class="home_main_content_title1">一个奔跑者。</h1>
        <h2 id="home_main_content_title2">爱好摄影、跑步，专业编程。</h2>
      </div>
    </el-col>
    <el-col :xs="7" :sm="7" :md="7" :lg="7" :xl="7">
      <div class="grid-content">
        <img src="./images/bcg-2.jpg" id="home_main_content_img2" />
      </div>
    </el-col>
  </el-row>
</template>
<script lang="ts">
import { defineComponent, onActivated, onMounted } from "vue";
import 'nprogress/nprogress.css'
import nProgress from "nprogress";
import router from "@/router";
export default defineComponent({
  name: "Hello",
  setup() {
      onMounted( () =>{
          nProgress.done();
      })
      return;
  },
});
</script>

<style>
@import url("~@/assets/css/web/home.css");
</style>
