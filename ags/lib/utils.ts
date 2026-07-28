import { Gtk } from "ags/gtk4"
import Gio from "gi://Gio"

export const createMenu = (
  menuModel: Gio.MenuModel,
  actionGroup: Gio.ActionGroup | null,
  relativeTo: Gtk.Widget,
): Gtk.PopoverMenu => {
  const menu = Gtk.PopoverMenu.new_from_model(menuModel)
  menu.insert_action_group("dbusmenu", actionGroup)
  menu.set_has_arrow(false)
  menu.set_parent(relativeTo)
  return menu
}
