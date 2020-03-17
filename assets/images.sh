#!/bin/sh

ASSETS=$(dirname $0)

pushd $ASSETS > /dev/null

mogrify -path img -resize 600x600\> original/*.png

cp original/header.jpg img/header_4x.jpg
convert -resize 1920x1080 original/header.jpg img/header_2x.jpg
convert -resize 960x540 original/header.jpg img/header_1x.jpg

export NODE_PATH=$(npm root -g)
node image_optimize.js

popd > /dev/null
