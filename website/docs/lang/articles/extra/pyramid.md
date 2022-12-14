---
sidebar_position: 0
slug: /pyramid
---

# 金字塔

XCharts付费扩展图表 - 金字塔。

![pyramid](img/pyramid.png)

## 许可

扩展图表，需付费购买后才获得使用许可。

## 教程

[扩展图表如何导入Demo项目或导入自己项目](https://github.com/XCharts-Team/XCharts-Demo)

## 文档

[API](#api)  
[配置项手册](#配置项手册)  

## 日志

### v3.5.0

* (2022.12.01) 发布`v3.5.0`版本
* (2022.11.27) 调整`Documentation`文档结构

### v3.2.0

* (2022.08.22) 发布`v3.2.0`版本
* (2022.08.19) 同步`XCharts v3.2.0`

## API

### PyramidChart

Inherits or Implemented: [BaseChart](#basechart)

## 配置项手册

### Pyramid

Inherits or Implemented: [Serie](#serie)

|field|default|since|comment|
|--|--|--|--|
|pyramidStyle||| [PyramidStyle](#pyramidstyle)|

### PyramidStyle

Inherits or Implemented: [ChildComponent](#childcomponent)

|field|default|since|comment|
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

