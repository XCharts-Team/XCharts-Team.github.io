---
sidebar_position: 0
slug: /gauge
---

# 仪表盘

XCharts付费扩展图表 - 仪表盘。

![gauge](img/gauge.png)

## 许可

扩展图表，需付费购买后才获得使用许可。

## 教程

[扩展图表如何导入Demo项目或导入自己项目](https://github.com/XCharts-Team/XCharts-Demo)

## 文档

[API](#api)  
[配置项手册](#配置项手册)  

## 日志

### master

### v3.5.0

* (2022.12.01) 发布`v3.5.0`版本
* (2022.11.27) 调整`Documentation`文档结构

### v3.4.0

* (2022.10.05) 增加`GaugeAxisLine`的`stageGradient`支持设置阶段渐变色过渡

### v3.3.0

* (2022.09.28) 发布`v3.3.0`版本
* (2022.08.26) 修复`Pointer`在普通模式下不显示的问题
* (2022.08.25) 增加`label`颜色跟随数值变化的支持

### v3.2.0

* (2022.08.22) 发布`v3.2.0`版本
* (2022.08.19) 同步`XCharts v3.2.0`
* (2022.08.15) 支持渐变

## API

### GaugeChart

Inherits or Implemented: [BaseChart](#basechart)

## 配置项手册

### Gauge

Inherits or Implemented: [Serie](#serie)

|field|default|since|comment|
|--|--|--|--|
|gaugeAxis|||仪表盘轴线。 [GaugeAxis](#gaugeaxis)|
|gaugePointer|||仪表盘指针。 [GaugePointer](#gaugepointer)|
|gaugeAnchor|||仪表盘指针固定点。 [GaugeAnchor](#gaugeanchor)|

### GaugeAnchor

Inherits or Implemented: [ChildComponent](#childcomponent)

|field|default|since|comment|
|--|--|--|--|
|show|true||是否显示指针固定点。
|showAbove|true||固定点是否显示在指针上面。
|type|||标记类型。
|size|6||标记的大小。
|gap|0||图形标记和线条的间隙距离。
|image|||自定义的标记图形。
|imageType|||
|offsetCenter|Vector2(0, 0)||相对于中心的偏移位置。
|itemStyle|||图形样式。

### GaugeAxis

Inherits or Implemented: [ChildComponent](#childcomponent)

仪表盘轴线相关设置。

|field|default|since|comment|
|--|--|--|--|
|show|true||
|type|||<br/>`GaugeAxisType`:<br/>- `None`: 仪表盘类型<br/>- `Section`: 分段<br/>- `Progress`: 进度<br/>|
|overlap|true||
|distance|||
|axisLine|||仪表盘轴线样式。 [GaugeAxisLine](#gaugeaxisline)|
|splitLine|||分割线。
|axisTick|||刻度。
|axisLabel|||文本标签。
|axisLabelText|||自定义Label的内容。

### GaugeAxisLine

Inherits or Implemented: [BaseLine](#baseline)

|field|default|since|comment|
|--|--|--|--|
|backgroundColor|Color32(230, 235, 248, 255)||进度条背景颜色。
|stageColor|||阶段颜色。
|stageGradient||v3.4.0|阶段颜色是否渐变过渡。

### GaugePointer

Inherits or Implemented: [ChildComponent](#childcomponent)

仪表盘指针相关设置。

|field|default|since|comment|
|--|--|--|--|
|show|true||是否显示指针。
|length|0.6f||指针长度。可以是绝对值，也可以是相对于半径的百分比（0-1的浮点数）。
|backLength|0.05f||指针后凸出的长度。可以是绝对值，也可以是相对于半径的百分比（0-1的浮点数）。
|backExtraLength|0.05f||指针后额外的长度。可以是绝对值，也可以是相对于半径的百分比（0-1的浮点数）。
|topLeftLength|0f||指针顶部左边凸起长度。可以是绝对值，也可以是相对于半径的百分比（0-1的浮点数）。
|topRightLength|0f||指针顶部右边凸起长度。可以是绝对值，也可以是相对于半径的百分比（0-1的浮点数）。
|bottomLeftLength|0.025f||指针底部左边凸起长度。可以是绝对值，也可以是相对于半径的百分比（0-1的浮点数）。
|bottomRightLength|0.025f||指针底部右边凸起长度。可以是绝对值，也可以是相对于半径的百分比（0-1的浮点数）。
|distance|||
|roundCap|||
|autoColor|true||
|color|||
|toColor|||
|cornerRadius|||圆角半径。用数组分别指定4个圆角半径（顺时针左上，右上，右下，左下）。

