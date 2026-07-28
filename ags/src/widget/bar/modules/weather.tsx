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
        return { temp: "Ошибка" }
      }

      return { temp: cleanTemp }
    } catch (error) {
      console.error("Ошибка получения погоды:", error)
      return { temp: "н/д" }
    }
  })

  return (
    <box cssClasses={["barElement"]} spacing={options.bar.elementSpacing}>
      <image iconName={icons.weather} />
      <label label={weatherState.as((w) => w.temp)} class="barLabel" />
    </box>
  )
}
