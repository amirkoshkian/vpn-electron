"use strict";
////////////////////////////////////////////////////// Start Section DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
    const ElectronRemote = require("electron").remote;
    const MainWindow = ElectronRemote.getCurrentWindow();

    ////////////////////// Start Section Variables
    let ButtonGoBack = document.querySelector(".button-arrow-left");
    let ButtonMinimize = document.querySelector(".window-minimize");
    let ButtonClose = document.querySelector(".window-close");
    let ButtonGoToPageSettings = document.querySelector(".section-text-settings");
    let ButtonGoToPageContactSupport = document.querySelector(".section-text-contact-support");
    let ButtonGoToPageAboutUs = document.querySelector(".section-text-about-us");
    let ButtonGoToUnlimited = document.querySelector(".button-go-to-unlimited");
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

    ButtonGoToPageSettings.addEventListener("click", () => {
        MainWindow.loadFile("./App/AppMain/Pages/Menu/Pages/Settings/Settings/Settings.html");
    });

    ButtonGoToPageContactSupport.addEventListener("click", () => {
        MainWindow.loadFile("./App/AppMain/Pages/Menu/Pages/ContactSupport/ContactSupport/ContactSupport.html");
    });

    ButtonGoToPageAboutUs.addEventListener("click", () => {
        MainWindow.loadFile("./App/AppMain/Pages/Menu/Pages/AboutUs/AboutUs/AboutUs.html");
    });

    ButtonGoToUnlimited.addEventListener("click", () => {
        MainWindow.loadFile("./App/AppMain/Pages/Menu/Pages/Premium/Premium/Premium.html");
    });
    ////////////////////// End Section Listeners
});
////////////////////////////////////////////////////// End Section DOM Content Loaded