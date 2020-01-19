import { createStore, combineReducers } from 'redux';
import productsReducer from '../reducers/Products';
import filtersReducer from '../reducers/Filters';

export default () => {
    return createStore (
        combineReducers({
            products: productsReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}