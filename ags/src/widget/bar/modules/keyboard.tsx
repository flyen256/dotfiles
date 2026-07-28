import { With } from "ags"
import { exec } from "ags/process"
import { createPoll } from "ags/time"
import { icons } from "lib/icons"
import { options } from "options"

export const KeyboardLayout = () => {
  const keyboardLayout = createPoll("EN", 1000, () => {
    const stdout = exec("hyprctl devices -j")
    try {
      const data = JSON.parse(stdout)
      const mainKeyboard = data.keyboards.find((k: any) => k.main)
      if (!mainKeyboard) return "EN"
      const layout = mainKeyboard.active_keymap.slice(0, 2).toUpperCase()
      return layout
    } catch (e) {
      return "EN"
    }
  })

  return (
    <box cssClasses={["barElement"]} spacing={options.bar.elementSpacing}>
      <label class="icon" label={icons.keyboard} />
      <With value={keyboardLayout}>
        {(k) => <label class="barLabel" label={k} />}
      </With>
    </box>
  )
}
