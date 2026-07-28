WALLPAPER_ID=3418347082

if pidof linux-wallpaperengine; then
    killall linux-wallpaperengine
fi
linux-wallpaperengine --no-fullscreen-pause --no-audio-processing --volume 0 --scaling fill --bg $WALLPAPER_ID --screen-root DP-1 --screen-root HDMI-A-1
