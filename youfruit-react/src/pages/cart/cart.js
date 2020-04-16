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

        const { cartInside, products, removeFromCartProduct, removeFromCartNumber } = this.props;
        // const newState = cartInside;
        // this.setState({
        //     inCart: newState
        // })
        // console.log(this.state);
        // console.log(this.addToCartProduct)

        // console.log(this.state.inCart.addToCartProduct)
        // console.log(cartInside);
        // console.log(products);
        // products.forEach((product) => {
        //     console.log(product.id);
        // })

        return (
            <div className="cart-link" >
                <div className="cart-item">

                    {cartInside.map((item) => {
                        console.log(item.name);
                        console.log(item.price);
                        console.log(item);
                        console.log(products)
                        return (
                            <div className="cart-item-wrap">
                                <img src={item.img} alt="" />
                                <div>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                    <button type="button" onClick={() => {

                                        removeFromCartProduct(item)
                                        removeFromCartNumber(item.id)
                                    }
                                    }

                                    > Удалить товар</button>
                                </div>

                            </div>
                        )
                    })}
                    {/* <div>Total{cartInside.map((cartItem) => {
                        const total = 0;

                        console.log(total)
                    })
                    }</div> */}
                </div>
            </div >


        )
    }
}

export default Cart;
