import { Astal } from "ags/gtk4"

const { TOP, LEFT, RIGHT, BOTTOM, NONE } = Astal.WindowAnchor

export const options = {
  bar: {
    windowName: "bar",
    anchors: TOP | LEFT | RIGHT,
    spacing: 5,
    elementSpacing: 5,
    workspaces: {
      count: 10,
      spacing: 3,
    },
  },
  wallpaperPicker: {
    windowName: "wallpaperPicker",
    anchors: NONE,
  },
  system: {
    windowName: "system",
    anchors: TOP | RIGHT,
  },
}
