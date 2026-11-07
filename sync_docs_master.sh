#!/bin/bash

set -x

XCHARTS_WEBSITE=$(cd $(dirname $0) && pwd)
XCHARTS_MAIN=$XCHARTS_WEBSITE/../XCharts/Assets/XCharts
# 演示站是独立的构建产物仓库，不在本工作区；用 XCHARTS_DEMO 指向外部 clone，
# 未设置或不存在时 sync_version.py 会跳过示例同步。
XCHARTS_DEMO=${XCHARTS_DEMO:-$XCHARTS_WEBSITE/../xcharts-demo.github.io}

cd $XCHARTS_WEBSITE

python3 utils/sync_version.py $XCHARTS_MAIN $XCHARTS_WEBSITE $XCHARTS_DEMO master
