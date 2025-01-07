---
sidebar_position: 0
slug: /sankey
---

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

# 日志

### v3.12.0

* (2024.09.30) 发布`v3.12.0`版本
* (2024.09.30) 更新文档

### v3.11.0

* (2024.06.16) 发布`v3.11.0`版本
* (2024.03.20) 增加`Sankey`的展开和折叠功能支持

## API

### Sankey

class in XCharts.Runtime.Sankeys / 继承自: [Serie](https://xcharts-team.github.io/docs/api#serie)

桑基图是一种特殊的流图（可以看作是有向无环图）。 它主要用来表示原材料、能量等如何从最初形式经过中间过程的加工或转化达到最终状态。

#### Sankey.defaultColorBy

public override SerieColorBy defaultColorBy  

#### Sankey.levelStyle

public LevelStyle levelStyle  
层级样式。

#### Sankey.AddDefaultSerie

public static void AddDefaultSerie(BaseChart chart, string serieName)  

#### Sankey.GetLevelItemStyle

public ItemStyle GetLevelItemStyle(int depth)  

#### Sankey.GetLevelLabel

public LabelStyle GetLevelLabel(int depth)  

#### Sankey.GetLevelLineStyle

public LineStyle GetLevelLineStyle(int depth)  

### Sankey.NodeAlign

class in XCharts.Runtime.Sankeys

节点对齐方式。

可选：

- `Top`: 顶部对齐
- `Center`: 居中对齐
- `Bottom`: 底部对齐

### SankeyChart

class in XCharts.Runtime.Sankeys / 继承自: [BaseChart](https://xcharts-team.github.io/docs/api#basechart)

## 配置项手册

### Sankey

class in XCharts.Runtime.Sankeys / 继承自: [Serie](https://xcharts-team.github.io/docs/configuration#serie)

桑基图是一种特殊的流图（可以看作是有向无环图）。 它主要用来表示原材料、能量等如何从最初形式经过中间过程的加工或转化达到最终状态。

#### Sankey.collapse

`bool` `false` `v3.11.0`

是否开启折叠。

#### Sankey.collapseLevel

`int` `-1` `v3.11.0`

折叠限制的层级。层级从0开始，-1表示不限制。

#### Sankey.collapseMutex

`bool` `true` `v3.11.0`

是否开启折叠互斥。

#### Sankey.curveness

`float` `0.5f`

线条的弯曲程度。

#### Sankey.defaultExpandDataIndex

`int` `-1` `v3.11.0`

默认展开的数据索引。

#### Sankey.draggable

`bool`

是否可拖拽。

#### Sankey.levelStyle

`LevelStyle`

层级样式。

#### Sankey.lineGradient

`bool` `true` `v3.11.0`

是否开启线条渐变。开启后lineStyle的color将不生效。

#### Sankey.nodeAlign

[Sankey.NodeAlign](#sankeynodealign)

节点对齐方式。

可选：

- `Top`: 顶部对齐
- `Center`: 居中对齐
- `Bottom`: 底部对齐

#### Sankey.nodeGap

`float` `8`

节点的间距。

#### Sankey.nodeWidth

`float` `20`

节点的宽度。