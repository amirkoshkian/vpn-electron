/////////////////////////////////////////////////////////////// Start Section Require
const Electron = require("electron");
let MainWindow;
/////////////////////////////////////////////////////////////// End Section Require

/////////////////////////////////////////////////////////////// Start Section App
Electron.app.on("ready", () => {
    ////////////////////// Start Section Main Window
    MainWindow = new Electron.BrowserWindow({
        show: false,
        width: 340,
        height: 580,
        frame: false,
        resizable: false,
        icon: __dirname + "\\AppMain\\Assets\\Images\\IconVpnEnabled.png",
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
            nodeIntegrationInWorker: true,
        },
    });
    MainWindow.on("closed", () => {
        MainWindow = null;
        Electron.app.quit();
    });
    MainWindow.loadFile(__dirname + "\\AppMain\\App.html").then();
    MainWindow.show();
    ////////////////////// End Section Main Window

    ////////////////////// Start Section Tray Icon
    TrayIconApp = new Electron.Tray(__dirname + "\\AppMain\\Assets\\Images\\IconVpnEnabled.png");
    const ContextMenu = Electron.Menu.buildFromTemplate([
        {
            label: "Menu",
            click() {
                MainWindow.loadFile(__dirname + "\\AppMain\\Pages\\Menu\\Menu\\Menu.html");
            },
        },
        {
            type: "separator",
        },
        {
            label: "Exit",
            click() {
                ElectronRemote.app.exit();
            },
        },
    ]);
    TrayIconApp.setToolTip("VPN For Windows");
    TrayIconApp.setContextMenu(ContextMenu);
    ////////////////////// End Section Tray Icon
});
/////////////////////////////////////////////////////////////// End Section App