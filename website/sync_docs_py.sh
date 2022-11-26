#!/bin/bash

set -x

XCHARTS_WEBSITE=$(cd $(dirname $0) && pwd)
XCHARTS_MAIN=$XCHARTS_WEBSITE/../../XCharts/Assets/XCharts

cd $XCHARTS_WEBSITE
yarn install

if [ "$1" != "dev" ]; then
  #yarn run genversions
  for version in $(cat versions.json | jq -r '.[]'); do
    cd $XCHARTS_WEBSITE
    python3 utils/sync_version.py $XCHARTS_MAIN $XCHARTS_WEBSITE $version
  done
fi

python3 utils/sync_version.py $XCHARTS_MAIN $XCHARTS_WEBSITE master
