---
sidebar_position: 0
slug: /graph
---
import APITable from '@site/src/components/APITable';

# GraphChart 关系图

XCharts付费扩展图表 - 关系图。

## 截图

## 许可

扩展图表，需付费购买后才获得使用许可。

## 教程

[扩展图表如何导入Demo项目或导入自己项目](https://github.com/XCharts-Team/XCharts-Demo)

## 文档

[API](#api)  
[配置项手册](#配置项手册)  

## 日志

### v3.11.0

* (2024.06.16) 发布`v3.11.0`版本
* (2024.05.15) 增加`Graph`关系图

## API

### Force

> class in XCharts.Runtime.Graphs / 继承自: [ChildComponent](https://xcharts-team.github.io/docs/api#childcomponent)

图表的力引导布局。

### Graph

> class in XCharts.Runtime.Graphs / 继承自: [Serie](https://xcharts-team.github.io/docs/api#serie)

关系图，用于展现节点以及节点之间的关系数据。

|API|版本|描述|
|--|--|--|
|AddDefaultSerie()||public static void AddDefaultSerie(BaseChart chart, string serieName)|
|AddLink()||public override SerieDataLink AddLink(string sourceId, string targetId, double value = 0)|
|AddSerieData()||public override void AddSerieData(SerieData serieData)|
|ClearData()||public override void ClearData()<br/>清空所有数据 |
|GetLevelItemStyle()||public ItemStyle GetLevelItemStyle(int depth)|
|GetLevelLabel()||public LabelStyle GetLevelLabel(int depth)|
|GetLevelLineStyle()||public LineStyle GetLevelLineStyle(int depth)|

### GraphChart

> class in XCharts.Runtime.Graphs / 继承自: [BaseChart](https://xcharts-team.github.io/docs/api#basechart)


## 配置项手册

### Force

> class in XCharts.Runtime.Graphs / 继承自: [ChildComponent](https://xcharts-team.github.io/docs/configuration#childcomponent)

图表的力引导布局。

```mdx-code-block
<APITable name="Force">
```

|参数|默认|版本|描述|
|--|--|--|--|
|show|true||
|stepFactor|1f||力引导布局的步进因子。
|stepCount|1||
|friction|0.6f||节点移动的摩擦因子，该值越大节点移动越慢。
|edgeLength|80||边的两个节点之间的距离，这个距离也会受 repulsion 影响。
|centerDataIndex|-1||中心节点数据的索引。
|iterations|200||力引导布局的迭代次数。

```mdx-code-block
</APITable>
```

### Graph

> class in XCharts.Runtime.Graphs / 继承自: [Serie](https://xcharts-team.github.io/docs/configuration#serie)

关系图，用于展现节点以及节点之间的关系数据。

```mdx-code-block
<APITable name="Graph">
```

|参数|默认|版本|描述|
|--|--|--|--|
|levelStyle|||层级样式。
|force|||图表的力引导布局。 [Force](#force)|

```mdx-code-block
</APITable>
```

