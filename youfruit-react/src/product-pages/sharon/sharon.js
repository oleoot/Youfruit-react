import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import "../product.css"


class Sharon extends Component {
    constructor() {
        super();

        this.state = {
            inputValue: "1",
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }


    render() {
        const { addToCartNumber, addToCartProduct, info, addToTotal, cartTotal } = this.props;
        return (
            <div className="sharon" >
                <div className="container-sm container-products">
                    <div className="back-btn back-btn-product">
                        <NavLink exact to="/shop" activeClassName="nav-active" className="text-lg nav-a  align-center flex-container"><img src={require(`../../img/icons/arrow-left.png`)} alt="arrow-left" className="arrow-left" />Магазин</NavLink>
                    </div>
                    <div className="product-wrap grid-container">
                        <div>
                            <img src={require(`../../img/products/sharon.jpg`)} alt="sharon" />
                        </div>

                        <div id="item-apple">
                            <p className="text-md">Фруктовые чипсы - шарон</p>
                            <p className="text-md">69.00 грн.</p>
                            <p className="text-sm product-weight">70 г</p>
                            <p className="text-sm">Количество</p>
                            <input min="1" type="number" value={this.state.inputValue} onChange={this.handleChange} className="text-sm" />
                            {cartTotal[info[6].id] !== 0 ?
                                <button disabled className="btn btn-added text-sm">Добавлено в корзину</button> :
                                <button onClick={() => {
                                    addToTotal(info[6].price, this.state.inputValue, info[6].id)
                                    addToCartNumber(info[6].id)
                                    addToCartProduct(info[6].id, info[6].name, info[6].price, info[6].img, this.state.inputValue)
                                }} className="btn text-sm">Добавить в корзину</button>
                            }
                        </div>
                        <div className="product-wrap-description">
                            <p className="text-sm product-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit perspiciatis reiciendis excepturi autem deleniti, exercitationem nisi tempora quod architecto quia itaque. Eos cumque, quisquam voluptates quam consectetur sit voluptas neque, illo laudantium et corporis aliquam, magnam necessitatibus laboriosam quidem quos.
                            </p>
                            <p className="text-sm product-description"><span>Энергетическая ценность на 100г продукта: </span>250 ккал</p>
                            <p className="text-sm product-description"><span>Срок годности: </span>6 месяцев</p>
                        </div>
                    </div>

                </div>
            </div>

        )
    }

}

export default Sharon;
