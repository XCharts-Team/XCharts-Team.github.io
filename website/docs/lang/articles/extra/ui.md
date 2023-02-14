---
sidebar_position: 0
slug: /ui
---

# XCharts-UI UI组件

`XCharts`的扩展UI组件，`VIP`订阅用户专有。

## UI组件

- [UITable 表格](#UITable)
- [UIStatistic 统计数值](#UIStatistic)

## 如何使用

- 使用该仓库前先确保项目里已有对应版本的XCharts。
- 本仓库放入Assets下或者通过Package Manager导入。

## UITable

![table](img/table.png)

`表格`组件。可用于展示行列数据。

支持的功能有：

- 显示或隐藏列表头
- 显示或隐藏行表头
- 任意调整行列宽高
- 支持行号
- 支持选中
- 支持分割线
- 支持滚动和拖拽
- 支持滚动条
- 支持图标图片
- <del>排序（暂不支持）</del>
- <del>分页（暂不支持）</del>
- <del>查找（暂不支持）</del>
- <del>过滤（暂不支持）</del>

## UIStatistic

![statistic](img/statistic.png)

`统计数值`组件。用于展示统计数值。

何时使用：

- 当需要突出某个或某组数字时。
- 当需要展示带描述的统计类数据时使用。

支持的功能有：

- 常规数值
- 倒计时
- 添加图标
- 变更动画
- 事件回调

## API

### StatisticContext

### StatisticHelper

|public method|description|
|--|--|
| GetContentPosition() |public static Vector3 GetContentPosition(UIStatistic statistic)|
| GetTitleContent() |public static string GetTitleContent(UIStatistic statistic, double value)|
| GetValueContent() |public static string GetValueContent(UIStatistic statistic, double value)|

### TableContext

### TableHelper

|public method|description|
|--|--|
| ClampVectorMin() |public static void ClampVectorMin(float minX, ref Vector3 p1, ref Vector3 p2, ref Vector3 p3, ref Vector3 p4)|
| GetAllColumnWidth() |public static float GetAllColumnWidth(UITable table)|
| GetAllRowAndGapHeight() |public static float GetAllRowAndGapHeight(UITable table)|
| GetAllRowHeight() |public static float GetAllRowHeight(UITable table)|
| GetBackgroundColor() |public static Color32 GetBackgroundColor(UITable table)|
| GetColumnAutoEachWidth() |public static float GetColumnAutoEachWidth(UITable table)|
| GetColumnHeaderBackgroundColor() |public static Color32 GetColumnHeaderBackgroundColor(UITable table)|
| GetColumnHeaderHeight() |public static float GetColumnHeaderHeight(UITable table)|
| GetColumnWidth() |public static float GetColumnWidth(UITable table, int columnIndex, float eachWidth = 0)|
| GetDataLabelStyle() |public static LabelStyle GetDataLabelStyle(UITable table, int index)|
| GetHeaderLabelStyle() |public static LabelStyle GetHeaderLabelStyle(UITable table, int index)|
| GetRowAutoEachHeight() |public static float GetRowAutoEachHeight(UITable table)|
| GetRowBackgroundColor() |public static Color32 GetRowBackgroundColor(UITable table, int index)|
| GetRowHeaderBgColor() |public static Color32 GetRowHeaderBgColor(UITable table, int rowIndex)|
| GetRowHeaderContent() |public static string GetRowHeaderContent(UITable table, int i)<br/>表格帮助类。 |
| GetRowHeaderWidth() |public static float GetRowHeaderWidth(UITable table)|
| GetRowHeight() |public static float GetRowHeight(UITable table, int rowIndex, float eachHeight = 0)|
| GetScrollbarBackgroundColor() |public static Color32 GetScrollbarBackgroundColor(UITable table)|
| GetScrollbarColor() |public static Color32 GetScrollbarColor(UITable table)|
| GetScrollbarHorizontalRange() |public static float GetScrollbarHorizontalRange(UITable table)|
| GetScrollbarHorizontalRate() |public static float GetScrollbarHorizontalRate(UITable table)|
| GetScrollbarHorizontalWidth() |public static float GetScrollbarHorizontalWidth(UITable table)|
| GetScrollbarVerticalRange() |public static float GetScrollbarVerticalRange(UITable table)|
| GetScrollbarVerticalRate() |public static float GetScrollbarVerticalRate(UITable table)|
| GetScrollbarVerticalWidth() |public static float GetScrollbarVerticalWidth(UITable table)|
| GetSelectColor() |public static Color32 GetSelectColor(UITable table)|
| GetSelectHeaderColor() |public static Color32 GetSelectHeaderColor(UITable table)|
| GetSeparatorColor() |public static Color32 GetSeparatorColor(UITable table)|
| IsNeedDrawColumnHeader() |public static bool IsNeedDrawColumnHeader(UITable table)|
| IsNeedDrawRowHeader() |public static bool IsNeedDrawRowHeader(UITable table)|

### UIComponent

Inherits or Implemented: [BaseGraph](#basegraph)

|public method|description|
|--|--|
| UpdateTheme() |public bool UpdateTheme(ThemeType theme)<br/>切换内置主题。 |

### UIHelper

|public method|description|
|--|--|
| GetBackgroundColor() |public static Color32 GetBackgroundColor(UIComponent component)|

### UIProgress

Inherits or Implemented: [UIComponent](#uicomponent)

## 配置项手册

### TableCell

Inherits or Implemented: [ChildComponent](#childcomponent),[ITableCell](#itablecell)

表格的单元格数据。

|field|default|since|comment|
|--|--|--|--|
|show|true||是否显示当前数据。
|type|||<br/>`DataType`:<br/>- `Custom`: <br/>- `String`: <br/>- `Double`: <br/>- `Bool`: <br/>- `Sprite`: <br/>|
|value|||
|sprite|||图片数据。当type为Sprite时有效。

### TableColumn

Inherits or Implemented: [ChildComponent](#childcomponent)

列表头内容和样式。

|field|default|since|comment|
|--|--|--|--|
|show|true||是否显示列表头。
|content|||列表头内容。
|width|0f||列宽。默认为0时列宽平分。
|dataLabelStyle|||当前列的数据文本样式。默认不启用，而是共用TableColumnHeaderStyle的defaultDataLabelStyle。
|headerLabelStyle|||当前列的列表头文本样式。默认不启用，而是共用TableColumnHeaderStyle的defalutHeaderLabelStyle。

### TableColumnHeaderStyle

Inherits or Implemented: [ChildComponent](#childcomponent)

列表头样式。

|field|default|since|comment|
|--|--|--|--|
|show|true||是否显示列表头。
|height|50f||列表头高度。
|backgroundColor|||列表头背景色。
|background|||背景图片样式。
|defaultHeaderLabelStyle|||
|defaultDataLabelStyle|||默认的列数据文本样式。

### TableRow

Inherits or Implemented: [ChildComponent](#childcomponent)

表格的行数据。

|field|default|since|comment|
|--|--|--|--|
|show|true||是否显示当前行。
|name|||行名称。可用于显示在行表头，用通配符{name}。
|height|||当前行的自定义高度。默认为0不自定义。
|data|||行数据列表。

### TableRowHeaderStyle

Inherits or Implemented: [ChildComponent](#childcomponent)

行表头样式。

|field|default|since|comment|
|--|--|--|--|
|show|true||是否显示行表头。
|width|100f||宽度。
|backgroundColor|||背景色。
|labelStyle|||文本样式。

### TableScrollbarStyle

Inherits or Implemented: [ChildComponent](#childcomponent)

表格滚动条样式。

|field|default|since|comment|
|--|--|--|--|
|show|false||是否显示滚动条。
|horizontal|false||是否显示水平滚动条。
|vertical|true||是否显示垂直滚动条。
|width|5||滚动条宽度。
|backgroundColor|||滚动条背景色。
|color|||滚动条颜色。

### TableSeparatorStyle

Inherits or Implemented: [ChildComponent](#childcomponent)

表格分割线样式。

|field|default|since|comment|
|--|--|--|--|
|show|true||是否显示分割线。
|vertical|true||是否显示垂直分割线。
|verticalColumn|true||是否显示列表头的垂直分割线。
|horizontal|true||是否显示水平分割线。
|horizontalColumn|true||是否显示列表头的水平分割线。
|width|1f||分割线宽度。
|color|Color.clear||分割线颜色。

### UIComponentTheme

Inherits or Implemented: [ChildComponent](#childcomponent)

|field|default|since|comment|
|--|--|--|--|
|show|true||
|sharedTheme|||主题配置。
|transparentBackground|false||

### UIStatistic

Inherits or Implemented: [UIComponent](#uicomponent)

统计数值UI组件。 用于展示统计数值。当需要突出某个或某组数字时，或展示带描述的统计类数据时使用。

|field|default|since|comment|
|--|--|--|--|
|valueLabelStyle|||
|animationStyle|||起始动画。

### UITable

Inherits or Implemented: [UIComponent](#uicomponent)

表格UI组件。 用于展示行列数据。

|field|default|since|comment|
|--|--|--|--|
|supportScroll|true||是否支持滚动。
|supportDrag|false||是否支持拖拽。
|supportSelect|false||是否支持选中。选中行，列，单元格。
|rowHeight|0f||行高。
|rowGap|0f||行间距。
|columnWidth|0f||列宽。默认0，自适应。Columns中设置有时优先用Columns中的值，没有时用这个值。
|borderWidth|0f||边框宽度。
|borderColor|||边框颜色。
|minColumnWidth|100f||最小列宽。
|minRowHeight|30f||最小行高。
|scrollSensitivity|10f||滚动灵敏度。
|selectColor|||选中时的颜色。
|selectHeaderColor|||选中时表头的颜色。
|rowBackgroundColors|||行背景颜色列表。
|separatorStyle|||分割线样式。 [TableSeparatorStyle](#tableseparatorstyle)|
|scrollbarStyle|||滚动条样式。 [TableScrollbarStyle](#tablescrollbarstyle)|
|columnHeaderStyle|||默认的列头样式。 [TableColumnHeaderStyle](#tablecolumnheaderstyle)|
|rowHeaderStyle|||行表头样式。 [TableRowHeaderStyle](#tablerowheaderstyle)|
|columns|||列表头样式。
|data|||表格数据。

### UITimePicker

Inherits or Implemented: [UIComponent](#uicomponent)

时间选择UI组件。 输入或选择时间的控件。当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。


