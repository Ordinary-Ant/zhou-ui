import { createApp } from 'vue'
import { createComponent } from '@/index'
import App from './App.vue'


createApp(App).use(createComponent()).mount('#app')