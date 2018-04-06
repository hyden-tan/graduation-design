import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { Layout, Menu, Modal, Form, Icon, Input, Button, message } from 'antd';
import store from '../store';
import axios from '../axios';

const { Header } = Layout;
const FormItem = Form.Item;

const logoStyle = {
    width: '120px',
    height: '31px',
    background: 'rgba(255,255,255,.2)',
    margin: '16px 28px 16px 0',
    float: 'left',
};

class LoginForm extends React.Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
            mode: '登录',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.onSubmit({
                    mode: this.state.mode,
                    ...values,
                })
            }
        });
    }

    render() {
      const { getFieldDecorator } = this.props.form;
      const { mode } = this.state; 

      return (
        <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
                {getFieldDecorator('userName', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                )}
            </FormItem>
            <FormItem>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                )}
            </FormItem>
            <FormItem>
                <Button type="primary" htmlType="submit">
                    {mode}
                </Button>
                <a style={{ marginLeft: '20px'}} onClick={() => this.setState({ mode: mode === '注册' ? '登录' : '注册' }) }>
                    {mode === '注册' ? '登录' : '注册'}
                </a>
            </FormItem>
        </Form>
      );
    }
  }
  
const WrappedLoginForm = Form.create()(LoginForm);


@inject('store')
@observer
export default class CustomHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loginModalVisible: false,
        }
    }

    onSubmit = (data) => {
        axios.post('/user', data)
            .then(response => {
                if (response.code !== 0) {
                    message.error(response.errMsg);
                } else {
                    store.save('user', { name: data.userName })
                    this.setState({ loginModalVisible: false })
                }
            })
            .catch(console.log)
    }

    render() {
        const { user } = this.props.store;
        const { loginModalVisible } = this.state;

        return (
            <Header>
                <div style={logoStyle}></div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={[ store.activeHeaderMenu ]}
                    onClick={({ key }) => { 
                        if ( key === '3') {
                            this.setState({ loginModalVisible: true });
                            store.save('activeHeaderMenu', store.activeHeaderMenu);
                        } else {
                            store.save('activeHeaderMenu', key);
                        }
                    }}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">文档</Menu.Item>
                    <Menu.Item key="2">题库</Menu.Item>

                    {
                        user.name ? (
                            <span style={{ float: 'right', color: 'gray' }} >hello {user.name}!</span>
                        ) : (
                            <Menu.Item key="3"
                                style={{ float: 'right', color: 'white' }} 
                                onClick={() => {
                                    
                                    console.log('sfa')
                                }}
                            >
                                登录
                            </Menu.Item>
                        )
                    }
                </Menu>
                <Modal 
                    title="登录"
                    visible={loginModalVisible}
                    footer={false}
                    onCancel={() => { this.setState({ loginModalVisible: false }) }}
                >
                    <WrappedLoginForm onSubmit={this.onSubmit}/>
                </Modal>
            </Header>
        );
    }
}