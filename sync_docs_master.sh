#!/bin/bash

set -x

XCHARTS_WEBSITE=$(cd $(dirname $0) && pwd)
XCHARTS_MAIN=$XCHARTS_WEBSITE/../XCharts/Assets/XCharts
XCHARTS_DEMO=$XCHARTS_WEBSITE/../xcharts-demo.github.io

cd $XCHARTS_WEBSITE

python3 utils/sync_version.py $XCHARTS_MAIN $XCHARTS_WEBSITE $XCHARTS_DEMO master
