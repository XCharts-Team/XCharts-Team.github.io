---
sidebar_position: 0
slug: /extra
---

# 扩展图表

`XCharts`的扩展图表。

## 支持的扩展图表

* [Bar3DChart 3D柱图](bar3d.md)
* [FunnelChart 漏斗图](funnel.md)
* [GanttChart 甘特图](gantt.md)
* [GaugeChart 仪表盘](gauge.md)
* [LiquidChart 水位图](liquid.md)
* [PictorialBarChart 象形柱图](pictorialbar.md)
* [Pie3DChart 3D饼图](pie3d.md)
* [PyramidChart 金字塔](pyramid.md)
* [TreemapChart 矩形树图](treemap.md)

## 扩展图表如何导入到`XCharts-Demo`

以 `Pie3DChart` 为例：

1. 购买图表：购买扩展图表后，Github找到仓库 `XCharts-Pie3DChart`（私有仓库，购买后加入Team才可见）
2. 下载图表：选择和XCharts最接近的版本
3. 导入图表：将下载好的`XCharts-Pie3DChart`目录覆盖到`XCharts-Demo`项目中的`Packages/XCharts-Pie3DChart`
4. 下载图表Demo：Github找到仓库 `XCharts-Pie3DChart-Demo`并下载
5. 导入图表Demo：将下载好的`XCharts-Pie3DChart-Demo`目录覆盖到`XCharts-Demo`项目中的`Assets/XChartsExtensionDemo/XCharts-Pie3DChart-Demo`

## 扩展图表如何导入自己的项目中

以 `Pie3DChart` 为例：

1. 先确保项目中已导入`XCharts`
2. 再导入`XCharts-Pie3DChart`即可，不需要导入`XCharts-Pie3DChart-Demo`（如果要导入的话需要Unity版本接近2019.4.39f1）
