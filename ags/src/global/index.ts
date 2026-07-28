import AstalHyprland from "gi://AstalHyprland"
import AstalNetwork from "gi://AstalNetwork"
import AstalTray from "gi://AstalTray"

export const tray = AstalTray.get_default()
export const network = AstalNetwork.get_default()
export const hyprland = AstalHyprland.get_default()
