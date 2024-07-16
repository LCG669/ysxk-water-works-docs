# YSXK-ScaleDiv 缩放内容

YSXK-ScaleDiv通常用于view页面组件最顶层，通过缩放整个内容，进行分辨率适配，比较暴力

## 代码演示
::: demo
``` vue
<template>
    <YSXK-ScaleDiv>
        ...其他内容
        <br />
        改变浏览器宽高进行观察
    </YSXK-ScaleDiv>
</template>
```
:::

## 接口

| 属性名 | 类型 | 默认值 | 描述 | 是否必填 |
| --- | --- | --- | --- | --- |
| w | Number | 1688 | view展示区域的宽度，通常为UI的宽度 | 否 |
| h | Number | 854 | view展示区域的高度，通常为UI的高度 | 否 |
| reduceW | Number | 232 | 左侧菜单栏宽度 | 否 |
| reduceH | Number | 123 | 顶部导航高度 | 否 |

## 注意事项

默认值是根据云昇新控前端业务工具链定制化的，其他地方使用需要测试合适的值