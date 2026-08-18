import { Astal, Gtk } from "ags/gtk4"
import app from "ags/gtk4/app"
import { exec } from "ags/process"
import Adw from "gi://Adw?version=1"
import GLib from "gi://GLib"
import Gio from "gi://Gio"
import Pango from "gi://Pango?version=1.0"
import { createEffect, createState, With } from "gnim"
import { icons } from "lib/icons"
import { options } from "options"

const COLS = 6
const ITEMS_PER_PAGE = COLS * 3
const MAX_WALLPAPER_SIZE = 150
interface Wallpaper {
  path: string
  fileName: string
}

export const WallpaperPicker = () => {
  const wallpaperDir = `${GLib.get_home_dir()}/Pictures/Wallpapers`
  const [searchQuery, setSearchQuery] = createState("")
  const [currentPage, setCurrentPage] = createState(0)

  const [allWallpapers] = createState<Wallpaper[]>(
    exec(`ls ${wallpaperDir}`)
      .split("\n")
      .filter((f: any) => /\.(jpg|jpeg|png|webp)$/i.test(f))
      .map((f: any) => ({
        path: `${wallpaperDir}/${f}`,
        fileName: f,
      })),
  )

  const win = (
    <window
      name={options.wallpaperPicker.windowName}
      keymode={Astal.Keymode.EXCLUSIVE}
      class="WallpaperPicker"
      application={app}
      exclusivity={Astal.Exclusivity.NORMAL}
      anchor={options.wallpaperPicker.anchors}
      visible={false}
    >
      <box
        orientation={Gtk.Orientation.VERTICAL}
        class="wallpaperPicker"
        spacing={5}
        valign={Gtk.Align.START}
      >
        <box orientation={Gtk.Orientation.HORIZONTAL} spacing={5}>
          <entry onNotifyText={(self) => setSearchQuery(self.text)} hexpand={true} />
          <button
            class="closeButton"
            onClicked={() => app.toggle_window(options.wallpaperPicker.windowName)}
          >
            <image iconName={icons.close}/>
          </button>
        </box>
        <With value={currentPage}>
          {(currentPage) => {
            GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
              if (win) {
                ;(win as any).set_default_size(-1, -1)
              }
              return GLib.SOURCE_REMOVE
            })

            return (
              <box valign={Gtk.Align.START}>
                <With value={searchQuery}>
                  {(query) => {
                    return (
                      <box>
                        <With value={allWallpapers}>
                          {(allWallpapers) => {
                            const start = currentPage * ITEMS_PER_PAGE
                            const currentWallpapers = allWallpapers
                              .filter((w) =>
                                w.fileName
                                  .toLowerCase()
                                  .includes(query.toLowerCase()),
                              )
                              .slice(start, start + ITEMS_PER_PAGE)

                            const activeRows = Math.ceil(
                              currentWallpapers.length / COLS,
                            )
                            const columns = [...Array(activeRows).keys()]

                            return (
                              <box
                                orientation={Gtk.Orientation.VERTICAL}
                                spacing={5}
                                valign={Gtk.Align.START}
                              >
                                <box
                                  orientation={Gtk.Orientation.VERTICAL}
                                  spacing={5}
                                  valign={Gtk.Align.START}
                                >
                                  {columns.map((_, i) => {
                                    return (
                                      <box spacing={5} valign={Gtk.Align.START}>
                                        {currentWallpapers
                                          .slice(i * COLS, COLS * i + COLS)
                                          .map((w) => (
                                            <button
                                              class="wallpaperCard"
                                              onClicked={() =>
                                                exec([
                                                  "awww",
                                                  "img",
                                                  "--transition-duration",
                                                  "1.5",
                                                  "--transition-type",
                                                  "grow",
                                                  "--transition-pos",
                                                  "0.854,0.977",
                                                  "--transition-fps",
                                                  "120",
                                                  w.path,
                                                ])
                                              }
                                            >
                                              <Adw.Clamp
                                                maximumSize={MAX_WALLPAPER_SIZE}
                                                valign={Gtk.Align.CENTER}
                                              >
                                                <box
                                                  orientation={
                                                    Gtk.Orientation.VERTICAL
                                                  }
                                                  spacing={4}
                                                >
                                                  {(() => {
                                                    const file =
                                                      Gio.File.new_for_path(
                                                        w.path,
                                                      )
                                                    const self =
                                                      new Gtk.Picture({
                                                        content_fit:
                                                          Gtk.ContentFit.COVER,
                                                        file: file,
                                                        cssClasses: [
                                                          "wallpaper",
                                                        ],
                                                        canShrink: true,
                                                        hexpand: false,
                                                        vexpand: false,
                                                        valign: Gtk.Align.START,
                                                      })
                                                    return self
                                                  })()}
                                                  <label
                                                    class="wallpaperName"
                                                    label={w.fileName}
                                                    ellipsize={
                                                      Pango.EllipsizeMode.END
                                                    }
                                                    maxWidthChars={15}
                                                    valign={Gtk.Align.END}
                                                  />
                                                </box>
                                              </Adw.Clamp>
                                            </button>
                                          ))}
                                      </box>
                                    )
                                  })}
                                </box>
                                <box spacing={8} halign={Gtk.Align.CENTER}>
                                  {currentPage > 0 && (
                                    <button
                                      class="wallpaperPickerButton"
                                      label="prev"
                                      onClicked={() => {
                                        if (currentPage > 0) {
                                          setCurrentPage(currentPage - 1)
                                        }
                                      }}
                                    >
                                      <image iconName={icons.left} />
                                    </button>
                                  )}
                                  {(currentPage + 1) * ITEMS_PER_PAGE <
                                    allWallpapers.length && (
                                    <button
                                      class="wallpaperPickerButton"
                                      onClicked={() => {
                                        if (
                                          (currentPage + 1) * ITEMS_PER_PAGE <
                                          allWallpapers.length
                                        )
                                          setCurrentPage(currentPage + 1)
                                      }}
                                    >
                                      <image iconName={icons.right} />
                                    </button>
                                  )}
                                </box>
                              </box>
                            )
                          }}
                        </With>
                      </box>
                    )
                  }}
                </With>
              </box>
            )
          }}
        </With>
      </box>
    </window>
  )

  return win
}
