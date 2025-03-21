---
sidebar_position: 0
slug: /pictorialbar
---

# PictorialBarChart 象形柱图

XCharts付费扩展图表 - 象形柱图。

## 截图

<table>
    <tr>
        <td><img src="/img/extra/PictorialBar01.png" alt="PictorialBar01" /></td>
        <td><img src="/img/extra/PictorialBar02.png" alt="PictorialBar02" /></td>
        <td><img src="/img/extra/PictorialBar03.png" alt="PictorialBar03" /></td>
        <td><img src="/img/extra/PictorialBar04.png" alt="PictorialBar04" /></td>
    </tr>
</table>

## 许可

扩展图表，需付费购买后才获得使用许可。

## 示例

Demo仓库：[XCharts-PictorialBarChart-Demo](https://github.com/XCharts-Team/XCharts-PictorialBarChart-Demo)

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

* (2023.12.19) 调整`Border`相关代码

### v3.9.0

* (2023.12.01) 发布`v3.9.0`版本
* (2023.12.01) 更新文档

### v3.8.1

* (2023.09.26) 修复`PictorialBar`动态添加数据时不刷新的问题

### v3.8.0

* (2023.07.31) 同步`XCharts v3.8.0`

### v3.6.1

* (2023.06.08) 发布`v3.6.1`版本
* (2023.06.08) 更新文档

### v3.6.0

* (2023.04.01) 发布`v3.6.0`版本
* (2023.03.09) 支持`onSerieClick` `onSerieDown` `onSerieEnter`和`onSerieExit`回调
* (2023.02.14) 同步`XCharts v3.6.0`

### v3.5.0

* (2022.12.01) 发布`v3.5.0`版本
* (2022.11.29) 增加`Serie`的`barMaxWidth`的支持
* (2022.11.27) 调整`Documentation`文档结构

### v3.4.0

* (2022.11.01) 支持`Animation`的`unscaledTime`
* (2022.11.01) 同步`XCharts v3.4.0`

### v3.2.0

* (2022.08.22) 发布`v3.2.0`版本
* (2022.08.19) 同步`XCharts v3.2.0`
* (2022.08.09) 增加`colorBy`参数支持
* (2022.08.09) 修复`label`异常问题 (#1)

## API

### PictorialBar

class in XCharts.Runtime.PictorialBars / 继承自: [Serie](https://xcharts-team.github.io/docs/api#serie),[INeedSerieContainer](https://xcharts-team.github.io/docs/api#ineedseriecontainer)

#### PictorialBar.containerIndex

public int containerIndex  

#### PictorialBar.containterInstanceId

public int containterInstanceId  

#### PictorialBar.AddDefaultSerie

public static void AddDefaultSerie(BaseChart chart, string serieName)  

#### PictorialBar.ConvertSerie

public static PictorialBar ConvertSerie(Serie serie)  

### PictorialBarChart

class in XCharts.Runtime.PictorialBars / 继承自: [BaseChart](https://xcharts-team.github.io/docs/api#basechart)

## 配置项手册

### PictorialBar

class in XCharts.Runtime.PictorialBars / 继承自: [Serie](https://xcharts-team.github.io/docs/configuration#serie), [INeedSerieContainer](https://xcharts-team.github.io/docs/configuration#ineedseriecontainer)