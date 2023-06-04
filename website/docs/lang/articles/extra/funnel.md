---
sidebar_position: 0
slug: /funnel
---
import APITable from '@site/src/components/APITable';

# FunnelChart 漏斗图

XCharts的付费扩展图表 - 漏斗图。

![funnel](img/funnel.png)

## 许可

扩展图表，需付费购买后才获得使用许可。

## 教程

[扩展图表如何导入Demo项目或导入自己项目](https://github.com/XCharts-Team/XCharts-Demo)

## 文档

[API](#api)  
[配置项手册](#配置项手册)  

## 日志

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

### FunnelChart

> XCharts.Runtime.Funnels.FunnelChart : [BaseChart](https://xcharts-team.github.io/docs/api#basechart)

## 配置项手册

### Funnel

> XCharts.Runtime.Funnels.Funnel : [Serie](https://xcharts-team.github.io/docs/configuration#serie)

```mdx-code-block
<APITable name="Funnel">
```


|field|default|since|comment|
|--|--|--|--|
|rectEnd||v3.3.0|是否最后以矩形结束。默认false以三角形结束。
|dynamicHeight||v3.3.0|是否映射为动态高度。当设置为 'true' 时，漏斗图每个条目（图表元素）的高度和 y 轴字段对应数值成正比。

```mdx-code-block
</APITable>
```

