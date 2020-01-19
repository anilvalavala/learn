import uuid from 'uuid';

//ADD_PRODUCT
export const addProduct = ({
    name, 
    quantity, 
    price, 
    description}) => 
({
    type: 'ADD_PRODUCT',
    newProduct: {
        id: uuid(),
        name,
        quantity,
        price,
        description
    }
});

//REMOVE_PRODUCT
export const removeProduct = (id) => 
({
    type: 'REMOVE_PRODUCT',
    id
});

//MODIFY_PRODUCT
export const modifyProduct = ({
    id, updatedProduct
}) =>
({
    type: 'UPDATE_PRODUCT',
    id,
    updatedProduct
})

