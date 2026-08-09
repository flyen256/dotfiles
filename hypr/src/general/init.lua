require("src.general.monitors")
require("src.general.autostart")
require("src.general.environment")
require("src.general.input")
require("src.general.animations")

hl.config({
	general = {
		gaps_in  = 4,
		gaps_out = 40,

		border_size = 2,

		col = {
			active_border   = "0xffb9b6c7",
			inactive_border = "0xffb9b6c7",
		},

		resize_on_border = false,
		allow_tearing = true,

		layout = "dwindle",
	},

	decoration = {
		rounding       = 12,
		rounding_power = 2,

		active_opacity   = 0.95,
		inactive_opacity = 0.95,

		shadow = {
			enabled      = true,
			range        = 24,
			render_power = 16,
			color        = "rgba(00000099)"
		},

		blur = {
			enabled    = true,
			size       = 1,
			passes     = 2,
			vibrancy   = 1,
			brightness = 1,
			xray       = true 
		},
	},

	animations = {
		enabled = true,
	},
})
