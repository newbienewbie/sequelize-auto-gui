// start.js

const path=require('path');
const {app,BrowserWindow,ipcMain}=require('electron');
const generate=require('./lib/main/generate');

ipcMain.on('generate-models',function(event,arg){
    generate(arg.database,arg.user,arg.pass,arg.opts)
        .then((info)=>{
            event.sender.send('models-generated',info);
        })
        .catch(err=>{
            console.log(err);
        });
});

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