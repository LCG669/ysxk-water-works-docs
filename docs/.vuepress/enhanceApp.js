import '../../css/public.css'
import ysxk_water_works from 'ysxk-water-works'
import 'ysxk-water-works/lib/ysxk-water-works.css'

// 导入滚动条 overlayscrollbars
import 'overlayscrollbars/styles/overlayscrollbars.css'
import {
    OverlayScrollbars
} from 'overlayscrollbars'

export default ({
    Vue
}) => {
    // document 和 window 确定只有 浏览器端（CSR）才执行，而不是 服务器端（SSR）执行
    if (typeof process === 'undefined') {
        // 全局注册组件
        Vue.use(ysxk_water_works)
        // 滚动条
        Vue.mixin({
            mounted() {
                // 找到所有 .demo-content 元素
                const demoContentElements = document.querySelectorAll('.demo-content')
                const sidebarElements = document.querySelectorAll('.sidebar')
    
                const addScrollBar = el => {
                    // 检查元素是否已经初始化过 OverlayScrollbars  
                    if (!el.dataset.isScrollbar) {
                        // 初始化 OverlayScrollbars  
                        OverlayScrollbars(el, { /* 配置选项 */ })
    
                        // 添加自定义属性以标记已初始化
                        el.dataset.isScrollbar = true
                    }
                }
    
                demoContentElements.forEach(el => {
                    addScrollBar(el)
                })
                sidebarElements.forEach(el => {
                    addScrollBar(el)
                })
            },
        })
    
        // 对 document.body 应用 OverlayScrollbars  
        OverlayScrollbars(document.body, { /* 配置选项 */ })
    }
}