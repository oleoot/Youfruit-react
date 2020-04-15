import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import "../product.css"
class AppleCinnamon extends Component {
    render() {
        const { name, price, addToCartNumber, addToCartProduct, info } = this.props;
        console.log(info[1].name)
        return (
            <section className="apple-cinnamon">
                <div className="container-sm">
                    <div className="product-wrap grid-container">
                        <div>
                            <img src={require(`../../img/products/apple-cinnamon.jpg`)} alt="apple-cinnamon" />
                        </div>

                        <div>
                            <p className="text-md">Фруктовые чипсы - яблоко-корица</p>
                            <p className="text-md">69.00 грн.</p>
                            <p className="text-sm product-weight">70 г</p>
                            <p className="text-sm">Количество</p>
                            <input type="number" placeholder="1" className="text-sm" />
                            <a onClick={() => {
                                addToCartNumber()
                                addToCartProduct(info[1].id, info[1].name, info[1].price, info[1].img)
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
            </section>

        )
    }
}
export default AppleCinnamon;
