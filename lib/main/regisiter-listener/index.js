const {app,BrowserWindow,ipcMain}=require('electron');
const generate=require('./listener/generate');
const testConnection=require('./listener/test-connection');
const EVENTS=require('../../events.js');

ipcMain.on(EVENTS.Actions.GenerateModels,function(event,arg){
    generate(arg.database,arg.user,arg.pass,arg.opts)
        .then((info)=>{
            event.sender.send(EVENTS.Results.ModelsGenerated,info);
        })
        .catch(err=>{
            console.log(err);
        });
});
ipcMain.on(EVENTS.Actions.TestConnection,function(event,arg){
    testConnection(arg.database,arg.user,arg.pass,arg.opts)
        .then(
            (info)=>{
                console.log(`connection authentication past`);
                event.sender.send(EVENTS.Results.ConnectionTestPast,info); 
            },
            (info)=>{
                console.log(`connection authentication failed`);
                event.sender.send(EVENTS.Results.ConnectionTestFailed,info); 
            }
        )
        .catch(err=>{
            console.log(err);
            event.sender.send(EVENTS.Results.ConnectionTestFailed,err); 
        });
});
