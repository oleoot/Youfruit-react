import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import "./cart.css"

class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {

            newInputValue: '',
            newTotal: props.cartTotal,
            total: 0
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

    componentDidMount = () => {
        const arr = [...this.state.newTotal];
        let totalSum = 0;
        arr.forEach((item) => {
            totalSum += item
            console.log(totalSum)
        })
        this.setState({
            total: totalSum
        })
    }


    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.newTotal != this.state.newTotal) {
            const arr = [...this.state.newTotal];
            let totalSum = 0;
            arr.forEach((item) => {
                totalSum += item
                console.log(totalSum)
            })
            this.setState({
                total: totalSum
            })
        }
    }
    // newTotal = () => {
    //     console.log(this.state.newTotal)
    //     // const totalArr = this.state.newTotal.reduce((result, number) => result + number)
    //     // console.log(totalArr)
    //     this.setState({
    //         // newTotal: totalArr
    //     })
    // }




    removeFromTotal = (price, quantity, id) => {
        // let updTotal = +price * quantity
        console.log(price);
        console.log(quantity);
        const addToArr = [...this.state.newTotal];
        console.log(id)
        addToArr.splice(id, 1, 0)
        this.setState({

            newTotal: addToArr
        });
    }




    render() {

        const { cartInside, products, removeFromCartProduct, removeFromCartNumber, cartTotal, removeFromTotal, inputValue, input } = this.props;
        // this.setState({
        //     newCartInside: cartInside
        // })
        console.log(cartTotal)
        console.log(this.state.newTotal)
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

        return (
            <div className="cart-link" >
                <div className="cart-item">

                    {cartInside.map((item) => {
                        console.log(this.state[item.id])
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
                                        this.removeFromTotal(item.price, this.state[item.id], item.id)
                                    }
                                    }

                                    > Удалить товар</button>
                                </div>
                            </div>

                        )
                    })}
                    {/* <div>Сумма заказа {this.state[item.id] * item.price || cartTotal}.00 грн.</div> */}
                    <div>Сумма заказа {this.state.total}.00 грн.</div>
                </div>
            </div >


        )
    }
}

export default Cart;
