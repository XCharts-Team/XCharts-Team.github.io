---
sidebar_position: 0
slug: /pyramid
---

# PyramidChart 金字塔

XCharts付费扩展图表 - 金字塔。

## 截图

<table>
    <tr>
        <td><img src="/img/extra/Pyramid01.png" alt="Pyramid01" /></td>
        <td><img src="/img/extra/Pyramid02.png" alt="Pyramid02" /></td>
        <td><img src="/img/extra/Pyramid03.png" alt="Pyramid03" /></td>
    </tr>
</table>

## 许可

扩展图表，需付费购买后才获得使用许可。

## 示例

Demo仓库：[XCharts-PyramidChart-Demo](https://github.com/XCharts-Team/XCharts-PyramidChart-Demo)

## 教程

[扩展图表如何导入Demo项目或导入自己项目](https://github.com/XCharts-Team/XCharts-Demo)

## 文档

[API](#api)  
[配置项手册](#配置项手册)  

# 日志

### v3.12.0

* (2024.09.30) 发布`v3.12.0`版本
* (2024.09.30) 更新文档

### v3.11.0

* (2024.06.16) 发布`v3.11.0`版本

### v3.10.0

* (2024.01.21) 增加`Pyramid`的更多创建默认图表的快捷方式和API

### v3.9.0

* (2023.12.01) 发布`v3.9.0`版本
* (2023.12.01) 更新文档

### v3.6.1

* (2023.06.08) 发布`v3.6.1`版本
* (2023.06.08) 更新文档

### v3.6.0

* (2023.04.01) 发布`v3.6.0`版本
* (2023.03.21) 增加`Tooltip`支持
* (2023.02.14) 同步`XCharts v3.6.0`

### v3.5.0

* (2022.12.01) 发布`v3.5.0`版本
* (2022.11.27) 调整`Documentation`文档结构

### v3.2.0

* (2022.08.22) 发布`v3.2.0`版本
* (2022.08.19) 同步`XCharts v3.2.0`

## API

### Pyramid

class in XCharts.Runtime.Pyramids / 继承自: [Serie](https://xcharts-team.github.io/docs/api#serie)

#### Pyramid.defaultColorBy

public override SerieColorBy defaultColorBy  

#### Pyramid.AddDefaultSerie

public static void AddDefaultSerie(BaseChart chart, string serieName)  

### PyramidChart

class in XCharts.Runtime.Pyramids / 继承自: [BaseChart](https://xcharts-team.github.io/docs/api#basechart)

#### PyramidChart.Default2DPyramidChart

public void Default2DPyramidChart()  
生成默认的2D金字塔图。

### PyramidStyle

class in XCharts.Runtime.Pyramids / 继承自: [ChildComponent](https://xcharts-team.github.io/docs/api#childcomponent)

#### PyramidStyle.drawTop

public bool drawTop

## 配置项手册

### Pyramid

class in XCharts.Runtime.Pyramids / 继承自: [Serie](https://xcharts-team.github.io/docs/configuration#serie)

#### Pyramid.pyramidStyle

[PyramidStyle](#pyramidstyle)

### PyramidStyle

class in XCharts.Runtime.Pyramids / 继承自: [ChildComponent](https://xcharts-team.github.io/docs/configuration#childcomponent)

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