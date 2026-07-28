import app from "ags/gtk4/app"
import style from "./src/styles/style.scss"
import { Bar } from "./src/widget/bar"
import { WallpaperPicker } from "@/widget/wallpaperPicker"
import { System } from "@/widget/system"
import { options } from "options"

app.start({
  css: style,
  requestHandler(request, res) {
    if (request[0] === "toggle_wallpaper_picker") {
      const launcher = app.get_window(options.wallpaperPicker.windowName)
      if (!launcher) return res("Window not found")
      launcher.set_visible(!launcher.get_visible())
      return res("Launcher opened successfully")
    } else return res(`Unknown command: ${request}`)
  },
  main() {
    app.get_monitors().map(Bar)
    WallpaperPicker()
    System()
  },
})
