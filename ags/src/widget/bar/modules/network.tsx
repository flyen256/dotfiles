import { With } from "ags"
import { exec } from "ags/process"
import { createPoll } from "ags/time"
import AstalNetwork from "gi://AstalNetwork?version=0.1"
import { icons } from "lib/icons"
import { options } from "options"

export const Network = () => {
  const network = AstalNetwork.get_default()
  const networkState = createPoll("offline", 5000, () => {
    const stdout = exec("nmcli -t -f TYPE,STATE device")
    if (stdout.includes("ethernet:connected")) return "ethernet"
    if (stdout.includes("wifi:connected")) return "wifi"
    return "offline"
  })

  const networkIcon = () => {
    const primary = network.get_primary()
    const state = network.get_state()

    switch (primary) {
      case AstalNetwork.Primary.WIFI:
        return "󰤨"
      case AstalNetwork.Primary.WIRED:
        return ""
      default:
        return "󱘖"
    }
  }

  return (
    <box>
      <With value={networkState}>
        {(state) => (
          <box cssClasses={["barElement"]} spacing={options.bar.elementSpacing}>
            <label class="barLabel" label={`${networkIcon()} ${state}`} />
          </box>
        )}
      </With>
    </box>
  )
}
