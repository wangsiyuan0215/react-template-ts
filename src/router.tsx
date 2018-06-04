import * as React from 'react';
import { RouterAPI } from 'dva';
import { Switch, Route, Redirect, routerRedux } from 'dva/router';

import DefaultLayout from './layouts/default';
import routes, { routeType } from './router.config';

const dynamic = require('dva/dynamic').default;
const { ConnectedRouter } = routerRedux;
  
export const router = ({ history, app }: RouterAPI): JSX.Element => {
    const renderRedirect = (): JSX.Element => <Redirect to="/dashboard" />;
    return (
        <ConnectedRouter history={history}>
            <DefaultLayout>
                <Switch>
                    <Route exact path="/" render={renderRedirect} />
                    {
                        routes.map(({ path, models = null, component = null }: routeType, key) => (
                            <Route
                                key={key}
                                exact
                                path={path}
                                component={dynamic({ app, models, component })}
                            />
                        ))
                    }
                </Switch>
            </DefaultLayout>
        </ConnectedRouter>
    );
};

export default router;
