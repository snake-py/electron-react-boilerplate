const electron = require('electron');
const { app, BrowserWindow, Menu, ipcMain } = electron;
const path = require('path');
const isDev = require('electron-is-dev');

try {
  require('electron-reloader')(module);
} catch (_) {}

let mainWindow;

const creatMainWindow = () => {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  mainWindow.on('closed', () => (mainWindow = null));
  console.log('MAIN WINDOW LOAD');
};

app.on('ready', creatMainWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', () => {
  if (creatMainWindow === null) {
    createWindow();
  }
});
