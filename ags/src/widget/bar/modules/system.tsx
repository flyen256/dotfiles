import app from "ags/gtk4/app"
import { icons } from "lib/icons"
import { options } from "options"

export const SystemButton = () => {
  return (
    <button
      class="barButton"
      onClicked={() => app.toggle_window(options.system.windowName)}
    >
      <label label={"󰐥"} class="icon"/>
    </button>
  )
}
