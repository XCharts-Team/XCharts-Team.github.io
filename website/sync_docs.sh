#!/bin/bash

set -x

XCHARTS_WEBSITE=$(cd $(dirname $0) && pwd )

cd $XCHARTS_WEBSITE
yarn install

if [ "$1" != "dev" ]
then
  #yarn run genversions
  for version in $(cat versions.json | jq -r '.[]'); do
    cd $XCHARTS_WEBSITE
    ./sync_version.sh $version
  done
fi

cd $XCHARTS_WEBSITE
./sync_version.sh master