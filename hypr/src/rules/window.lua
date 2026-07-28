hl.window_rule({
	name = "float",
	match = {
		class = "^(org.gnome.Nautilus|org.pulseaudio.pavucontrol|net.nokyan.Resources|xdg-desktop-portal-gtk|PortProton)$"
	},
	float = true
})

hl.window_rule({
	name = "tearing",
	match = {
		class = "^(osu!.exe|steam_app_1422450|gamescope)$"
	},
	immediate = true
})
