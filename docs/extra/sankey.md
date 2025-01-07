---
title: SankeyChart
sidebar_position: 0
slug: /sankey
---

# SankeyChart

XCharts paid extension chart - Sankey Diagram.

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
* (2024.03.20) Added support for expand and collapse functions in `Sankey` diagrams

## API

### Sankey

class in XCharts.Runtime.Sankeys / Inherits from: [Serie](https://xcharts-team.github.io/docs/api#serie)

Sankey diagram is a special flow diagram, which is mainly used to express how the raw materials, energy and so on flow from the initial form to the final state through the intermediate process.

#### Sankey.defaultColorBy

public override SerieColorBy defaultColorBy  

#### Sankey.levelStyle

public LevelStyle levelStyle  
the style of level.

#### Sankey.AddDefaultSerie

public static void AddDefaultSerie(BaseChart chart, string serieName)  

#### Sankey.GetLevelItemStyle

public ItemStyle GetLevelItemStyle(int depth)  

#### Sankey.GetLevelLabel

public LabelStyle GetLevelLabel(int depth)  

#### Sankey.GetLevelLineStyle

public LineStyle GetLevelLineStyle(int depth)  

### Sankey.NodeAlign

class in XCharts.Runtime.Sankeys

the align of node.

Options:

- `Top`: top align.
- `Center`: center align.
- `Bottom`: bottom align.

### SankeyChart

class in XCharts.Runtime.Sankeys / Inherits from: [BaseChart](https://xcharts-team.github.io/docs/api#basechart)

## Configuration

### Sankey

class in XCharts.Runtime.Sankeys / Inherits from: [Serie](https://xcharts-team.github.io/docs/configuration#serie)

Sankey diagram is a special flow diagram, which is mainly used to express how the raw materials, energy and so on flow from the initial form to the final state through the intermediate process.

#### Sankey.collapse

`bool` `false` `v3.11.0`

whether collapse.

#### Sankey.collapseLevel

`int` `-1` `v3.11.0`

the level of collapse. The level starts from 0, and -1 means no limit.

#### Sankey.collapseMutex

`bool` `true` `v3.11.0`

whether collapse mutex.

#### Sankey.curveness

`float` `0.5f`

the curveness of line.

#### Sankey.defaultExpandDataIndex

`int` `-1` `v3.11.0`

the default expand data index.

#### Sankey.draggable

`bool`

whether draggable.

#### Sankey.levelStyle

`LevelStyle`

the style of level.

#### Sankey.lineGradient

`bool` `true` `v3.11.0`

whether line gradient. If enabled, the color of lineStyle will not work.

#### Sankey.nodeAlign

[Sankey.NodeAlign](#sankeynodealign)

the align of node.

Options:

- `Top`: top align.
- `Center`: center align.
- `Bottom`: bottom align.

#### Sankey.nodeGap

`float` `8`

the gap of node.

#### Sankey.nodeWidth

`float` `20`

the width of node.