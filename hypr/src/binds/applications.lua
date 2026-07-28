local config = require("src.config")

local exec_cmd = hl.dsp.exec_cmd

hl.bind(config.mainMod .. " + W", exec_cmd(config.applications.steam))
hl.bind(config.mainMod .. " + Q", exec_cmd(config.applications.terminal))
hl.bind(config.mainMod .. " + E", exec_cmd(config.applications.fileManager))
hl.bind(config.mainMod .. " + X", exec_cmd(config.applications.menu))
hl.bind(config.mainMod .. " + G", exec_cmd(config.applications.browser))
hl.bind(config.mainMod .. " + D", exec_cmd(config.applications.discord))
hl.bind(config.mainMod .. " + T", exec_cmd(config.applications.telegram))
hl.bind(config.mainMod .. " + SHIFT + C", exec_cmd(config.applications.code))
hl.bind(config.mainMod .. " + SHIFT + R", exec_cmd(config.applications.resources))
hl.bind(config.mainMod .. " + SHIFT + P", exec_cmd(config.applications.pavucontrol))
hl.bind(config.mainMod .. " + R", exec_cmd(config.commands.restart_shell))
hl.bind("Insert", exec_cmd(config.applications.hyprshot))
hl.bind("SHIFT + Insert", exec_cmd(config.applications.hyprshot_window))
hl.bind(config.mainMod .. " + SHIFT + W", exec_cmd("ags request toggle_wallpaper_picker"))
