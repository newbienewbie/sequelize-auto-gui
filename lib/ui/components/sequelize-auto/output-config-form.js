import React from 'react';
import { Row, Col,Tabs, Form,Input,Select,Button} from 'antd';


export const OutputConfigForm=React.createClass({

    getDefaultProps:function(){
        return {
            onSave:(state)=>{console.log(state);},
        };
    },

    getInitialState:function(){
        return {
            camelCase:true,
            directory:'',
         };
    },

    genOnChange:function(e,key='directory'){
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
            <Form.Item label="camelCase" {...formItemLayout}>
                <Select defaultValue="true" style={{ width: 120 }} onChange={(v)=>{
                    const obj=Object.assign({},{
                        camelCase:v=="true"?true:false
                    });
                    this.setState(obj);
                }}>
                    <Select.Option value="true">是</Select.Option>
                    <Select.Option value="false">否</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label="路径" {...formItemLayout}>
                <Input onChange={(e)=>{this.genOnChange(e,'directory')(e)}}/>
            </Form.Item>
            <Form.Item wrapperCol={{ span: 16, offset: 2 }}>
                <Button type="primary" htmlType="submit" size="large" onClick={(e)=>{ this.props.onSave(this.state); }}>>
                    保存
                </Button>
            </Form.Item>
        </Form>);
    }
});


export default OutputConfigForm;


