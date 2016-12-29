const {ipcRenderer} = require('electron');
const EVENTS =require('../../events');
import {message} from 'antd';

ipcRenderer.on(EVENTS.Results.ModelsGenerated, (event, arg) => {
    message.success('models生成成功!');
});
ipcRenderer.on(EVENTS.Results.ConnectionTestPast, (event, arg) => {
    message.success('连接成功!');
});
ipcRenderer.on(EVENTS.Results.ConnectionTestFailed, (event, arg) => {
    message.error(`连接失败!\r\n${arg.name}:${arg.message}`,3);
});
