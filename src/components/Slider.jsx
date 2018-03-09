import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;
const { SubMenu } = Menu;

@withRouter
export default class WrapSider extends React.Component {
    toggleDoc = ({ key }) => {
        this.props.history.push(`/doc/${key}`);
    }

    render() {

        return (
            <Sider width={200} style={{background: '#fff'}}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{height: '100%', borderRight: 0}}
                    onClick={this.toggleDoc}
                >
                    <SubMenu key="sub1" title={<span>基础</span>}>
                        <Menu.Item key="helloWorld">Hello World</Menu.Item>
                        <Menu.Item key="keywordAndSymbols">符号和关键字</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span>进阶</span>}>
                        <Menu.Item key="2">option</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span>延伸</span>}>
                        <Menu.Item key="3">option</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        );
    }
}