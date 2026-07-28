if pidof rofi; then
  killall rofi
else
  rofi -show drun
fi
