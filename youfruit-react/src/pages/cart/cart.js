import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import "./cart.css"

class Cart extends Component {

    constructor() {
        super();
        this.state = {

            newInputValue: ''
        }
        console.log(this.newCartInsideInput)
    }

    handleChange = (event) => {
        const target = event.target
        const value = target.value
        const name = target.name;
        console.log(value)
        this.setState({
            [name]: value
        });

        console.log(this.state)
    }

    render() {

        const { cartInside, products, removeFromCartProduct, removeFromCartNumber, cartTotal, removeFromTotal, inputValue, input } = this.props;

        // this.setState({
        //     newCartInside: cartInside
        // })


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
        console.log(cartInside)
        return (
            <div className="cart-link" >
                <div className="cart-item">

                    {cartInside.map((item) => {

                        return (
                            <div className="cart-item-wrap">
                                <img src={item.img} alt="" />
                                <div>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                    <input type="number" value={this.state[item.id] || item.inputState} onChange={this.handleChange} name={item.id} className="text-sm" />
                                    <button type="button" onClick={() => {

                                        removeFromCartProduct(item)
                                        removeFromCartNumber(item.id)
                                        removeFromTotal(item.price, item.inputState)
                                    }
                                    }

                                    > Удалить товар</button>
                                </div>

                            </div>

                        )
                    })}
                    <div>Сумма заказа {cartTotal}.00 грн.</div>
                </div>
            </div >


        )
    }
}

export default Cart;
