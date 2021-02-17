const {app, BrowserWindow} = require('electron');
const path = require('path');

function CreateWindow() {
    const mainWin = new BrowserWindow({
        height:800,
        width:1200,
        minHeight:800,
        minWidth:1200,
        title:"Music Writer",
        webPreferences:{
            nodeIntegration:false,
            worldSafeExecuteJavaScript:true,
            contextIsolation:true
        }
    });
    mainWin.loadFile("index.html");
}

require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules','electron')
});

app.whenReady().then(CreateWindow);

console.log("Hello World");