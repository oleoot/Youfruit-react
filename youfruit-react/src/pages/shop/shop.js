import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import Apple from '../../product-pages/apple/apple';
import "./shop.css"
class Shop extends Component {
    render() {
        return (
            <div className="shop">
                <div className="container">
                    <p className="text-llg section-headline">Пастила</p>
                    <div className="underline"></div>
                    <section className="shop-wrap grid-container">
                        <Link to="/shop:apple" className="shop-item">
                            <div className="shop-img-wrap">
                                <img src={require(`../../img/products/apple.jpg`)} alt="logo" />
                                <div className="shop-weight flex-container-center align-center">
                                    <p className="text-sx">70 г</p>
                                </div>
                            </div>
                            <p className="text-md shop-item-name">Фруктовые чипсы - яблоко</p>
                            <div className="shop-price-wrap flex-container">
                                <p className="text-sm shop-item-price">69.00 грн.</p>
                                {/* <p className="text-sm">70 гр.</p> */}
                            </div>

                        </Link>
                        <div className="shop-item">
                            <img src={require(`../../img/products/apple-cinnamon.jpg`)} alt="logo" />
                            <p className="text-md shop-item-name">Фруктовые чипсы - яблоко</p>
                            <div className="shop-price-wrap flex-container">
                                <p className="text-sm shop-item-price">69.00 грн.</p>
                                <p className="text-sm">70 гр.</p>
                            </div>

                        </div>
                        <div className="shop-item">
                            <img src={require(`../../img/products/pear.jpg`)} alt="logo" />
                            <p className="text-md shop-item-name">Фруктовые чипсы - яблоко</p>
                            <div className="shop-price-wrap flex-container">
                                <p className="text-sm shop-item-price">69.00 грн.</p>
                                <p className="text-sm">70 гр.</p>
                            </div>

                        </div>
                        <div className="shop-item">
                            <img src={require(`../../img/products/banana.jpg`)} alt="logo" />
                            <p className="text-md shop-item-name">Фруктовые чипсы - яблоко</p>
                            <div className="shop-price-wrap flex-container">
                                <p className="text-sm shop-item-price">69.00 грн.</p>
                                <p className="text-sm">70 гр.</p>
                            </div>

                        </div>
                        <div className="shop-item">
                            <img src={require(`../../img/products/orange.jpg`)} alt="logo" />
                            <p className="text-md shop-item-name">Фруктовые чипсы - яблоко</p>
                            <div className="shop-price-wrap flex-container">
                                <p className="text-sm shop-item-price">69.00 грн.</p>
                                <p className="text-sm">70 гр.</p>
                            </div>

                        </div>
                        <div className="shop-item">
                            <img src={require(`../../img/products/kiwi.jpg`)} alt="logo" />
                            <p className="text-md shop-item-name">Фруктовые чипсы - яблоко</p>
                            <div className="shop-price-wrap flex-container">
                                <p className="text-sm shop-item-price">69.00 грн.</p>
                                <p className="text-sm">70 гр.</p>
                            </div>

                        </div>
                        <div className="shop-item">
                            <img src={require(`../../img/products/sharon.jpg`)} alt="logo" />
                            <p className="text-md shop-item-name">Фруктовые чипсы - яблоко</p>
                            <div className="shop-price-wrap flex-container">
                                <p className="text-sm shop-item-price">69.00 грн.</p>
                                <p className="text-sm">70 гр.</p>
                            </div>

                        </div>
                        <div className="shop-item">
                            <img src={require(`../../img/products/mango.jpg`)} alt="logo" />
                            <p className="text-md shop-item-name">Фруктовые чипсы - яблоко</p>
                            <div className="shop-price-wrap flex-container">
                                <p className="text-sm shop-item-price">69.00 грн.</p>
                                <p className="text-sm">70 гр.</p>
                            </div>

                        </div>
                        <div className="shop-item">
                            <img src={require(`../../img/products/pineapple.jpg`)} alt="logo" />
                            <p className="text-md shop-item-name">Фруктовые чипсы - яблоко</p>
                            <div className="shop-price-wrap flex-container">
                                <p className="text-sm shop-item-price">69.00 грн.</p>
                                <p className="text-sm">70 гр.</p>
                            </div>

                        </div>
                        <div className="shop-item">
                            <img src={require(`../../img/products/mix.jpg`)} alt="logo" />
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
                            <img src={require(`../../img/products/apple.jpg`)} alt="logo" />
                            <p className="text-md shop-item-name">Фруктовые чипсы - яблоко</p>
                            <div className="shop-price-wrap flex-container">
                                <p className="text-sm shop-item-price">69.00 грн.</p>
                                <p className="text-sm">70 гр.</p>
                            </div>

                        </div>
                        <div className="shop-item">
                            <img src={require(`../../img/products/apple.jpg`)} alt="logo" />
                            <p className="text-md shop-item-name">Фруктовые чипсы - яблоко</p>
                            <div className="shop-price-wrap flex-container">
                                <p className="text-sm shop-item-price">69.00 грн.</p>
                                <p className="text-sm">70 гр.</p>
                            </div>

                        </div>
                        <div className="shop-item">
                            <img src={require(`../../img/products/apple.jpg`)} alt="logo" />
                            <p className="text-md shop-item-name">Фруктовые чипсы - яблоко</p>
                            <div className="shop-price-wrap flex-container">
                                <p className="text-sm shop-item-price">69.00 грн.</p>
                                <p className="text-sm">70 гр.</p>
                            </div>

                        </div>
                        <div className="shop-item">
                            <img src={require(`../../img/products/apple.jpg`)} alt="logo" />
                            <p className="text-md shop-item-name">Фруктовые чипсы - яблоко</p>
                            <div className="shop-price-wrap flex-container">
                                <p className="text-sm shop-item-price">69.00 грн.</p>
                                <p className="text-sm">70 гр.</p>
                            </div>

                        </div>
                        <div className="shop-item">
                            <img src={require(`../../img/products/apple.jpg`)} alt="logo" />
                            <p className="text-md shop-item-name">Фруктовые чипсы - яблоко</p>
                            <div className="shop-price-wrap flex-container">
                                <p className="text-sm shop-item-price">69.00 грн.</p>
                                <p className="text-sm">70 гр.</p>
                            </div>

                        </div>
                        <div className="shop-item">
                            <img src={require(`../../img/products/apple.jpg`)} alt="logo" />
                            <p className="text-md shop-item-name">Фруктовые чипсы - яблоко</p>
                            <div className="shop-price-wrap flex-container">
                                <p className="text-sm shop-item-price">69.00 грн.</p>
                                <p className="text-sm">70 гр.</p>
                            </div>

                        </div>
                        <div className="shop-item">
                            <img src={require(`../../img/products/apple.jpg`)} alt="logo" />
                            <p className="text-md shop-item-name">Фруктовые чипсы - яблоко</p>
                            <div className="shop-price-wrap flex-container">
                                <p className="text-sm shop-item-price">69.00 грн.</p>
                                <p className="text-sm">70 гр.</p>
                            </div>

                        </div>
                        <div className="shop-item">
                            <img src={require(`../../img/products/apple.jpg`)} alt="logo" />
                            <p className="text-md shop-item-name">Фруктовые чипсы - яблоко</p>
                            <div className="shop-price-wrap flex-container">
                                <p className="text-sm shop-item-price">69.00 грн.</p>
                                <p className="text-sm">70 гр.</p>
                            </div>

                        </div>
                        <div className="shop-item">
                            <img src={require(`../../img/products/apple.jpg`)} alt="logo" />
                            <p className="text-md shop-item-name">Фруктовые чипсы - яблоко</p>
                            <div className="shop-price-wrap flex-container">
                                <p className="text-sm shop-item-price">69.00 грн.</p>
                                <p className="text-sm">70 гр.</p>
                            </div>

                        </div>
                        <div className="shop-item">
                            <img src={require(`../../img/products/apple.jpg`)} alt="logo" />
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
