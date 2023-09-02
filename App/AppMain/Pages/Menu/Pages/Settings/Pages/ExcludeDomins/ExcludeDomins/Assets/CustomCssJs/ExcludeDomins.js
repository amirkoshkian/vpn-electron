"use strict";
////////////////////////////////////////////////////// Start Section DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
    const ElectronRemote = require("electron").remote;
    const MainWindow = ElectronRemote.getCurrentWindow();

    ////////////////////// Start Section Variables
    let ButtonGoBack = document.querySelector(".button-arrow-left");
    let ButtonMinimize = document.querySelector(".window-minimize");
    let ButtonClose = document.querySelector(".window-close");
    ////////////////////// End Section Variables

    ////////////////////// Start Section Listeners
    ButtonGoBack.addEventListener("click", () => {
        MainWindow.loadFile("./App/AppMain/Pages/Menu/Pages/Settings/Settings/Settings.html");
    });

    ButtonMinimize.addEventListener("click", () => {
        MainWindow.minimize();
    });

    ButtonClose.addEventListener("click", () => {
        MainWindow.close();
    });
    ////////////////////// End Section Listeners
});
////////////////////////////////////////////////////// End Section DOM Content Loaded