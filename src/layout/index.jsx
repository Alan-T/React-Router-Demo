import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Home from '../pages/home';
import User from '../pages/user';
import News from '../pages/news';

const BaseLayout = () => {
    return <div>
        <BrowserRouter>
            <Link to="/">Home</Link>
            <Link to="/user">User</Link>
            <Link to="/news">News</Link>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/user" component={User} />
                <Route exact path="/news" component={News} />
            </Switch>
        </BrowserRouter>
    </div>
}

export default BaseLayout;