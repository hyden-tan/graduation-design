import React from 'react';
import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;
const { SubMenu } = Menu;

export default () => (
    <Sider width={200} style={{ background: '#fff' }}>
        <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
        >
            <SubMenu key="sub1" title={<span>基础</span>}>
                <Menu.Item key="1">Hello World</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span>进阶</span>}>
                <Menu.Item key="2">option</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span>延伸</span>}>
                <Menu.Item key="3">option</Menu.Item>
            </SubMenu>
        </Menu>
    </Sider>
)
