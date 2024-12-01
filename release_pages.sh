#!/bin/bash

set -x

XCHARTS_WEBSITE=$(cd $(dirname $0) && pwd)
XCHARTS_PAGES=$XCHARTS_WEBSITE-pages

echo "XCHARTS_PAGES: $XCHARTS_PAGES"

if [ ! -d $XCHARTS_PAGES ]; then
    echo "Cloning xcharts-pages"
    git clone -b pages https://github.com/XCharts-Team/XCharts-Team.github.io.git $XCHARTS_PAGES
else
    echo "Updating xcharts-pages"
    cd $XCHARTS_PAGES
    git pull
    cd $XCHARTS_WEBSITE
fi

yarn build
cp -r $XCHARTS_WEBSITE/build/* $XCHARTS_PAGES

cd $XCHARTS_PAGES
git add .
git commit -m "deploy to pages"
git push

