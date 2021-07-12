import { createApp } from 'vue'
import App from './renderer/App.vue'
import router from './renderer/router/index'

const app = createApp(App)

app.use(router)

app.mount('#app')
