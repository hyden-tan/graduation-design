import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { inject, observer } from 'mobx-react';
import { Layout, Menu, Modal, Form, Icon, Input, Button, message } from 'antd';
import store from '../store';
import axios from '../axios';
import history from '../history';

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

@withRouter
@inject('store')
@observer
export default class CustomHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loginModalVisible: false
        }
    }

    onSubmit = (data) => {
        axios.post('/user', data)
            .then(response => {
                if (response.code !== 0) {
                    message.error(response.errMsg);
                } else {
                    store.save('user', { id: response.userId, name: data.userName });
                    this.setState({ loginModalVisible: false });
                }
            })
            .catch(console.log)
    }

    onMenuClick = ({ key }) => {
        if ( key === 'login') {
            this.setState({ loginModalVisible: true });
        } else {
            this.setState({ menuKey: key });

            store.setSlider(key === 'doc');
            const path = key === 'doc' ? `helloWorld` : key;
            this.props.history.push(`/${path}`);
        }
    }

    render() {
        const { user } = this.props.store;
        const { loginModalVisible, menuKey } = this.state;

        return (
            <Header>
                <div style={logoStyle}></div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={[store.activeMenuKey]}
                    onClick={this.onMenuClick}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="doc">文档</Menu.Item>
                    <Menu.Item key="questions">题库</Menu.Item>
                    <Menu.Item key="test">考试</Menu.Item>
                    <Menu.Item key="ananyse">学习情况</Menu.Item>
                    {
                        user && user.name ? (
                            <span style={{ float: 'right', color: 'gray' }} >hello {user.name}!</span>
                        ) : (
                            <Menu.Item key="login"
                                style={{ float: 'right', color: 'white' }} 
                                onClick={() => this.setState({ loginModalVisible: true })}
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