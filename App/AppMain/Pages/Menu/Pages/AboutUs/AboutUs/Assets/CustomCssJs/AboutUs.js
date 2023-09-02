"use strict";
////////////////////////////////////////////////////// Start Section DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
    const ElectronRemote = require("electron").remote;
    const MainWindow = ElectronRemote.getCurrentWindow();

    ////////////////////// Start Section Variables
    let ButtonGoBack = document.querySelector(".button-arrow-left");
    let ButtonMinimize = document.querySelector(".window-minimize");
    let ButtonClose = document.querySelector(".window-close");
    let ButtonGoToPagePrivacyPolicy = document.querySelector(".section-text-privacy-policy");
    let ButtonGoToPageTermsOfService = document.querySelector(".section-text-terms-of-service");
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

    ButtonGoToPagePrivacyPolicy.addEventListener("click", () => {
        ElectronRemote.shell.openExternal("https://google.com");
    });

    ButtonGoToPageTermsOfService.addEventListener("click", () => {
        ElectronRemote.shell.openExternal("https://google.com");
    });
    ////////////////////// End Section Listeners
});
////////////////////////////////////////////////////// End Section DOM Content Loaded