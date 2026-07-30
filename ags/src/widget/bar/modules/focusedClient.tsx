import { hyprland } from "@/global"
import { createBinding, createEffect, createState, With } from "ags"
import { Gtk } from "ags/gtk4"
import { icons } from "lib/icons"
import { options } from "options"

export const FocusedClient = () => {
  const [client, setClient] = createState(hyprland.focusedClient)

  createEffect(() => {
    const update = () => setClient(hyprland.focusedClient)

    const id = hyprland.connect("notify::focused-client", update)

    update()

    return () => hyprland.disconnect(id)
  })

  return (
    <box>
      <With value={client}>
        {(c) => {
          if (!c) {
            return <></>
          }

          const titleBinding = createBinding(c, "title")
          const classBinding = createBinding(c, "class")

          return (
            <box cssClasses={["barElement", "focusedClient"]}>
              <box orientation={Gtk.Orientation.HORIZONTAL} spacing={options.bar.elementSpacing}>
                <With value={classBinding}>
                  {(cls) => (
                    <label
                      class="focusedClientClass"
                      label={`(${cls})` || "(unknown)"}
                      halign={Gtk.Align.START}
                    />
                  )}
                </With>
                <With value={titleBinding}>
                  {(title) => {
                    const formattedTitle =
                      title.length > 45
                        ? title.trim().slice(0, 42) + "..."
                        : title.trim()

                    return (
                      <label
                        class="focusedClientTitle"
                        label={formattedTitle}
                        halign={Gtk.Align.START}
                      />
                    )
                  }}
                </With>
              </box>
            </box>
          )
        }}
      </With>
    </box>
  )
}
