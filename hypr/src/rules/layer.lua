hl.layer_rule({ match = { namespace = "gtk4-layer-shell" }, animation = "popin 0%" })
hl.layer_rule({ match = { namespace = "rofi" }, animation = "popin 0%" })
hl.layer_rule({ match = { namespace = "vicinae" }, name = "vicinae-blur", blur = false, ignore_alpha = 1 })
hl.layer_rule({ match = { namespace = "vicinae" }, name = "vicinae-no-animation", animation = "popin 0%" })

