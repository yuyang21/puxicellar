import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import './config/rem'

Vue.use(VueRouter, wx)
const router = new VueRouter({
    routes,
    hashbang: true, // 将路径格式化为#!开头
    history: true, // use history=false when testing
    mode: 'history',
    strict: process.env.NODE_ENV !== 'production'
})
router.beforeEach((to, next) => {
    if (to.meta.title === undefined) {
        document.title = '葡玺酒窖'
    } else {
        document.title = to.meta.title
    }
    next();
})

new Vue({
    router
}).$mount('#app')
