import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { ElButton, ElContainer,ElHeader,ElMenu,ElMenuItem,ElSubmenu,ElMain,ElRow,ElCol } from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
const app = createApp(App)

app.use(store).use(router)
app.component(ElButton.name, ElButton);
app.component(ElContainer.name, ElContainer);
app.component(ElHeader.name, ElHeader);
app.component(ElMenuItem.name,ElMenuItem);
app.component(ElMenu.name,ElMenu)
app.component(ElSubmenu.name,ElSubmenu)
app.component(ElMain.name,ElMain)
app.component(ElCol.name,ElCol)
app.component(ElRow.name,ElRow)
app.mount('#app')
