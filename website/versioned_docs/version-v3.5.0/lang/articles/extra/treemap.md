---
sidebar_position: 0
slug: /treemap
---

# 矩形树图

XCharts付费扩展图表 - 矩形树图。

![treemap](img/treemap.png)

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

### TreemapChart

Inherits or Implemented: [BaseChart](#basechart)

## 配置项手册

### Treemap

Inherits or Implemented: [Serie](#serie)

|field|default|since|comment|
|--|--|--|--|
|leafDepth|0||默认显示的几层节点。默认为0时表示尽可能展示多层节点，设置大于0时，下钻功能开启，需要点击后才展示子节点。
|visualDimension|0||用于计算占比的数据维数。
|drillDownIcon|||当节点可以下钻时的提示符，只能是字符。默认为▶
|customGoUpLevelButton|||自定义返回上一层按钮，自定义的按钮需要自己处理点击事件，调用GoUpALevel()接口。
|upperLabel|||父节点标签。show为true时表示显示父节点标签，margin参数设置子节点和父节点的间距。
|levelStyle|||

