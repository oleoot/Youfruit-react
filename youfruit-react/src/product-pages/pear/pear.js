import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import "../product.css"
class Pear extends Component {
    constructor() {
        super();

        this.state = {
            inputValue: "1"
        }

    }

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
        console.log(this.state)
    }




    render() {
        const { name, price, addToCartNumber, addToCartProduct, info, addToTotal, input } = this.props;
        return (
            <div className="pear">
                <div className="container-sm">
                    <div className="product-wrap grid-container">
                        <div>
                            <img src={require(`../../img/products/pear.jpg`)} alt="pear" />
                        </div>

                        <div>
                            <p className="text-md">Фруктовые чипсы - груша</p>
                            <p className="text-md">89.00 грн.</p>
                            <p className="text-sm product-weight">70 г</p>
                            <p className="text-sm">Количество</p>
                            <input min="1" type="number" value={this.state.inputValue} onChange={this.handleChange} className="text-sm" />
                            <a onClick={() => {
                                addToTotal(info[2].price, this.state.inputValue, info[2].id)
                                addToCartNumber(info[2].id)
                                addToCartProduct(info[2].id, info[2].name, info[2].price, info[2].img, this.state.inputValue)
                                // input(this.state.inputValue)
                            }} href="#" className="btn text-sm">Добавить в корзину</a>
                        </div>
                        <div>
                            <p className="text-sm product-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit perspiciatis reiciendis excepturi autem deleniti, exercitationem nisi tempora quod architecto quia itaque. Eos cumque, quisquam voluptates quam consectetur sit voluptas neque, illo laudantium et corporis aliquam, magnam necessitatibus laboriosam quidem quos.
                    </p>
                            <p className="text-sm product-description"><span>Энергетическая ценность на 100 г продукта: </span>250 ккал</p>
                            <p className="text-sm product-description"><span>Срок годности: </span>6 месяцев</p>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}
export default Pear;
