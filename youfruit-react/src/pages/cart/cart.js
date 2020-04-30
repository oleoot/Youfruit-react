import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import "./cart.css"

class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {

            newInputValue: '',
            newTotal: props.cartTotal,
            total: 0,
            inputData: false
        }
    }

    handleChange = (price, id, event) => {
        const target = event.target
        const value = target.value
        const name = target.name;
        const total = value * price
        const addToArr = [...this.state.newTotal];
        addToArr.splice(id, 1, total)
        this.setState({
            [name]: value,
            newTotal: addToArr
        });
    }

    componentDidMount = () => {
        const arr = [...this.state.newTotal];
        let totalSum = 0;
        arr.forEach((item) => {
            totalSum += item
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
            })
            this.setState({
                total: totalSum
            })
        }
    }

    removeFromTotal = (price, quantity, id) => {
        const addToArr = [...this.state.newTotal];
        addToArr.splice(id, 1, 0)
        this.setState({
            newTotal: addToArr
        });
    }

    showInputsForm = () => {
        this.setState({
            inputData: true

        })
        console.log(this.state)
    }

    closeInputsForm = () => {
        this.setState({
            inputData: false

        })
        console.log(this.state)
    }


    render() {
        const { cartInside, removeFromCartProduct, removeFromCartNumber, removeFromTotal } = this.props;
        return (
            <div className="cart-link" >
                <div className="headline-wrap">
                    <p className="text-xl">Корзина</p>
                </div>
                <div className="underline"></div>
                <div className="container-xs cart-link-wrap">
                    {this.state.total === 0 ?
                        <p className="text-md empty-cart">Корзина пуста</p> :
                        <p></p>
                    }
                    <div className="cart-item">

                        {cartInside.map((item) => {
                            return (
                                <div className="cart-item-wrap grid-container align-center">
                                    <div className="cart-img"><img src={item.img} alt="" /></div>
                                    <div className="cart-name"><p className="text-sm">{item.name}</p></div>
                                    <div className="cart-price"><p className="text-sm">{item.price}грн.</p></div>
                                    <div className="cart-input flex-container-center align-center"><input min="1" type="number" value={this.state[item.id] || item.inputState} onChange={
                                        this.handleChange.bind(this, item.price, item.id)
                                    }
                                        name={item.id} className="text-sm cart-item-input" />
                                        <p className="text-sm"> шт.</p></div>
                                    <div className="cart-remove"><button className="delete-btn" type="button" onClick={() => {
                                        removeFromCartProduct(item)
                                        removeFromCartNumber(item.id)
                                        this.removeFromTotal(item.price, this.state[item.id], item.id)
                                        removeFromTotal(item.price, this.state[item.id], item.id)
                                    }
                                    }
                                    >X</button></div>
                                </div>

                            )
                        })}
                    </div>
                    {/* <div className="total text-lg">Сумма заказа {this.state.total}.00 грн.</div>
                    {this.state.total === 0 ?
                        <Link to="/shop" className="btn btn-open-input text-sm">Перейти в магазин</Link> :
                        <button type="submit" className="btn btn-open-input text-sm" onClick={this.showInputsForm}>Сделать заказ</button>
                    }
                    {this.state.inputData === true ?
                        <div className="order-input order-input-active">
                            <button onClick={this.closeInputsForm} className="input-btn">X</button>
                            <form action="telegram.php">
                                <input type="text" placeholder="name" />
                                <input type="text" placeholder="phone" />
                                <input type="text" placeholder="msg" />
                                <button type="submit" className="btn btn-open-input">Сделать заказ</button>
                            </form>
                        </div> :
                        <div className="order-input">
                            <form action="telegram.php">
                                <input type="text" placeholder="name" />
                                <input type="text" placeholder="phone" />
                                <input type="text" placeholder="msg" />
                            </form>
                        </div>
                    } */}
                </div>
                <div className="container-xs">
                    <div className="total-wrap">
                        <div className="total text-md">Сумма заказа {this.state.total}.00 грн.</div>
                        {this.state.total === 0 ?
                            <Link to="/shop" className="btn btn-open-input text-sm">Перейти в магазин</Link> :
                            <button type="submit" className="btn btn-open-input text-sm" onClick={this.showInputsForm}>Сделать заказ</button>
                        }

                        {this.state.inputData === true ?
                            <div className="transparent-bg">
                                <div className="order-input order-input-active">
                                    <div className="grid-container credentials-wrap">
                                        <div></div>
                                        <div><p className="text-lg">Контактные данные</p></div>
                                        <button onClick={this.closeInputsForm} className="input-btn text-md">X</button>
                                    </div>
                                    <form action="telegram.php">
                                        <input type="name" placeholder="Имя" />
                                        <input type="tel" placeholder="Мобильный телефон" />
                                        <input type="text" placeholder="Комментарий к заказу" />
                                        <button type="submit" className="btn btn-open-input text-sm">Сделать заказ</button>
                                    </form>
                                </div>
                            </div> :
                            <div className="order-input">
                                <form action="telegram.php">
                                    <input type="text" placeholder="name" />
                                    <input type="text" placeholder="phone" />
                                    <input type="text" placeholder="msg" />
                                </form>
                            </div>

                        }

                    </div>
                </div>
            </div >


        )
    }
}

export default Cart;
