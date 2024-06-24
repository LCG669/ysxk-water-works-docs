# YSXK_TimeUpda 数据更新时间

## 代码演示

### 基本使用

默认两排

::: demo
``` vue
<template>
    <YSXK_TimeUpda :recentTime="recentTime" />
</template>

<script>
export default {
    data() {
        return {
            recentTime: '2024-06-21 17:30:00'
        }
    },
}
</script>
```
:::

### 一排居中

seat：center

::: demo
``` vue
<template>
    <YSXK_TimeUpda :recentTime="timeUpdaData.recentTime" :seat="timeUpdaData.seat" />
</template>

<script>
export default {
    data() {
        return {
            timeUpdaData: {
                recentTime: '2024-06-21 17:30:00',
                seat: 'center'
            }
        }
    },
}
</script>
```
:::

### 分成三排

seat：bottom

::: demo
``` vue
<template>
    <YSXK_TimeUpda :recentTime="timeUpdaData.recentTime" :seat="timeUpdaData.seat" />
</template>

<script>
export default {
    data() {
        return {
            timeUpdaData: {
                recentTime: '2024-06-21 17:30:00',
                seat: 'bottom'
            }
        }
    },
}
</script>
```
:::

## 接口

| 属性名 | 类型 | 默认值 | 描述 | 是否必填 |
| --- | --- | --- | --- | --- |
| recentTime | String | 无 | 日期字符串 | 是 |
| seat | String | undefined | 字符串 | 否 |

## 注意事项

组件默认定位文档流：position: absolute
<br />
如果不注意父元素定位，可能会导致组件位置错误