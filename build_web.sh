#!/bin/bash

rm dist/main*bundle*.js*
rm htmlpage/js/*bundle*.js*

set -e 

webpack --config webpack.config.min.js
webpack --config webpack.config.js

sed -i '' 's|"main|"js/main|' dist/download.html

cp dist/main*.js* htmlpage/js/
cp dist/download.html htmlpage/
