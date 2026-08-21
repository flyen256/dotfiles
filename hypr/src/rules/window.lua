hl.window_rule({
	name = "float",
	match = {
		class = "^(org.gnome.Nautilus|org.pulseaudio.pavucontrol|net.nokyan.Resources|xdg-desktop-portal-gtk|PortProton)$"
	},
	float = true
})
hl.window_rule({
	name = "wallpaper-engine",
	match = {
		class = "^(linux-wallpaperengine)$"
	},
	no_blur = true,
	no_anim = true,
	move = {"0", "0"},
	size = {"monitor_w", "monitor_h"},
	pin = true
})
hl.window_rule({
	name = "nofocus",
	match = {
		class = "^jetbrains-(?!toolbox)"
	},
	no_initial_focus = true,
	float = true
})
hl.window_rule({
	name = "rider-properties",
	match = {
		class = "jetbrains-rider",
		title = "Folder Properties.*"
	},
	center = true
})
hl.window_rule({
	name = "tearing",
	match = {
		class = "^(osu!.exe|steam_app_1422450|gamescope|steam_app_3293010)$"
	},
	immediate = true
})
hl.window_rule({
    name = "discord-workspace",
    match = { class = "discord" },
    workspace = "4",
})
