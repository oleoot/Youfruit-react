import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import "./shop.css"
class Shop extends Component {
    render() {
        return (

            <div className="shop">
                <div className="container">
                    <p className="text-llg section-headline">Пастила</p>
                    <div className="underline"></div>
                    <section className="shop-wrap grid-container">
                        <div className="shop-item">
                            <img src={require(`../../img/products/apple.png`)} alt="logo" />
                            <p className="text-md shop-item-name">Фруктовые чипсы - яблоко</p>
                            <div className="shop-price-wrap flex-container">
                                <p className="text-sm shop-item-price">69.00 грн.</p>
                                <p className="text-sm">70 гр.</p>
                            </div>

                        </div>
                        <div className="shop-item">
                            <img src={require(`../../img/products/apple-cinnamon.png`)} alt="logo" />
                            <p className="text-md shop-item-name">Фруктовые чипсы - яблоко</p>
                            <div className="shop-price-wrap flex-container">
                                <p className="text-sm shop-item-price">69.00 грн.</p>
                                <p className="text-sm">70 гр.</p>
                            </div>

                        </div>
                        <div className="shop-item">
                            <img src={require(`../../img/products/apple.png`)} alt="logo" />
                            <p className="text-md shop-item-name">Фруктовые чипсы - яблоко</p>
                            <div className="shop-price-wrap flex-container">
                                <p className="text-sm shop-item-price">69.00 грн.</p>
                                <p className="text-sm">70 гр.</p>
                            </div>

                        </div>
                        <div className="shop-item">
                            <img src={require(`../../img/products/apple.png`)} alt="logo" />
                            <p className="text-md shop-item-name">Фруктовые чипсы - яблоко</p>
                            <div className="shop-price-wrap flex-container">
                                <p className="text-sm shop-item-price">69.00 грн.</p>
                                <p className="text-sm">70 гр.</p>
                            </div>

                        </div>
                        <div className="shop-item">
                            <img src={require(`../../img/products/apple.png`)} alt="logo" />
                            <p className="text-md shop-item-name">Фруктовые чипсы - яблоко</p>
                            <div className="shop-price-wrap flex-container">
                                <p className="text-sm shop-item-price">69.00 грн.</p>
                                <p className="text-sm">70 гр.</p>
                            </div>

                        </div>
                        <div className="shop-item">
                            <img src={require(`../../img/products/apple.png`)} alt="logo" />
                            <p className="text-md shop-item-name">Фруктовые чипсы - яблоко</p>
                            <div className="shop-price-wrap flex-container">
                                <p className="text-sm shop-item-price">69.00 грн.</p>
                                <p className="text-sm">70 гр.</p>
                            </div>

                        </div>
                        <div className="shop-item">
                            <img src={require(`../../img/products/apple.png`)} alt="logo" />
                            <p className="text-md shop-item-name">Фруктовые чипсы - яблоко</p>
                            <div className="shop-price-wrap flex-container">
                                <p className="text-sm shop-item-price">69.00 грн.</p>
                                <p className="text-sm">70 гр.</p>
                            </div>

                        </div>
                        <div className="shop-item">
                            <img src={require(`../../img/products/apple.png`)} alt="logo" />
                            <p className="text-md shop-item-name">Фруктовые чипсы - яблоко</p>
                            <div className="shop-price-wrap flex-container">
                                <p className="text-sm shop-item-price">69.00 грн.</p>
                                <p className="text-sm">70 гр.</p>
                            </div>

                        </div>
                        <div className="shop-item">
                            <img src={require(`../../img/products/apple.png`)} alt="logo" />
                            <p className="text-md shop-item-name">Фруктовые чипсы - яблоко</p>
                            <div className="shop-price-wrap flex-container">
                                <p className="text-sm shop-item-price">69.00 грн.</p>
                                <p className="text-sm">70 гр.</p>
                            </div>

                        </div>
                        <div className="shop-item">
                            <img src={require(`../../img/products/apple.png`)} alt="logo" />
                            <p className="text-md shop-item-name">Фруктовые чипсы - яблоко</p>
                            <div className="shop-price-wrap flex-container">
                                <p className="text-sm shop-item-price">69.00 грн.</p>
                                <p className="text-sm">70 гр.</p>
                            </div>

                        </div>

                    </section>


                    <p className="text-llg section-headline">Фруктовые чипсы</p>
                    <div className="underline"></div>


                    <section className="shop-wrap grid-container">
                        <div className="shop-item">
                            <img src={require(`../../img/products/apple.png`)} alt="logo" />
                            <p className="text-md shop-item-name">Фруктовые чипсы - яблоко</p>
                            <div className="shop-price-wrap flex-container">
                                <p className="text-sm shop-item-price">69.00 грн.</p>
                                <p className="text-sm">70 гр.</p>
                            </div>

                        </div>
                        <div className="shop-item">
                            <img src={require(`../../img/products/apple.png`)} alt="logo" />
                            <p className="text-md shop-item-name">Фруктовые чипсы - яблоко</p>
                            <div className="shop-price-wrap flex-container">
                                <p className="text-sm shop-item-price">69.00 грн.</p>
                                <p className="text-sm">70 гр.</p>
                            </div>

                        </div>
                        <div className="shop-item">
                            <img src={require(`../../img/products/apple.png`)} alt="logo" />
                            <p className="text-md shop-item-name">Фруктовые чипсы - яблоко</p>
                            <div className="shop-price-wrap flex-container">
                                <p className="text-sm shop-item-price">69.00 грн.</p>
                                <p className="text-sm">70 гр.</p>
                            </div>

                        </div>
                        <div className="shop-item">
                            <img src={require(`../../img/products/apple.png`)} alt="logo" />
                            <p className="text-md shop-item-name">Фруктовые чипсы - яблоко</p>
                            <div className="shop-price-wrap flex-container">
                                <p className="text-sm shop-item-price">69.00 грн.</p>
                                <p className="text-sm">70 гр.</p>
                            </div>

                        </div>
                        <div className="shop-item">
                            <img src={require(`../../img/products/apple.png`)} alt="logo" />
                            <p className="text-md shop-item-name">Фруктовые чипсы - яблоко</p>
                            <div className="shop-price-wrap flex-container">
                                <p className="text-sm shop-item-price">69.00 грн.</p>
                                <p className="text-sm">70 гр.</p>
                            </div>

                        </div>
                        <div className="shop-item">
                            <img src={require(`../../img/products/apple.png`)} alt="logo" />
                            <p className="text-md shop-item-name">Фруктовые чипсы - яблоко</p>
                            <div className="shop-price-wrap flex-container">
                                <p className="text-sm shop-item-price">69.00 грн.</p>
                                <p className="text-sm">70 гр.</p>
                            </div>

                        </div>
                        <div className="shop-item">
                            <img src={require(`../../img/products/apple.png`)} alt="logo" />
                            <p className="text-md shop-item-name">Фруктовые чипсы - яблоко</p>
                            <div className="shop-price-wrap flex-container">
                                <p className="text-sm shop-item-price">69.00 грн.</p>
                                <p className="text-sm">70 гр.</p>
                            </div>

                        </div>
                        <div className="shop-item">
                            <img src={require(`../../img/products/apple.png`)} alt="logo" />
                            <p className="text-md shop-item-name">Фруктовые чипсы - яблоко</p>
                            <div className="shop-price-wrap flex-container">
                                <p className="text-sm shop-item-price">69.00 грн.</p>
                                <p className="text-sm">70 гр.</p>
                            </div>

                        </div>
                        <div className="shop-item">
                            <img src={require(`../../img/products/apple.png`)} alt="logo" />
                            <p className="text-md shop-item-name">Фруктовые чипсы - яблоко</p>
                            <div className="shop-price-wrap flex-container">
                                <p className="text-sm shop-item-price">69.00 грн.</p>
                                <p className="text-sm">70 гр.</p>
                            </div>

                        </div>
                        <div className="shop-item">
                            <img src={require(`../../img/products/apple.png`)} alt="logo" />
                            <p className="text-md shop-item-name">Фруктовые чипсы - яблоко</p>
                            <div className="shop-price-wrap flex-container">
                                <p className="text-sm shop-item-price">69.00 грн.</p>
                                <p className="text-sm">70 гр.</p>
                            </div>

                        </div>

                    </section>



                </div>
            </div>
        )
    }
}
export default Shop;
