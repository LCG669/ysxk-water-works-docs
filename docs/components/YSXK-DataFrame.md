# YSXK-DataFrame 数据框

YSXK-DataFrame 数据框预设了多种数据格式，可以满足水厂业务复杂的数据转换与显示
<br />
所有数据需要传递字符串类型
<br />
基于业务需求定制，所有组件默认为position: absolute;定位文档流

## 代码演示

### 基本使用

::: demo
``` vue
<template>
    <YSXK-DataFrame
        :position="aData.position"
        :columnData="aData.columnData"
    />
</template>

<script>
export default {
    data() {
        return {
            // 假设这是水泵数据
            aData: {
                // 数据框位置
                position: {
                    top: '12px',
                    left: '12px'
                },
                // 每一条数据
                columnData: [
                    {
                        name: '流量', // 标题
                        data: '669', // 值
                        unit: 'm³/h', // 单位
                        flag: '0', // 是否报警
                        type: '', // 数据类型
                    },
                ],
            }
        }
    },
}
</script>
```
:::

### 循环

如果一个页面有多个数据框，处于多个不同的位置，建议aData为数组，循环使用

::: demo
``` vue
<template>
    <YSXK-DataFrame
        v-for="(item, i) in aData"
        :key="i"
        :position="item.position"
        :columnData="item.columnData"
    />
</template>

<script>
export default {
    data() {
        return {
            // 假设这是水泵数据 数组
            aData: [
                {
                    // 数据框位置
                    position: {
                        top: '12px',
                        left: '12px'
                    },
                    // 每一条数据
                    columnData: [
                        {
                            name: '流量', // 标题
                            data: '669', // 值
                            unit: 'm³/h', // 单位
                            flag: '0', // 是否报警
                            type: '', // 数据类型
                        },
                    ],
                },
                {
                    // 数据框位置
                    position: {
                        top: '60px',
                        left: '200px'
                    },
                    // 每一条数据
                    columnData: [
                        {
                            name: '流量', // 标题
                            data: '778', // 值
                            unit: 'm³/h', // 单位
                            flag: '0', // 是否报警
                            type: '', // 数据类型
                        },
                    ],
                },
                {
                    // 数据框位置
                    position: {
                        top: '0px',
                        left: '400px'
                    },
                    // 每一条数据
                    columnData: [
                        {
                            name: '流量', // 标题
                            data: '223', // 值
                            unit: 'm³/h', // 单位
                            flag: '0', // 是否报警
                            type: '', // 数据类型
                        },
                    ],
                },
            ]
        }
    },
}
</script>
```
:::

### 响应式

默认不定宽，不设置maxWidth和minWidth，数据框宽度跟随内容

::: demo
``` vue
<template>
    <YSXK-DataFrame
        :position="aData.position"
        :columnData="aData.columnData"
    />
</template>

<script>
export default {
    data() {
        return {
            // 假设这是水泵数据
            aData: {
                // 数据框位置
                position: {
                    top: '12px',
                    left: '12px'
                },
                // 每一条数据
                columnData: [
                    {
                        name: '消费', // 标题
                        data: '88888888888888888888888888888888888888888888', // 值
                        unit: '', // 单位
                        flag: '', // 是否报警
                        type: '', // 数据类型
                    },
                ],
            }
        }
    },
}
</script>
```
:::

### 多行数据

一个数据框可以包含多个数据，columnData添加对象即可

::: demo
``` vue
<template>
    <YSXK-DataFrame
        :position="aData.position"
        :columnData="aData.columnData"
    />
</template>

<script>
export default {
    data() {
        return {
            // 假设这是水泵数据
            aData: {
                // 数据框位置
                position: {
                    top: '12px',
                    left: '12px'
                },
                // 每一条数据
                columnData: [
                    {
                        name: '流量', // 标题
                        data: '669', // 值
                        unit: 'm³/h', // 单位
                        flag: '0', // 是否报警
                        type: '', // 数据类型
                    },
                    {
                        name: '温度', // 标题
                        data: '28', // 值
                        unit: '℃', // 单位
                        flag: '0', // 是否报警
                        type: '', // 数据类型
                    },
                    {
                        name: 'PH', // 标题
                        data: '0.123', // 值
                        unit: '', // 单位
                        flag: '', // 是否报警
                        type: '', // 数据类型
                    },
                ],
            }
        }
    },
}
</script>
```
:::

