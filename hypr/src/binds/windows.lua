local config = require("src.config")

local mainMod = config.mainMod

hl.bind(mainMod .. " + C", hl.dsp.window.close())
hl.bind(mainMod .. " + V", hl.dsp.window.float({ action = "toggle" }))
hl.bind(mainMod .. " + P", hl.dsp.window.pseudo())
hl.bind(mainMod .. " + J", hl.dsp.layout("togglesplit"))
hl.bind(mainMod .. " + SHIFT + J", hl.dsp.layout("swapsplit"))

hl.bind(mainMod .. " + SHIFT + left",  hl.dsp.layout("splitratio -0.1"))
hl.bind(mainMod .. " + SHIFT + right", hl.dsp.layout("splitratio 0.1"))

hl.bind(mainMod .. " + F",     hl.dsp.window.fullscreen({ mode = "fullscreen", action = "toggle" }))
hl.bind(mainMod .. " + left",  hl.dsp.focus({ direction = "left" }))
hl.bind(mainMod .. " + right", hl.dsp.focus({ direction = "right" }))
hl.bind(mainMod .. " + up",    hl.dsp.focus({ direction = "up" }))
hl.bind(mainMod .. " + down",  hl.dsp.focus({ direction = "down" }))
hl.bind(mainMod .. " + mouse:272", hl.dsp.window.drag(),   { mouse = true })
hl.bind(mainMod .. " + mouse:273", hl.dsp.window.resize(), { mouse = true })
hl.bind(mainMod .. " + O", function()
    hl.dispatch(hl.dsp.window.set_prop({ 
        prop = "opaque", 
        value = "toggle", 
        window = "activewindow" 
    }))
end)
