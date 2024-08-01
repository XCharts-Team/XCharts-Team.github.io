---
sidebar_position: 0
slug: /treemap
---
import APITable from '@site/src/components/APITable';

# TreemapChart 矩形树图

XCharts付费扩展图表 - 矩形树图。

## 截图

||||||
| :--: | :--: | :--: | :--: | :--: |
|![Treemap01](img/Treemap01.png) |![Treemap02](img/Treemap02.png) |![Treemap03](img/Treemap03.png) |![Treemap04](img/Treemap04.png) |

## 许可

扩展图表，需付费购买后才获得使用许可。

## 示例

Demo仓库：[XCharts-TreemapChart-Demo](https://github.com/XCharts-Team/XCharts-TreemapChart-Demo)

## 教程

[扩展图表如何导入Demo项目或导入自己项目](https://github.com/XCharts-Team/XCharts-Demo)

## 文档

[API](#api)  
[配置项手册](#配置项手册)  

## 日志

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

> class in XCharts.Runtime.Treemaps / 继承自: [Serie](https://xcharts-team.github.io/docs/api#serie)


|API|版本|描述|
|--|--|--|
|AddDefaultSerie()||public static void AddDefaultSerie(BaseChart chart, string serieName)|
|CanGoUpALevel()||public bool CanGoUpALevel()<br/>是否可以返回上一层 |
|GetLevelItemStyle()||public ItemStyle GetLevelItemStyle(int level)|
|GetLevelLabel()||public LabelStyle GetLevelLabel(int level)|
|GetLevelUpperLabel()||public LabelStyle GetLevelUpperLabel(int level)|
|GoUpALevel()||public void GoUpALevel()<br/>返回上一层 |
|OnDataUpdate()||public override void OnDataUpdate()|
|SetSelectedSerieData()||public bool SetSelectedSerieData(string serieDataName)<br/>设置选中（要展示的）的数据名 |
|SetSelectedSerieData()||public void SetSelectedSerieData(SerieData serieData)|

### TreemapChart

> class in XCharts.Runtime.Treemaps / 继承自: [BaseChart](https://xcharts-team.github.io/docs/api#basechart)


## 配置项手册

### Treemap

> class in XCharts.Runtime.Treemaps / 继承自: [Serie](https://xcharts-team.github.io/docs/configuration#serie)

```mdx-code-block
<APITable name="Treemap">
```

|参数|默认|版本|描述|
|--|--|--|--|
|leafDepth|0||默认显示的几层节点。默认为0时表示尽可能展示多层节点，设置大于0时，下钻功能开启，需要点击后才展示子节点。
|visualDimension|0||用于计算占比的数据维数。
|drillDownIcon|||当节点可以下钻时的提示符，只能是字符。默认为▶
|customGoUpLevelButton|||自定义返回上一层按钮，自定义的按钮需要自己处理点击事件，调用GoUpALevel()接口。
|upperLabel|||父节点标签。show为true时表示显示父节点标签，margin参数设置子节点和父节点的间距。
|levelStyle|||

```mdx-code-block
</APITable>
```

