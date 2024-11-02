---
title: PictorialBarChart
sidebar_position: 0
slug: /pictorialbar
---

# PictorialBarChart

XCharts paid extension chart - Pictorial Bar Chart.

## Screenshots

<table>
    <tr>
        <td><img src="/img/extra/PictorialBar01.png" alt="PictorialBar01" /></td>
        <td><img src="/img/extra/PictorialBar02.png" alt="PictorialBar02" /></td>
        <td><img src="/img/extra/PictorialBar03.png" alt="PictorialBar03" /></td>
        <td><img src="/img/extra/PictorialBar04.png" alt="PictorialBar04" /></td>
    </tr>
</table>

## License

Extension charts require a paid purchase to obtain a usage license.

## Example

Demo repository: [XCharts-PictorialBarChart-Demo](https://github.com/XCharts-Team/XCharts-PictorialBarChart-Demo) 

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

* (2023.12.19) Adjusted code related to `Border`

### v3.9.0

* (2023.12.01) Released version `v3.9.0`
* (2023.12.01) Updated documentation

### v3.8.1

* (2023.09.26) Fixed the issue where `PictorialBar` does not refresh when data is added dynamically

### v3.8.0

* (2023.07.31) Synchronized with `XCharts v3.8.0`

### v3.6.1

* (2023.06.08) Released version `v3.6.1`
* (2023.06.08) Updated documentation

### v3.6.0

* (2023.04.01) Released version `v3.6.0`
* (2023.03.09) Supported callbacks `onSerieClick`, `onSerieDown`, `onSerieEnter`, and `onSerieExit`
* (2023.02.14) Synchronized with `XCharts v3.6.0`

### v3.5.0

* (2022.12.01) Released version `v3.5.0`
* (2022.11.29) Added support for `Serie`'s `barMaxWidth`
* (2022.11.27) Adjusted structure of `Documentation`

### v3.4.0

* (2022.11.01) Supported `Animation`'s `unscaledTime`
* (2022.11.01) Synchronized with `XCharts v3.4.0`

### v3.2.0

* (2022.08.22) Released version `v3.2.0`
* (2022.08.19) Synchronized with `XCharts v3.2.0`
* (2022.08.09) Added support for `colorBy` parameter
* (2022.08.09) Fixed abnormal issues with `label` (#1)

## API

### PictorialBar

class in XCharts.Runtime.PictorialBars / Inherits from: [Serie](https://xcharts-team.github.io/docs/api#serie),[INeedSerieContainer](https://xcharts-team.github.io/docs/api#ineedseriecontainer)

#### PictorialBar.containerIndex

public int containerIndex  

#### PictorialBar.containterInstanceId

public int containterInstanceId  

#### PictorialBar.AddDefaultSerie

public static void AddDefaultSerie(BaseChart chart, string serieName)  

#### PictorialBar.ConvertSerie

public static PictorialBar ConvertSerie(Serie serie)  

### PictorialBarChart

class in XCharts.Runtime.PictorialBars / Inherits from: [BaseChart](https://xcharts-team.github.io/docs/api#basechart)

## Configuration

### PictorialBar

class in XCharts.Runtime.PictorialBars / Inherits from: [Serie](https://xcharts-team.github.io/docs/configuration#serie), [INeedSerieContainer](https://xcharts-team.github.io/docs/configuration#ineedseriecontainer)