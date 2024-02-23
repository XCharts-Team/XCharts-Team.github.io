---
sidebar_position: 0
slug: /sankey
---
import APITable from '@site/src/components/APITable';

# SankeyChart 桑基图

XCharts付费扩展图表 - 桑基图。

## 截图

## 许可

扩展图表，需付费购买后才获得使用许可。

## 教程

[扩展图表如何导入Demo项目或导入自己项目](https://github.com/XCharts-Team/XCharts-Demo)

## 文档

[API](#api)  
[配置项手册](#配置项手册)  

## 日志

### v3.10.0

## API

### Sankey

> class in XCharts.Runtime.Sankeys / 继承自: [Serie](https://xcharts-team.github.io/docs/api#serie)

桑基图是一种特殊的流图（可以看作是有向无环图）。 它主要用来表示原材料、能量等如何从最初形式经过中间过程的加工或转化达到最终状态。

|API|版本|描述|
|--|--|--|
|AddDefaultSerie()||public static void AddDefaultSerie(BaseChart chart, string serieName)|
|GetLevelItemStyle()||public ItemStyle GetLevelItemStyle(int depth)|
|GetLevelLabel()||public LabelStyle GetLevelLabel(int depth)|
|GetLevelLineStyle()||public LineStyle GetLevelLineStyle(int depth)|

### SankeyChart

> class in XCharts.Runtime.Sankeys / 继承自: [BaseChart](https://xcharts-team.github.io/docs/api#basechart)


## 配置项手册

### Sankey

> class in XCharts.Runtime.Sankeys / 继承自: [Serie](https://xcharts-team.github.io/docs/configuration#serie)

桑基图是一种特殊的流图（可以看作是有向无环图）。 它主要用来表示原材料、能量等如何从最初形式经过中间过程的加工或转化达到最终状态。

```mdx-code-block
<APITable name="Sankey">
```

|参数|默认|版本|描述|
|--|--|--|--|
|nodeAlign|||节点对齐方式。<br/>`Sankey.NodeAlign`:<br/>- `Top`: 顶部对齐<br/>- `Center`: 居中对齐<br/>- `Bottom`: 底部对齐<br/>|
|nodeWidth|20||节点的宽度。
|nodeGap|8||节点的间距。
|draggable|||是否可拖拽。
|curveness|0.5f||线条的弯曲程度。
|levelStyle|||层级样式。

```mdx-code-block
</APITable>
```

