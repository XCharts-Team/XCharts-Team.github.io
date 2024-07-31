#!/bin/bash

set -x

XCHARTS_WEBSITE=$(cd $(dirname $0) && pwd)
XCHARTS_MAIN=$XCHARTS_WEBSITE/../../XCharts/Assets/XCharts
XCHARTS_DEMO=$XCHARTS_WEBSITE/../../XCharts-Demo/WebGL

cd $XCHARTS_WEBSITE
yarn install

python3 utils/sync_version.py $XCHARTS_MAIN $XCHARTS_WEBSITE $XCHARTS_DEMO v3.11.2
python3 utils/sync_version.py $XCHARTS_MAIN $XCHARTS_WEBSITE $XCHARTS_DEMO master
