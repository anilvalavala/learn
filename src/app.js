import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes/AppRoutes';
import store from './store/Store';
import { addProduct } from './actions/Products';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const businessStore = store();

businessStore.dispatch(addProduct({ name: 'Milk', quantity: '1 litre', price: 100, description: 'Pure cow milk'}));
businessStore.dispatch(addProduct({ name: 'Ghee', quantity: '1 litre', price: 1000, description: 'Pure cow ghee'}))

const jsx = (
    <Provider store={businessStore}>
        <Routes />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));