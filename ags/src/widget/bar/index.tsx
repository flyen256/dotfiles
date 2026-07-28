import app from "ags/gtk4/app"
import { Astal, Gdk, Gtk } from "ags/gtk4"
import { Tray } from "./modules/tray"
import { Network } from "./modules/network"
import { Resources } from "./modules/resources"
import { Workspaces } from "./modules/workspaces"
import { Time } from "./modules/time"
import { Weather } from "./modules/weather"
import { KeyboardLayout } from "./modules/keyboard"
import { options } from "options"
import { FocusedClient } from "./modules/focusedClient"
import { WallpaperPickerButton } from "./modules/wallpaperPicker"
import { SystemButton } from "./modules/system"

export const Bar = (gdkmonitor: Gdk.Monitor) => {
  return (
    <window
      visible
      name={options.bar.windowName}
      class="Bar"
      gdkmonitor={gdkmonitor}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={options.bar.anchors}
      application={app}
    >
      <centerbox cssName="centerbox" hexpand>
        <box
          $type="start"
          halign={Gtk.Align.START}
          spacing={options.bar.spacing}
          cssClasses={["startBox"]}
        >
          <FocusedClient />
          <Workspaces />
        </box>
        <box
          $type="center"
          halign={Gtk.Align.CENTER}
          cssClasses={["centerBox"]}
          spacing={options.bar.spacing}
        >
          <Time />
					<Weather />
        </box>
        <box
          $type="end"
          halign={Gtk.Align.END}
          cssClasses={["endBox"]}
          spacing={options.bar.spacing}
        >
          <WallpaperPickerButton />
          <KeyboardLayout />
          <Resources />
          <Network />
          <Tray />
          <SystemButton />
        </box>
      </centerbox>
    </window>
  )
}
