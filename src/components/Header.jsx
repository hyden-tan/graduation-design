import React from 'react';
import { Layout, Menu  } from 'antd';

const { Header } = Layout;

export default () => (
    <Header className="header">
        <div className="logo" />
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
        >
            <Menu.Item key="1">文档</Menu.Item>
            <Menu.Item key="2">题库</Menu.Item>
        </Menu>
    </Header>
)