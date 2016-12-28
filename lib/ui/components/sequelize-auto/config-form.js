import React from 'react';
import { Row, Col,Tabs, Form,Input,Button} from 'antd';


export const ConfigForm=React.createClass({

    getDefaultProps:function(){
        return {
            onTest:(state)=>{console.log(state);},
            onSave:(state)=>{console.log(state);},
        };
    },

    getInitialState:function(){
        return {
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

    genOnChange:function(e,key='host'){
        return e=>{
            const obj={};
            obj[key]=e.target.value;
            const state=Object.assign({},obj);
            this.setState(state);
        };
    },

    render:function(){
        const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 8 },
        };
        return (<Form horizontal={true}>
            <Form.Item label="地址" {...formItemLayout} >
                <Input onChange={(e)=>{this.genOnChange(e,'host')(e)}}/>
            </Form.Item>
            <Form.Item label="数据库" {...formItemLayout}>
                <Input onChange={(e)=>{this.genOnChange(e,'database')(e)}}/>
            </Form.Item>
            <Form.Item label="端口" {...formItemLayout} >
                <Input onChange={(e)=>{this.genOnChange(e,'port')(e)}}/>
            </Form.Item>
            <Form.Item label="用户名" {...formItemLayout}>
                <Input onChange={(e)=>{this.genOnChange(e,'user')(e)}}/>
            </Form.Item>
            <Form.Item label="密码" {...formItemLayout}>
                <Input type="password" onChange={(e)=>{this.genOnChange(e,'pass')(e)}}/>
            </Form.Item>
            <Form.Item wrapperCol={{ span: 16, offset: 2 }}>
                <Button type="dashed" htmlType="submit" size="large" onClick={(e)=>{this.props.onTest(this.state);}}>测试</Button>
                <Button type="primary" htmlType="submit" size="large" onClick={(e)=>{this.props.onSave(this.state);}}>>保存</Button>
            </Form.Item>
        </Form>);
    }
});


export default ConfigForm;


