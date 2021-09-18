import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';

const BaseLayout = (props) => {
    debugger
    return <div>
        <BrowserRouter>
            <Link to="/">Home</Link>
            <Link to="/news">News</Link>
            <Link to="/setting">Setting</Link>
            <Suspense fallback={<div>正在加载...</div>}>
                <Switch>
                    {/* <Redirect to="/home" /> */}
                    <Route exact path="/" component={React.lazy(() => import(`../pages/home`))} />
                    <Route exact path="/news" component={React.lazy(() => import(`../pages/news`))} />
                    <Route exact path="/setting" component={React.lazy(() => import(`../pages/setting`))} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    </div>
}

export default BaseLayout;