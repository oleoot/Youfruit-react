import React, { Component } from 'react';
import "../product.css"


class Apple extends Component {
    constructor() {
        super();

        this.state = {
            inputValue: "1",
        }
    }

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }


    render() {
        const { addToCartNumber, addToCartProduct, info, addToTotal, cartTotal } = this.props;
        return (
            <div className="apple" >
                <div className="container-sm">
                    <div className="product-wrap grid-container">
                        <div>
                            <img src={require(`../../img/products/apple.jpg`)} alt="apple" />
                        </div>

                        <div id="item-apple">
                            <p className="text-md">Фруктовые чипсы - яблоко</p>
                            <p className="text-md">69.00 грн.</p>
                            <p className="text-sm product-weight">70 г</p>
                            <p className="text-sm">Количество</p>
                            <input min="1" type="number" value={this.state.inputValue} onChange={this.handleChange} className="text-sm" />
                            {cartTotal[info[0].id] !== 0 ?
                                <button disabled className="btn btn-added text-sm">Добавлено в корзину</button> :
                                <button onClick={() => {
                                    addToTotal(info[0].price, this.state.inputValue, info[0].id)
                                    addToCartNumber(info[0].id)
                                    addToCartProduct(info[0].id, info[0].name, info[0].price, info[0].img, this.state.inputValue)
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

export default Apple;