### 报警

1. flag 控制是否报警，type： '' 可以报警
    <br />
    flag: '0' 不报警
    <br />
    flag: '1' 报警
2. 故障时可以报警

::: demo
``` vue
<template>
    <YSXK-DataFrame
        :position="aData.position"
        :columnData="aData.columnData"
    />
</template>

<script>
export default {
    data() {
        return {
            // 假设这是水泵数据
            aData: {
                // 数据框位置
                position: {
                    top: '12px',
                    left: '12px'
                },
                // 每一条数据
                columnData: [
                    {
                        name: '流量', // 标题
                        data: '669', // 值
                        unit: 'm³/h', // 单位
                        flag: '0', // 是否报警
                        type: '', // 数据类型
                    },
                    {
                        name: '温度', // 标题
                        data: '88.8', // 值
                        unit: '℃', // 单位
                        flag: '1', // 是否报警
                        type: '', // 数据类型
                    },
                    {
                        name: 'PH', // 标题
                        data: '0.123', // 值
                        unit: '', // 单位
                        flag: '', // 是否报警
                        type: '', // 数据类型
                    },
                ],
            }
        }
    },
}
</script>
```
:::

### 多行数据 & 多列数据

一个数据框可以包含多个数据，而且可以分成多列显示
<br />
maxWidth设置数据框宽度（例如480px），minWidth设置每一条数据宽度（例如33%）

::: demo
``` vue
<template>
    <YSXK-DataFrame
        :position="aData.position"
        :columnData="aData.columnData"
        :maxWidth="'480px'"
        :minWidth="'33%'"
    />
</template>

<script>
export default {
    data() {
        return {
            // 假设这是水泵数据
            aData: {
                // 数据框位置
                position: {
                    top: '12px',
                    left: '12px'
                },
                // 每一条数据
                columnData: [
                    {
                        name: '流量', // 标题
                        data: '669', // 值
                        unit: 'm³/h', // 单位
                        flag: '0', // 是否报警
                        type: '', // 数据类型
                    },
                    {
                        name: '温度', // 标题
                        data: '88', // 值
                        unit: '℃', // 单位
                        flag: '1', // 是否报警
                        type: '', // 数据类型
                    },
                    {
                        name: 'PH', // 标题
                        data: '0.123', // 值
                        unit: '', // 单位
                        flag: '', // 是否报警
                        type: '', // 数据类型
                    },
                    {
                        name: '浊度', // 标题
                        data: '233', // 值
                        unit: '', // 单位
                        flag: '0', // 是否报警
                        type: '', // 数据类型
                    },
                    {
                        name: '开度', // 标题
                        data: '88', // 值
                        unit: '%', // 单位
                        flag: '0', // 是否报警
                        type: '', // 数据类型
                    },
                ],
            }
        }
    },
}
</script>
```
:::

如果宽度不够，将会自动换行
::: demo
``` vue
<template>
    <YSXK-DataFrame
        :position="aData.position"
        :columnData="aData.columnData"
        :maxWidth="'300px'"
        :minWidth="'33%'"
    />
</template>

<script>
export default {
    data() {
        return {
            // 假设这是水泵数据
            aData: {
                // 数据框位置
                position: {
                    top: '12px',
                    left: '12px'
                },
                // 每一条数据
                columnData: [
                    {
                        name: '流量', // 标题
                        data: '669', // 值
                        unit: 'm³/h', // 单位
                        flag: '0', // 是否报警
                        type: '', // 数据类型
                    },
                    {
                        name: '温度', // 标题
                        data: '88', // 值
                        unit: '℃', // 单位
                        flag: '1', // 是否报警
                        type: '', // 数据类型
                    },
                    {
                        name: 'PH', // 标题
                        data: '0.123', // 值
                        unit: '', // 单位
                        flag: '', // 是否报警
                        type: '', // 数据类型
                    },
                    {
                        name: '浊度', // 标题
                        data: '233', // 值
                        unit: '', // 单位
                        flag: '0', // 是否报警
                        type: '', // 数据类型
                    },
                    {
                        name: '开度', // 标题
                        data: '88', // 值
                        unit: '%', // 单位
                        flag: '0', // 是否报警
                        type: '', // 数据类型
                    },
                ],
            }
        }
    },
}
</script>
```
:::

