<template>
    <el-row>
      dd1
    </el-row>
</template>
<script>
import { defineComponent, onMounted } from 'vue'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
export default defineComponent({
    name:'LearningRecord',
    setup() {
        onMounted(() => {
            nProgress.done();
        })
        return ;
    },
})
</script>
