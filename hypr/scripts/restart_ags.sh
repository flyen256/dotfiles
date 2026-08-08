#!/bin/bash

if pidof ags > /dev/null; then
  echo "ags is running. Restarting..."
  ags quit
  ags run & 
else
  echo "ags is not running. Starting..."
  ags run &
fi

exec ~/.config/hypr/scripts/wallpaperengine.sh