可以任意设置maxWidth和minWidth，自定义几行几列

::: demo
``` vue
<template>
    <YSXK-DataFrame
        :position="aData.position"
        :columnData="aData.columnData"
        :maxWidth="'600px'"
        :minWidth="'25%'"
    />
</template>

<script>
export default {
    data() {
        return {
            // 假设这是水泵数据
            aData: {
                // 数据框位置
                position: {
                    top: '12px',
                    left: '12px'
                },
                // 每一条数据
                columnData: [
                    {
                        name: '流量', // 标题
                        data: '669', // 值
                        unit: 'm³/h', // 单位
                        flag: '0', // 是否报警
                        type: '', // 数据类型
                    },
                    {
                        name: '温度', // 标题
                        data: '88', // 值
                        unit: '℃', // 单位
                        flag: '1', // 是否报警
                        type: '', // 数据类型
                    },
                    {
                        name: 'PH', // 标题
                        data: '0.123', // 值
                        unit: '', // 单位
                        flag: '', // 是否报警
                        type: '', // 数据类型
                    },
                    {
                        name: '浊度', // 标题
                        data: '233', // 值
                        unit: '', // 单位
                        flag: '0', // 是否报警
                        type: '', // 数据类型
                    },
                    {
                        name: '开度', // 标题
                        data: '88', // 值
                        unit: '%', // 单位
                        flag: '0', // 是否报警
                        type: '', // 数据类型
                    },
                ],
            }
        }
    },
}
</script>
```
:::

## type 状态

type 有多种不同的参数，解决不同的业务，需要按需传递

### SludgeDischargeState 排泥状态

排泥中 || 未排泥
<br />
'true' 代表 排泥中
<br />
'false' 代表 未排泥

::: demo
``` vue
<template>
    <YSXK-DataFrame
        :position="aData.position"
        :columnData="aData.columnData"
    />
</template>

<script>
export default {
    data() {
        return {
            // 假设这是水泵数据
            aData: {
                // 数据框位置
                position: {
                    top: '12px',
                    left: '12px'
                },
                // 每一条数据
                columnData: [
                    {
                        name: '1#机器', // 标题
                        data: 'true', // 值
                        type: 'SludgeDischargeState', // 数据类型
                    },
                    {
                        name: '2#机器', // 标题
                        data: 'false', // 值
                        type: 'SludgeDischargeState', // 数据类型
                    },
                ],
            }
        }
    },
}
</script>
```
:::

### SludgeDischargeMode 排泥模式

自动 || 手动
<br />
'true' 和 '1' 代表 自动
<br />
'false' 和 '0' 代表 手动

::: demo
``` vue
<template>
    <YSXK-DataFrame
        :position="aData.position"
        :columnData="aData.columnData"
    />
</template>

<script>
export default {
    data() {
        return {
            // 假设这是水泵数据
            aData: {
                // 数据框位置
                position: {
                    top: '12px',
                    left: '12px'
                },
                // 每一条数据
                columnData: [
                    {
                        name: '1#机器', // 标题
                        data: 'true', // 值
                        type: 'SludgeDischargeMode', // 数据类型
                    },
                    {
                        name: '2#机器', // 标题
                        data: 'false', // 值
                        type: 'SludgeDischargeMode', // 数据类型
                    },
                    {
                        name: '1#机器', // 标题
                        data: '1', // 值
                        type: 'SludgeDischargeMode', // 数据类型
                    },
                    {
                        name: '2#机器', // 标题
                        data: '0', // 值
                        type: 'SludgeDischargeMode', // 数据类型
                    },
                ],
            }
        }
    },
}
</script>
```
:::

### ValveState 电动阀状态

0 离线
<br />
1 全开
<br />
2 全关
<br />
3 打开中
<br />
4 关闭中
<br />
5 半开
<br />
6 故障

