---
sidebar_position: 0
slug: /pie3d
---
import APITable from '@site/src/components/APITable';

# Pie3DChart 3D饼图

XCharts的付费扩展图表 - 3D饼图。

## 截图

||||||
| :--: | :--: | :--: | :--: | :--: |
|![Pie3D01](img/Pie3D01.png) |![Pie3D02](img/Pie3D02.png) |![Pie3D03](img/Pie3D03.png) |![Pie3D04](img/Pie3D04.png) |![Pie3D05](img/Pie3D05.png) |![Pie3D06](img/Pie3D06.png) |
|![Pie3D07](img/Pie3D07.png) |![Pie3D08](img/Pie3D08.png) |

## 许可

扩展图表，需付费购买后才获得使用许可。

## 示例

Demo仓库：[XCharts-Pie3DChart-Demo](https://github.com/XCharts-Team/XCharts-Pie3DChart-Demo)

## 教程

[扩展图表如何导入Demo项目或导入自己项目](https://github.com/XCharts-Team/XCharts-Demo)

## 文档

[API](#api)  
[配置项手册](#配置项手册)  

## 日志

### v3.12.0

* (2024.09.30) 发布`v3.12.0`版本
* (2024.09.30) 更新文档

### v3.11.0

* (2024.06.16) 发布`v3.11.0`版本

### v3.10.1

* (2024.02.28) 修复`Pie3D`在动画过程中可能出现绘制异常的问题

### v3.10.0

* (2024.01.16) 增加`XCharts`上的更多菜单栏快捷方式，一键创建多种3D饼图
* (2023.12.17) 增加`Pie3DStyle`的`drawSplitSide`设置是否绘制分割面
* (2023.12.16) 增加`Border`描边支持
* (2023.12.15) 增加`Serie`的`label`可指示在边缘的支持
* (2023.12.10) 增加`Serie`的`minShowLabel`可隐藏小于指定值的`label`

### v3.9.0

* (2023.12.01) 发布`v3.9.0`版本
* (2023.11.30) 优化`SerieData`只有一个时不绘制侧边
* (2023.11.30) 增加`SerieData`可单独添加`Label`的支持

### v3.8.1

* (2023.09.14) 修复`SerieData`的数据为全为0时图表显示异常的问题
* (2023.09.08) 增加`SerieData`的`radius`可自定义各饼块高度的支持

### v3.8.0

* (2023.07.31) 同步`XCharts v3.8.0`

### v3.6.2

* (2023.06.08) 发布`v3.6.1`版本
* (2023.06.08) 更新文档

### v3.6.1

* (2023.05.21) 增加`avoidLabelOverlap`支持

### v3.6.0

* (2023.04.01) 发布`v3.6.0`版本
* (2023.03.09) 支持`onSerieClick` `onSerieDown` `onSerieEnter`和`onSerieExit`回调
* (2023.02.14) 同步`XCharts v3.6.0`

### v3.5.0

* (2022.12.01) 发布`v3.5.0`版本
* (2022.11.27) 调整`Documentation`文档结构

### v3.4.0

* (2022.11.01) 支持`Animation`的`unscaledTime`
* (2022.11.01) 同步`XCharts v3.4.0`

### v3.3.0

* (2022.09.02) 增加`onPointerEnterPie`回调支持

### v3.2.0

* (2022.08.22) 发布`v3.2.0`版本
* (2022.08.19) 同步`XCharts v3.2.0`

## API

### Pie3D

class in XCharts.Runtime.Pie3Ds / 继承自: [Serie](https://xcharts-team.github.io/docs/api#serie)

3D饼图系列。

#### Pie3D.defaultColorBy

public override SerieColorBy defaultColorBy  

#### Pie3D.AddDefaultSerie

public static Serie AddDefaultSerie(BaseChart chart, string serieName)  

#### Pie3D.ConvertSerie

public static Pie3D ConvertSerie(Serie serie)  

### Pie3DChart

class in XCharts.Runtime.Pie3Ds / 继承自: [BaseChart](https://xcharts-team.github.io/docs/api#basechart)

3D饼图。

#### Pie3DChart.DefaultAutoHeightPie3DChart

public void DefaultAutoHeightPie3DChart()  
生成默认3D自动高度饼图。

#### Pie3DChart.DefaultDonutPie3DChart

public void DefaultDonutPie3DChart()  
生成默认3D甜甜圈饼图。

#### Pie3DChart.DefaultEllipsePie3DChart

public void DefaultEllipsePie3DChart()  
生成默认2D椭圆饼图。

### Pie3DSlice

class in XCharts.Runtime.Pie3Ds

3D饼图的切块。

#### Pie3DSlice.Contains

public bool Contains(float angle)  

#### Pie3DSlice.IsInPolygon

public bool IsInPolygon(Vector2 p)  

#### Pie3DSlice.IsInSidePolygon

public bool IsInSidePolygon(Vector2 p)  

#### Pie3DSlice.IsInStartOrEndSide

public bool IsInStartOrEndSide(Vector2 p)  

#### Pie3DSlice.IsInTopPolygon

public bool IsInTopPolygon(Vector2 p)  

#### Pie3DSlice.Pie3DSlice

public Pie3DSlice()  

#### Pie3DSlice.UpdateValue

public void UpdateValue(int index, float start, float end, bool startSide, bool endSide, float maxHig)  

### Pie3DStyle

class in XCharts.Runtime.Pie3Ds / 继承自: [ChildComponent](https://xcharts-team.github.io/docs/api#childcomponent)

3D饼图样式。

#### Pie3DStyle.drawSplitSide

public bool drawSplitSide  
是否绘制分割面。当pieAutoHeight为true时，该值无效。

#### Pie3DStyle.ellipseMinorAxis

public float ellipseMinorAxis  
椭圆的短轴长度。当为0-1的浮点数时为长轴的百分比。

#### Pie3DStyle.endSideColorRate

public float endSideColorRate  
饼图切块的结束面颜色（顺时针）。

#### Pie3DStyle.peripherySideColorRate

public float peripherySideColorRate  
饼图切块的侧面颜色。

#### Pie3DStyle.pieAutoHeight

public bool pieAutoHeight  
是否自动根据比例计算厚度。

#### Pie3DStyle.pieMaxHeight

public float pieMaxHeight  
饼图厚度。

#### Pie3DStyle.selectedOffset

public Vector2 selectedOffset  
被选中状态的饼图块的额外偏移。

#### Pie3DStyle.startSideColorRate

public float startSideColorRate  
饼图切块的起始面颜色（顺时针）。

## 配置项手册

### Pie3D

class in XCharts.Runtime.Pie3Ds / 继承自: [Serie](https://xcharts-team.github.io/docs/configuration#serie)

3D饼图系列。

#### Pie3D.pie3DStyle

[Pie3DStyle](#pie3dstyle)

### Pie3DStyle

class in XCharts.Runtime.Pie3Ds / 继承自: [ChildComponent](https://xcharts-team.github.io/docs/configuration#childcomponent)

3D饼图样式。

#### Pie3DStyle.drawSplitSide

`bool` `true` `v3.10.0`

是否绘制分割面。当pieAutoHeight为true时，该值无效。

#### Pie3DStyle.ellipseMinorAxis

`float` `0.65f`

椭圆的短轴长度。当为0-1的浮点数时为长轴的百分比。

#### Pie3DStyle.endSideColorRate

`float` `0.65f`

饼图切块的结束面颜色（顺时针）。

#### Pie3DStyle.peripherySideColorRate

`float` `0.8f`

饼图切块的侧面颜色。

#### Pie3DStyle.pieAutoHeight

`bool` `false`

是否自动根据比例计算厚度。

#### Pie3DStyle.pieMaxHeight

`float` `20f`

饼图厚度。

#### Pie3DStyle.selectedOffset

`Vector2` `Vector2(0.1f, 0.5f)`

被选中状态的饼图块的额外偏移。

#### Pie3DStyle.show

`bool` `true`

#### Pie3DStyle.startSideColorRate

`float` `0.7f`

饼图切块的起始面颜色（顺时针）。
