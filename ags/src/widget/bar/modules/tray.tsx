import { tray } from "@/global"
import { createBinding, For } from "ags"
import AstalTray from "gi://AstalTray"
import { createMenu } from "lib/utils"
import { options } from "options"

export const Tray = () => {
  const trayItems = createBinding(tray, "items")

  return (
    <box cssClasses={["barElement", "tray"]}>
      <box spacing={options.bar.elementSpacing}>
        <For each={trayItems}>
          {(item: AstalTray.TrayItem) => {
            const gicon = createBinding(item, "gicon")
            const tooltip = createBinding(item, "tooltipMarkup")

            return (
              <button
                visible={gicon.as((g) => !!g)}
                cssClasses={["trayItem"]}
                onClicked={(self) => {
                  const menuModel = item.menuModel
                  if (menuModel) {
                    const menu = createMenu(
                      menuModel,
                      item.actionGroup,
                      self,
                    )
                    menu.popup()
                  }
                }}
              >
                <image gicon={gicon} tooltipMarkup={tooltip} />
              </button>
            )
          }}
        </For>
      </box>
    </box>
  )
}

