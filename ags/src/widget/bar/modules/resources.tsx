import { createState, onCleanup, With } from "ags"
import { subprocess } from "ags/process"
import { icons } from "lib/icons"
import { options } from "options"

export const Resources = () => {
  const [cpuLoad, setCpuLoad] = createState("0%")
  const [ramLoad, setRamLoad] = createState("0%")
  const [gpuLoad, setGpuLoad] = createState("0%")

  const cpuProc = subprocess(
    ["sh", "/home/flyen256/.config/ags/scripts/cpu.sh"],
    (out) => setCpuLoad(out.trim()),
  )
  const ramProc = subprocess(
    ["sh", "/home/flyen256/.config/ags/scripts/mem.sh"],
    (out) => setRamLoad(out.trim()),
  )
  const gpuProc = subprocess(
    ["sh", "/home/flyen256/.config/ags/scripts/gpu.sh"],
    (out) => setGpuLoad(out.trim()),
  )

  onCleanup(() => {
    cpuProc?.kill()
    ramProc?.kill()
    gpuProc?.kill()
  })

  return (
    <box class="barElement" spacing={options.bar.elementSpacing}>
      <box>
        <With value={cpuLoad}>
          {(load) => (
            <box spacing={options.bar.elementSpacing}>
              <label class="barLabel" label={` ${load}`} />
            </box>
          )}
        </With>
      </box>
      <box>
        <With value={ramLoad}>
          {(load) => (
            <box spacing={options.bar.elementSpacing}>
              <label class="barLabel" label={` ${load}`} />
            </box>
          )}
        </With>
      </box>
      <box>
        <With value={gpuLoad}>
          {(load) => (
            <box spacing={options.bar.elementSpacing}>
              <label class="barLabel" label={`󰘚 ${load}`} />
            </box>
          )}
        </With>
      </box>
    </box>
  )
}
