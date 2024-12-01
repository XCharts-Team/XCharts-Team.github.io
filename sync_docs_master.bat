:: sync_docs_master.bat

@echo on

set XCHARTS_WEBSITE=%~dp0
set XCHARTS_MAIN=%XCHARTS_WEBSITE%..\XCharts\Assets\XCharts
set XCHARTS_DEMO=%XCHARTS_WEBSITE%..\xcharts-demo.github.io

cd %XCHARTS_DEMO%
git pull

cd %XCHARTS_WEBSITE%

python utils\sync_version.py %XCHARTS_MAIN% %XCHARTS_WEBSITE% %XCHARTS_DEMO% master