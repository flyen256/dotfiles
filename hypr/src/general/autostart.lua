local config = require("src.config")

hl.on("hyprland.start", function ()
	hl.exec_cmd("[workspace 4 silent] discord")
	hl.exec_cmd("[workspace 5 silent] Telegram")
	hl.exec_cmd("[workspace 1 silent] chromium")

	for i = 1, #config.autostart_programs do
		hl.exec_cmd(config.autostart_programs[i])
	end
end)