::: demo
``` vue
<template>
    <YSXK-DataFrame
        :position="aData.position"
        :columnData="aData.columnData"
        :maxWidth="'400px'"
        :minWidth="'50%'"
    />
</template>

<script>
export default {
    data() {
        return {
            // 假设这是水泵数据
            aData: {
                // 数据框位置
                position: {
                    top: '12px',
                    left: '12px'
                },
                // 每一条数据
                columnData: [
                    {
                        name: '0#电动阀', // 标题
                        data: '0', // 值
                        type: 'ValveState', // 数据类型
                    },
                    {
                        name: '1#电动阀', // 标题
                        data: '1', // 值
                        type: 'ValveState', // 数据类型
                    },
                    {
                        name: '2#电动阀', // 标题
                        data: '2', // 值
                        type: 'ValveState', // 数据类型
                    },
                    {
                        name: '3#电动阀', // 标题
                        data: '3', // 值
                        type: 'ValveState', // 数据类型
                    },
                    {
                        name: '4#电动阀', // 标题
                        data: '4', // 值
                        type: 'ValveState', // 数据类型
                    },
                    {
                        name: '5#电动阀', // 标题
                        data: '5', // 值
                        type: 'ValveState', // 数据类型
                    },
                    {
                        name: '6#电动阀', // 标题
                        data: '6', // 值
                        type: 'ValveState', // 数据类型
                    },
                ],
            }
        }
    },
}
</script>
```
:::

### AgitatorState 搅拌机状态

故障 || 运行 || 停止
<br />
dataX 为 'true' 故障
<br />
data 为 'true' 运行
<br />
data 为 'false' 停止
<br />
优先级 dataX > data

::: demo
``` vue
<template>
    <YSXK-DataFrame
        :position="aData.position"
        :columnData="aData.columnData"
    />
</template>

<script>
export default {
    data() {
        return {
            // 假设这是水泵数据
            aData: {
                // 数据框位置
                position: {
                    top: '12px',
                    left: '12px'
                },
                // 每一条数据
                columnData: [
                    {
                        name: '1#机器', // 标题
                        data : 'true', // 值
                        dataX: '', // 值 优先级高于data
                        type: 'AgitatorState', // 数据类型
                    },
                    {
                        name: '2#机器', // 标题
                        data : 'true', // 值
                        dataX: 'true', // 值 优先级高于data
                        type: 'AgitatorState', // 数据类型
                    },
                    {
                        name: '3#机器', // 标题
                        data : 'false', // 值
                        dataX: 'true', // 值 优先级高于data
                        type: 'AgitatorState', // 数据类型
                    },
                    {
                        name: '4#机器', // 标题
                        data : 'false', // 值
                        dataX: '', // 值 优先级高于data
                        type: 'AgitatorState', // 数据类型
                    },
                ],
            }
        }
    },
}
</script>
```
:::

### AgitatorMode 搅拌机控制模式

（远程 || 就地） && （自动 || 手动）
<br />
data 为 'true' 远程
<br />
data 为 'false' 就地
<br />
data2 为 'true' 自动
<br />
data2 为 'false' 手动

::: demo
``` vue
<template>
    <YSXK-DataFrame
        :position="aData.position"
        :columnData="aData.columnData"
    />
</template>

<script>
export default {
    data() {
        return {
            // 假设这是水泵数据
            aData: {
                // 数据框位置
                position: {
                    top: '12px',
                    left: '12px'
                },
                // 每一条数据
                columnData: [
                    {
                        name: '1#机器', // 标题
                        data : 'true', // 值
                        data2: 'true', // 值
                        type: 'AgitatorMode', // 数据类型
                    },
                    {
                        name: '2#机器', // 标题
                        data : 'true', // 值
                        data2: 'false', // 值
                        type: 'AgitatorMode', // 数据类型
                    },
                    {
                        name: '3#机器', // 标题
                        data : 'false', // 值
                        data2: 'true', // 值
                        type: 'AgitatorMode', // 数据类型
                    },
                    {
                        name: '4#机器', // 标题
                        data : 'false', // 值
                        data2: 'false', // 值
                        type: 'AgitatorMode', // 数据类型
                    },
                ],
            }
        }
    },
}
</script>
```
:::

