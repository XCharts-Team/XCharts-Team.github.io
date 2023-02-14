---
sidebar_position: 0
slug: /liquid
---

# LiquidChart 水位图

XCharts的付费扩展图表 - 水位图。

![liquid](img/liquid.png)

## 许可

扩展图表，需付费购买后才获得使用许可。

## 教程

[扩展图表如何导入Demo项目或导入自己项目](https://github.com/XCharts-Team/XCharts-Demo)

## 文档

[API](#api)  
[配置项手册](#配置项手册)  

## 日志

### v3.6.0

* (2023.02.14) 同步`XCharts v3.6.0`

### v3.5.0

* (2022.12.01) 发布`v3.5.0`版本
* (2022.11.27) 调整`Documentation`文档结构

### v3.4.0

* (2022.11.01) 支持`Animation`的`unscaledTime`
* (2022.11.01) 同步`XCharts v3.4.0`

### v3.2.0

* (2022.08.22) 发布`v3.2.0`版本
* (2022.08.19) 同步`XCharts v3.2.0`

## API

### LiquidChart

Inherits or Implemented: [BaseChart](https://xcharts-team.github.io/docs/api#basechart)

### VesselContext

Inherits or Implemented: [MainComponentContext](https://xcharts-team.github.io/docs/api#maincomponentcontext)

## 配置项手册

### Liquid

Inherits or Implemented: [Serie](https://xcharts-team.github.io/docs/configuration#serie),[INeedSerieContainer](#ineedseriecontainer)

|field|default|since|comment|
|--|--|--|--|
|waveHeight|10f||波高。
|waveLength|20f||波长。为0-1小数时指直线的百分比。
|waveSpeed|5f||波速。正数时左移，负数时右移。
|waveOffset|0f||波偏移。

### Vessel

Inherits or Implemented: [MainComponent](https://xcharts-team.github.io/docs/configuration#maincomponent),[ISerieContainer](#iseriecontainer),[IUpdateRuntimeData](#iupdateruntimedata)

容器组件。 一般用于LiquidChart。一个Chart中可以有多个Vessel，Serie中用vesselIndex来对应。

|field|default|since|comment|
|--|--|--|--|
|show|true||是否显示容器组件。 [defaut: true]
|shape|||容器形状。 [default: Shape.Circle]<br/>`Vessel.Shape`:<br/>- `Circle`: 圆形<br/>- `Rect`: 正方形。<br/>- `Triangle`: 三角形。<br/>- `Diamond`: 菱形。<br/>|
|shapeWidth|5f||容器厚度。 [defaut: 5f]
|gap|5f||间隙。容器和液体的间隙。 [defaut: 10f]
|color|Color32(70, 70, 240, 255)||容器颜色。默认和serie一致。
|backgroundColor|||背景色，默认透明。 [default: `Color.clear`]
|autoColor|true||是否自动颜色。为true时颜色会和serie一致。 [default: true]
|center|||When value between 0 and 1 represents a percentage  relative to the chart.
|radius|0.35f||When value between 0 and 1 represents a percentage relative to the chart.
|smoothness|1f||水波平滑度。 [default: 1f]
|width|0.5f||When value between 0 and 1 represents a percentage relative to the chart.
|height|0.7f||When value between 0 and 1 represents a percentage relative to the chart.
|borderWidth|0f||内壁边框。
|borderColor|Color32(70, 70, 240, 255)||容器内壁边框颜色。默认和serie一致。
|cornerRadius|||容器的圆角半径。用数组分别指定4个圆角半径（顺时针左上，右上，右下，左下）。shape为Rect时有效。

