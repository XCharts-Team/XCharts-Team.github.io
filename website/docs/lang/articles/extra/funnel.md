---
sidebar_position: 0
slug: /funnel
---
import APITable from '@site/src/components/APITable';

# FunnelChart 漏斗图

XCharts的付费扩展图表 - 漏斗图。

## 截图

||||||
| :--: | :--: | :--: | :--: | :--: |
|![Funnel01](img/Funnel01.png) |![Funnel02](img/Funnel02.png) |![Funnel03](img/Funnel03.png) |![Funnel04](img/Funnel04.png) |![Funnel05](img/Funnel05.png) |![Funnel06](img/Funnel06.png) |
|![Funnel07](img/Funnel07.png) |![Funnel08](img/Funnel08.png) |![Funnel09](img/Funnel09.png) |

## 许可

扩展图表，需付费购买后才获得使用许可。

## 示例

Demo仓库：[XCharts-FunnelChart-Demo](https://github.com/XCharts-Team/XCharts-FunnelChart-Demo)

## 教程

[扩展图表如何导入Demo项目或导入自己项目](https://github.com/XCharts-Team/XCharts-Demo)

## 文档

[API](#api)  
[配置项手册](#配置项手册)  

## 日志

### v3.9.0

* (2023.12.01) 发布`v3.9.0`版本
* (2023.12.01) 更新文档

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

### v3.3.0

* (2022.09.24) 增加`DynamicHeight`参数支持配置是否映射为动态高度
* (2022.09.24) 增加`RectEnd`参数支持配置是否以矩形结束

### v3.2.0

* (2022.08.22) 发布`v3.2.0`版本
* (2022.08.19) 同步`XCharts v3.2.0`

## API

### Funnel

> class in XCharts.Runtime.Funnels / 继承自: [Serie](https://xcharts-team.github.io/docs/api#serie)


|API|版本|描述|
|--|--|--|
|AddDefaultSerie()||public static void AddDefaultSerie(BaseChart chart, string serieName)|

### FunnelChart

> class in XCharts.Runtime.Funnels / 继承自: [BaseChart](https://xcharts-team.github.io/docs/api#basechart)

漏斗图。适用于流程流量分析。

|API|版本|描述|
|--|--|--|
|DefaultHorizonalFunnelChart()||public void DefaultHorizonalFunnelChart()<br/>生成默认的横向漏斗图。 |

## 配置项手册

### Funnel

> class in XCharts.Runtime.Funnels / 继承自: [Serie](https://xcharts-team.github.io/docs/configuration#serie)

```mdx-code-block
<APITable name="Funnel">
```

|参数|默认|版本|描述|
|--|--|--|--|
|rectEnd||v3.3.0|是否最后以矩形结束。默认false以三角形结束。
|dynamicHeight||v3.3.0|是否映射为动态高度。当设置为 'true' 时，漏斗图每个条目（图表元素）的高度和 y 轴字段对应数值成正比。

```mdx-code-block
</APITable>
```

