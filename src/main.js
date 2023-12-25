import './assets/main.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './assets/js/jquery-3.7.1.min.js'
// import './assets/js/dataTables.js'
import './assets/js/chart.js'
import './assets/js/popper.min.js'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
