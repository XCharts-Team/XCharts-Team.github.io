"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6573],{2547:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>g,frontMatter:()=>s,metadata:()=>t,toc:()=>c});var n=a(4848),l=a(8453);const s={title:"GaugeChart",sidebar_position:0,slug:"/gauge"},r="GaugeChart",t={id:"extra/gauge",title:"GaugeChart",description:"XCharts paid extension chart - Dashboard.",source:"@site/docs/extra/gauge.md",sourceDirName:"extra",slug:"/gauge",permalink:"/en/docs/gauge",draft:!1,unlisted:!1,editUrl:"https://github.com/XCharts-Team/XCharts/docs/extra/gauge.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"GaugeChart",sidebar_position:0,slug:"/gauge"},sidebar:"tutorialSidebar",previous:{title:"GanttChart",permalink:"/en/docs/gantt"},next:{title:"GraphChart",permalink:"/en/docs/graph"}},d={},c=[{value:"License",id:"license",level:2},{value:"Example",id:"example",level:2},{value:"Tutorial",id:"tutorial",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Changelog",id:"changelog",level:2},{value:"v3.12.0",id:"v3120",level:3},{value:"v3.11.0",id:"v3110",level:3},{value:"v3.10.0",id:"v3100",level:3},{value:"v3.9.0",id:"v390",level:3},{value:"v3.8.0",id:"v380",level:3},{value:"v3.6.1",id:"v361",level:3},{value:"v3.6.0",id:"v360",level:3},{value:"v3.5.0",id:"v350",level:3},{value:"v3.4.0",id:"v340",level:3},{value:"v3.3.0",id:"v330",level:3},{value:"v3.2.0",id:"v320",level:3},{value:"API",id:"api",level:2},{value:"Gauge",id:"gauge",level:3},{value:"Gauge.defaultColorBy",id:"gaugedefaultcolorby",level:4},{value:"Gauge.AddDefaultSerie",id:"gaugeadddefaultserie",level:4},{value:"Gauge.ClearComponentDirty",id:"gaugeclearcomponentdirty",level:4},{value:"Gauge.ClearVerticesDirty",id:"gaugeclearverticesdirty",level:4},{value:"Gauge.GetPointerColor",id:"gaugegetpointercolor",level:4},{value:"GaugeAnchor",id:"gaugeanchor",level:3},{value:"GaugeAnchor.GetPosition",id:"gaugeanchorgetposition",level:4},{value:"GaugeAxis",id:"gaugeaxis",level:3},{value:"GaugeAxis.axisLabel",id:"gaugeaxisaxislabel",level:4},{value:"GaugeAxis.axisLabelText",id:"gaugeaxisaxislabeltext",level:4},{value:"GaugeAxis.axisLine",id:"gaugeaxisaxisline",level:4},{value:"GaugeAxis.axisTick",id:"gaugeaxisaxistick",level:4},{value:"GaugeAxis.distance",id:"gaugeaxisdistance",level:4},{value:"GaugeAxis.overlap",id:"gaugeaxisoverlap",level:4},{value:"GaugeAxis.show",id:"gaugeaxisshow",level:4},{value:"GaugeAxis.splitLine",id:"gaugeaxissplitline",level:4},{value:"GaugeAxis.type",id:"gaugeaxistype",level:4},{value:"GaugeAxis.AddLabelObject",id:"gaugeaxisaddlabelobject",level:4},{value:"GaugeAxis.ClearLabelObject",id:"gaugeaxisclearlabelobject",level:4},{value:"GaugeAxis.GaugeAxis",id:"gaugeaxisgaugeaxis",level:4},{value:"GaugeAxis.GetLabelObject",id:"gaugeaxisgetlabelobject",level:4},{value:"GaugeAxis.GetStageColor",id:"gaugeaxisgetstagecolor",level:4},{value:"GaugeAxis.GetStageColorByAngle",id:"gaugeaxisgetstagecolorbyangle",level:4},{value:"GaugeAxis.SetLabelObjectActive",id:"gaugeaxissetlabelobjectactive",level:4},{value:"GaugeAxis.SetLabelObjectPosition",id:"gaugeaxissetlabelobjectposition",level:4},{value:"GaugeAxis.SetLabelObjectText",id:"gaugeaxissetlabelobjecttext",level:4},{value:"GaugeAxisLine",id:"gaugeaxisline",level:3},{value:"GaugeAxisLine.backgroundColor",id:"gaugeaxislinebackgroundcolor",level:4},{value:"GaugeAxisLine.stageColor",id:"gaugeaxislinestagecolor",level:4},{value:"GaugeAxisLine.stageGradient",id:"gaugeaxislinestagegradient",level:4},{value:"GaugeAxisLine.GaugeAxisLine",id:"gaugeaxislinegaugeaxisline",level:4},{value:"GaugeAxisType",id:"gaugeaxistype-1",level:3},{value:"GaugeChart",id:"gaugechart-1",level:3},{value:"GaugeChart.DefaultBarometerGaugeChart",id:"gaugechartdefaultbarometergaugechart",level:4},{value:"GaugeChart.DefaultClockGaugeChart",id:"gaugechartdefaultclockgaugechart",level:4},{value:"GaugeChart.DefaultMultipleGaugeChart",id:"gaugechartdefaultmultiplegaugechart",level:4},{value:"GaugeChart.DefaultProgressGaugeChart",id:"gaugechartdefaultprogressgaugechart",level:4},{value:"GaugeChart.DefaultRangeClockGaugeChart",id:"gaugechartdefaultrangeclockgaugechart",level:4},{value:"GaugeChart.DefaultSectionGaugeChart",id:"gaugechartdefaultsectiongaugechart",level:4},{value:"GaugeChart.UpdateClockTime",id:"gaugechartupdateclocktime",level:4},{value:"GaugeChart.UpdatePointerValue",id:"gaugechartupdatepointervalue",level:4},{value:"GaugePointer",id:"gaugepointer",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Gauge",id:"gauge-1",level:3},{value:"Gauge.gaugeAnchor",id:"gaugegaugeanchor",level:4},{value:"Gauge.gaugeAxis",id:"gaugegaugeaxis",level:4},{value:"Gauge.gaugePointer",id:"gaugegaugepointer",level:4},{value:"Gauge.loop",id:"gaugeloop",level:4},{value:"Gauge.rangeDataMode",id:"gaugerangedatamode",level:4},{value:"GaugeAnchor",id:"gaugeanchor-1",level:3},{value:"GaugeAnchor.gap",id:"gaugeanchorgap",level:4},{value:"GaugeAnchor.image",id:"gaugeanchorimage",level:4},{value:"GaugeAnchor.imageType",id:"gaugeanchorimagetype",level:4},{value:"GaugeAnchor.itemStyle",id:"gaugeanchoritemstyle",level:4},{value:"GaugeAnchor.offsetCenter",id:"gaugeanchoroffsetcenter",level:4},{value:"GaugeAnchor.show",id:"gaugeanchorshow",level:4},{value:"GaugeAnchor.showAbove",id:"gaugeanchorshowabove",level:4},{value:"GaugeAnchor.size",id:"gaugeanchorsize",level:4},{value:"GaugeAnchor.type",id:"gaugeanchortype",level:4},{value:"GaugeAxis",id:"gaugeaxis-1",level:3},{value:"GaugeAxis.axisLabel",id:"gaugeaxisaxislabel-1",level:4},{value:"GaugeAxis.axisLabelText",id:"gaugeaxisaxislabeltext-1",level:4},{value:"GaugeAxis.axisLine",id:"gaugeaxisaxisline-1",level:4},{value:"GaugeAxis.axisTick",id:"gaugeaxisaxistick-1",level:4},{value:"GaugeAxis.distance",id:"gaugeaxisdistance-1",level:4},{value:"GaugeAxis.overlap",id:"gaugeaxisoverlap-1",level:4},{value:"GaugeAxis.show",id:"gaugeaxisshow-1",level:4},{value:"GaugeAxis.splitLine",id:"gaugeaxissplitline-1",level:4},{value:"GaugeAxis.type",id:"gaugeaxistype-2",level:4},{value:"GaugeAxisLine",id:"gaugeaxisline-1",level:3},{value:"GaugeAxisLine.backgroundColor",id:"gaugeaxislinebackgroundcolor-1",level:4},{value:"GaugeAxisLine.stageColor",id:"gaugeaxislinestagecolor-1",level:4},{value:"GaugeAxisLine.stageGradient",id:"gaugeaxislinestagegradient-1",level:4},{value:"GaugePointer",id:"gaugepointer-1",level:3},{value:"GaugePointer.autoColor",id:"gaugepointerautocolor",level:4},{value:"GaugePointer.backExtraLength",id:"gaugepointerbackextralength",level:4},{value:"GaugePointer.backLength",id:"gaugepointerbacklength",level:4},{value:"GaugePointer.bottomLeftLength",id:"gaugepointerbottomleftlength",level:4},{value:"GaugePointer.bottomRightLength",id:"gaugepointerbottomrightlength",level:4},{value:"GaugePointer.color",id:"gaugepointercolor",level:4},{value:"GaugePointer.cornerRadius",id:"gaugepointercornerradius",level:4},{value:"GaugePointer.distance",id:"gaugepointerdistance",level:4},{value:"GaugePointer.length",id:"gaugepointerlength",level:4},{value:"GaugePointer.roundCap",id:"gaugepointerroundcap",level:4},{value:"GaugePointer.show",id:"gaugepointershow",level:4},{value:"GaugePointer.toColor",id:"gaugepointertocolor",level:4},{value:"GaugePointer.topLeftLength",id:"gaugepointertopleftlength",level:4},{value:"GaugePointer.topRightLength",id:"gaugepointertoprightlength",level:4},{value:"GaugePointer.value",id:"gaugepointervalue",level:4}];function o(e){const i={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"gaugechart",children:"GaugeChart"})}),"\n",(0,n.jsx)(i.p,{children:"XCharts paid extension chart - Dashboard."}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("img",{src:"/img/extra/Gauge01.png",alt:"Gauge01"})}),(0,n.jsx)("td",{children:(0,n.jsx)("img",{src:"/img/extra/Gauge02.png",alt:"Gauge02"})}),(0,n.jsx)("td",{children:(0,n.jsx)("img",{src:"/img/extra/Gauge03.png",alt:"Gauge03"})}),(0,n.jsx)("td",{children:(0,n.jsx)("img",{src:"/img/extra/Gauge04.png",alt:"Gauge04"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("img",{src:"/img/extra/Gauge05.png",alt:"Gauge05"})}),(0,n.jsx)("td",{children:(0,n.jsx)("img",{src:"/img/extra/Gauge06.png",alt:"Gauge06"})}),(0,n.jsx)("td",{children:(0,n.jsx)("img",{src:"/img/extra/Gauge07.png",alt:"Gauge07"})}),(0,n.jsx)("td",{children:(0,n.jsx)("img",{src:"/img/extra/Gauge08.png",alt:"Gauge08"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("img",{src:"/img/extra/Gauge09.png",alt:"Gauge09"})}),(0,n.jsx)("td",{children:(0,n.jsx)("img",{src:"/img/extra/Gauge10.png",alt:"Gauge10"})}),(0,n.jsx)("td",{children:(0,n.jsx)("img",{src:"/img/extra/Gauge11.png",alt:"Gauge11"})}),(0,n.jsx)("td",{children:(0,n.jsx)("img",{src:"/img/extra/Gauge12.png",alt:"Gauge12"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("img",{src:"/img/extra/Gauge13.png",alt:"Gauge13"})}),(0,n.jsx)("td",{children:(0,n.jsx)("img",{src:"/img/extra/Gauge14.png",alt:"Gauge14"})})]})]}),"\n",(0,n.jsx)(i.h2,{id:"license",children:"License"}),"\n",(0,n.jsx)(i.p,{children:"Extension charts require a paid purchase to obtain a usage license."}),"\n",(0,n.jsx)(i.h2,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(i.p,{children:["Demo repository: ",(0,n.jsx)(i.a,{href:"https://github.com/XCharts-Team/XCharts-GaugeChart-Demo",children:"XCharts-GaugeChart-Demo"})]}),"\n",(0,n.jsx)(i.h2,{id:"tutorial",children:"Tutorial"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://github.com/XCharts-Team/XCharts-Demo",children:"How to import extension charts into a demo project or your own project"})}),"\n",(0,n.jsx)(i.h2,{id:"documentation",children:"Documentation"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"#api",children:"API"}),(0,n.jsx)(i.br,{}),"\n",(0,n.jsx)(i.a,{href:"#Configuration",children:"Configuration Manual"})]}),"\n",(0,n.jsx)(i.h2,{id:"changelog",children:"Changelog"}),"\n",(0,n.jsx)(i.h3,{id:"v3120",children:"v3.12.0"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["(2024.09.30) Released version ",(0,n.jsx)(i.code,{children:"v3.12.0"})]}),"\n",(0,n.jsx)(i.li,{children:"(2024.09.30) Updated documentation"}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"v3110",children:"v3.11.0"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["(2024.06.16) Released version ",(0,n.jsx)(i.code,{children:"v3.11.0"})]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"v3100",children:"v3.10.0"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["(2024.01.21) Added more shortcuts and APIs for creating default ",(0,n.jsx)(i.code,{children:"Gauge"})," charts"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"v390",children:"v3.9.0"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["(2023.12.01) Released version ",(0,n.jsx)(i.code,{children:"v3.9.0"})]}),"\n",(0,n.jsx)(i.li,{children:"(2023.12.01) Updated documentation"}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"v380",children:"v3.8.0"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["(2023.07.31) Synchronized with ",(0,n.jsx)(i.code,{children:"XCharts v3.8.0"})]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"v361",children:"v3.6.1"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["(2023.06.08) Released version ",(0,n.jsx)(i.code,{children:"v3.6.1"})]}),"\n",(0,n.jsx)(i.li,{children:"(2023.06.08) Updated documentation"}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"v360",children:"v3.6.0"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["(2023.04.01) Released version ",(0,n.jsx)(i.code,{children:"v3.6.0"})]}),"\n",(0,n.jsxs)(i.li,{children:["(2023.03.17) Added ",(0,n.jsx)(i.code,{children:"rangeDataMode"})," for ",(0,n.jsx)(i.code,{children:"Gauge"})," to set whether to use range data mode"]}),"\n",(0,n.jsxs)(i.li,{children:["(2023.03.17) Added ",(0,n.jsx)(i.code,{children:"loop"})," for ",(0,n.jsx)(i.code,{children:"Gauge"})," to set whether data loops, used for clock Gantt charts"]}),"\n",(0,n.jsxs)(i.li,{children:["(2023.03.17) Added ",(0,n.jsx)(i.code,{children:"value"})," for ",(0,n.jsx)(i.code,{children:"GaugePointer"})," to set the pointer position"]}),"\n",(0,n.jsxs)(i.li,{children:["(2023.03.17) Added support for ",(0,n.jsx)(i.code,{children:"Clock"})," clock gauge charts"]}),"\n",(0,n.jsxs)(i.li,{children:["(2023.03.13) Added ",(0,n.jsx)(i.code,{children:"nowTime"})," for ",(0,n.jsx)(i.code,{children:"GaugePointer"})," to set the pointer to the current time"]}),"\n",(0,n.jsxs)(i.li,{children:["(2023.03.13) Added ",(0,n.jsx)(i.code,{children:"value"})," for ",(0,n.jsx)(i.code,{children:"GaugePointer"})," to set the current pointer position"]}),"\n",(0,n.jsxs)(i.li,{children:["(2023.03.13) Added support for ",(0,n.jsx)(i.code,{children:"Clock"})," type Gantt charts"]}),"\n",(0,n.jsxs)(i.li,{children:["(2023.02.14) Synchronized with ",(0,n.jsx)(i.code,{children:"XCharts v3.6.0"})]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"v350",children:"v3.5.0"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["(2022.12.01) Released version ",(0,n.jsx)(i.code,{children:"v3.5.0"})]}),"\n",(0,n.jsxs)(i.li,{children:["(2022.11.27) Adjusted ",(0,n.jsx)(i.code,{children:"Documentation"})," document structure"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"v340",children:"v3.4.0"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["(2022.10.05) Added support for ",(0,n.jsx)(i.code,{children:"stageGradient"})," in ",(0,n.jsx)(i.code,{children:"GaugeAxisLine"})," to set stage gradient color transitions"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"v330",children:"v3.3.0"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["(2022.09.28) Released version ",(0,n.jsx)(i.code,{children:"v3.3.0"})]}),"\n",(0,n.jsxs)(i.li,{children:["(2022.08.26) Fixed the issue where ",(0,n.jsx)(i.code,{children:"Pointer"})," does not display in normal mode"]}),"\n",(0,n.jsxs)(i.li,{children:["(2022.08.25) Added support for ",(0,n.jsx)(i.code,{children:"label"})," color to change with value"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"v320",children:"v3.2.0"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["(2022.08.22) Released version ",(0,n.jsx)(i.code,{children:"v3.2.0"})]}),"\n",(0,n.jsxs)(i.li,{children:["(2022.08.19) Synchronized with ",(0,n.jsx)(i.code,{children:"XCharts v3.2.0"})]}),"\n",(0,n.jsx)(i.li,{children:"(2022.08.15) Supported gradients"}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"api",children:"API"}),"\n",(0,n.jsx)(i.h3,{id:"gauge",children:"Gauge"}),"\n",(0,n.jsxs)(i.p,{children:["class in XCharts.Runtime.Gauges / Inherits from: ",(0,n.jsx)(i.a,{href:"https://xcharts-team.github.io/docs/api#serie",children:"Serie"})]}),"\n",(0,n.jsx)(i.p,{children:"serie of gauge chart."}),"\n",(0,n.jsx)(i.h4,{id:"gaugedefaultcolorby",children:"Gauge.defaultColorBy"}),"\n",(0,n.jsx)(i.p,{children:"public override SerieColorBy defaultColorBy"}),"\n",(0,n.jsx)(i.h4,{id:"gaugeadddefaultserie",children:"Gauge.AddDefaultSerie"}),"\n",(0,n.jsx)(i.p,{children:"public static void AddDefaultSerie(BaseChart chart, string serieName)"}),"\n",(0,n.jsx)(i.h4,{id:"gaugeclearcomponentdirty",children:"Gauge.ClearComponentDirty"}),"\n",(0,n.jsx)(i.p,{children:"public override void ClearComponentDirty()"}),"\n",(0,n.jsx)(i.h4,{id:"gaugeclearverticesdirty",children:"Gauge.ClearVerticesDirty"}),"\n",(0,n.jsx)(i.p,{children:"public override void ClearVerticesDirty()"}),"\n",(0,n.jsx)(i.h4,{id:"gaugegetpointercolor",children:"Gauge.GetPointerColor"}),"\n",(0,n.jsx)(i.p,{children:"public Color32 GetPointerColor(ThemeStyle theme, int colorIndex, float angle, Color32 dataColor)"}),"\n",(0,n.jsx)(i.h3,{id:"gaugeanchor",children:"GaugeAnchor"}),"\n",(0,n.jsxs)(i.p,{children:["class in XCharts.Runtime.Gauges / Inherits from: ",(0,n.jsx)(i.a,{href:"https://xcharts-team.github.io/docs/api#childcomponent",children:"ChildComponent"})]}),"\n",(0,n.jsx)(i.h4,{id:"gaugeanchorgetposition",children:"GaugeAnchor.GetPosition"}),"\n",(0,n.jsx)(i.p,{children:"public Vector3 GetPosition(Vector3 center, float radius)"}),"\n",(0,n.jsx)(i.h3,{id:"gaugeaxis",children:"GaugeAxis"}),"\n",(0,n.jsxs)(i.p,{children:["class in XCharts.Runtime.Gauges / Inherits from: ",(0,n.jsx)(i.a,{href:"https://xcharts-team.github.io/docs/api#childcomponent",children:"ChildComponent"})]}),"\n",(0,n.jsx)(i.p,{children:"Settings related to gauge axis line."}),"\n",(0,n.jsx)(i.h4,{id:"gaugeaxisaxislabel",children:"GaugeAxis.axisLabel"}),"\n",(0,n.jsxs)(i.p,{children:["public AxisLabel axisLabel",(0,n.jsx)(i.br,{}),"\n","axis label style."]}),"\n",(0,n.jsx)(i.h4,{id:"gaugeaxisaxislabeltext",children:"GaugeAxis.axisLabelText"}),"\n",(0,n.jsxs)(i.p,{children:["public List<string> axisLabelText",(0,n.jsx)(i.br,{}),"\n","Coordinate axis scale label custom content. When the content is empty, ",(0,n.jsx)(i.code,{children:"axisLabel"})," automatically displays the content according to the scale; otherwise, the content is taken from the list definition."]}),"\n",(0,n.jsx)(i.h4,{id:"gaugeaxisaxisline",children:"GaugeAxis.axisLine"}),"\n",(0,n.jsxs)(i.p,{children:["public GaugeAxisLine axisLine",(0,n.jsx)(i.br,{}),"\n","axis line style."]}),"\n",(0,n.jsx)(i.h4,{id:"gaugeaxisaxistick",children:"GaugeAxis.axisTick"}),"\n",(0,n.jsxs)(i.p,{children:["public AxisTick axisTick",(0,n.jsx)(i.br,{}),"\n","axis tick style."]}),"\n",(0,n.jsx)(i.h4,{id:"gaugeaxisdistance",children:"GaugeAxis.distance"}),"\n",(0,n.jsx)(i.p,{children:"public float distance"}),"\n",(0,n.jsx)(i.h4,{id:"gaugeaxisoverlap",children:"GaugeAxis.overlap"}),"\n",(0,n.jsx)(i.p,{children:"public bool overlap"}),"\n",(0,n.jsx)(i.h4,{id:"gaugeaxisshow",children:"GaugeAxis.show"}),"\n",(0,n.jsx)(i.p,{children:"public bool show"}),"\n",(0,n.jsx)(i.h4,{id:"gaugeaxissplitline",children:"GaugeAxis.splitLine"}),"\n",(0,n.jsxs)(i.p,{children:["public AxisSplitLine splitLine",(0,n.jsx)(i.br,{}),"\n","slit line style."]}),"\n",(0,n.jsx)(i.h4,{id:"gaugeaxistype",children:"GaugeAxis.type"}),"\n",(0,n.jsx)(i.p,{children:"public GaugeAxisType type"}),"\n",(0,n.jsx)(i.h4,{id:"gaugeaxisaddlabelobject",children:"GaugeAxis.AddLabelObject"}),"\n",(0,n.jsx)(i.p,{children:"public void AddLabelObject(ChartLabel label)"}),"\n",(0,n.jsx)(i.h4,{id:"gaugeaxisclearlabelobject",children:"GaugeAxis.ClearLabelObject"}),"\n",(0,n.jsx)(i.p,{children:"public void ClearLabelObject()"}),"\n",(0,n.jsx)(i.h4,{id:"gaugeaxisgaugeaxis",children:"GaugeAxis.GaugeAxis"}),"\n",(0,n.jsx)(i.p,{children:"public GaugeAxis()"}),"\n",(0,n.jsx)(i.h4,{id:"gaugeaxisgetlabelobject",children:"GaugeAxis.GetLabelObject"}),"\n",(0,n.jsx)(i.p,{children:"public ChartLabel GetLabelObject(int index)"}),"\n",(0,n.jsx)(i.h4,{id:"gaugeaxisgetstagecolor",children:"GaugeAxis.GetStageColor"}),"\n",(0,n.jsx)(i.p,{children:"public Color32 GetStageColor(float rate)"}),"\n",(0,n.jsx)(i.h4,{id:"gaugeaxisgetstagecolorbyangle",children:"GaugeAxis.GetStageColorByAngle"}),"\n",(0,n.jsx)(i.p,{children:"public Color32 GetStageColorByAngle(float angle)"}),"\n",(0,n.jsx)(i.h4,{id:"gaugeaxissetlabelobjectactive",children:"GaugeAxis.SetLabelObjectActive"}),"\n",(0,n.jsx)(i.p,{children:"public void SetLabelObjectActive(bool flag)"}),"\n",(0,n.jsx)(i.h4,{id:"gaugeaxissetlabelobjectposition",children:"GaugeAxis.SetLabelObjectPosition"}),"\n",(0,n.jsx)(i.p,{children:"public void SetLabelObjectPosition(int index, Vector3 pos)"}),"\n",(0,n.jsx)(i.h4,{id:"gaugeaxissetlabelobjecttext",children:"GaugeAxis.SetLabelObjectText"}),"\n",(0,n.jsx)(i.p,{children:"public void SetLabelObjectText(int index, string text)"}),"\n",(0,n.jsx)(i.h3,{id:"gaugeaxisline",children:"GaugeAxisLine"}),"\n",(0,n.jsxs)(i.p,{children:["class in XCharts.Runtime.Gauges / Inherits from: ",(0,n.jsx)(i.a,{href:"https://xcharts-team.github.io/docs/api#baseline",children:"BaseLine"})]}),"\n",(0,n.jsx)(i.h4,{id:"gaugeaxislinebackgroundcolor",children:"GaugeAxisLine.backgroundColor"}),"\n",(0,n.jsxs)(i.p,{children:["public Color32 backgroundColor",(0,n.jsx)(i.br,{}),"\n","The background color of gauge axis."]}),"\n",(0,n.jsx)(i.h4,{id:"gaugeaxislinestagecolor",children:"GaugeAxisLine.stageColor"}),"\n",(0,n.jsxs)(i.p,{children:["public List<StageColor> stageColor",(0,n.jsx)(i.br,{}),"\n","The colors of stage."]}),"\n",(0,n.jsx)(i.h4,{id:"gaugeaxislinestagegradient",children:"GaugeAxisLine.stageGradient"}),"\n",(0,n.jsxs)(i.p,{children:["public bool stageGradient",(0,n.jsx)(i.br,{}),"\n","Whether to use gradients for transitions."]}),"\n",(0,n.jsx)(i.h4,{id:"gaugeaxislinegaugeaxisline",children:"GaugeAxisLine.GaugeAxisLine"}),"\n",(0,n.jsx)(i.p,{children:"public GaugeAxisLine(bool show) : base(show)"}),"\n",(0,n.jsx)(i.h3,{id:"gaugeaxistype-1",children:"GaugeAxisType"}),"\n",(0,n.jsx)(i.p,{children:"class in XCharts.Runtime.Gauges"}),"\n",(0,n.jsx)(i.p,{children:"\u4eea\u8868\u76d8\u7c7b\u578b"}),"\n",(0,n.jsx)(i.p,{children:"Options:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"None"}),": \u4eea\u8868\u76d8\u7c7b\u578b"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Section"}),": \u5206\u6bb5"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Progress"}),": \u8fdb\u5ea6"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"gaugechart-1",children:"GaugeChart"}),"\n",(0,n.jsxs)(i.p,{children:["class in XCharts.Runtime.Gauges / Inherits from: ",(0,n.jsx)(i.a,{href:"https://xcharts-team.github.io/docs/api#basechart",children:"BaseChart"})]}),"\n",(0,n.jsx)(i.p,{children:"Gauge chart."}),"\n",(0,n.jsx)(i.h4,{id:"gaugechartdefaultbarometergaugechart",children:"GaugeChart.DefaultBarometerGaugeChart"}),"\n",(0,n.jsxs)(i.p,{children:["public void DefaultBarometerGaugeChart()",(0,n.jsx)(i.br,{}),"\n","generate barometer gauge chart."]}),"\n",(0,n.jsx)(i.h4,{id:"gaugechartdefaultclockgaugechart",children:"GaugeChart.DefaultClockGaugeChart"}),"\n",(0,n.jsxs)(i.p,{children:["public void DefaultClockGaugeChart()",(0,n.jsx)(i.br,{}),"\n","generate clock gauge chart."]}),"\n",(0,n.jsx)(i.h4,{id:"gaugechartdefaultmultiplegaugechart",children:"GaugeChart.DefaultMultipleGaugeChart"}),"\n",(0,n.jsxs)(i.p,{children:["public void DefaultMultipleGaugeChart()",(0,n.jsx)(i.br,{}),"\n","generate multiple gauge chart."]}),"\n",(0,n.jsx)(i.h4,{id:"gaugechartdefaultprogressgaugechart",children:"GaugeChart.DefaultProgressGaugeChart"}),"\n",(0,n.jsxs)(i.p,{children:["public void DefaultProgressGaugeChart()",(0,n.jsx)(i.br,{}),"\n","generate progress gauge chart."]}),"\n",(0,n.jsx)(i.h4,{id:"gaugechartdefaultrangeclockgaugechart",children:"GaugeChart.DefaultRangeClockGaugeChart"}),"\n",(0,n.jsx)(i.p,{children:"public void DefaultRangeClockGaugeChart()"}),"\n",(0,n.jsx)(i.h4,{id:"gaugechartdefaultsectiongaugechart",children:"GaugeChart.DefaultSectionGaugeChart"}),"\n",(0,n.jsxs)(i.p,{children:["public void DefaultSectionGaugeChart()",(0,n.jsx)(i.br,{}),"\n","generate section gauge chart."]}),"\n",(0,n.jsx)(i.h4,{id:"gaugechartupdateclocktime",children:"GaugeChart.UpdateClockTime"}),"\n",(0,n.jsxs)(i.p,{children:["public void UpdateClockTime(double hour, double minute, double second)",(0,n.jsx)(i.br,{}),"\n","update clock time."]}),"\n",(0,n.jsx)(i.h4,{id:"gaugechartupdatepointervalue",children:"GaugeChart.UpdatePointerValue"}),"\n",(0,n.jsxs)(i.p,{children:["public void UpdatePointerValue(double value)",(0,n.jsx)(i.br,{}),"\n","update pointer value."]}),"\n",(0,n.jsx)(i.h3,{id:"gaugepointer",children:"GaugePointer"}),"\n",(0,n.jsxs)(i.p,{children:["class in XCharts.Runtime.Gauges / Inherits from: ",(0,n.jsx)(i.a,{href:"https://xcharts-team.github.io/docs/api#childcomponent",children:"ChildComponent"})]}),"\n",(0,n.jsx)(i.p,{children:"Settings related to gauge pointer."}),"\n",(0,n.jsx)(i.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsx)(i.h3,{id:"gauge-1",children:"Gauge"}),"\n",(0,n.jsxs)(i.p,{children:["class in XCharts.Runtime.Gauges / Inherits from: ",(0,n.jsx)(i.a,{href:"https://xcharts-team.github.io/docs/configuration#serie",children:"Serie"})]}),"\n",(0,n.jsx)(i.p,{children:"serie of gauge chart."}),"\n",(0,n.jsx)(i.h4,{id:"gaugegaugeanchor",children:"Gauge.gaugeAnchor"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"#gaugeanchor",children:"GaugeAnchor"})}),"\n",(0,n.jsx)(i.p,{children:"\u4eea\u8868\u76d8\u6307\u9488\u56fa\u5b9a\u70b9\u3002"}),"\n",(0,n.jsx)(i.h4,{id:"gaugegaugeaxis",children:"Gauge.gaugeAxis"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"#gaugeaxis",children:"GaugeAxis"})}),"\n",(0,n.jsx)(i.p,{children:"\u4eea\u8868\u76d8\u8f74\u7ebf\u3002"}),"\n",(0,n.jsx)(i.h4,{id:"gaugegaugepointer",children:"Gauge.gaugePointer"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"#gaugepointer",children:"GaugePointer"})}),"\n",(0,n.jsx)(i.p,{children:"\u4eea\u8868\u76d8\u6307\u9488\u3002"}),"\n",(0,n.jsx)(i.h4,{id:"gaugeloop",children:"Gauge.loop"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"bool"})," ",(0,n.jsx)(i.code,{children:"false"})," ",(0,n.jsx)(i.code,{children:"v3.6.0"})]}),"\n",(0,n.jsx)(i.p,{children:"the value is loop."}),"\n",(0,n.jsx)(i.h4,{id:"gaugerangedatamode",children:"Gauge.rangeDataMode"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"bool"})," ",(0,n.jsx)(i.code,{children:"false"})," ",(0,n.jsx)(i.code,{children:"v3.6.0"})]}),"\n",(0,n.jsx)(i.p,{children:"Whether the value is range data. When this mode is enabled, each value in data is an array, the first value of the array is the starting value, and the second value is the ending value. The pointer has only one, and the data is drawn as a ring."}),"\n",(0,n.jsx)(i.h3,{id:"gaugeanchor-1",children:"GaugeAnchor"}),"\n",(0,n.jsxs)(i.p,{children:["class in XCharts.Runtime.Gauges / Inherits from: ",(0,n.jsx)(i.a,{href:"https://xcharts-team.github.io/docs/configuration#childcomponent",children:"ChildComponent"})]}),"\n",(0,n.jsx)(i.h4,{id:"gaugeanchorgap",children:"GaugeAnchor.gap"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"float"})," ",(0,n.jsx)(i.code,{children:"0"})]}),"\n",(0,n.jsx)(i.p,{children:"the gap of symbol and line segment."}),"\n",(0,n.jsx)(i.h4,{id:"gaugeanchorimage",children:"GaugeAnchor.image"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"Sprite"})}),"\n",(0,n.jsx)(i.p,{children:"\u81ea\u5b9a\u4e49\u7684\u6807\u8bb0\u56fe\u5f62\u3002"}),"\n",(0,n.jsx)(i.h4,{id:"gaugeanchorimagetype",children:"GaugeAnchor.imageType"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"Image.Type"})}),"\n",(0,n.jsx)(i.h4,{id:"gaugeanchoritemstyle",children:"GaugeAnchor.itemStyle"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"ItemStyle"})}),"\n",(0,n.jsx)(i.p,{children:"The style of data item."}),"\n",(0,n.jsx)(i.h4,{id:"gaugeanchoroffsetcenter",children:"GaugeAnchor.offsetCenter"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"Vector2"})," ",(0,n.jsx)(i.code,{children:"Vector2(0, 0)"})]}),"\n",(0,n.jsx)(i.p,{children:"The offset position relative to the center."}),"\n",(0,n.jsx)(i.h4,{id:"gaugeanchorshow",children:"GaugeAnchor.show"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"bool"})," ",(0,n.jsx)(i.code,{children:"true"})]}),"\n",(0,n.jsx)(i.p,{children:"Whether to display the anchor."}),"\n",(0,n.jsx)(i.h4,{id:"gaugeanchorshowabove",children:"GaugeAnchor.showAbove"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"bool"})," ",(0,n.jsx)(i.code,{children:"true"})]}),"\n",(0,n.jsx)(i.p,{children:"\u56fa\u5b9a\u70b9\u662f\u5426\u663e\u793a\u5728\u6307\u9488\u4e0a\u9762\u3002"}),"\n",(0,n.jsx)(i.h4,{id:"gaugeanchorsize",children:"GaugeAnchor.size"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"float"})," ",(0,n.jsx)(i.code,{children:"6"})]}),"\n",(0,n.jsx)(i.p,{children:"the size of symbol."}),"\n",(0,n.jsx)(i.h4,{id:"gaugeanchortype",children:"GaugeAnchor.type"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"SymbolType"})}),"\n",(0,n.jsx)(i.p,{children:"the type of symbol."}),"\n",(0,n.jsx)(i.h3,{id:"gaugeaxis-1",children:"GaugeAxis"}),"\n",(0,n.jsxs)(i.p,{children:["class in XCharts.Runtime.Gauges / Inherits from: ",(0,n.jsx)(i.a,{href:"https://xcharts-team.github.io/docs/configuration#childcomponent",children:"ChildComponent"})]}),"\n",(0,n.jsx)(i.p,{children:"Settings related to gauge axis line."}),"\n",(0,n.jsx)(i.h4,{id:"gaugeaxisaxislabel-1",children:"GaugeAxis.axisLabel"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"AxisLabel"})}),"\n",(0,n.jsx)(i.p,{children:"axis label style."}),"\n",(0,n.jsx)(i.h4,{id:"gaugeaxisaxislabeltext-1",children:"GaugeAxis.axisLabelText"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"List<string>"})}),"\n",(0,n.jsxs)(i.p,{children:["Coordinate axis scale label custom content. When the content is empty, ",(0,n.jsx)(i.code,{children:"axisLabel"})," automatically displays the content according to the scale; otherwise, the content is taken from the list definition."]}),"\n",(0,n.jsx)(i.h4,{id:"gaugeaxisaxisline-1",children:"GaugeAxis.axisLine"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"#gaugeaxisline",children:"GaugeAxisLine"})}),"\n",(0,n.jsx)(i.p,{children:"axis line style."}),"\n",(0,n.jsx)(i.h4,{id:"gaugeaxisaxistick-1",children:"GaugeAxis.axisTick"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"AxisTick"})}),"\n",(0,n.jsx)(i.p,{children:"axis tick style."}),"\n",(0,n.jsx)(i.h4,{id:"gaugeaxisdistance-1",children:"GaugeAxis.distance"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"float"})}),"\n",(0,n.jsx)(i.h4,{id:"gaugeaxisoverlap-1",children:"GaugeAxis.overlap"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"bool"})," ",(0,n.jsx)(i.code,{children:"true"})]}),"\n",(0,n.jsx)(i.h4,{id:"gaugeaxisshow-1",children:"GaugeAxis.show"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"bool"})," ",(0,n.jsx)(i.code,{children:"true"})]}),"\n",(0,n.jsx)(i.h4,{id:"gaugeaxissplitline-1",children:"GaugeAxis.splitLine"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"AxisSplitLine"})}),"\n",(0,n.jsx)(i.p,{children:"slit line style."}),"\n",(0,n.jsx)(i.h4,{id:"gaugeaxistype-2",children:"GaugeAxis.type"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"#gaugeaxistype",children:"GaugeAxisType"})}),"\n",(0,n.jsx)(i.p,{children:"Options:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"None"}),": \u4eea\u8868\u76d8\u7c7b\u578b"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Section"}),": \u5206\u6bb5"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"Progress"}),": \u8fdb\u5ea6"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"gaugeaxisline-1",children:"GaugeAxisLine"}),"\n",(0,n.jsxs)(i.p,{children:["class in XCharts.Runtime.Gauges / Inherits from: ",(0,n.jsx)(i.a,{href:"https://xcharts-team.github.io/docs/configuration#baseline",children:"BaseLine"})]}),"\n",(0,n.jsx)(i.h4,{id:"gaugeaxislinebackgroundcolor-1",children:"GaugeAxisLine.backgroundColor"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"Color32"})," ",(0,n.jsx)(i.code,{children:"Color32(230, 235, 248, 255)"})]}),"\n",(0,n.jsx)(i.p,{children:"The background color of gauge axis."}),"\n",(0,n.jsx)(i.h4,{id:"gaugeaxislinestagecolor-1",children:"GaugeAxisLine.stageColor"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"List<StageColor>"})}),"\n",(0,n.jsx)(i.p,{children:"The colors of stage."}),"\n",(0,n.jsx)(i.h4,{id:"gaugeaxislinestagegradient-1",children:"GaugeAxisLine.stageGradient"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"bool"})," ",(0,n.jsx)(i.code,{children:"v3.4.0"})]}),"\n",(0,n.jsx)(i.p,{children:"Whether to use gradients for transitions."}),"\n",(0,n.jsx)(i.h3,{id:"gaugepointer-1",children:"GaugePointer"}),"\n",(0,n.jsxs)(i.p,{children:["class in XCharts.Runtime.Gauges / Inherits from: ",(0,n.jsx)(i.a,{href:"https://xcharts-team.github.io/docs/configuration#childcomponent",children:"ChildComponent"})]}),"\n",(0,n.jsx)(i.p,{children:"Settings related to gauge pointer."}),"\n",(0,n.jsx)(i.h4,{id:"gaugepointerautocolor",children:"GaugePointer.autoColor"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"bool"})," ",(0,n.jsx)(i.code,{children:"true"})]}),"\n",(0,n.jsx)(i.h4,{id:"gaugepointerbackextralength",children:"GaugePointer.backExtraLength"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"float"})," ",(0,n.jsx)(i.code,{children:"0.05f"})]}),"\n",(0,n.jsx)(i.p,{children:"Pointer back extra length. It can be an absolute value, or it can be a percentage relative to the radius (0-1)."}),"\n",(0,n.jsx)(i.h4,{id:"gaugepointerbacklength",children:"GaugePointer.backLength"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"float"})," ",(0,n.jsx)(i.code,{children:"0.05f"})]}),"\n",(0,n.jsx)(i.p,{children:"Pointer back length. It can be an absolute value, or it can be a percentage relative to the radius (0-1)."}),"\n",(0,n.jsx)(i.h4,{id:"gaugepointerbottomleftlength",children:"GaugePointer.bottomLeftLength"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"float"})," ",(0,n.jsx)(i.code,{children:"0.025f"})]}),"\n",(0,n.jsx)(i.p,{children:"Pointer length. It can be an absolute value, or it can be a percentage relative to the radius (0-1)."}),"\n",(0,n.jsx)(i.h4,{id:"gaugepointerbottomrightlength",children:"GaugePointer.bottomRightLength"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"float"})," ",(0,n.jsx)(i.code,{children:"0.025f"})]}),"\n",(0,n.jsx)(i.p,{children:"Pointer length. It can be an absolute value, or it can be a percentage relative to the radius (0-1)."}),"\n",(0,n.jsx)(i.h4,{id:"gaugepointercolor",children:"GaugePointer.color"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"Color32"})}),"\n",(0,n.jsx)(i.h4,{id:"gaugepointercornerradius",children:"GaugePointer.cornerRadius"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"float[]"})}),"\n",(0,n.jsx)(i.p,{children:"The radius of rounded corner. Its unit is px. Use array to respectively specify the 4 corner radiuses((clockwise upper left, upper right, bottom right and bottom left))."}),"\n",(0,n.jsx)(i.h4,{id:"gaugepointerdistance",children:"GaugePointer.distance"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"float"})}),"\n",(0,n.jsx)(i.h4,{id:"gaugepointerlength",children:"GaugePointer.length"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"float"})," ",(0,n.jsx)(i.code,{children:"0.6f"})]}),"\n",(0,n.jsx)(i.p,{children:"Pointer length. It can be an absolute value, or it can be a percentage relative to the radius (0-1)."}),"\n",(0,n.jsx)(i.h4,{id:"gaugepointerroundcap",children:"GaugePointer.roundCap"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"bool"})}),"\n",(0,n.jsx)(i.h4,{id:"gaugepointershow",children:"GaugePointer.show"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"bool"})," ",(0,n.jsx)(i.code,{children:"true"})]}),"\n",(0,n.jsx)(i.p,{children:"Whether to display a pointer."}),"\n",(0,n.jsx)(i.h4,{id:"gaugepointertocolor",children:"GaugePointer.toColor"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"Color32"})}),"\n",(0,n.jsx)(i.h4,{id:"gaugepointertopleftlength",children:"GaugePointer.topLeftLength"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"float"})," ",(0,n.jsx)(i.code,{children:"0f"})]}),"\n",(0,n.jsx)(i.p,{children:"Pointer length. It can be an absolute value, or it can be a percentage relative to the radius (0-1)."}),"\n",(0,n.jsx)(i.h4,{id:"gaugepointertoprightlength",children:"GaugePointer.topRightLength"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"float"})," ",(0,n.jsx)(i.code,{children:"0f"})]}),"\n",(0,n.jsx)(i.p,{children:"Pointer length. It can be an absolute value, or it can be a percentage relative to the radius (0-1)."}),"\n",(0,n.jsx)(i.h4,{id:"gaugepointervalue",children:"GaugePointer.value"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"double"})," ",(0,n.jsx)(i.code,{children:"v3.6.0"})]}),"\n",(0,n.jsx)(i.p,{children:"The value of pointer. When it is a clock gauge, the value can be specified to control the position of the pointer."})]})}function g(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},8453:(e,i,a)=>{a.d(i,{R:()=>r,x:()=>t});var n=a(6540);const l={},s=n.createContext(l);function r(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);