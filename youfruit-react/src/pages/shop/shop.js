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
                <div className="container">
                    <div className="back-btn">
                        <NavLink exact to="/" activeClassName="nav-active" className="text_lg breadcrumbs-link">
                            <img src={require(`../../img/icons/arrow-left.png`)} alt="arrow-left" className="arrow-left" />Главная</NavLink>
                    </div>
                </div>
                <div className="container">
                    <div className="section-headline">
                        <div className="section-headline_underline"></div>
                        <div className="section-headline__textWrap">
                            <p className="section-headline_text text_lg">Конфеты</p>
                        </div>
                        <div className="section-headline_underline"></div>
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
