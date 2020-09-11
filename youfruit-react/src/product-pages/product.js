import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import productData, { productsData } from '../products'
import "./product.css"


class Product extends Component {
    constructor() {
        super();

        this.state = {
            inputValue: "1",
            products: productsData,
            currentLink: window.location.href
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
        const { addToCartNumber, addToCartProduct, addToTotal, cartTotal } = this.props;
        console.log(this.state.currentLink)
        console.log('localhost:3000/shop/' + this.state.currentLink)
        return (
            <div className="product-page" >
                {this.state.products.map((product) => {
                    if ('http://localhost:3000/shop/' + product.componentName === this.state.currentLink) {
                        return (
                            <div className="container-xs container-products">
                                <div className="back-btn back-btn-product">
                                    <NavLink exact to="/shop" activeClassName="nav-active" className="text_lg breadcrumbs-link">
                                        <img src={require(`../img/icons/arrow-left.png`)} alt="arrow-left" className="arrow-left" />Магазин</NavLink>
                                </div>
                                <div className="product-wrap grid-container">
                                    <div>
                                        {<img src={product.img} alt="apple" />}
                                    </div>

                                    <div id="item-apple">
                                        <p className="text_lg product__name">{product.name}</p>
                                        <p className="text_md product__price">{product.price} грн</p>
                                        <p className="text_sm product__weight">{product.weight}</p>
                                        <p className="text_md product__quantity">Количество</p>
                                        <input min="1" type="number" value={this.state.inputValue} onChange={this.handleChange} className="text-sm" />
                                        {cartTotal[product.id] !== 0 ?
                                            <button disabled className="btn btn-added text-sm">Добавлено в корзину</button> :
                                            <button onClick={() => {
                                                addToTotal(product.price, this.state.inputValue, product.id)
                                                addToCartNumber(product.id)
                                                addToCartProduct(product.id, product.name, product.price, product.img, this.state.inputValue)
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
                        )
                    }

                })
                }
            </div>

        )
    }

}

export default Product;
