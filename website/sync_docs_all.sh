#!/bin/bash

set -x

XCHARTS_WEBSITE=$(cd $(dirname $0) && pwd)
XCHARTS_MAIN=$XCHARTS_WEBSITE/../../XCharts/Assets/XCharts

cd $XCHARTS_WEBSITE
yarn install

python3 utils/sync_version.py $XCHARTS_MAIN $XCHARTS_WEBSITE v3.6.0
python3 utils/sync_version.py $XCHARTS_MAIN $XCHARTS_WEBSITE master
