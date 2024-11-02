---
title: Pie3DChart
sidebar_position: 0
slug: /pie3d
---

# Pie3DChart

XCharts' paid extension chart - 3D Pie Chart.

## Screenshots

<table>
    <tr>
        <td><img src="/img/extra/Pie3D01.png" alt="Pie3D01" /></td>
        <td><img src="/img/extra/Pie3D02.png" alt="Pie3D02" /></td>
        <td><img src="/img/extra/Pie3D03.png" alt="Pie3D03" /></td>
        <td><img src="/img/extra/Pie3D04.png" alt="Pie3D04" /></td>
    </tr>
    <tr>
        <td><img src="/img/extra/Pie3D05.png" alt="Pie3D05" /></td>
        <td><img src="/img/extra/Pie3D06.png" alt="Pie3D06" /></td>
        <td><img src="/img/extra/Pie3D07.png" alt="Pie3D07" /></td>
        <td><img src="/img/extra/Pie3D08.png" alt="Pie3D08" /></td>
    </tr>
</table>

## License

Extension charts require a paid purchase to obtain a usage license.

## Example

Demo repository: [XCharts-Pie3DChart-Demo](https://github.com/XCharts-Team/XCharts-Pie3DChart-Demo) 

## Tutorial

[How to import extension charts into a demo project or your own project](https://github.com/XCharts-Team/XCharts-Demo) 

## Documentation

[API](#api)  
[Configuration Manual](#Configuration)

## Changelog

### v3.12.0

* (2024.09.30) Released version `v3.12.0`
* (2024.09.30) Updated documentation

### v3.11.0

* (2024.06.16) Released version `v3.11.0`

### v3.10.1

* (2024.02.28) Fixed an issue where `Pie3D` might have drawing anomalies during the animation process

### v3.10.0

* (2024.01.16) Added more menu shortcuts on `XCharts` to create various 3D pie charts with one click
* (2023.12.17) Added `Pie3DStyle`'s `drawSplitSide` to set whether to draw split sides
* (2023.12.16) Added `Border` outline support
* (2023.12.15) Added support for `Serie`'s `label` to indicate on the edge
* (2023.12.10) Added `Serie`'s `minShowLabel` to hide `label`s smaller than a specified value

### v3.9.0

* (2023.12.01) Released version `v3.9.0`
* (2023.11.30) Optimized so that no side is drawn when there is only one `SerieData`
* (2023.11.30) Added support for individually adding `Label` to `SerieData`

### v3.8.1

* (2023.09.14) Fixed an issue where the chart displayed abnormally when `SerieData` was all zeros
* (2023.09.08) Added support for customizing the height of each pie segment with `SerieData`'s `radius`

### v3.8.0

* (2023.07.31) Synchronized with `XCharts v3.8.0`

### v3.6.2

* (2023.06.08) Released version `v3.6.2`
* (2023.06.08) Updated documentation

### v3.6.1

* (2023.05.21) Added support for `avoidLabelOverlap`

### v3.6.0

* (2023.04.01) Released version `v3.6.0`
* (2023.03.09) Supported callbacks `onSerieClick`, `onSerieDown`, `onSerieEnter`, and `onSerieExit`
* (2023.02.14) Synchronized with `XCharts v3.6.0`

### v3.5.0

* (2022.12.01) Released version `v3.5.0`
* (2022.11.27) Adjusted the structure of `Documentation`

### v3.4.0

* (2022.11.01) Supported `Animation`'s `unscaledTime`
* (2022.11.01) Synchronized with `XCharts v3.4.0`

### v3.3.0

* (2022.09.02) Added support for callback `onPointerEnterPie`

### v3.2.0

* (2022.08.22) Released version `v3.2.0`
* (2022.08.19) Synchronized with `XCharts v3.2.0`

## API

### Pie3D

class in XCharts.Runtime.Pie3Ds / Inherits from: [Serie](https://xcharts-team.github.io/docs/api#serie)

serie of 3D pie.

#### Pie3D.defaultColorBy

public override SerieColorBy defaultColorBy  

#### Pie3D.AddDefaultSerie

public static Serie AddDefaultSerie(BaseChart chart, string serieName)  

#### Pie3D.ConvertSerie

public static Pie3D ConvertSerie(Serie serie)  

### Pie3DChart

class in XCharts.Runtime.Pie3Ds / Inherits from: [BaseChart](https://xcharts-team.github.io/docs/api#basechart)

3D pie.

#### Pie3DChart.DefaultAutoHeightPie3DChart

public void DefaultAutoHeightPie3DChart()  
generate default 3d auto height pie chart.

#### Pie3DChart.DefaultDonutPie3DChart

public void DefaultDonutPie3DChart()  
generate default 3d donut pie chart.

#### Pie3DChart.DefaultEllipsePie3DChart

public void DefaultEllipsePie3DChart()  
generate default 2d ellipse pie chart.

### Pie3DSlice

class in XCharts.Runtime.Pie3Ds

Slice of pie.

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

class in XCharts.Runtime.Pie3Ds / Inherits from: [ChildComponent](https://xcharts-team.github.io/docs/api#childcomponent)

Pie 3d style.

#### Pie3DStyle.drawSplitSide

public bool drawSplitSide  
whether draw split side. When pieAutoHeight is true, this value is invalid.

#### Pie3DStyle.ellipseMinorAxis

public float ellipseMinorAxis  
The minor axis length of ellipse.

#### Pie3DStyle.endSideColorRate

public float endSideColorRate  
The end side color rate of 3d pie.

#### Pie3DStyle.peripherySideColorRate

public float peripherySideColorRate  
The periphery side color rate of 3d pie.

#### Pie3DStyle.pieAutoHeight

public bool pieAutoHeight  
Whether auto set 3d pie height by data rate.

#### Pie3DStyle.pieMaxHeight

public float pieMaxHeight  
The max height of 3d pie.

#### Pie3DStyle.selectedOffset

public Vector2 selectedOffset  
The offset of selected pie slice.

#### Pie3DStyle.startSideColorRate

public float startSideColorRate  
The start side color rate of 3d pie.

## Configuration

### Pie3D

class in XCharts.Runtime.Pie3Ds / Inherits from: [Serie](https://xcharts-team.github.io/docs/configuration#serie)

serie of 3D pie.

#### Pie3D.pie3DStyle

[Pie3DStyle](#pie3dstyle)

### Pie3DStyle

class in XCharts.Runtime.Pie3Ds / Inherits from: [ChildComponent](https://xcharts-team.github.io/docs/configuration#childcomponent)

Pie 3d style.

#### Pie3DStyle.drawSplitSide

`bool` `true` `v3.10.0`

whether draw split side. When pieAutoHeight is true, this value is invalid.

#### Pie3DStyle.ellipseMinorAxis

`float` `0.65f`

The minor axis length of ellipse.

#### Pie3DStyle.endSideColorRate

`float` `0.65f`

The end side color rate of 3d pie.

#### Pie3DStyle.peripherySideColorRate

`float` `0.8f`

The periphery side color rate of 3d pie.

#### Pie3DStyle.pieAutoHeight

`bool` `false`

Whether auto set 3d pie height by data rate.

#### Pie3DStyle.pieMaxHeight

`float` `20f`

The max height of 3d pie.

#### Pie3DStyle.selectedOffset

`Vector2` `Vector2(0.1f, 0.5f)`

The offset of selected pie slice.

#### Pie3DStyle.show

`bool` `true`

#### Pie3DStyle.startSideColorRate

`float` `0.7f`

The start side color rate of 3d pie.