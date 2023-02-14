---
sidebar_position: 0
slug: /bar3d
---

# Bar3DChart 3D柱图

XCharts的付费扩展图表 - 3D柱图。

![bar3d](img/bar3d.png)

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
* (2023.02.14) 增加`Bar3DStyle`的`topColor`、`bottomColor`和`sideColor`参数支持

### v3.5.0

* (2022.11.29) 增加`Serie`的`barMaxWidth`参数支持
* (2022.11.27) 增加`Serie`的`ItemStyle`的`backgroundColor`参数支持
* (2022.11.27) 增加`Serie`的`colorBy`的支持
* (2022.11.27) 更新文档

### v3.4.0

* (2022.11.01) 支持`Animation`的`unscaledTime`
* (2022.11.01) 同步`XCharts v3.4.0`

### v3.2.0

* (2022.08.22) 发布`v3.2.0`版本
* (2022.08.19) 同步`XCharts v3.2.0`

### v3.1.0

* (2022.07.14) 发布`v3.1.0`版本
* (2022.07.14) 增加`bottomColorRate`,`cylinderRate`参数
* (2022.07.14) 调整`topColorBurnRate`改名为`topColorRate`
* (2022.07.14) 调整`sideColorBurnRate`改名为`sideColorRate`
* (2022.07.14) 调整`dire`改名为`cubeDire`
* (2022.07.14) 支持`Cylinder`圆柱和`Cube`立方柱

## API

### Bar3DChart

Inherits or Implemented: [BaseChart](https://xcharts-team.github.io/docs/api#basechart)

## 配置项手册

### Bar3D

Inherits or Implemented: [Serie](https://xcharts-team.github.io/docs/configuration#serie),[INeedSerieContainer](#ineedseriecontainer)

3D柱图。支持立方柱和圆柱。可水平排列和垂直排列。

|field|default|since|comment|
|--|--|--|--|
|bar3DType||v3.1.0|<br/>`Bar3DType`:<br/>- `Cube`: 立方柱。<br/>- `Cylinder`: 圆柱。<br/>|
|bar3DStyle||| [Bar3DStyle](#bar3dstyle)|

### Bar3DStyle

Inherits or Implemented: [ChildComponent](https://xcharts-team.github.io/docs/configuration#childcomponent)

|field|default|since|comment|
|--|--|--|--|
|show|true||
|verticalArrange|false||是否垂直排列。
|verticalArrangeDire|Vector3(-1, 1)||垂直排列时的方向。
|verticalArrangeGap|0.5f||垂直排列时两个柱子间的间隙。
|barOffset|Vector3.zero||柱子偏移。
|widthRate|0.5f||方形柱侧边宽度相对正面的比例。
|topColorRate|0.8f||柱子顶部相对正面的颜色比例。
|bottomColorRate|1f||柱子底部相对正面的颜色比例。
|sideColorRate|0.7f||方形柱侧边相对正面的颜色比例。
|cubeDire|Vector3(1, 1)||方形柱形成3D效果的方向。
|cylinderRate|0.5f|v3.1.0|圆柱的顶部椭圆比列。
|topColor||v3.6.0|
|bottomColor||v3.6.0|
|sideColor||v3.6.0|

