// start.js
const path=require('path');
const {app,BrowserWindow}=require('electron');
// 注册ipcMain的各个事件监听器
require('./lib/main/regisiter-listener');

const INDEX_HTML_PATH=path.join(__dirname,"dist","views","index.html");
let win;
app.on('ready',function(){
    win=new BrowserWindow();
    win.loadURL(`file://${INDEX_HTML_PATH}`);
    win.on('closed',()=>{
        win=null;
    });
});
app.on('window-all-closed', function(){
    app.quit();
});