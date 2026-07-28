local config = require("src.config")

for i = 1, 10 do
    local key = i % 10
    hl.bind(config.mainMod .. " + " .. key,             hl.dsp.focus({ workspace = i}))
    hl.bind(config.mainMod .. " + SHIFT + " .. key,     hl.dsp.window.move({ workspace = i }))
end
hl.bind(config.mainMod .. " +	CTRL + Right", hl.dsp.focus({ workspace = "r+1" }))
hl.bind(config.mainMod .. " +	CTRL + Left", hl.dsp.focus({ workspace = "r-1" }))
hl.bind(config.mainMod .. " + SHIFT +	CTRL + Right", hl.dsp.window.move({ workspace = "r+1" }))
hl.bind(config.mainMod .. " +	SHIFT + CTRL + Left", hl.dsp.window.move({ workspace = "r-1" }))
hl.bind(config.mainMod .. " + S",         hl.dsp.workspace.toggle_special("magic"))
hl.bind(config.mainMod .. " + SHIFT + S", hl.dsp.window.move({ workspace = "special:magic" }))
