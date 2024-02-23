---
sidebar_position: 0
slug: /liquid
---
import APITable from '@site/src/components/APITable';

# LiquidChart 水位图

XCharts的付费扩展图表 - 水位图。

## 截图

||||||
| :--: | :--: | :--: | :--: | :--: |
|![Liquid01](img/Liquid01.png) |![Liquid02](img/Liquid02.png) |![Liquid03](img/Liquid03.png) |![Liquid04](img/Liquid04.png) |![Liquid05](img/Liquid05.png) |![Liquid06](img/Liquid06.png) |
|![Liquid07](img/Liquid07.png) |![Liquid08](img/Liquid08.png) |

## 许可

扩展图表，需付费购买后才获得使用许可。

## 教程

[扩展图表如何导入Demo项目或导入自己项目](https://github.com/XCharts-Team/XCharts-Demo)

## 文档

[API](#api)  
[配置项手册](#配置项手册)  

## 日志

### v3.9.0

* (2023.12.01) 发布`v3.9.0`版本
* (2023.12.01) 更新文档

### v3.8.0

* (2023.07.31) 同步`XCharts v3.8.0`

### v3.6.1

* (2023.06.08) 发布`v3.6.1`版本
* (2023.06.08) 更新文档

### v3.6.0

* (2023.04.01) 发布`v3.6.0`版本
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

### Liquid

> class in XCharts.Runtime.Liquids / 继承自: [Serie](https://xcharts-team.github.io/docs/api#serie),[INeedSerieContainer](https://xcharts-team.github.io/docs/api#ineedseriecontainer)


|API|版本|描述|
|--|--|--|
|AddDefaultSerie()||public static Serie AddDefaultSerie(BaseChart chart, string serieName)|

### LiquidChart

> class in XCharts.Runtime.Liquids / 继承自: [BaseChart](https://xcharts-team.github.io/docs/api#basechart)

水位图

### Vessel

> class in XCharts.Runtime.Liquids / 继承自: [MainComponent](https://xcharts-team.github.io/docs/api#maincomponent),[ISerieContainer](https://xcharts-team.github.io/docs/api#iseriecontainer),[IUpdateRuntimeData](https://xcharts-team.github.io/docs/api#iupdateruntimedata)

容器组件。 一般用于LiquidChart。一个Chart中可以有多个Vessel，Serie中用vesselIndex来对应。

|API|版本|描述|
|--|--|--|
|IsPointerEnter()||public bool IsPointerEnter()|
|UpdateRuntimeData()||public void UpdateRuntimeData(BaseChart chart)|

### VesselContext

> class in XCharts.Runtime.Liquids / 继承自: [MainComponentContext](https://xcharts-team.github.io/docs/api#maincomponentcontext)


## 配置项手册

### Liquid

> class in XCharts.Runtime.Liquids / 继承自: [Serie](https://xcharts-team.github.io/docs/configuration#serie), [INeedSerieContainer](https://xcharts-team.github.io/docs/configuration#ineedseriecontainer)

```mdx-code-block
<APITable name="Liquid">
```

|参数|默认|版本|描述|
|--|--|--|--|
|waveHeight|10f||波高。
|waveLength|20f||波长。为0-1小数时指直线的百分比。
|waveSpeed|5f||波速。正数时左移，负数时右移。
|waveOffset|0f||波偏移。

```mdx-code-block
</APITable>
```

### Vessel

> class in XCharts.Runtime.Liquids / 继承自: [MainComponent](https://xcharts-team.github.io/docs/configuration#maincomponent), [ISerieContainer](https://xcharts-team.github.io/docs/configuration#iseriecontainer), [IUpdateRuntimeData](https://xcharts-team.github.io/docs/configuration#iupdateruntimedata)

容器组件。 一般用于LiquidChart。一个Chart中可以有多个Vessel，Serie中用vesselIndex来对应。

```mdx-code-block
<APITable name="Vessel">
```

|参数|默认|版本|描述|
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

```mdx-code-block
</APITable>
```

