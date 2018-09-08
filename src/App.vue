<template>
<div>
    <transition name="router-fade" mode="out-in">
        <router-view></router-view>
    </transition>
    <svg-icon></svg-icon>
</div>
</template>

<script>
import Vue from 'vue'
import * as custom from './plugins/custom'
import svgIcon from './components/common/svg';
export default {
    data() {
        return {
        }
    },
    watch: {
    },
    components: {
        svgIcon,
    },
    mounted() {
    },
    methods: {
    }
}
Object.keys(custom).forEach(key => {
    Vue.filter(key, custom[key])
})
Vue.directive('client-height', function (el, binding) {
    function setHeight() {
        el.style.height = document.documentElement.clientHeight + 'px'
    }
    setHeight()
    window.addEventListener('load', function () {
        setHeight()
    }, window.addEventListener('resize', function () {
        setHeight()
    }))
})
</script>

<style lang="scss">
@import './style/common';
.router-fade-enter-active,
.router-fade-leave-active {
    transition: opacity .3s;
}

.router-fade-enter,
.router-fade-leave-active {
    opacity: 0;
}

body {
    font-size: .14rem;
}
</style>
