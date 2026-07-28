import { Astal, Gtk } from "ags/gtk4"
import app from "ags/gtk4/app"
import { exec } from "ags/process"
import { icons } from "lib/icons"
import { options } from "options"

export const System = () => {
  const shutdown = () => {
    exec("shutdown -h now")
  }

  const reboot = () => {
    exec("reboot")
  }

  const suspend = () => {
    exec("systemctl suspend")
    exec("hyprlock")
  }

  const lock = () => {
    exec("hyprlock")
  }

  return (
    <window
      name={options.system.windowName}
      class="System"
      application={app}
      exclusivity={Astal.Exclusivity.NORMAL}
      anchor={options.system.anchors}
      visible={false}
    >
      <box orientation={Gtk.Orientation.VERTICAL} class="system" spacing={5}>
        <box orientation={Gtk.Orientation.HORIZONTAL} spacing={5}>
          <box orientation={Gtk.Orientation.VERTICAL}>
            <button class="systemButton" onClicked={shutdown}>
              <image iconName={icons.shutdown} pixelSize={48} />
            </button>
            shutdown
          </box>
          <box orientation={Gtk.Orientation.VERTICAL}>
            <button class="systemButton" onClicked={reboot}>
              <image iconName={icons.reboot} pixelSize={48} />
            </button>
            reboot
          </box>
          <box orientation={Gtk.Orientation.VERTICAL}>
            <button class="systemButton" onClicked={suspend}>
              <image iconName={icons.suspend} pixelSize={48} />
            </button>
            suspend
          </box>
        </box>
        <box spacing={5} halign={Gtk.Align.CENTER}>
          <box orientation={Gtk.Orientation.VERTICAL}>
            <button class="systemButton" onClicked={lock}>
              <image iconName={icons.lock} pixelSize={48} />
            </button>
            lock
          </box>
        </box>
      </box>
    </window>
  )
}
