import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div>
        <h1>My Business</h1>
        <NavLink activeClassName='isActive' to='/' exact={true}>Home</NavLink>
        <NavLink activeClassName='isActive' to='/orders'>Orders</NavLink>
        <NavLink activeClassName='isActive' to='/products'>Products</NavLink>
        <NavLink activeClassName='isActive' to='/contacts'>Contacts</NavLink>
    </div>
);

export default Header;