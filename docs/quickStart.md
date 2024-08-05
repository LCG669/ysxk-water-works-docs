# ysxk-water-works

ysxk-water-works是云昇新控智能科技有限公司基于水厂业务开发的UI库，基于公司内部开发长期使用的版本：vue 2.6.10 版本开发，不支持ts

## 安装
```
yarn add ysxk-water-works
// 或者
npm i ysxk-water-works
```

### 更新到最新版的UI库
```
yarn upgrade ysxk-water-works
```

## 使用

### 全局配置
src/main.js
``` js
import Vue from 'vue'
import ysxk_water_works from 'ysxk-water-works'
import 'ysxk-water-works/lib/ysxk-water-works.css'

Vue.use(ysxk_water_works)
```