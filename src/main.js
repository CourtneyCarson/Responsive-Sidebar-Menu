import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'


createApp(App).mount('#app')


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: () => import('./views/About.vue') },
    ],
})

createApp(App).use(router).mount('#app')
