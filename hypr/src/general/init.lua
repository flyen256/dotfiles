require("src.general.monitors")
require("src.general.autostart")
require("src.general.environment")
require("src.general.input")
require("src.general.animations")

hl.config({
	xwayland = {
		force_zero_scaling = true
  },
	general = {
		gaps_in  = 4,
		gaps_out = 32,

		border_size = 2,

		col = {
			active_border   = "0xffdeddda",
			inactive_border = "0xffdeddda",
		},

		resize_on_border = false,
		allow_tearing = true,

		layout = "dwindle",
	},

	decoration = {
		rounding       = 8,
		rounding_power = 3,

		active_opacity   = 1.0,
		inactive_opacity = 1.0,

		shadow = {
			enabled      = false,
			range        = 24,
			render_power = 16,
			color        = "rgba(00000099)"
		},

		blur = {
			enabled    = true,
			size       = 1,
			passes     = 4,
			vibrancy   = 1,
			brightness = 2,
			xray			 = true
		},
	},

	animations = {
		enabled = true,
	},
})
