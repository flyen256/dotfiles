local config = require("src.config")

hl.on("hyprland.start", function ()
	hl.exec_cmd("discord", { workspace = "4" })
	hl.exec_cmd("Telegram", { workspace = "5" })
	hl.exec_cmd("firefox", { workspace = "1" })

	for i = 1, #config.autostart_programs do
		hl.exec_cmd(config.autostart_programs[i])
	end
end)
