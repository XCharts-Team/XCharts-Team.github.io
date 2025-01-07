---
title: PyramidChart
sidebar_position: 0
slug: /pyramid
---

# PyramidChart

XCharts paid extension chart - Pyramid Chart.

## Screenshots

<table>
    <tr>
        <td><img src="/img/extra/Pyramid01.png" alt="Pyramid01" /></td>
        <td><img src="/img/extra/Pyramid02.png" alt="Pyramid02" /></td>
        <td><img src="/img/extra/Pyramid03.png" alt="Pyramid03" /></td>
    </tr>
</table>

## License

Extension charts require a paid purchase to obtain a usage license.

## Example

Demo repository: [XCharts-PyramidChart-Demo](https://github.com/XCharts-Team/XCharts-PyramidChart-Demo) 

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

* (2024.01.21) Added more shortcuts and APIs for creating default `Pyramid` charts

### v3.9.0

* (2023.12.01) Released version `v3.9.0`
* (2023.12.01) Updated documentation

### v3.6.1

* (2023.06.08) Released version `v3.6.1`
* (2023.06.08) Updated documentation

### v3.6.0

* (2023.04.01) Released version `v3.6.0`
* (2023.03.21) Added `Tooltip` support
* (2023.02.14) Synchronized with `XCharts v3.6.0`

### v3.5.0

* (2022.12.01) Released version `v3.5.0`
* (2022.11.27) Adjusted the structure of `Documentation`

### v3.2.0

* (2022.08.22) Released version `v3.2.0`
* (2022.08.19) Synchronized with `XCharts v3.2.0`

## API

### Pyramid

class in XCharts.Runtime.Pyramids / Inherits from: [Serie](https://xcharts-team.github.io/docs/api#serie)

#### Pyramid.defaultColorBy

public override SerieColorBy defaultColorBy  

#### Pyramid.AddDefaultSerie

public static void AddDefaultSerie(BaseChart chart, string serieName)  

### PyramidChart

class in XCharts.Runtime.Pyramids / Inherits from: [BaseChart](https://xcharts-team.github.io/docs/api#basechart)

#### PyramidChart.Default2DPyramidChart

public void Default2DPyramidChart()  
generate default 2d pyramid chart.

### PyramidStyle

class in XCharts.Runtime.Pyramids / Inherits from: [ChildComponent](https://xcharts-team.github.io/docs/api#childcomponent)

#### PyramidStyle.drawTop

public bool drawTop

## Configuration

### Pyramid

class in XCharts.Runtime.Pyramids / Inherits from: [Serie](https://xcharts-team.github.io/docs/configuration#serie)

#### Pyramid.pyramidStyle

[PyramidStyle](#pyramidstyle)

### PyramidStyle

class in XCharts.Runtime.Pyramids / Inherits from: [ChildComponent](https://xcharts-team.github.io/docs/configuration#childcomponent)

#### PyramidStyle.3D

`bool` `true`

#### PyramidStyle.bottomPointRate

`float` `0.5f`

3D模式下，底部中点占金字塔宽度的比例

#### PyramidStyle.drawTop

`bool` `true`

#### PyramidStyle.labelLineMargin

`float` `10f`

Label标签距离右边的距离

#### PyramidStyle.leftColorOpacity

`float` `0.9f`

3D模式下，金字塔左边的颜色透明度

#### PyramidStyle.leftPointRate

`float` `0.1f`

3D模式下，底部左边点占金字塔高度的比例

#### PyramidStyle.rightColorOpacity

`float` `0.7f`

3D模式下，金字塔右边的颜色透明度

#### PyramidStyle.rightPointRate

`float` `0.1f`

3D模式下，底部右边点占金字塔高度的比例

#### PyramidStyle.show

`bool` `true`

#### PyramidStyle.topColorOpacity

`float` `0.99f`

3D模式下，金字塔顶部的颜色透明度