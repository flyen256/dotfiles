import { createPoll } from "ags/time"
import { icons } from "lib/icons"
import { options } from "options"

export const Time = () => {
  const time = createPoll("", 1000, "date")

  return (
    <box cssClasses={["barElement"]} spacing={options.bar.elementSpacing}>
      <label
        class="barLabel"
        label={time.as((s) => {
          let formattedTime = s
          return `󰥔 ${formattedTime.slice(0, s.length - 3).trim()}`
        })}
      />
    </box>
  )
}
