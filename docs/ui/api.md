# API

## DataType

class in XCharts.Runtime.UI

Options:

- `GameObject`: 
- `String`: 
- `Double`: 
- `Bool`: 
- `Sprite`: 

## FillStyle

class in XCharts.Runtime.UI / Inherits from: [ChildComponent](https://xcharts-team.github.io/docs/api#childcomponent)

Style of fill.

### FillStyle.autoOffset

public bool autoOffset  
Whether to automatically offset the fill position. When true, it will automatically indent left and right according to the displayed text or slider size.

### FillStyle.background

public Background background  
Background style.

### FillStyle.color

public Color32 color  
Fill color.

### FillStyle.height

public float height  
Height of fill. Higher priority than top and bottom. Represents the width of the ring in the circular progress bar.

### FillStyle.location

public Location location  
Location of fill.

### FillStyle.radius

public float radius  
Fill radius. Only valid in circular progress bar.

### FillStyle.roundCap

public bool roundCap  
Whether to use round cap. Only valid in circular progress bar.

### FillStyle.show

public bool show  
Whether to show fill.

### FillStyle.toColor

public Color32 toColor  
To color.

### FillStyle.width

public float width  
Width of fill.

## ITableCell

class in XCharts.Runtime.UI / Subclasses: [TableCell](#tablecell) 

## ProgressContext

class in XCharts.Runtime.UI

## SliderContext

class in XCharts.Runtime.UI

## SliderHandleStyle

class in XCharts.Runtime.UI / Inherits from: [ChildComponent](https://xcharts-team.github.io/docs/api#childcomponent)

Style of handle.

### SliderHandleStyle.gradientColor

public bool gradientColor  
Whether to use gradient color.

### SliderHandleStyle.show

public bool show  
Whether to show handle.

### SliderHandleStyle.symbol

public SymbolStyle symbol  
Style of symbol.

## SliderMarkStyle

class in XCharts.Runtime.UI / Inherits from: [ChildComponent](https://xcharts-team.github.io/docs/api#childcomponent)

Style of mark.

### SliderMarkStyle.included

public bool included  
Whether to include in the range. When true, the mark is displayed as the progress bar color, otherwise it is displayed as the background color.

### SliderMarkStyle.label

public LabelStyle label  
Style of label.

### SliderMarkStyle.show

public bool show  
Whether to show mark.

### SliderMarkStyle.symbol

public SymbolStyle symbol  
Style of symbol.

## StatisticContext

class in XCharts.Runtime.UI

## StatisticHelper

class in XCharts.Runtime.UI

### StatisticHelper.GetContentPosition

public static Vector3 GetContentPosition(UIStatistic statistic)  

### StatisticHelper.GetTitleContent

public static string GetTitleContent(UIStatistic statistic, double value)  

### StatisticHelper.GetValueContent

public static string GetValueContent(UIStatistic statistic, double value)  

## TableCarouselContext

class in XCharts.Runtime.UI

## TableCarouselMode

class in XCharts.Runtime.UI

the play mode of carousel.

Options:

- `Loop`: play loop.

## TableCarouselStyle

class in XCharts.Runtime.UI / Inherits from: [ChildComponent](https://xcharts-team.github.io/docs/api#childcomponent)

The table carousel style.

## TableCarouselType

class in XCharts.Runtime.UI

table carousel type.

Options:

- `Pixel`: pixel carousel.
- `Row`: single row carousel.
- `Page`: page carousel.

## TableCell

class in XCharts.Runtime.UI / Inherits from: [ChildComponent](https://xcharts-team.github.io/docs/api#childcomponent),[ITableCell](#itablecell)

表格的单元格数据。

### TableCell.GetContent

public string GetContent()  
get the content of the cell.

## TableColumn

class in XCharts.Runtime.UI / Inherits from: [ChildComponent](https://xcharts-team.github.io/docs/api#childcomponent)

列表头内容和样式。

## TableColumnHeaderStyle

class in XCharts.Runtime.UI / Inherits from: [ChildComponent](https://xcharts-team.github.io/docs/api#childcomponent)

the style of the table column header.

### TableColumnHeaderStyle.background

public ImageStyle background  
the background style of the column header.

### TableColumnHeaderStyle.backgroundColor

public Color32 backgroundColor  
the background color of the column header.

### TableColumnHeaderStyle.height

public float height  
the height of the column header.

### TableColumnHeaderStyle.opaque

public bool opaque  
whether the column header is opaque.

## TableColumnStyle

class in XCharts.Runtime.UI / Inherits from: [ChildComponent](https://xcharts-team.github.io/docs/api#childcomponent)

The style of table column.

### TableColumnStyle.columnBackgroundColors

public List&lt;Color32&gt; columnBackgroundColors  
the background color of column.

## TableContext

class in XCharts.Runtime.UI

表格运行时上下文。

## TableHelper

class in XCharts.Runtime.UI

表格帮助类。

### TableHelper.ClampVectorMin

public static void ClampVectorMin(float minX, ref Vector3 p1, ref Vector3 p2, ref Vector3 p3, ref Vector3 p4)  

### TableHelper.GetAllColumnWidth

public static float GetAllColumnWidth(UITable table)  

### TableHelper.GetAllRowAndGapHeight

public static float GetAllRowAndGapHeight(UITable table)  

### TableHelper.GetAllRowHeight

public static float GetAllRowHeight(UITable table)  

### TableHelper.GetBackgroundColor

public static Color32 GetBackgroundColor(UITable table)  

### TableHelper.GetCarouselProgress

public static float GetCarouselProgress(UITable table)  

### TableHelper.GetColumnAutoEachWidth

public static float GetColumnAutoEachWidth(UITable table)  

### TableHelper.GetColumnHeaderBackgroundColor

public static Color32 GetColumnHeaderBackgroundColor(UITable table)  

### TableHelper.GetColumnHeaderHeight

public static float GetColumnHeaderHeight(UITable table)  

### TableHelper.GetColumnWidth

public static float GetColumnWidth(UITable table, int columnIndex, float eachWidth = 0)  

### TableHelper.GetDataLabelStyle

public static LabelStyle GetDataLabelStyle(UITable table, int index)  

### TableHelper.GetHeaderLabelStyle

public static LabelStyle GetHeaderLabelStyle(UITable table, int index)  

### TableHelper.GetHorizontalSeparatorColor

public static Color32 GetHorizontalSeparatorColor(UITable table)  

### TableHelper.GetRowAutoEachHeight

public static float GetRowAutoEachHeight(UITable table)  

### TableHelper.GetRowBackgroundColor

public static Color32 GetRowBackgroundColor(UITable table, int index)  

### TableHelper.GetRowHeaderBgColor

public static Color32 GetRowHeaderBgColor(UITable table, int rowIndex)  

### TableHelper.GetRowHeaderContent

public static string GetRowHeaderContent(UITable table, int i)  
表格帮助类。

### TableHelper.GetRowHeaderWidth

public static float GetRowHeaderWidth(UITable table)  

### TableHelper.GetRowHeight

public static float GetRowHeight(UITable table, int rowIndex, float eachHeight = 0)  

### TableHelper.GetScrollbarBackgroundColor

public static Color32 GetScrollbarBackgroundColor(UITable table)  

### TableHelper.GetScrollbarColor

public static Color32 GetScrollbarColor(UITable table)  

### TableHelper.GetScrollbarHorizontalRange

public static float GetScrollbarHorizontalRange(UITable table)  

### TableHelper.GetScrollbarHorizontalRate

public static float GetScrollbarHorizontalRate(UITable table)  

### TableHelper.GetScrollbarHorizontalWidth

public static float GetScrollbarHorizontalWidth(UITable table)  

### TableHelper.GetScrollbarVerticalRange

public static float GetScrollbarVerticalRange(UITable table)  

### TableHelper.GetScrollbarVerticalRate

public static float GetScrollbarVerticalRate(UITable table)  

### TableHelper.GetScrollbarVerticalWidth

public static float GetScrollbarVerticalWidth(UITable table)  

### TableHelper.GetSelectColor

public static Color32 GetSelectColor(UITable table)  

### TableHelper.GetSelectHeaderColor

public static Color32 GetSelectHeaderColor(UITable table)  

### TableHelper.GetVerticalSeparatorColor

public static Color32 GetVerticalSeparatorColor(UITable table)  

### TableHelper.IsNeedDrawColumnHeader

public static bool IsNeedDrawColumnHeader(UITable table)  

### TableHelper.IsNeedDrawRowHeader

public static bool IsNeedDrawRowHeader(UITable table)  

## TableRow

class in XCharts.Runtime.UI / Inherits from: [ChildComponent](https://xcharts-team.github.io/docs/api#childcomponent)

the row data of the table.

## TableRowHeaderStyle

class in XCharts.Runtime.UI / Inherits from: [ChildComponent](https://xcharts-team.github.io/docs/api#childcomponent)

the style of the table row header.

## TableRowStyle

class in XCharts.Runtime.UI / Inherits from: [ChildComponent](https://xcharts-team.github.io/docs/api#childcomponent)

The style of table row.

### TableRowStyle.rowBackgroundColors

public List&lt;Color32&gt; rowBackgroundColors  
the background color of row.

## TableScrollbarStyle

class in XCharts.Runtime.UI / Inherits from: [ChildComponent](https://xcharts-team.github.io/docs/api#childcomponent)

the style of the table carousel.

## TableSeparatorStyle

class in XCharts.Runtime.UI / Inherits from: [ChildComponent](https://xcharts-team.github.io/docs/api#childcomponent)

the style of the table separator.

### TableSeparatorStyle.IsNeedDrawHorizontalSeparator

public bool IsNeedDrawHorizontalSeparator()  
whether to need to draw the horizontal separator.

### TableSeparatorStyle.IsNeedDrawVerticalSeparator

public bool IsNeedDrawVerticalSeparator()  
whether to need to draw the vertical separator.

## UIImage

class in XCharts.Runtime.UI / Inherits from: [UIComponent](https://xcharts-team.github.io/docs/api#uicomponent)

ui component of image. 图片UI组件。

## UIProgress

class in XCharts.Runtime.UI / Inherits from: [UIComponent](https://xcharts-team.github.io/docs/api#uicomponent)

### UIProgress.fillStyle

public FillStyle fillStyle  
The style of progress bar fill.

### UIProgress.labelStyle

public LabelStyle labelStyle  
The style of progress bar label.

### UIProgress.max

public float max  

### UIProgress.min

public float min  
The minimum value of progress.

### UIProgress.step

public float step  
The step of progress.

### UIProgress.type

public Type type  
The type of progress.

### UIProgress.value

public float value  
The value of progress.

### UIProgress.DefaultCircle

public void DefaultCircle()  

## UIProgress.Type

class in XCharts.Runtime.UI

The type of progress.

Options:

- `Line`: Horizontal progress bar.
- `Circle`: Circle progress bar.

## UISlider

class in XCharts.Runtime.UI / Inherits from: [UIComponent](https://xcharts-team.github.io/docs/api#uicomponent)

> Since `v3.13.0`

ui component of slider.

### UISlider.fillStyle

public FillStyle fillStyle  
Style of fill.

### UISlider.handleStyle

public SliderHandleStyle handleStyle  
Style of handle.

### UISlider.interactable

public bool interactable  
Whether the slider is interactable.

### UISlider.markNames

public List&lt;string&gt; markNames  
Names of marks. When specified with mark values, the mark and text are displayed at the specified position.

### UISlider.markStyle

public SliderMarkStyle markStyle  
Style of mark.

### UISlider.markValues

public List&lt;float&gt; markValues  
Values of marks. When specified with mark names, the mark and text are displayed at the specified position.

### UISlider.max

public float max  
Maximum value. The slider value cannot be greater than the maximum value.

### UISlider.min

public float min  
Minimum value. The slider value cannot be less than the minimum value.

### UISlider.onRangeChanged

public Action&lt;float, float&gt; onRangeChanged  
Callback when the range of the slider changes.

### UISlider.onRangeChangedComplete

public Action&lt;float, float&gt; onRangeChangedComplete  
Callback when the range of the slider changes is completed.

### UISlider.onValueChanged

public Action&lt;float&gt; onValueChanged  
Callback when the value of the slider changes.

### UISlider.onValueChangedComplete

public Action&lt;float&gt; onValueChangedComplete  
Callback when the value of the slider changes is completed.

### UISlider.step

public float step  
Step size. The value of the slider will change by step size.

### UISlider.value

public float[] value  
Current value of the slider. This is a two-dimensional array. When it is a range value type, the two values represent the minimum and maximum values respectively, and when it is other types, only the second value is used.

### UISlider.OnBeginDrag

public override void OnBeginDrag(PointerEventData eventData)  

### UISlider.OnDrag

public override void OnDrag(PointerEventData eventData)  

### UISlider.OnEndDrag

public override void OnEndDrag(PointerEventData eventData)  

### UISlider.OnPointerClick

public override void OnPointerClick(PointerEventData eventData)  

### UISlider.SetValue

public void SetValue(float rangeMin, float rangeMax)  
Set the range value of the slider.

public void SetValue(float rangeMin, float rangeMax, float min, float max)  
Set the range value and the maximum and minimum values.

public void SetValue(float value, float min, float max)  
Set the value and the maximum and minimum values.


## UISlider.value and the enum type.

class in XCharts.Runtime.UI

Options:

- `public void SetValue(float value`: Set the current enum value and the enum type.
- `if (!enumType.IsEnum) return;`: Set the current enum value and the enum type.
- `valueType = ValueType.Enum;`: Set the current enum value and the enum type.
- `value[0] = 0;`: Set the current enum value and the enum type.
- `value[1] = value;`: Set the current enum value and the enum type.
- `var fields = enumType.GetFields(BindingFlags.Public | BindingFlags.Static);`: Set the current enum value and the enum type.
- `markValues.Clear();`: Set the current enum value and the enum type.
- `markNames.Clear();`: Set the current enum value and the enum type.
- `foreach (var field in fields)`: Set the current enum value and the enum type.
- `var v = (int)field.GetValue(null);`: Set the current enum value and the enum type.
- `if (m_Min > v) m_Min = v;`: Set the current enum value and the enum type.
- `if (m_Max < v) m_Max = v;`: Set the current enum value and the enum type.
- `markValues.Add(v);`: Set the current enum value and the enum type.
- `markNames.Add(field.Name);`: Set the current enum value and the enum type.

## UISlider.value.

class in XCharts.Runtime.UI

Options:


## UISlider.ValueType

class in XCharts.Runtime.UI

Type of value.

Options:

- `Default`: Default value.
- `Range`: Range value.
- `Enum`: Enum value.

## UIStatistic

class in XCharts.Runtime.UI / Inherits from: [UIComponent](https://xcharts-team.github.io/docs/api#uicomponent)

Statistical value UI component. Used to display statistical values. Suitable for highlighting specific numbers/groups of numbers or presenting statistical data with descriptions.

### UIStatistic.GetCurrentValue

public double GetCurrentValue(float animationDuration)  
获取当前时刻的数值。当有变更动画时，返回动画过程中的数值。

## UIStatistic.Type

class in XCharts.Runtime.UI

The type of statistic.

Options:

- `Default`: default type. display text.
- `Countdown`: countdown type. Automatic countdown. At this time, value is used as seconds.

## UISvgImage

class in XCharts.Runtime / Inherits from: [MaskableGraphic](https://docs.unity3d.com/ScriptReference/30_search.html?q=maskablegraphic)

### UISvgImage.mirrorY

public bool mirrorY  

### UISvgImage.svgPath

public string svgPath  

## UITable

class in XCharts.Runtime.UI / Inherits from: [UIComponent](https://xcharts-team.github.io/docs/api#uicomponent)

表格UI组件。 用于展示行列数据。

### UITable.borderStyle

public BorderStyle borderStyle  
the border style of table.

### UITable.carouselStyle

public TableCarouselStyle carouselStyle  
the style of carousel.

### UITable.columnCount

public int columnCount  
the count of column.

### UITable.columnHeaderStyle

public TableColumnHeaderStyle columnHeaderStyle  
the default style of column header.

### UITable.columns

public List&lt;TableColumn&gt; columns  
the style of column header.

### UITable.columnStyle

public TableColumnStyle columnStyle  
the column style of table.

### UITable.data

public List&lt;TableRow&gt; data  
the data of table.

### UITable.rowCount

public int rowCount  
the count of row.

### UITable.rowHeaderStyle

public TableRowHeaderStyle rowHeaderStyle  
the style of row header.

### UITable.rowStyle

public TableRowStyle rowStyle  
the style of row.

### UITable.scrollbarStyle

public TableScrollbarStyle scrollbarStyle  
the style of scrollbar.

### UITable.separatorStyle

public TableSeparatorStyle separatorStyle  
the style of separator.

### UITable.AddColumn

public void AddColumn(string columnName, List&lt;double&gt; columnData)  
add a column data.

public void AddColumn(string columnName, List&lt;Sprite&gt; columnData)  
add a column data.

public void AddColumn(string columnName, List&lt;string&gt; columnData)  
add a column data.

public void AddColumn(string columnName, params double[] colummnData)  
add a column data.

public void AddColumn(string columnName, params Sprite[] columnData)  
add a column data.

public void AddColumn(string columnName, params string[] columnData)  
add a column data.


### UITable.AddRow

public void AddRow(List&lt;double&gt; row)  

> Since `3.15.0`

add a row data.

public void AddRow(params double[] row)  

public void AddRow(params string[] row)  

> Since `3.15.0`

add a row data.

public void AddRow(TableRow row)  

> Since `3.15.0`

add a row data.


### UITable.ClearColumns

public void ClearColumns()  
clear the table columns.

### UITable.ClearData

public void ClearData()  
clear the table data.

### UITable.GetContent

public string GetContent(int row, int column)  
get the table cell content by row and column.

### UITable.GetData

public TableCell GetData(int row, int column)  
get the table cell data by row and column.

### UITable.OnBeginDrag

public override void OnBeginDrag(PointerEventData eventData)  

### UITable.OnDrag

public override void OnDrag(PointerEventData eventData)  

### UITable.OnEndDrag

public override void OnEndDrag(PointerEventData eventData)  

### UITable.OnPointerClick

public override void OnPointerClick(PointerEventData eventData)  

### UITable.OnPointerEnter

public override void OnPointerEnter(PointerEventData eventData)  

### UITable.OnPointerExit

public override void OnPointerExit(PointerEventData eventData)  

### UITable.OnScroll

public override void OnScroll(PointerEventData eventData)  

### UITable.RefreshGraph

public override void RefreshGraph()  

### UITable.RefreshPosition

public virtual void RefreshPosition()  

### UITable.RefreshTable

public void RefreshTable()  
refresh the table.

### UITable.RemoveColumn

public void RemoveColumn(int columnIndex)  

> Since `3.15.0`

remove a column data.

### UITable.RemoveRow

public void RemoveRow(int rowIndex)  
remove a row data.

### UITable.SetColumns

public void SetColumns(List&lt;string&gt; columns)  
set the table columns.

### UITable.SetColumnsAndData

public void SetColumnsAndData(List&lt;string&gt; columns, List&lt;List&lt;string&gt;&gt; rows)  
set the table columns and data.

### UITable.SetData

public void SetData(List&lt;List&lt;string&gt;&gt; rows)  
set the table data.

### UITable.UpdateCell

public void UpdateCell(int row, int column, double value)  
update a cell data.

public void UpdateCell(int row, int column, Sprite value)  
update a cell data.


### UITable.UpdateColumn

public void UpdateColumn(int columnIndex, List&lt;double&gt; column)  
update a column data.

public void UpdateColumn(int columnIndex, List&lt;Sprite&gt; column)  
update a column data.

public void UpdateColumn(int columnIndex, params double[] column)  
update a column data.

public void UpdateColumn(int columnIndex, params Sprite[] column)  
update a column data.

public void UpdateColumn(int columnIndex, params string[] column)  
update a column data.


### UITable.UpdateRow

public void UpdateRow(int rowIndex, params string[] row)  
update a row data.


## UIText

class in XCharts.Runtime.UI / Inherits from: [UIComponent](https://xcharts-team.github.io/docs/api#uicomponent)

> Since `v3.13.0`

ui component of text. UI文本组件。

## UITimePicker

class in XCharts.Runtime.UI / Inherits from: [UIComponent](https://xcharts-team.github.io/docs/api#uicomponent)

时间选择UI组件。 输入或选择时间的控件。当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。

## UIToggle

class in XCharts.Runtime.UI / Inherits from: [UIComponent](https://xcharts-team.github.io/docs/api#uicomponent)

> Since `v3.13.0`

ui component of toggle. UI开关组件。

### UIToggle.borderStyle

public BorderStyle borderStyle  
The border style of toggle.

### UIToggle.interactable

public bool interactable  
Whether the toggle is interactable.

### UIToggle.isOn

public bool isOn  
Whether the toggle is on.

### UIToggle.labelStyle

public LabelStyle labelStyle  
The text style of toggle.

### UIToggle.markColor

public Color32 markColor  
The color of mark.

### UIToggle.markGap

public float markGap  

### UIToggle.offColor

public Color32 offColor  

### UIToggle.onColor

public Color32 onColor  
The color of toggle when it is on.

### UIToggle.onValueChanged

public Action&lt;bool&gt; onValueChanged  
The callback function when the value of toggle changed.

### UIToggle.text

public string text  
The text of toggle.

### UIToggle.OnPointerClick

public override void OnPointerClick(PointerEventData eventData)  

