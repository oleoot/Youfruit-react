import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import "./cart.css"

class Cart extends Component {
    constructor() {
        super();
        this.state = {
            inCart: []
        }
    }

    render() {
        console.log(this.addToCartProduct)
        const { cartInside } = this.props;
        console.log(this.state.inCart.addToCartProduct)
        console.log(cartInside);
        return (
            <div className="cart-link" >
                <div className="cart-item">
                    <div>{cartInside.forEach(function (item) {
                        console.log(item);
                    })}

                    </div>
                </div>
            </div>

        )
    }
}

export default Cart;
