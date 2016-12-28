import React from 'react';
import DataSourceConfigForm from './data-source-config-form';
import OutputConfigForm from './output-config-form';
import {Row,Col,Tabs,Button,message} from 'antd';

const {ipcRenderer} = require('electron');
ipcRenderer.on('models-generated', (event, arg) => {
    console.log(arg);
});



export const SequelizeAutoComponent = React.createClass({
    getInitialState:function(){
        return {
            configFile:'',
            host:'localhost',
            port:'3306',
            dialect:'mysql',
            database:'',
            user:'',
            pass:'',
            camelCase:true,
            directory:'',
        };
    },
    // todo: 校验当前状态是否合法
    validateState:function(){
        return true;
    },
    render: function () {
        return (<div>
        <Row>
            <Col span={24}>
                <Tabs defaultActiveKey="1">
                    <Tabs.TabPane tab="数据源配置" key={1}>
                        <DataSourceConfigForm 
                            onTest={()=>{}}
                            onSave={(state)=>{
                                const obj=Object.assign({},this.state,state);
                                this.setState(obj,()=>{
                                    console.log(`配置状态已经设置`,obj);
                                });
                            }}
                        />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="输出配置" key={2}>
                        <OutputConfigForm onSave={(state)=>{
                            const obj=Object.assign({},state);
                            this.setState(obj,()=>{
                                console.log(this.state);
                            });
                        }} />
                    </Tabs.TabPane>
                </Tabs>
            </Col>
        </Row>
        <Row>
            <Col>
                <Button type="primary" onClick={(e)=>{
                    if(!this.validateState()){message.error(`当前状态不合法`);}
                    const obj={
                        database:this.state.database,
                        user:this.state.user,
                        pass:this.state.pass,
                        opts:{
                            host:this.state.host,
                            port:this.state.port,
                            dialect:this.state.dialect,
                            camelCase:this.state.camelCase,
                            directory:this.state.directory,
                        }
                    };
                    ipcRenderer.send('generate-models', obj);
                }}>
                    生成
                </Button>
            </Col>
        </Row>
        </div>);
    },
});


export default SequelizeAutoComponent;