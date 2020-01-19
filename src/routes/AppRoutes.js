import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contacts from '../components/Contacts';
import Header from '../components/Header';
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import Orders from '../components/Orders';
import Order from '../components/Order';
import Products from '../components/Products';

const Routes = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={Home} exact={true} />
                <Route path='/contacts' component={Contacts} />
                <Route path='/orders' component={Orders} />
                <Route path='/order/:category/:id' component={Order} />
                <Route path='/products' component={Products} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default Routes;