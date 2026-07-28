local workspaces = require("src.config").workspaces

hl.monitor({
    output   = "DP-1",
    mode     = "1920x1080@100",
    position = "0x0",
    scale    = "auto",
})

hl.monitor({
	output = "HDMI-A-1",
	mode = "1600x900@60",
	position = "1920x0",
	scale = "auto"
})

for key, value in pairs(workspaces) do
	hl.workspace_rule({ workspace = key, monitor = value })
end
