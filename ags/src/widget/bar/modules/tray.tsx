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
          {(item: AstalTray.TrayItem) =>
            item.gicon && (
              <button
                cssClasses={["trayItem"]}
                onClicked={(self) => {
                  if (item.menuModel) {
                    const menu = createMenu(
                      item.menuModel,
                      item.actionGroup,
                      self,
                    )
                    menu.popup()
                  }
                }}
              >
                <image gicon={item.gicon} tooltipMarkup={item.tooltipMarkup} />
              </button>
            )
          }
        </For>
      </box>
    </box>
  )
}
