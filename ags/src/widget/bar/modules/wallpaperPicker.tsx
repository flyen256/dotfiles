import app from "ags/gtk4/app"
import { icons } from "lib/icons"
import { options } from "options"

export const WallpaperPickerButton = () => {
  return (
    <button
      class="barButton"
      onClicked={() => app.toggle_window(options.wallpaperPicker.windowName)}
    >
      <image iconName={icons.wallpaper} />
    </button>
  )
}
