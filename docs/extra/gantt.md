---
title: GanttChart
sidebar_position: 0
slug: /gantt
---

# GanttChart

XCharts paid extension chart - Gantt Chart.

## Screenshots

<table>
    <tr>
        <td><img src="/img/extra/Gantt01.png" alt="Gantt01" /></td>
        <td><img src="/img/extra/Gantt02.png" alt="Gantt02" /></td>
        <td><img src="/img/extra/Gantt03.png" alt="Gantt03" /></td>
        <td><img src="/img/extra/Gantt04.png" alt="Gantt04" /></td>
    </tr>
    <tr>
        <td><img src="/img/extra/Gantt05.png" alt="Gantt05" /></td>
        <td><img src="/img/extra/Gantt06.png" alt="Gantt06" /></td>
        <td><img src="/img/extra/Gantt07.png" alt="Gantt07" /></td>
    </tr>
</table>

## License

Extension charts require a paid purchase to obtain a usage license.

## Example

Demo repository: [XCharts-GanttChart-Demo](https://github.com/XCharts-Team/XCharts-GanttChart-Demo) 

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

* (2024.01.21) Added more shortcuts and APIs for creating default `Gantt` charts

### v3.9.0

* (2023.12.01) Released version `v3.9.0`
* (2023.12.01) Updated documentation

### v3.8.0

* (2023.08.11) Added support for mouse events

### v3.6.1

* (2023.06.08) Released version `v3.6.1`
* (2023.06.08) Updated documentation

### v3.6.0

* (2023.04.01) Released version `v3.6.0`
* (2023.02.14) Synchronized with `XCharts v3.6.0`

### v3.5.0

* (2022.12.01) Released version `v3.5.0`
* (2022.11.27) Adjusted `Documentation` document structure

### v3.2.0

* (2022.08.22) Released version `v3.2.0`
* (2022.08.19) Synchronized with `XCharts v3.2.0`

## API

### Gantt

class in XCharts.Runtime.Gantts / Inherits from: [Serie](https://xcharts-team.github.io/docs/api#serie)

#### Gantt.AddDefaultCategorySerie

public static void AddDefaultCategorySerie(BaseChart chart, string serieName)  

#### Gantt.AddDefaultSerie

public static void AddDefaultSerie(BaseChart chart, string serieName)  

#### Gantt.AddDefaultValueSerie

public static void AddDefaultValueSerie(BaseChart chart, string serieName)  

### GanttChart

class in XCharts.Runtime.Gantts / Inherits from: [BaseChart](https://xcharts-team.github.io/docs/api#basechart)

#### GanttChart.aliginingValue

public double aliginingValue  

#### GanttChart.runtimeBeginDrag

public bool runtimeBeginDrag  

#### GanttChart.runtimeDragLeft

public bool runtimeDragLeft  

#### GanttChart.runtimeDragSerie

public Serie runtimeDragSerie  

#### GanttChart.runtimeDragSerieData

public SerieData runtimeDragSerieData  

#### GanttChart.runtimeIsAlgining

public bool runtimeIsAlgining  

#### GanttChart.runtimeIsDragSerie

public bool runtimeIsDragSerie  

#### GanttChart.DefaultCategoryAxisGanttChart

public void DefaultCategoryAxisGanttChart()  
generate default category axis gantt chart.

#### GanttChart.DefaultMonomialGroupGanttChart

public void DefaultMonomialGroupGanttChart()  
generate default monomial group gantt chart.

#### GanttChart.DefaultMultinomialGroupGanttChart

public void DefaultMultinomialGroupGanttChart()  
generate default multinomial group gantt chart.

#### GanttChart.DefaultValueAxisGanttChart

public void DefaultValueAxisGanttChart()  
generate default value axis gantt chart.

#### GanttChart.GetSeriesMinMaxValue

public override void GetSeriesMinMaxValue(Axis axis, int axisIndex, out double tempMinValue, out double tempMaxValue)  

#### GanttChart.InitAxisRuntimeData

public override void InitAxisRuntimeData(Axis axis)  

#### GanttChart.OnBeginDrag

public override void OnBeginDrag(PointerEventData eventData)  

#### GanttChart.OnDrag

public override void OnDrag(PointerEventData eventData)  

#### GanttChart.OnEndDrag

public override void OnEndDrag(PointerEventData eventData)  

#### GanttChart.OnPointerClick

public override void OnPointerClick(PointerEventData eventData)  

### GanttStyle

class in XCharts.Runtime.Gantts / Inherits from: [MainComponent](https://xcharts-team.github.io/docs/api#maincomponent)

### GanttType

class in XCharts.Runtime.Gantts

Options:

- `Monomial`: 单项甘特图。每个数据项都是单独的一条进度。
- `Multinomial`: 多项甘特图。每个数据项只是一条进度里的一段。

## Configuration

### Gantt

class in XCharts.Runtime.Gantts / Inherits from: [Serie](https://xcharts-team.github.io/docs/configuration#serie)

#### Gantt.disableDrag

`bool`

### GanttStyle

class in XCharts.Runtime.Gantts / Inherits from: [MainComponent](https://xcharts-team.github.io/docs/configuration#maincomponent)

#### GanttStyle.aliginLine

`LineStyle`

对齐线样式。

#### GanttStyle.alignlineDataIndex

`int` `1`

显示对齐线的数据项索引。

#### GanttStyle.autoAdsorbAlignline

`bool` `true`

拖拽结束后是否自动吸附到对齐线。

#### GanttStyle.dragEnable

`bool` `true`

是否可以拖拽甘特图。

#### GanttStyle.dragRangeMax

`double` `0`

拖拽最大值限制。

#### GanttStyle.dragRangeMin

`double` `0`

拖拽最小值限制。

#### GanttStyle.dragSensitivity

`float` `1f`

拖拽的灵敏度。

#### GanttStyle.ganttType

[GanttType](#gantttype)

The type of gantt.

Options:

- `Monomial`: 单项甘特图。每个数据项都是单独的一条进度。
- `Multinomial`: 多项甘特图。每个数据项只是一条进度里的一段。

#### GanttStyle.invert

`bool` `true`

#### GanttStyle.show

`bool` `true`

#### GanttStyle.showAlignlineRange

`float` `10f`

显示对齐线的范围。

#### GanttStyle.splitArea

`AxisSplitArea`