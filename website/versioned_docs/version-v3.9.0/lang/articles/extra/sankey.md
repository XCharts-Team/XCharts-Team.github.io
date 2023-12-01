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


|API|版本|描述|
|--|--|--|
|AddDefaultSerie()||public static void AddDefaultSerie(BaseChart chart, string serieName)|

### SankeyChart

> class in XCharts.Runtime.Sankeys / 继承自: [BaseChart](https://xcharts-team.github.io/docs/api#basechart)


### SankeyStyle

> class in XCharts.Runtime.Sankeys / 继承自: [ChildComponent](https://xcharts-team.github.io/docs/api#childcomponent)


## 配置项手册

### Sankey

> class in XCharts.Runtime.Sankeys / 继承自: [Serie](https://xcharts-team.github.io/docs/configuration#serie)

```mdx-code-block
<APITable name="Sankey">
```

|参数|默认|版本|描述|
|--|--|--|--|
|sankeyStyle||| [SankeyStyle](#sankeystyle)|

```mdx-code-block
</APITable>
```

### SankeyStyle

> class in XCharts.Runtime.Sankeys / 继承自: [ChildComponent](https://xcharts-team.github.io/docs/configuration#childcomponent)

```mdx-code-block
<APITable name="SankeyStyle">
```

|参数|默认|版本|描述|
|--|--|--|--|
|show|true||
|3D|true||
|drawTop|true||
|bottomPointRate|0.5f||3D模式下，底部中点占金字塔宽度的比例
|leftPointRate|0.1f||3D模式下，底部左边点占金字塔高度的比例
|rightPointRate|0.1f||3D模式下，底部右边点占金字塔高度的比例
|leftColorOpacity|0.9f||3D模式下，金字塔左边的颜色透明度
|rightColorOpacity|0.7f||3D模式下，金字塔右边的颜色透明度
|topColorOpacity|0.99f||3D模式下，金字塔顶部的颜色透明度
|labelLineMargin|10f||Label标签距离右边的距离

```mdx-code-block
</APITable>
```

