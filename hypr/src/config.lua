local config = {
	mainMod = "SUPER",
	workspaces = {
		["0"] = "DP-1",
		["1"] = "DP-1",
		["2"] = "DP-1",
		["3"] = "DP-1",
		["4"] = "DP-1",
		["5"] = "DP-1",
		["6"] = "DP-1",
		["7"] = "DP-1",
		["8"] = "DP-1",
		["9"] = "DP-1",
		["10"] = "HDMI-A-1",
	},
	autostart_programs = {
		"hyprctl dispatch workspace 0",
		"ags run",
		"awww-daemon & swaync",
		"wl-paste --type text --watch cliphist store",
		"wl-paste --type image --watch cliphist store",
		"~/TgWsProxy_linux_amd64",
		"~/.config/autostart/wallpaperengine.sh",
		"gammastep -O 6500 -g 1.25 -m wayland",
		"gsettings set org.gnome.desktop.interface gtk-theme \"YOUR_DARK_GTK3_THEME\"",
		"gsettings set org.gnome.desktop.interface color-scheme \"prefer-dark\""
	},
	applications = {
		terminal = "kitty",
		fileManager = "nautilus",
		menu = "~/.config/hypr/scripts/toggle_rofi.sh",
		browser = "chromium",
		discord = "discord",
		telegram = "Telegram",
		code = "code",
		resources = "resources",
		pavucontrol = "pavucontrol",
		hyprshot = "hyprshot -m region",
		hyprshot_window = "hyprshot -m window",
		steam = "steam"
	},
	commands = {
		restart_shell = "~/.config/hypr/scripts/restart_ags.sh"
	}
}

return config
