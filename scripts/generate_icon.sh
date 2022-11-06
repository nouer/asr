#!/bin/bash
set -euo pipefail

width=$1
height=${width}

mkdir -p images
convert \
  -gravity center \
  -font Helvetica \
  -pointsize "$((width / 5 * 3))" \
  -background "#111111" \
  -fill "#FFFFFF" \
  -size "${width}x${height}" \
  label:asr \
  "images/icon${width}_asr.png"
