"use strict";
////////////////////////////////////////////////////// Start Section DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
    const ElectronRemote = require("electron").remote;
    const MainWindow = ElectronRemote.getCurrentWindow();

    ////////////////////// Start Section Variables
    let ButtonMenu = document.querySelector(".button-menu");
    let ButtonMinimize = document.querySelector(".window-minimize");
    let ButtonClose = document.querySelector(".window-close");
    let ButtonGoToUnlimited = document.querySelector(".button-go-to-unlimited");
    let ButtonConnect = document.querySelector(".button-connect");
    let ImageMainPage = document.querySelector(".image-main-page");
    let TextButtonConnect = document.querySelector(".text-button-connect");
    let ButtonLocation = document.querySelector(".button-location");
    ////////////////////// End Section Variables

    ////////////////////// Start Section Listeners
    ButtonMenu.addEventListener("click", () => {
        MainWindow.loadFile(__dirname + "\\Pages\\Menu\\Menu\\Menu.html");
    });

    ButtonMinimize.addEventListener("click", () => {
        MainWindow.minimize();
    });

    ButtonClose.addEventListener("click", () => {
        MainWindow.close();
    });

    ButtonGoToUnlimited.addEventListener("click", () => {
        MainWindow.loadFile(__dirname + "\\Pages\\Menu\\Pages\\Premium\\Premium\\Premium.html");
    });

    ButtonConnect.addEventListener("click", () => {
        if (TextButtonConnect.innerHTML === "Connect") {
            TextButtonConnect.innerHTML = "Disconnect";
            ImageMainPage.src = "./Assets/Images/IconVpnEnabled.png";
        } else {
            TextButtonConnect.innerHTML = "Connect";
            ImageMainPage.src = "./Assets/Images/IconVpnDisabled.png";
        }
    });

    ButtonLocation.addEventListener("click", () => {
        MainWindow.loadFile(__dirname + "\\Pages\\Locations\\Locations\\Locations.html");
    });
    ////////////////////// End Section Listeners
});
////////////////////////////////////////////////////// End Section DOM Content Loaded