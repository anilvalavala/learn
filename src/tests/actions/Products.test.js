import { addProduct, removeProduct, modifyProduct } from '../../actions/Products';

test('Test addProduct action generator', () => {
    const newProduct = {
        name: 'Milk',
        quantity: '1 litre',
        price: 100,
        description: 'Pure cow milk'
    }

    const result = addProduct(newProduct);

    expect(result).toEqual({
        type: 'ADD_PRODUCT',
        newProduct: {
            id: expect.any(String),
            name: newProduct.name,
            quantity: newProduct.quantity,
            price: newProduct.price,
            description: newProduct.description
        }
    });

})