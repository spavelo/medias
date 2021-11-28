import React from 'react';
import {ProductsContainer} from "./Products.styles";
import Product from "./Product/Product.component";

const Products = (props) => {

    if (props.isLoading) return <div>Завантаження...</div>

    return (
            <ProductsContainer>
                {props.products
                    .filter(product => product !== undefined)
                    .map(product => <Product {...props} product={product} key={`${product.category}_${product.id}`}/>)}
            </ProductsContainer>
    );
};

export default Products;