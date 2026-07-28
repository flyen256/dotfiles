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
        return icons.wireless
      case AstalNetwork.Primary.WIRED:
        return icons.wired
      default:
        return icons.wireless_off
    }
  }

  return (
    <box>
      <With value={networkState}>
        {(state) => (
          <box cssClasses={["barElement"]} spacing={options.bar.elementSpacing}>
            <image iconName={networkIcon()} />
            <label class="barLabel" label={state} />
          </box>
        )}
      </With>
    </box>
  )
}
