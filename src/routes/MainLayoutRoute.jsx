import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';
import Header from '../components/Header';
import Sider from '../components/Slider';

const { Content } = Layout;

const MainLayoutRoute = ({ component: Component, ...rest }) => (
    <Route
        render={props => (
            <Layout {...rest}>
                <Header/>
                <Layout>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                            <Component {...props} />
                        </Content>
                    </Layout>
                    <Sider/>
                </Layout>
            </Layout>
        )}
    />
);

MainLayoutRoute.propTypes = {
    component: PropTypes.func.isRequired
};

export default MainLayoutRoute;
