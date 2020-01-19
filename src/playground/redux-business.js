import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const productsReducerDefaultState = [];

const productsReducer = (state = productsReducerDefaultState, action) => {
    switch(action.type)
    {
        case 'ADD_PRODUCT': {
            const newProduct = action.newProduct;
            return [...state, newProduct]
        }
        case 'REMOVE_PRODUCT': {
            return state.filter((product) => { return product.id !== action.id })
        }
        case 'UPDATE_PRODUCT': {
            return state.map((product) => {
                if(product.id === action.id)
                {
                    return {
                        ...product,
                        name: action.name,
                        quantity: action.quantity,
                        price: action.price,
                        description: action.description
                    }                    
                }
            })
        }
        default:
            return state;
    }
}

const productFiltersReducerDefaultState = {
    text: '',
    sortBy: 'price',
    startDate: undefined,
    endDate: undefined
};

const productFiltersReducer = (state = productFiltersReducerDefaultState, action) => {
    switch(action.type){
        default: {
            return state;
        }
    }
}

const store = createStore(
    combineReducers({
        products: productsReducer,
        productFilters: productFiltersReducer
    })
);

store.subscribe(() => {
    console.log(store.getState().products)
});

//Action Generators
//Add Product
const addProduct = ({ name, quantity, price, description }) => ({
    type: 'ADD_PRODUCT',
    newProduct: {
        id: uuid(),
        name,
        quantity,
        price,
        description
    }
});

const removeProduct = ({ id }) => ({
    type: 'REMOVE_PRODUCT',
    id
});

const updateProduct = ({ id, name, quantity, price, description }) => ({
    type: 'UPDATE_PRODUCT',
    id,
    name,
    quantity,
    price, 
    description
});

const prodOne = store.dispatch(addProduct({
    name: 'Milk',
    quantity: '1 litre',
    price: 70,
    description: 'Pure cow milk'
}));

console.log(prodOne.newProduct.id);

const prodTwo = store.dispatch(addProduct({
    name: 'Grass',
    quantity: '1Kg',
    price: 1,
    description: 'CO4'
}));

store.dispatch(removeProduct({
    id: prodOne.newProduct.id
}));

store.dispatch(updateProduct({
    id: prodTwo.newProduct.id,
    name: 'Thunder Bird',
    quantity: 1,
    price: 175000,
    description: 'bike'
}));
