// start.js
const electron=require('electron');
const path=require('path');
const app=electron.app;

const INDEX_HTML_PATH=path.join(__dirname,"dist","views","index.html");
let win;
app.on('ready',function(){
    win=new electron.BrowserWindow();
    win.loadURL(`file://${INDEX_HTML_PATH}`);
    win.on('closed',()=>{
        win=null;
    });
});
app.on('window-all-closed', function(){
    app.quit();
});