import React from 'react';
import { Switch } from 'react-router-dom';
// import NoMatch from 'pages/no-match';
import MainLayoutRoute from './MainLayoutRoute';
import routeConfig from './config';

export const Test = () => (<div/>);

const routes = (
    <Switch>
        {
            routeConfig.list.map(item => {
                const { name } = item;
                const exact = name === 'home';

                return (
                    <MainLayoutRoute key={name} {...item} exact={exact} />
                );
            })
        }
        <MainLayoutRoute component={<Test/>} />
    </Switch>
);

export default routes;
