import React from 'react';
import Products from "../Products/Products.component";
import {connect} from "react-redux";
import {getAsyncGuitars} from "../../redux/productsReducer";
import {addToCart} from "../../redux/cartReducer";

class GuitarsContainer extends React.Component {

    componentDidMount() {
        this.props.getAsyncGuitars()
        document.title = 'Guitars| Medias'
        console.log('inside GuitarsContainer')
        console.log(this.props.guitars)
    }
    render() {
        return (
            <>
                <Products products={this.props.guitars}
                          isAuth={this.props.isAuth}
                          addToCart={this.props.addToCart}/>
            </>
        );
    }
}

const mstp = state => ({
    guitars: state.products.guitars,
    isAuth: state.auth.isAuth
})


export default connect(mstp, {
    getAsyncGuitars, addToCart
})(GuitarsContainer);