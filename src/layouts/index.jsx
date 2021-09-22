import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';

const Layout = (props) => {
    return <div>
        <BrowserRouter>
            <Suspense fallback={<div>正在加载...</div>}>
                <Switch>
                    <Route exact path="/login" component={React.lazy(() => import(`../pages/login`))} />
                    <Route path="/" component={React.lazy(() => import(`../layouts/base-layout`))} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    </div>
}

export default Layout;