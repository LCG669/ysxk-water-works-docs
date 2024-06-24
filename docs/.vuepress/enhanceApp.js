// vue 配置

// import Vue from 'vue'
import '../../css/public.css'
import ysxk_water_works from 'ysxk-water-works'
import 'ysxk-water-works/lib/ysxk-water-works.css'

// Vue.use(ysxk_water_works)

export default async ({
    Vue
}) => {
    if (typeof process === 'undefined') {
        Vue.use(ysxk_water_works)
    }
}

console.log('运行enhanceApp.js')