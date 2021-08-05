<template>
  <div class="home" style="overflow: hidden">
    <el-container>
      <el-header>
        <el-menu
          style="border-bottom: none"
          class="navigate_style"
          mode="horizontal"
          @select="handleSelect"
          :default-active="$route.path"
          router
        >
          <el-menu-item
            style="
              border-bottom: none;
              height: 30px;
              line-height: 30px;
              font-size: 1vw;
            "
            v-for="(item, index) in navigate_item"
            :key="index"
            :index="item.name.toString()"
            :route="{ path: item.value }"
            >{{ item.name }}</el-menu-item
          >
        </el-menu>
      </el-header>
      <el-main style="padding:0">
        <router-view>
        </router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";
import { navigate_item_data } from "@/assets/data/home.json";
import axios from "@/utils/request";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import { useRoute, useRouter } from "vue-router";
export default defineComponent({
  name: "Home",
  setup() {
    // 路由
    const route = useRoute();
    const router = useRouter();
    onMounted(() => {
      router.push("Hello");
    });
    // 头部
    // 加载导航栏数据
    let navigate_item = ref();
    const activeIndex = ref("1");
    const handleSelect = (key: string, keyPath: string) => {
      nProgress.start();
      // 点击相同tab，刷新
      //nProgress.start();
      console.log(key, keyPath);
    };

    onMounted(() => {
      navigate_item.value = navigate_item_data;
    });
    return { navigate_item, activeIndex, handleSelect };
  },
});
</script>
<style>
@import "~@/assets/css/web/home.css";
</style>