const prodctsReducerDefaultState = [];

export default (state = prodctsReducerDefaultState, action) => {
    switch (action.type){
        case 'ADD_PRODUCT': {
            return state.concat(action.newProduct);
        }
        case 'REMOVE_PRODUCT': {
            return state.filter((product) => (product.id === action.id));
        }
        case 'UPDATE_PRODUCT': {
            return state.map((product) => {
                if(product.id === action.id)
                {
                    return {
                        ...product,
                        ...action.updatedProduct
                    }
                }
            });
        }
        default:
            return state;
    }
}