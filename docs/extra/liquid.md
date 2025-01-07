---
title: LiquidChart
sidebar_position: 0
slug: /liquid
---

# LiquidChart

XCharts' paid extension chart - Liquid Level Chart.

## Screenshots

<table>
    <tr>
        <td><img src="/img/extra/Liquid01.png" alt="Liquid01" /></td>
        <td><img src="/img/extra/Liquid02.png" alt="Liquid02" /></td>
        <td><img src="/img/extra/Liquid03.png" alt="Liquid03" /></td>
        <td><img src="/img/extra/Liquid04.png" alt="Liquid04" /></td>
    </tr>
    <tr>
        <td><img src="/img/extra/Liquid05.png" alt="Liquid05" /></td>
        <td><img src="/img/extra/Liquid06.png" alt="Liquid06" /></td>
        <td><img src="/img/extra/Liquid07.png" alt="Liquid07" /></td>
        <td><img src="/img/extra/Liquid08.png" alt="Liquid08" /></td>
    </tr>
</table>

## License

Extension charts require a paid purchase to obtain a usage license.

## Example

Demo repository: [XCharts-LiquidChart-Demo](https://github.com/XCharts-Team/XCharts-LiquidChart-Demo) 

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

* (2024.01.21) Added more shortcuts and APIs for creating default `Liquid` charts

### v3.9.0

* (2023.12.01) Released version `v3.9.0`
* (2023.12.01) Updated documentation

### v3.8.0

* (2023.07.31) Synchronized with `XCharts v3.8.0`

### v3.6.1

* (2023.06.08) Released version `v3.6.1`
* (2023.06.08) Updated documentation

### v3.6.0

* (2023.04.01) Released version `v3.6.0`
* (2023.02.14) Synchronized with `XCharts v3.6.0`

### v3.5.0

* (2022.12.01) Released version `v3.5.0`
* (2022.11.27) Adjusted `Documentation` document structure

### v3.4.0

* (2022.11.01) Supported `Animation`'s `unscaledTime`
* (2022.11.01) Synchronized with `XCharts v3.4.0`

### v3.2.0

* (2022.08.22) Released version `v3.2.0`
* (2022.08.19) Synchronized with `XCharts v3.2.0`

## API

### Liquid

class in XCharts.Runtime.Liquids / Inherits from: [Serie](https://xcharts-team.github.io/docs/api#serie),[INeedSerieContainer](https://xcharts-team.github.io/docs/api#ineedseriecontainer)

#### Liquid.containerIndex

public int containerIndex  

#### Liquid.containterInstanceId

public int containterInstanceId  

#### Liquid.AddDefaultSerie

public static Serie AddDefaultSerie(BaseChart chart, string serieName)  

### LiquidChart

class in XCharts.Runtime.Liquids / Inherits from: [BaseChart](https://xcharts-team.github.io/docs/api#basechart)

水位图

#### LiquidChart.DefaultCapsuleLiquidChart

public void DefaultCapsuleLiquidChart()  
generate default capsule liquid chart. 生成默认的胶囊形水位图。

#### LiquidChart.DefaultRectLiquidChart

public void DefaultRectLiquidChart()  
generate default rect liquid chart. 生成默认的矩形水位图。

#### LiquidChart.DefaultRoundRectLiquidChart

public void DefaultRoundRectLiquidChart()  
generate default round rect liquid chart. 生成默认的圆角矩形水位图。

### Vessel

class in XCharts.Runtime.Liquids / Inherits from: [MainComponent](https://xcharts-team.github.io/docs/api#maincomponent),[ISerieContainer](https://xcharts-team.github.io/docs/api#iseriecontainer),[IUpdateRuntimeData](https://xcharts-team.github.io/docs/api#iupdateruntimedata)

Vessel component for liquid chart. There can be multiple vessels in a Chart, which can be matched by vesselIndex in Serie.

#### Vessel.IsPointerEnter

public bool IsPointerEnter()  

#### Vessel.UpdateRuntimeData

public void UpdateRuntimeData(BaseChart chart)  

### Vessel.Shape

class in XCharts.Runtime.Liquids

Vessel component for liquid chart. There can be multiple vessels in a Chart, which can be matched by vesselIndex in Serie.

Options:

- `Circle`: 圆形
- `Rect`: 正方形。
- `Triangle`: 三角形。
- `Diamond`: 菱形。

### VesselContext

class in XCharts.Runtime.Liquids / Inherits from: [MainComponentContext](https://xcharts-team.github.io/docs/api#maincomponentcontext)

#### VesselContext.center

public Vector3 center  
the runtime center position of vessel.

#### VesselContext.height

public float height  

#### VesselContext.innerRadius

public float innerRadius  
The actual radius after deducting shapeWidth and gap.

#### VesselContext.isPointerEnter

public bool isPointerEnter  

#### VesselContext.radius

public float radius  
the runtime radius of vessel.

#### VesselContext.width

public float width

## Configuration

### Liquid

class in XCharts.Runtime.Liquids / Inherits from: [Serie](https://xcharts-team.github.io/docs/configuration#serie), [INeedSerieContainer](https://xcharts-team.github.io/docs/configuration#ineedseriecontainer)

#### Liquid.waveHeight

`float` `10f`

波高。

#### Liquid.waveLength

`float` `20f`

Wave length of the wave, which is relative to the diameter.

#### Liquid.waveOffset

`float` `0f`

波偏移。

#### Liquid.waveSpeed

`float` `5f`

波速。正数时左移，负数时右移。

### Vessel

class in XCharts.Runtime.Liquids / Inherits from: [MainComponent](https://xcharts-team.github.io/docs/configuration#maincomponent), [ISerieContainer](https://xcharts-team.github.io/docs/configuration#iseriecontainer), [IUpdateRuntimeData](https://xcharts-team.github.io/docs/configuration#iupdateruntimedata)

Vessel component for liquid chart. There can be multiple vessels in a Chart, which can be matched by vesselIndex in Serie.

#### Vessel.autoColor

`bool` `true`

Whether automatic color. If true, the color matches serie.

#### Vessel.backgroundColor

`Color32`

Background color of polar, which is transparent by default.

#### Vessel.borderColor

`Color32` `Color32(70, 70, 240, 255)`

The color on inside of vessel. The default is consistent with Serie.

#### Vessel.borderWidth

`float` `0f`

The border on the inside of vessel.

#### Vessel.center

`float[]`

The center of vesselß. The center[0] is the x-coordinate, and the center[1] is the y-coordinate.

#### Vessel.color

`Color32` `Color32(70, 70, 240, 255)`

Vessel color. The default is consistent with Serie.

#### Vessel.cornerRadius

`float[]`

The radius of rounded corner. Its unit is px. Use array to respectively specify the 4 corner radiuses((clockwise upper left, upper right, bottom right and bottom left)).

#### Vessel.gap

`float` `5f`

The gap between the vessel and the liquid.

#### Vessel.height

`float` `0.7f`

The height of vessel.

#### Vessel.radius

`float` `0.35f`

The radius of vessel.

#### Vessel.shape

[Vessel.Shape](#vesselshape)

The shape of vessel.

Options:

- `Circle`: 圆形
- `Rect`: 正方形。
- `Triangle`: 三角形。
- `Diamond`: 菱形。

#### Vessel.shapeWidth

`float` `5f`

Thickness of vessel.

#### Vessel.show

`bool` `true`

Whether to show the vessel.

#### Vessel.smoothness

`float` `1f`

The smoothness of wave.

#### Vessel.width

`float` `0.5f`

The width of vessel.