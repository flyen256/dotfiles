require("src.general.monitors")
require("src.general.autostart")
require("src.general.environment")
require("src.general.input")
require("src.general.animations")

hl.config({
	general = {
		gaps_in  = 10,
		gaps_out = 40,

		border_size = 2,

		col = {
			active_border   = "0xff635c59",
			inactive_border = "0xff635c59",
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
			range        = 20,
			render_power = 10,
			color        = "rgba(00000044)"
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
