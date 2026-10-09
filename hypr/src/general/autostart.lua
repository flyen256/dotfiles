local config = require("src.config")

hl.on("hyprland.start", function ()
	for i = 1, #config.autostart_programs do
		hl.exec_cmd(config.autostart_programs[i])
	end
end)
