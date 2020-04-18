import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import "./cart.css"

class Cart extends Component {

    constructor() {
        super();
        this.state = {

            newInputValue: '',
            newTotal: ""
        }
        console.log(this.state.newTotal)
    }

    handleChange = (price, id, event) => {
        const target = event.target
        const value = target.value
        const name = target.name;
        const total = value * price
        const addToArr = [...this.state.newTotal];
        console.log(id)
        addToArr.splice(id, 1, total)
        console.log(total)
        this.setState({
            [name]: value,
            // newTotal: [...this.state.newTotal, total]
            newTotal: addToArr
        });

        console.log(this.state)
    }



    // newTotal = () => {
    //     console.log(this.state.newTotal)
    //     // const totalArr = this.state.newTotal.reduce((result, number) => result + number)
    //     // console.log(totalArr)
    //     this.setState({
    //         // newTotal: totalArr
    //     })
    // }



    render() {

        const { cartInside, products, removeFromCartProduct, removeFromCartNumber, cartTotal, removeFromTotal, inputValue, input } = this.props;
        // this.setState({
        //     newCartInside: cartInside
        // })
        console.log(cartTotal)
        // const sum = this.state.newTotal.reduce((result, number) => result + number)
        // console.log(sum)
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
                                    <input type="number" value={this.state[item.id] || item.inputState} onChange={
                                        // () => {
                                        this.handleChange.bind(this, item.price, item.id)
                                        // this.newTotal(this.state[item.id] * item.price)

                                        // }
                                    }
                                        name={item.id} className="text-sm" />
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
                    {/* <div>Сумма заказа {this.state[item.id] * item.price || cartTotal}.00 грн.</div> */}
                    <div>Сумма заказа {this.state.newTotal || cartTotal}.00 грн.</div>
                </div>
            </div >


        )
    }
}

export default Cart;
