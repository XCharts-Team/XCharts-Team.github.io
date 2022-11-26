#!/bin/bash

set -x

version=$1
#version=v1.1.3

XCHARTS_WEBSITE=$(cd $(dirname $0) && pwd)
XCHARTS_MAIN=$XCHARTS_WEBSITE/../../XCharts/Assets/XCharts

# 默认不变更分支，直接操作
if [[ ! -z "$version" ]]; then
  echo $version
  cd $XCHARTS_PATH
  #git checkout $version
fi

prefixPath="docs"

if
  [[ ! -z "$version" && "$version" == "master" ]]
then
  fromDocPath="$XCHARTS_MAIN/Documentation~/zh/"
  cd $XCHARTS_WEBSITE
  rsync -avh $fromDocPath $XCHARTS_WEBSITE/$prefixPath/lang/articles
  node ./scripts/flaturl ./$prefixPath ./$prefixPath
  cp -r variables/ ./$prefixPath/variables
  cp $XCHARTS_MAIN/README.md ./$prefixPath/lang/articles/index.md
  perl -pi -e 's|Documentation~/zh/||g' ./$prefixPath/lang/articles/index.md
  perl -pi -e 's|README-en.md||g' ./$prefixPath/lang/articles/index.md
  perl -pi -e 'print"---\nsidebar_position: 1\nslug: /\n---\n\n# 关于XCharts\n\n" if $. == 1' ./$prefixPath/lang/articles/index.md
  rsync -avh --delete $XCHARTS_MAIN/Documentation~/variable.json $XCHARTS_WEBSITE/$prefixPath/variables/variable.json
  rsync -avh --delete $XCHARTS_MAIN/Documentation~/fragments/ $XCHARTS_WEBSITE/$prefixPath/fragments
else
  cd $XCHARTS_WEBSITE
  prefixPath="versioned_docs/version-$version"
  fromDocPath="$XCHARTS_WEBSITE/docs/"
  mkdir -p ./$prefixPath
  rsync -avh --delete $fromDocPath $XCHARTS_WEBSITE/$prefixPath
  node ./scripts/flaturl ./$prefixPath ./$prefixPath
  cp -r src/pages/api/master/ src/pages/api/$version
  cp ./versioned_sidebars/default.json ./versioned_sidebars/version-$version-sidebars.json
fi
