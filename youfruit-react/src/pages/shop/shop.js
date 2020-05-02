import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import productData, { productsData } from '../../products'
import "./shop.css"
import ShopItem from "../../product-pages/shopItem"
class Shop extends Component {
    constructor() {
        super()

        this.state = {
            products: productsData,
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (

            <section className="shop">

                <div className="headline-wrap">
                    <p className="text-xl">Фруктовые чипсы</p>
                </div>
                <div className="underline"></div>
                <div className="container">
                    <div className="back-btn">
                        <NavLink exact to="/" activeClassName="nav-active" className="text-lg nav-a  align-center flex-container"><img src={require(`../../img/icons/arrow-left.png`)} alt="arrow-left" className="arrow-left" />Главная</NavLink>
                    </div>
                </div>
                <div className="container">
                    <div className="shop-wrap grid-container">
                        {this.state.products.map(product => {
                            return (
                                <ShopItem key={product.id} product={product} />
                            )

                        }
                        )
                        }
                        {/* <Link to="/shop/apple-cinnamon" className="shop-item">
                            <div className="shop-img-wrap">
                                <img src={require(`../../img/products/apple-cinnamon.jpg`)} alt="logo" className="main-img" />
                                <div className="shop-weight flex-container-center align-center">
                                    <p className="text-xs">70 г</p>
                                </div>
                            </div>
                            <p className="text-md shop-item-name">Чипсы - яблоко-корица</p>
                            <p className="text-sm shop-item-price">69.00 грн.</p>
                        </Link>

                        <Link to="/shop/pear" className="shop-item">
                            <div className="shop-img-wrap">
                                <img src={require(`../../img/products/pear.jpg`)} alt="logo" className="main-img" />
                                <div className="shop-weight flex-container-center align-center">
                                    <p className="text-xs">70 г</p>
                                </div>
                            </div>
                            <p className="text-md shop-item-name">Чипсы - груша</p>
                            <p className="text-sm shop-item-price">89.00 грн.</p>
                        </Link>

                        <Link to="/shop/banana" className="shop-item">
                            <div className="shop-img-wrap">
                                <img src={require(`../../img/products/banana.jpg`)} alt="logo" className="main-img" />
                                <div className="shop-weight flex-container-center align-center">
                                    <p className="text-xs">70 г</p>
                                </div>
                            </div>
                            <p className="text-md shop-item-name">Чипсы - банан</p>
                            <p className="text-sm shop-item-price">79.00 грн.</p>
                        </Link>

                        <Link to="/shop/orange" className="shop-item">

                            <div className="shop-img-wrap">
                                <img src={require(`../../img/products/orange.jpg`)} alt="logo" className="main-img" />
                                <div className="shop-weight flex-container-center align-center">
                                    <p className="text-xs">70 г</p>
                                </div>
                            </div>

                            <p className="text-md shop-item-name">Чипсы - апельсин</p>
                            <p className="text-sm shop-item-price">79.00 грн.</p>
                        </Link>

                        <Link to="/shop/orange" className="shop-item">
                            <div className="shop-img-wrap">
                                <img src={require(`../../img/products/kiwi.jpg`)} alt="logo" className="main-img" />
                                <div className="shop-weight flex-container-center align-center">
                                    <p className="text-xs">70 г</p>
                                </div>
                            </div>

                            <p className="text-md shop-item-name">Чипсы - киви</p>
                            <p className="text-sm shop-item-price">99.00 грн.</p>


                        </Link>

                        <Link to="/shop/orange" className="shop-item">
                            <div className="shop-img-wrap">
                                <img src={require(`../../img/products/sharon.jpg`)} alt="logo" className="main-img" />
                                <div className="shop-weight flex-container-center align-center">
                                    <p className="text-xs">70 г</p>
                                </div>
                            </div>

                            <p className="text-md shop-item-name">Чипсы - шарон</p>
                            <p className="text-sm shop-item-price">89.00 грн.</p>


                        </Link>

                        <Link to="/shop/orange" className="shop-item">
                            <div className="shop-img-wrap">
                                <img src={require(`../../img/products/mango.jpg`)} alt="logo" className="main-img" />
                                <div className="shop-weight flex-container-center align-center">
                                    <p className="text-xs">70 г</p>
                                </div>
                            </div>

                            <p className="text-md shop-item-name">Чипсы - манго</p>
                            <p className="text-sm shop-item-price">129.00 грн.</p>


                        </Link>

                        <Link to="/shop/orange" className="shop-item">
                            <div className="shop-img-wrap">
                                <img src={require(`../../img/products/pineapple.jpg`)} alt="logo" className="main-img" />
                                <div className="shop-weight flex-container-center align-center">
                                    <p className="text-xs">70 г</p>
                                </div>
                            </div>

                            <p className="text-md shop-item-name">Чипсы - ананас</p>
                            <p className="text-sm shop-item-price">109.00 грн.</p>


                        </Link>

                        <Link to="/shop/orange" className="shop-item">
                            <div className="shop-img-wrap">
                                <img src={require(`../../img/products/mix.jpg`)} alt="logo" className="main-img" />
                                <div className="shop-weight flex-container-center align-center">
                                    <p className="text-xs">70 г</p>
                                </div>
                            </div>

                            <p className="text-md shop-item-name">Фруктовые чипсы - микс</p>
                            <p className="text-sm shop-item-price">99.00 грн.</p>


                        </Link> */}

                    </div>


                </div>
            </section>
            //     )
            // }
            // )
            // }
        )

    }
}
export default Shop;
