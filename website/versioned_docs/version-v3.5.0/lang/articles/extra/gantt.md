---
sidebar_position: 0
slug: /gantt
---

# 甘特图

XCharts付费扩展图表 - 甘特图。

![gantt](img/gantt.png)


## 许可

扩展图表，需付费购买后才获得使用许可。

## 教程

[扩展图表如何导入Demo项目或导入自己项目](https://github.com/XCharts-Team/XCharts-Demo)

## 文档

[API](#api)  
[配置项手册](#配置项手册)  

## 日志

### v3.2.0

* (2022.08.22) 发布`v3.2.0`版本
* (2022.08.19) 同步`XCharts v3.2.0`

## API

### GanttChart

Inherits or Implemented: [BaseChart](#basechart)

|public method|description|
|--|--|
| GetSeriesMinMaxValue() |public override void GetSeriesMinMaxValue(Axis axis, int axisIndex, out double tempMinValue, out double tempMaxValue)|
| InitAxisRuntimeData() |public override void InitAxisRuntimeData(Axis axis)|
| OnBeginDrag() |public override void OnBeginDrag(PointerEventData eventData)|
| OnDrag() |public override void OnDrag(PointerEventData eventData)|
| OnEndDrag() |public override void OnEndDrag(PointerEventData eventData)|
| OnPointerClick() |public override void OnPointerClick(PointerEventData eventData)|

## 配置项手册

### Gantt

Inherits or Implemented: [Serie](#serie)

|field|default|since|comment|
|--|--|--|--|
|disableDrag|||

### GanttStyle

Inherits or Implemented: [MainComponent](#maincomponent)

|field|default|since|comment|
|--|--|--|--|
|show|true||
|ganttType|||甘特图类型。<br/>`GanttType`:<br/>- `Monomial`: 单项甘特图。每个数据项都是单独的一条进度。<br/>- `Multinomial`: 多项甘特图。每个数据项只是一条进度里的一段。<br/>|
|invert|true||
|dragEnable|true||是否可以拖拽甘特图。
|dragSensitivity|1f||拖拽的灵敏度。
|dragRangeMin|0||拖拽最小值限制。
|dragRangeMax|0||拖拽最大值限制。
|autoAdsorbAlignline|true||拖拽结束后是否自动吸附到对齐线。
|alignlineDataIndex|1||显示对齐线的数据项索引。
|showAlignlineRange|10f||显示对齐线的范围。
|aliginLine|||对齐线样式。
|splitArea|||

