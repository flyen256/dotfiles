WALLPAPER_ID=3588375761
#WALLPAPER_ID=3474658712

killall -s SIGKILL linux-wallpaperengine
linux-wallpaperengine --no-audio-processing --no-effects --volume 0 --scaling fill --bg $WALLPAPER_ID --screen-root DP-1 --screen-root HDMI-A-1 --disable-parallax
