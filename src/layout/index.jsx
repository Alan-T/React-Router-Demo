import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

const BaseLayout = (props) => {
    return <div>
        <BrowserRouter>
            <Link to="/">Home</Link>
            <Link to="/user">User</Link>
            <Link to="/news">News</Link>
            <Suspense fallback={<div>正在加载...</div>}>
                <Switch>
                    <Route exact path="/" component={React.lazy(() => import(`../pages/home`))} />
                    <Route exact path="/user" component={React.lazy(() => import(`../pages/user`))} />
                    <Route exact path="/news" component={React.lazy(() => import(`../pages/news`))} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    </div>
}

export default BaseLayout;