import React from 'react';
import { Row, Col,Tabs, Form,Input,Button} from 'antd';


export const ConfigForm=React.createClass({

    getDefaultProps:function(){
        return {
            onTest:()=>{},
            onSave:()=>{},
            onGenerate:()=>{},
        };
    },

    genOnChange:function(e,key='host'){
        return e=>{
            const obj={};
            obj[key]=e.target.value;
            const state=Object.assign({},obj);
            this.setState(state,()=>{
                console.log(this.state);
            });
        };
    },

    render:function(){
        const formItemLayout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
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
                <Input onChange={(e)=>{this.genOnChange(e,'username')(e)}}/>
            </Form.Item>
            <Form.Item label="密码" {...formItemLayout}>
                <Input type="password" onChange={(e)=>{this.genOnChange(e,'password')(e)}}/>
            </Form.Item>
            <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
                <Button type="dashed" htmlType="submit" size="large" onClick={(e)=>{this.props.onTest(e);}}>测试</Button>
                <Button type="primary" htmlType="submit" size="large" onClick={(e)=>{this.props.onSave(e);}}>>保存</Button>
                <Button type="ghost" htmlType="submit" size="large" onClick={(e)=>{this.props.onGenerate(e);}}>>生成</Button>
            </Form.Item>
        </Form>);
    }
});


export default ConfigForm;


