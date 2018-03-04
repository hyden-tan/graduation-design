import React from 'react';
import { Layout, Menu  } from 'antd';
import store from '../store';

const { Header } = Layout;

const logoStyle = {
    width: '120px',
    height: '31px',
    background: 'rgba(255,255,255,.2)',
    margin: '16px 28px 16px 0',
    float: 'left',
};

export default () => (
    <Header>
        <div style={logoStyle}></div>
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[ store.activeHeaderMenu ]}
            onClick={({ key }) => { store.save('activeHeaderMenu', key) }}
            style={{ lineHeight: '64px' }}
        >
            <Menu.Item key="1">文档</Menu.Item>
            <Menu.Item key="2">题库</Menu.Item>
        </Menu>
    </Header>
)