#!/bin/bash

MEM_SCRIPT="/home/$USER/.config/ags/scripts/mem.sh"
CPU_SCRIPT="/home/$USER/.config/ags/scripts/cpu.sh"
GPU_SCRIPT="/home/$USER/.config/ags/scripts/gpu.sh"

if pidof ags > /dev/null; then
  echo "ags is running. Restarting..."
  ags quit
	pkill -f "sh $MEM_SCRIPT"
	pkill -f "sh $CPU_SCRIPT"
	pkill -f "sh $GPU_SCRIPT"
  ags run & 
else
  echo "ags is not running. Starting..."
  ags run &
fi

exec ~/.config/hypr/scripts/wallpaperengine.sh
