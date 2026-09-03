import { execAsync } from "ags/process"
import { createPoll } from "ags/time"
import { icons } from "lib/icons"
import { options } from "options"

export const Weather = () => {
  const weatherState = createPoll({ temp: "..." }, 60000, async () => {
    try {
      const res = await execAsync(["curl", "-s", "wttr.in/Nyagan?format=%t"])
      
      const cleanTemp = res.trim()
      
      if (cleanTemp.includes("<") || cleanTemp === "") {
        return { temp: "Error" }
      }

      return { temp: cleanTemp }
    } catch (error) {
      console.error("Get weather error:", error)
      return { temp: "n/a" }
    }
  })

  return (
    <box cssClasses={["barElement"]} spacing={options.bar.elementSpacing}>
      <label label={weatherState.as((w) => `󰅟 ${w.temp}`)} class="barLabel" />
    </box>
  )
}
