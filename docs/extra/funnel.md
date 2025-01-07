---
title: FunnelChart
sidebar_position: 0
slug: /funnel
---

# FunnelChart

XCharts' paid extension chart - Funnel Chart.

## Screenshots

<table>
    <tr>
        <td><img src="/img/extra/Funnel01.png" alt="Funnel01" /></td>
        <td><img src="/img/extra/Funnel02.png" alt="Funnel02" /></td>
        <td><img src="/img/extra/Funnel03.png" alt="Funnel03" /></td>
        <td><img src="/img/extra/Funnel04.png" alt="Funnel04" /></td>
    </tr>
    <tr>
        <td><img src="/img/extra/Funnel05.png" alt="Funnel05" /></td>
        <td><img src="/img/extra/Funnel06.png" alt="Funnel06" /></td>
        <td><img src="/img/extra/Funnel07.png" alt="Funnel07" /></td>
        <td><img src="/img/extra/Funnel08.png" alt="Funnel08" /></td>
    </tr>
    <tr>
        <td><img src="/img/extra/Funnel09.png" alt="Funnel09" /></td>
    </tr>
</table>

## License

Extension charts require a paid purchase to obtain a usage license.

## Example

Demo repository: [XCharts-FunnelChart-Demo](https://github.com/XCharts-Team/XCharts-FunnelChart-Demo) 

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

### v3.9.0

* (2023.12.01) Released version `v3.9.0`
* (2023.12.01) Updated documentation

### v3.6.1

* (2023.06.08) Released version `v3.6.1`
* (2023.06.08) Updated documentation

### v3.6.0

* (2023.04.01) Released version `v3.6.0`
* (2023.03.09) Supported callbacks `onSerieClick`, `onSerieDown`, `onSerieEnter`, and `onSerieExit`
* (2023.02.14) Synchronized with `XCharts v3.6.0`

### v3.5.0

* (2022.12.01) Released version `v3.5.0`
* (2022.11.27) Adjusted `Documentation` document structure

### v3.3.0

* (2022.09.24) Added support for `DynamicHeight` parameter to configure whether to map as dynamic height
* (2022.09.24) Added support for `RectEnd` parameter to configure whether to end with a rectangle

### v3.2.0

* (2022.08.22) Released version `v3.2.0`
* (2022.08.19) Synchronized with `XCharts v3.2.0`

## API

### Funnel

class in XCharts.Runtime.Funnels / Inherits from: [Serie](https://xcharts-team.github.io/docs/api#serie)

#### Funnel.defaultColorBy

public override SerieColorBy defaultColorBy  

#### Funnel.useSortData

public override bool useSortData  

#### Funnel.AddDefaultSerie

public static void AddDefaultSerie(BaseChart chart, string serieName)  

### FunnelChart

class in XCharts.Runtime.Funnels / Inherits from: [BaseChart](https://xcharts-team.github.io/docs/api#basechart)

Funnel chart. Suitable for flow analysis.

#### FunnelChart.DefaultHorizonalFunnelChart

public void DefaultHorizonalFunnelChart()  
generate default horizontal funnel chart.

## Configuration

### Funnel

class in XCharts.Runtime.Funnels / Inherits from: [Serie](https://xcharts-team.github.io/docs/configuration#serie)

#### Funnel.dynamicHeight

`bool` `v3.3.0`

Whether the height is dynamic. When set to true, the height of each elemnet in funnel plot is directly proportional to the corresponding value of yField.

#### Funnel.rectEnd

`bool` `v3.3.0`

Whether it ends with a rectangle. The default false ends with a triangle.