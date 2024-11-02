---
sidebar_position: 0
slug: /treemap
---

# TreemapChart 矩形树图

XCharts付费扩展图表 - 矩形树图。

## 截图

<table>
    <tr>
        <td><img src="/img/extra/Treemap01.png" alt="Treemap01" /></td>
        <td><img src="/img/extra/Treemap02.png" alt="Treemap02" /></td>
        <td><img src="/img/extra/Treemap03.png" alt="Treemap03" /></td>
        <td><img src="/img/extra/Treemap04.png" alt="Treemap04" /></td>
    </tr>
</table>

## 许可

扩展图表，需付费购买后才获得使用许可。

## 示例

Demo仓库：[XCharts-TreemapChart-Demo](https://github.com/XCharts-Team/XCharts-TreemapChart-Demo)

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

### v3.9.0

* (2023.12.01) 发布`v3.9.0`版本
* (2023.12.01) 更新文档

### v3.6.2

* (2023.11.08) 修复`ItemStyle`设置`borderColor`后边框绘制异常的问题

### v3.6.1

* (2023.06.08) 发布`v3.6.1`版本
* (2023.06.08) 更新文档

### v3.6.0

* (2023.04.01) 发布`v3.6.0`版本
* (2023.03.09) 支持`onSerieClick` `onSerieDown` `onSerieEnter`和`onSerieExit`回调
* (2023.02.14) 同步`XCharts v3.6.0`

### v3.5.0

* (2022.12.01) 发布`v3.5.0`版本
* (2022.11.27) 调整`Documentation`文档结构

### v3.2.0

* (2022.08.22) 发布`v3.2.0`版本
* (2022.08.19) 同步`XCharts v3.2.0`

## API

### Treemap

class in XCharts.Runtime.Treemaps / 继承自: [Serie](https://xcharts-team.github.io/docs/api#serie)

#### Treemap.customGoUpLevelButton

public GameObject customGoUpLevelButton  
自定义返回上一层按钮，自定义的按钮需要自己处理点击事件，调用GoUpALevel()接口。

#### Treemap.drillDownIcon

public string drillDownIcon  
当节点可以下钻时的提示符，只能是字符。默认为▶

#### Treemap.leafDepth

public int leafDepth  
默认显示的几层节点。默认为0时表示尽可能展示多层节点，设置大于0时，下钻功能开启，需要点击后才展示子节点。

#### Treemap.levelStyle

public LevelStyle levelStyle  

#### Treemap.upperLabel

public LabelStyle upperLabel  
父节点标签。show为true时表示显示父节点标签，margin参数设置子节点和父节点的间距。

#### Treemap.visualDimension

public int visualDimension  
用于计算占比的数据维数。

#### Treemap.AddDefaultSerie

public static void AddDefaultSerie(BaseChart chart, string serieName)  

#### Treemap.CanGoUpALevel

public bool CanGoUpALevel()  
是否可以返回上一层

#### Treemap.GetLevelItemStyle

public ItemStyle GetLevelItemStyle(int level)  

#### Treemap.GetLevelLabel

public LabelStyle GetLevelLabel(int level)  

#### Treemap.GetLevelUpperLabel

public LabelStyle GetLevelUpperLabel(int level)  

#### Treemap.GoUpALevel

public void GoUpALevel()  
返回上一层

#### Treemap.OnDataUpdate

public override void OnDataUpdate()  

#### Treemap.SetSelectedSerieData

public bool SetSelectedSerieData(string serieDataName)  
设置选中（要展示的）的数据名


### TreemapChart

class in XCharts.Runtime.Treemaps / 继承自: [BaseChart](https://xcharts-team.github.io/docs/api#basechart)

## 配置项手册

### Treemap

class in XCharts.Runtime.Treemaps / 继承自: [Serie](https://xcharts-team.github.io/docs/configuration#serie)

#### Treemap.customGoUpLevelButton

`GameObject`

自定义返回上一层按钮，自定义的按钮需要自己处理点击事件，调用GoUpALevel()接口。

#### Treemap.drillDownIcon

`string`

当节点可以下钻时的提示符，只能是字符。默认为▶

#### Treemap.leafDepth

`int` `0`

默认显示的几层节点。默认为0时表示尽可能展示多层节点，设置大于0时，下钻功能开启，需要点击后才展示子节点。

#### Treemap.levelStyle

`LevelStyle`

#### Treemap.upperLabel

`LabelStyle`

父节点标签。show为true时表示显示父节点标签，margin参数设置子节点和父节点的间距。

#### Treemap.visualDimension

`int` `0`

用于计算占比的数据维数。