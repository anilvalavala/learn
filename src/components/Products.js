import React from 'react';
import { connect } from 'react-redux';
import filteredProducts from '../selectors/Products';
import Product from './Product';

const Products = (props) => {
    const productsToView = filteredProducts(props.products, props.filters)
    return(
        <div>
            <h1>Products</h1>
            {
                productsToView.map((prod) => {
                    return(
                        <div key={prod.id}>
                            <Product {...prod} />
                            <button>Edit</button>
                        </div>
                    );
                })
            }
        </div> 
    );   
};

const mapStateToProps = (state) => ({
    products: state.products,
    filters: state.filters
});

export default connect(mapStateToProps)(Products);