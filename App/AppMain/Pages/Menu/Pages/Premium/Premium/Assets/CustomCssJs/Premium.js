"use strict";
////////////////////////////////////////////////////// Start Section DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
    const ElectronRemote = require("electron").remote;
    const MainWindow = ElectronRemote.getCurrentWindow();

    ////////////////////// Start Section Variables
    let ButtonGoBack = document.querySelector(".button-arrow-left");
    let ButtonMinimize = document.querySelector(".window-minimize");
    let ButtonClose = document.querySelector(".window-close");
    let ButtonYear = document.querySelector(".button-footer-year");
    let ButtonMonth = document.querySelector(".button-footer-month");
    ////////////////////// End Section Variables

    ////////////////////// Start Section Listeners
    ButtonGoBack.addEventListener("click", () => {
        MainWindow.loadFile("./App/AppMain/App.html");
    });

    ButtonMinimize.addEventListener("click", () => {
        MainWindow.minimize();
    });

    ButtonClose.addEventListener("click", () => {
        MainWindow.close();
    });

    ButtonYear.addEventListener("click", () => {
        ElectronRemote.shell.openExternal("https://google.com");
    });

    ButtonMonth.addEventListener("click", () => {
        ElectronRemote.shell.openExternal("https://google.com");
    });
    ////////////////////// End Section Listeners
});
////////////////////////////////////////////////////// End Section DOM Content Loaded