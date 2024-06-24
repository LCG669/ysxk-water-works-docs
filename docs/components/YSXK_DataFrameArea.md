# YSXK_DataFrameArea 数据框区域

YSXK_DataFrameArea 数据框区域 是 YSXK_DataFrame 数据框 带标题和分界线版本，多了一个areaData层级不同，其他API完全相同
<br />
所有数据需要传递字符串类型
<br />
基于业务需求定制，所有组件默认为position: absolute;定位文档流

## 代码演示

### 基本使用

::: demo
``` vue
<template>
<div style="height: 300px;">
    <!-- 复制时注意！这里 aData 改为了 bData -->
    <YSXK_DataFrameArea
        :position="bData.position"
        :areaData="bData.areaData"
        :maxWidth="'480px'"
    />
</div>
</template>
<script>
export default {
    data() {
        return {
            // 脱水机房
            bData: {
                position: {
                    top: '12px',
                    left: '12px'
                },
                areaData: [
                    {
                        title: '1#脱水机',
                        minWidth: '33.333%',
                        columnData: [
                            {
                                name: '离心机', // 标题
                                data : 'true', // 值
                                dataX: 'true', // 值
                                type: 'AgitatorState', // 数据类型
                            },
                            {
                                name: '切割泵', // 标题
                                data: 'true', // 值
                                type: 'AgitatorState', // 数据类型
                            },
                            {
                                name: '螺杆泵', // 标题
                                data: 'true', // 值
                                type: 'AgitatorState', // 数据类型
                            },
                            {
                                name: '主轴电机', // 标题
                                data: 'true', // 值
                                type: 'AgitatorState', // 数据类型
                            },
                            {
                                name: '辅轴电机', // 标题
                                data: 'true', // 值
                                type: 'AgitatorState', // 数据类型
                            },
                            {
                                name: '刀闸阀', // 标题
                                data: 'true', // 值
                                type: 'AgitatorState', // 数据类型
                            },
                            {
                                name: '冲洗阀1', // 标题
                                data: 'true', // 值
                                type: 'AgitatorState', // 数据类型
                            },
                            {
                                name: '冲洗阀2', // 标题
                                data: 'true', // 值
                                type: 'AgitatorState', // 数据类型
                            },
                        ],
                    },
                    {
                        title: '2#脱水机',
                        minWidth: '50%',
                        columnData: [
                            {
                                name: '离心机', // 标题
                                data: 'false', // 值
                                type: 'AgitatorState', // 数据类型
                            },
                            {
                                name: '切割泵', // 标题
                                data: 'false', // 值
                                type: 'AgitatorState', // 数据类型
                            },
                            {
                                name: '螺杆泵', // 标题
                                data: 'false', // 值
                                type: 'AgitatorState', // 数据类型
                            },
                            {
                                name: '主轴电机', // 标题
                                data: 'false', // 值
                                type: 'AgitatorState', // 数据类型
                            },
                            {
                                name: '辅轴电机', // 标题
                                data: 'false', // 值
                                type: 'AgitatorState', // 数据类型
                            },
                            {
                                name: '刀闸阀', // 标题
                                data: 'false', // 值
                                type: 'AgitatorState', // 数据类型
                            },
                            {
                                name: '冲洗阀1', // 标题
                                data: 'false', // 值
                                type: 'AgitatorState', // 数据类型
                            },
                            {
                                name: '冲洗阀2', // 标题
                                data: 'false', // 值
                                type: 'AgitatorState', // 数据类型
                            },
                        ],
                    },
                ]
            }
        }
    },
}
</script>
```
:::

## type 状态

YSXK_DataFrameArea 数据框 区域和YSXK_DataFrame 数据框 规则相同，详情见：[type 状态](/components/YSXK_DataFrame.html#type-状态)
