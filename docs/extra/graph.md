---
title: GraphChart
sidebar_position: 0
slug: /graph
---

# GraphChart

XCharts paid extension chart - Relationship Diagram.

## Screenshots

## License

Extension charts require a paid purchase to obtain a usage license.

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
* (2024.05.15) Added `Graph` relationship diagram

## API

### Force

class in XCharts.Runtime.Graphs / Inherits from: [ChildComponent](https://xcharts-team.github.io/docs/api#childcomponent)

The force layout of the graph.

#### Force.currentIterations

public int currentIterations  

### Graph

class in XCharts.Runtime.Graphs / Inherits from: [Serie](https://xcharts-team.github.io/docs/api#serie)

Graph chart component. It is used for showing the relationship between nodes.

#### Graph.force

public Force force  
the force layout of the graph.

#### Graph.graphData

public GraphData graphData  

#### Graph.levelStyle

public LevelStyle levelStyle  
the style of level.

#### Graph.AddDefaultSerie

public static void AddDefaultSerie(BaseChart chart, string serieName)  

#### Graph.AddLink

public override SerieDataLink AddLink(string sourceId, string targetId, double value = 0)  

#### Graph.AddSerieData

public override void AddSerieData(SerieData serieData)  

#### Graph.ClearData

public override void ClearData()  
清空所有数据

#### Graph.GetLevelItemStyle

public ItemStyle GetLevelItemStyle(int depth)  

#### Graph.GetLevelLabel

public LabelStyle GetLevelLabel(int depth)  

#### Graph.GetLevelLineStyle

public LineStyle GetLevelLineStyle(int depth)  

### GraphChart

class in XCharts.Runtime.Graphs / Inherits from: [BaseChart](https://xcharts-team.github.io/docs/api#basechart)

## Configuration

### Force

class in XCharts.Runtime.Graphs / Inherits from: [ChildComponent](https://xcharts-team.github.io/docs/configuration#childcomponent)

The force layout of the graph.

#### Force.centerDataIndex

`int` `-1`

the index of the center node data.

#### Force.edgeLength

`float` `80`

the distance between the two nodes of the edge, this distance will also be affected by repulsion.

#### Force.friction

`float` `0.6f`

the friction factor of the node movement, the larger the value, the slower the node movement.

#### Force.iterations

`int` `200`

The number of iterations of the force layout.

#### Force.show

`bool` `true`

#### Force.stepCount

`int` `1`

#### Force.stepFactor

`float` `1f`

The step factor of the force layout.

### Graph

class in XCharts.Runtime.Graphs / Inherits from: [Serie](https://xcharts-team.github.io/docs/configuration#serie)

Graph chart component. It is used for showing the relationship between nodes.

#### Graph.force

[Force](#force)

the force layout of the graph.

#### Graph.levelStyle

`LevelStyle`

the style of level.