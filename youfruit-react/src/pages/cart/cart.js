import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import "../../styles/style.css"

class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {

            newInputValue: '',
            newTotal: props.cartTotal,
            total: 0,
            inputData: false,
            orderProducts: [],
            userName: '',
            userEmail: '',
            userComments: ''
        }
        this.handleUserInputChange = this.handleUserInputChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
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


    handleUserInputChange(event) {
        const target = event.target;
        console.log(target)
        const value = target.value;
        console.log(value)
        const name = target.name;
        console.log(name)
        this.setState({
            [name]: value
        });
    }


    componentDidMount = () => {
        window.scrollTo(0, 0);
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

    addToOrder = (itemName, itemPrice, itemQuantity, total, orderState) => {
        const order = {
            name: itemName,
            price: itemPrice,
            quantity: itemQuantity,
        }
        this.setState({
            orderProducts: order
        })

        console.log(this.state.orderProducts)

    }
    makeOrder = (orderArr, total, userName, userEmail, userComments) => {
        console.log(orderArr)
        const orderCompl = {
            products: orderArr,
            total: total,
            name: userName,
            phone: userEmail,
            comments: userComments
        }
        const API_URL = 'http://localhost:5000/order';
        fetch(API_URL, {
            method: "POST",
            body: JSON.stringify(orderCompl),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    }

    render() {
        const { cartInside, removeFromCartProduct, removeFromCartNumber, removeFromTotal } = this.props;
        let prArray = [];
        return (
            <div className="cart-page" >
                <section className="cart">
                    <div className="container">
                        <div className="section-headline">
                            <div className="section-headline_underline"></div>
                            <div className="section-headline__textWrap">
                                <p className="section-headline_text text_lg">Корзина</p>
                            </div>
                            <div className="section-headline_underline"></div>
                        </div>
                        <div className="cart__innerWrap">
                            <div className="cart-leftPane">
                                {this.state.total === 0 ?
                                    <p className="cart-leftPane__defaultText text_lg font_regular">Корзина пуста</p> :
                                    <p></p>
                                }
                                {cartInside.map((item) => {
                                    const orderItem = {
                                        name: item.name,
                                        price: item.price,
                                        quantity: this.state[item.id] || item.inputState,
                                    }
                                    prArray.push(orderItem)
                                    return (
                                        <div className="cart-productItem">
                                            <div>
                                                <img src={item.img} alt="" className="cart-productItem__img" />
                                            </div>
                                            <div className="cart-productItem__name">
                                                <p className="text_md">{item.name}</p>
                                            </div>
                                            <div className="cart-productItem__price">
                                                <p className="text_md">{item.price}грн.</p>
                                            </div>
                                            <div className="cart-productItem__inputWrap"><input min="1" type="number" className="cart-productItem__input" value={this.state[item.id] || item.inputState} onChange={
                                                this.handleChange.bind(this, item.price, item.id)
                                            }
                                                name={item.id} className="cart-productItem__input text-sm" />
                                                <p className="text_sm"> шт.</p></div>
                                            <div className="cart-productItem__remove">
                                                <button className="cart-productItem__deleteBtn" type="button" onClick={() => {
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
                            <div className="cart-rightPane">
                                <div className="cart-rightPane__total text_lg font_semibold">Сумма заказа: {this.state.total}.00 грн.</div>
                                <div className="cart-rightPane__underline"></div>
                                <p className="cart-rightPane__formName text_lg font_regular">Контактные данные</p>
                                <form className="cart-form">
                                    <label className="cart-form__label text_md font_regular">Имя</label>
                                    <input type="name" placeholder="Имя" name="userName" value={this.state.userName} onChange={this.handleUserInputChange} className="cart-form__input" />
                                    <label className="cart-form__label text_md font_regular">Телефон</label>
                                    <input type="tel" placeholder="Мобильный телефон" name="userEmail" value={this.state.userEmail} onChange={this.handleUserInputChange} className="cart-form__input" />
                                    <label className="cart-form__label text_md font_regular">Комментарий к заказу</label>
                                    <input type="text" placeholder="Комментарий к заказу" name="userComments" value={this.state.userComments} onChange={this.handleUserInputChange} className="cart-form__input" />
                                </form>
                                {this.state.total === 0 ?
                                    <Link to="/shop" className="btn btn-open-input text-sm">Перейти в магазин</Link> :
                                    <div className="btn btn-open-input text-sm" onClick={() => {
                                        this.showInputsForm()
                                        this.makeOrder(prArray, this.state.total, this.state.userName, this.state.userEmail, this.state.userComments)
                                    }
                                    }
                                    >Сделать заказ</div>
                                }

                                {/* {this.state.inputData === true ?
                                    <div className="transparent-bg">
                                        <div className="order-input order-input-active">
                                            <div className="grid-container credentials-wrap">
                                                <div></div>
                                                <div><p className="text-lg">Контактные данные</p></div>
                                                <button onClick={this.closeInputsForm} className="input-btn text-md">X</button>
                                            </div>
                                            <div>
                                                Ok
                                            </div>
                                        </div>
                                    </div> : null
                                } */}
                            </div>
                        </div>
                    </div>
                </section>
            </div >


        )
    }
}

export default Cart;
