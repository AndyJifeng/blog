<template>
  <div class="about">
    <el-row >
      <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2"></el-col>
       <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
          <div>
            <img src="./images/bcg-3.png" id="about_img" />
          </div>
          <div style="width:65vw;display:inline-block">
            <h2 class="about_content_title">关于博主</h2>
            <h2 class="about_content_title">技术栈</h2>
            <h2 class="about_content_title">项目经历</h2>
            <h2 class="about_content_title">关于博客</h2>
            <h2 class="about_content_title">联系博主</h2>
            <ul>
              <li class="about_content">电子邮件：zhangjifeng1998@icloud.com</li>
            </ul>
          </div>
       </el-col>
       <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2"></el-col>
      </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
export default defineComponent({
  name:"About",
  setup() {
    onMounted(() => {
      nProgress.done()
    })

  },
})
</script>
<style scoped>
@import "~@/assets/css/web/About.css";
</style>
