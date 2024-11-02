---
title: Bar3DChart
sidebar_position: 0
slug: /bar3d
---

# Bar3DChart

XCharts' paid extension chart - 3D Bar Chart.

## Screenshots

<table>
    <tr>
        <td><img src="/img/extra/Bar3D01.png" alt="Bar3D01" /></td>
        <td><img src="/img/extra/Bar3D02.png" alt="Bar3D02" /></td>
        <td><img src="/img/extra/Bar3D03.png" alt="Bar3D03" /></td>
        <td><img src="/img/extra/Bar3D04.png" alt="Bar3D04" /></td>
    </tr>
    <tr>
        <td><img src="/img/extra/Bar3D05.png" alt="Bar3D05" /></td>
        <td><img src="/img/extra/Bar3D06.png" alt="Bar3D06" /></td>
        <td><img src="/img/extra/Bar3D07.png" alt="Bar3D07" /></td>
        <td><img src="/img/extra/Bar3D08.png" alt="Bar3D08" /></td>
    </tr>
    <tr>
        <td><img src="/img/extra/Bar3D09.png" alt="Bar3D09" /></td>
        <td><img src="/img/extra/Bar3D10.png" alt="Bar3D10" /></td>
    </tr>
</table>

## License

Extension charts require a paid purchase to obtain a usage license.

## Example

Demo repository: [XCharts-Bar3DChart-Demo](https://github.com/XCharts-Team/XCharts-Bar3DChart-Demo)

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

### v3.10.0

* (2023.12.16) Added more default chart shortcuts and APIs for `Bar3D`
* (2023.12.16) Added `borderDash` in `Bar3DStyle` to draw a dashed border
* (2023.12.16) Added `occludedAreaBorderDash` in `Bar3DStyle` to draw a dashed border for the occluded area
* (2023.12.16) Added `occludedAreaBorder` in `Bar3DStyle` to draw a border for the occluded area
* (2023.12.16) Added support for `Border` border drawing

### v3.8.0

* (2023.07.31) Synchronized with `XCharts v3.8.0`

### v3.6.1

* (2023.06.08) Released version `v3.6.1`
* (2023.06.08) Updated documentation

### v3.6.0

* (2023.04.01) Released version `v3.6.0`
* (2023.03.09) Supported callbacks `onSerieClick`, `onSerieDown`, `onSerieEnter`, and `onSerieExit`
* (2023.02.14) Synchronized with `XCharts v3.6.0`
* (2023.02.14) Added support for `topColor`, `bottomColor`, and `sideColor` parameters in `Bar3DStyle`

### v3.5.0

* (2022.11.29) Added support for `barMaxWidth` parameter in `Serie`
* (2022.11.27) Added support for `backgroundColor` parameter in `ItemStyle` of `Serie`
* (2022.11.27) Added support for `colorBy` in `Serie`
* (2022.11.27) Updated documentation

### v3.4.0

* (2022.11.01) Supported `unscaledTime` in `Animation`
* (2022.11.01) Synchronized with `XCharts v3.4.0`

### v3.2.0

* (2022.08.22) Released version `v3.2.0`
* (2022.08.19) Synchronized with `XCharts v3.2.0`

### v3.1.0

* (2022.07.14) Released version `v3.1.0`
* (2022.07.14) Added parameters `bottomColorRate`, `cylinderRate`
* (2022.07.14) Renamed `topColorBurnRate` to `topColorRate`
* (2022.07.14) Renamed `sideColorBurnRate` to `sideColorRate`
* (2022.07.14) Renamed `dire` to `cubeDire`
* (2022.07.14) Supported `Cylinder` cylinder and `Cube` cubic columns

## API

### Bar3D

class in XCharts.Runtime.Bar3Ds / Inherits from: [Serie](https://xcharts-team.github.io/docs/api#serie),[INeedSerieContainer](https://xcharts-team.github.io/docs/api#ineedseriecontainer)

Bar3D.

#### Bar3D.containerIndex

public int containerIndex  

#### Bar3D.containterInstanceId

public int containterInstanceId  

#### Bar3D.AddDefaultSerie

public static Bar3D AddDefaultSerie(BaseChart chart, string serieName)  

#### Bar3D.ConvertSerie

public static Bar3D ConvertSerie(Serie serie)  

### Bar3DChart

class in XCharts.Runtime.Bar3Ds / Inherits from: [BaseChart](https://xcharts-team.github.io/docs/api#basechart)

#### Bar3DChart.DefaultCylinderChart

public void DefaultCylinderChart()  
generate default cylinder chart.

#### Bar3DChart.DefaultGroupedCubeChart

public void DefaultGroupedCubeChart()  
default grouped 3d column chart.

#### Bar3DChart.DefaultStackedCubeChart

public void DefaultStackedCubeChart()  
default stacked 3d column chart.

### Bar3DStyle

class in XCharts.Runtime.Bar3Ds / Inherits from: [ChildComponent](https://xcharts-team.github.io/docs/api#childcomponent)

### Bar3DType

class in XCharts.Runtime.Bar3Ds

The type of Bar3D.

Options:

- `Cube`: Cube.
- `Cylinder`: Cylinder.

## Configuration

### Bar3D

class in XCharts.Runtime.Bar3Ds / Inherits from: [Serie](https://xcharts-team.github.io/docs/configuration#serie), [INeedSerieContainer](https://xcharts-team.github.io/docs/configuration#ineedseriecontainer)

Bar3D.

#### Bar3D.bar3DStyle

[Bar3DStyle](#bar3dstyle)

#### Bar3D.bar3DType

[Bar3DType](#bar3dtype) `v3.1.0`



Options:

- `Cube`: Cube.
- `Cylinder`: Cylinder.

### Bar3DStyle

class in XCharts.Runtime.Bar3Ds / Inherits from: [ChildComponent](https://xcharts-team.github.io/docs/configuration#childcomponent)

#### Bar3DStyle.barOffset

`Vector3` `Vector3.zero`

The offset of bar.

#### Bar3DStyle.borderDash

`bool` `v3.10.0`

wherther to show dash border.

#### Bar3DStyle.bottomColor

`Color32` `v3.6.0`

#### Bar3DStyle.bottomColorRate

`float` `1f`

The color rate of bottom.

#### Bar3DStyle.cubeDire

`Vector3` `Vector3(1, 1)`

The direction vector of bar3d.

#### Bar3DStyle.cylinderRate

`float` `0.5f` `v3.1.0`

The rate of top ellipse.

#### Bar3DStyle.occludedAreaBorder

`bool` `v3.10.0`

Whether to show the border of occluded area.

#### Bar3DStyle.occludedAreaBorderDash

`bool` `v3.10.0`

Whether to show dash border of occluded area.

#### Bar3DStyle.show

`bool` `true`

#### Bar3DStyle.sideColor

`Color32` `v3.6.0`

#### Bar3DStyle.sideColorRate

`float` `0.7f`

The color rate of side.

#### Bar3DStyle.topColor

`Color32` `v3.6.0`

#### Bar3DStyle.topColorRate

`float` `0.8f`

The color rate of top.

#### Bar3DStyle.verticalArrange

`bool` `false`

Vertical arrange or not.

#### Bar3DStyle.verticalArrangeDire

`Vector3` `Vector3(-1, 1)`

The direction vector of vertical.

#### Bar3DStyle.verticalArrangeGap

`float` `0.5f`

The gap of vertical arrange bar3d.

#### Bar3DStyle.widthRate

`float` `0.5f`

The rate of side width.