const {ipcRenderer} = require('electron');
const EVENTS =require('../../events');

ipcRenderer.on(EVENTS.Results.ModelsGenerated, (event, arg) => {
    console.log(arg);
});
ipcRenderer.on(EVENTS.Results.ConnectionTestPast, (event, arg) => {
    console.log(arg);
});
ipcRenderer.on(EVENTS.Results.ConnectionTestFailed, (event, arg) => {
    console.log(arg);
});
