import React from 'react';
import DataSourceConfigForm from './data-source-config-form';
import OutputConfigForm from './output-config-form';
import {Row,Col,Tabs,Button,message} from 'antd';

const {ipcRenderer}=require('electron');
const EVENTS=require('../../../events');

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
        if(!this.state.database || !this.state.dialect){
            message.warn('请检查数据源配置及是否保存!');
            return false;
        }
        if(!this.state.directory){
            message.warn('请检查输出配置及是否保存!');
            return false;
        }
        return true;
    },
    render: function () {
        return (<div>
        <Row style={{background:'rgba(0,128,69,0.11)'}}>
            <Col span={8}>
                配置区
            </Col>
            <Col span={16}>
                <Tabs defaultActiveKey="1">
                    <Tabs.TabPane tab="数据源配置" key={1}>
                        <DataSourceConfigForm 
                            onTest={(state)=>{
                                const obj=Object.assign({},this.state,state);
                                const config={
                                    database:obj.database,
                                    user:obj.user,
                                    pass:obj.pass,
                                    opts:{
                                        host:obj.host,
                                        port:obj.port,
                                        dialect:obj.dialect,
                                    }
                                };
                                console.log(`test按钮触发，当前配置为：`,config);
                                ipcRenderer.send(EVENTS.Actions.TestConnection, config);
                            }}
                            onSave={(state)=>{
                                const obj=Object.assign({},this.state,state);
                                this.setState(obj,()=>{
                                    message.info(`数据源配置已保存！`);
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
                                message.success(`保存成功`);
                            });
                        }} />
                    </Tabs.TabPane>
                </Tabs>
            </Col>
        </Row>
        <Row>
            <Col>
                <Button type="primary" onClick={(e)=>{
                    if(!this.validateState()){return;}
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
                    ipcRenderer.send(EVENTS.Actions.GenerateModels, obj);
                }}>
                    生成
                </Button>
            </Col>
        </Row>
        </div>);
    },
});


export default SequelizeAutoComponent;