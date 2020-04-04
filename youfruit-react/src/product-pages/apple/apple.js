import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import "../product.css"
class Apple extends Component {
    render() {
        return (
            <div className="apple">
                <div className="apple-wrap grid-container">
                    <div>
                        <img src={require(`../../img/products/apple.jpg`)} alt="apple" />
                    </div>

                    <div>
                        <p className="text-md">Фруктовые чипсы - яблоко</p>
                        <div className="product-price-wrap flex-container">
                            <p className="text-sm shop-item-price">69.00 грн.</p>
                            <p className="text-sm">70 гр.</p>
                            <a href="#" className="btn text-md">Добавить в корзину</a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Apple;
