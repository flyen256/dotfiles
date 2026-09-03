#!/bin/bash
echo "This script will override your current configs in ~/.config and .git folder in ~/.config. Also, you may not need some of the applications that will be installed. Continue? [y/n]"
read CONFIRM
if [[ $CONFIRM == "y" || $CONFIRM == "Y" || $CONFIRM == "" ]]
then
    echo "Installing..."
    sudo pacman -S  hyprland \
                    gammastep \
                    hyprlock \
                    hyprshot \
                    hyprpaper \
                    hyprpicker \
                    hypridle \
                    pavucontrol \
                    kitty \
                    telegram-desktop \
                    discord \
                    nautilus \
                    ly \
                    ttf-jetbrains-mono-nerd \
                    ttf-material-symbols-variable \
                    chromium \
                    resources \
                    steam \
                    wl-clipboard \
                    swaync \
                    wireplumber \
                    xdg-desktop-portal \
                    xdg-desktop-portal-hyprland \
                    obs-studio
    yay -S  aylurs-gtk-shell-git \
            libastal \
            apple_cursor \
            vicinae \
            tg-ws-proxy-bin \
            linux-wallpaperengine-git \
            otf-departure-mono-nerd \
            otf-monocraft
    ags types
    git clone https://github.com/flyen256/dotfiles ./flyen256_dotfiles/.config
    cp -ri ./flyen256_dotfiles/.config
    rm -r ./flyen256_dotfiles
    echo "Successfully installed dotfiles. You may need to reboot your system."
else
    echo "Canceled."
fi