### MeteringPumpMode 计量泵控制模式

手动 || 流量模式 || 浊度模式
<br />
data 为 'false' 手动
<br />
dataX 为 'true' 流量模式
<br />
dataX2 为 'true' 浊度模式
<br />
优先级 data > dataX > dataX2

::: demo
``` vue
<template>
    <YSXK-DataFrame
        :position="aData.position"
        :columnData="aData.columnData"
    />
</template>

<script>
export default {
    data() {
        return {
            // 假设这是水泵数据
            aData: {
                // 数据框位置
                position: {
                    top: '12px',
                    left: '12px'
                },
                // 每一条数据
                columnData: [
                    {
                        name: '1#机器', // 标题
                        data : 'false', // 值
                        dataX: '', // 值
                        dataX2: '', // 值
                        type: 'MeteringPumpMode', // 数据类型
                    },
                    {
                        name: '2#机器', // 标题
                        data : '', // 值
                        dataX: 'true', // 值
                        dataX2: '', // 值
                        type: 'MeteringPumpMode', // 数据类型
                    },
                    {
                        name: '3#机器', // 标题
                        data : '', // 值
                        dataX: '', // 值
                        dataX2: 'true', // 值
                        type: 'MeteringPumpMode', // 数据类型
                    },
                    // 测试优先级
                    {
                        name: '4#机器', // 标题
                        data : 'false', // 值
                        dataX: 'true', // 值
                        dataX2: 'true', // 值
                        type: 'MeteringPumpMode', // 数据类型
                    },
                ],
            }
        }
    },
}
</script>
```
:::

## img 图片
type 为 ValveState、AgitatorState 时，可以添加图片，方便用户区分设备当前状态
<br />
背景图为红色：
<br />
img green绿色 运行、imgX orange橙色 故障、imgX2 gray灰色 离线
<br />
图片显示顺序优先级：imgX2 > imgX > img
<br />
常用 绿色、橙色。灰色有可能不存在

### AgitatorState 搅拌机状态

img图片使用position: fixed定位，注意使用 transform: scale(100.000001%); 或者 transform: rotate(360deg); 进行配合，例如YSXK-ScaleDiv组件
<br />
故障优先级大于正常和停止

::: demo
``` vue
<template>
<div class="box">
    <YSXK-DataFrame
        :position="aData.position"
        :columnData="aData.columnData"
    />
</div>
</template>

<script>
export default {
    data() {
        return {
            // 假设这是水泵数据
            aData: {
                // 数据框位置
                position: {
                    top: '12px',
                    left: '12px'
                },
                // 每一条数据
                columnData: [
                    {
                        name: '1#机器', // 标题
                        data : 'true', // 值
                        dataX: 'true', // 值 优先级高于data
                        type: 'AgitatorState', // 数据类型
                        // 运行 为 img
                        // 地址替换为你自己的地址
                        // 如果图片在前端assets文件夹呢，属于静态资源，需要使用require方法
                        img : require('../.vuepress/public/images/jbj-green.png'),
                        // 故障 为 imgX
                        imgX: require('../.vuepress/public/images/jbj-orange.png'),
                        // 图片位置
                        location: {
                            top: '12px',
                            left: '200px'
                        },
                        // 图片宽高
                        size: {
                            w: '32px',
                            h: '64px'
                        }
                    },
                ],
            }
        }
    },
}
</script>

<style>
.box {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: rotate(360deg);
    /* transform: scale(100.000001%); */
}
</style>
```
:::

## 接口

| 属性名 | 类型 | 默认值 | 描述 | 是否必填 |
| --- | --- | --- | --- | --- |
| position | Object | 无 | 包含top和left属性的对象 | 是 |
| columnData | Array | 无 | 包含每一条数据的对象 | 是 |
| maxWidth | String | 无 | 数据框宽度，单位px | 否 |
| minWidth | String | 无 | 每一条数据的宽度百分比 | 否 |

## 注意事项

如果用于普通文档流，不定位使用，需要对YSXK-DataFrame组件设置：position: static;