"use strict";
////////////////////////////////////////////////////// Start Section DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
    const ElectronRemote = require("electron").remote;
    const MainWindow = ElectronRemote.getCurrentWindow();

    ////////////////////// Start Section Variables
    let ButtonGoBack = document.querySelector(".button-arrow-left");
    let ButtonMinimize = document.querySelector(".window-minimize");
    let ButtonClose = document.querySelector(".window-close");
    let ButtonExcludeDomains = document.querySelector(".button-exclude-domains");
    let ButtonVpnProtocol = document.querySelector(".button-vpn-protocol");
    ////////////////////// End Section Variables

    ////////////////////// Start Section Listeners
    ButtonGoBack.addEventListener("click", () => {
        MainWindow.loadFile("./App/AppMain/Pages/Menu/Menu/Menu.html");
    });

    ButtonMinimize.addEventListener("click", () => {
        MainWindow.minimize();
    });

    ButtonClose.addEventListener("click", () => {
        MainWindow.close();
    });

    ButtonExcludeDomains.addEventListener("click", () => {
        MainWindow.loadFile("./App/AppMain/Pages/Menu/Pages/Settings/Pages/ExcludeDomins/ExcludeDomins/ExcludeDomins.html");
    });

    ButtonVpnProtocol.addEventListener("click", () => {
        MainWindow.loadFile("./App/AppMain/Pages/Menu/Pages/Settings/Pages/VpnProtocol/VpnProtocol/VpnProtocol.html");
    });
    ////////////////////// End Section Listeners
});
////////////////////////////////////////////////////// End Section DOM Content Loaded