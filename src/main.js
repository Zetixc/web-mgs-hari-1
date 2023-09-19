import './assets/css/base.css'
import './assets/css/home.css'
import './assets/css/about.css'
import './assets/css/about2.css'
import './assets/css/case2.css'
import './assets/css/blog2.css'
import './assets/css/contact.css'
import './assets/css/sitemap.css'
import './assets/css/career.css'
import './assets/css/mgs.css'
import './assets/css/history.css'
import './assets/css/team.css'
import './assets/css/case.css'
import './assets/css/blog.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
