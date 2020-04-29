import React, { Component } from 'react';
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
                <div>
                    <table className="cart-item">

                        {cartInside.map((item) => {
                            return (
                                <tr className="cart-item-wrap">
                                    <td><img src={item.img} alt="" /></td>
                                    <td><p>{item.name}</p></td>
                                    <td><p>{item.price}</p></td>
                                    <td><input min="1" type="number" value={this.state[item.id] || item.inputState} onChange={
                                        this.handleChange.bind(this, item.price, item.id)
                                    }
                                        name={item.id} className="text-sm cart-item-input" /></td>
                                    <td><button className="delete-btn" type="button" onClick={() => {
                                        removeFromCartProduct(item)
                                        removeFromCartNumber(item.id)
                                        this.removeFromTotal(item.price, this.state[item.id], item.id)
                                        removeFromTotal(item.price, this.state[item.id], item.id)
                                    }
                                    }
                                    >X</button></td>
                                </tr>

                            )
                        })}
                    </table>
                    <div className="total">Сумма заказа {this.state.total}.00 грн.</div>
                    <button type="submit" className="btn btn-open-input" onClick={this.showInputsForm}>Заказать</button>
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
                    }
                </div>
            </div >


        )
    }
}

export default Cart;