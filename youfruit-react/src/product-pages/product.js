import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import { productsData } from '../products'
import "../styles/style.css"
// import UserContext from "../UserContext"


class Product extends Component {
    // static contextType = UserContext
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
        // console.log(this.context)
    }

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }


    render() {
        // const { addToCartProductNew } = this.context
        const { addToCartNumber, addToCartProduct, addToTotal, cartTotal } = this.props;
        return (
            <div className="product-page" >
                {this.state.products.map((product) => {
                    if ('http://localhost:3002/shop/' + product.componentName === this.state.currentLink) {
                        return (
                            <section className="product">
                                <div className="container-xs">
                                    <div className="breadcrumbs-btn">
                                        <NavLink exact to="/" activeClassName="nav-active" className="breadcrumbs-btn__link text_lg font_regular">
                                            <img src={require(`../img/icons/arrow-left.png`)} alt="arrow-left" className="breadcrumbs-btn__img" />Главная</NavLink>
                                    </div>
                                    <div className="product__innerWrap">
                                        <div>
                                            {<img src={product.img} alt="apple" className="product__img" />}
                                        </div>

                                        <div>
                                            <p className="product__name text_lg font_semibold">{product.name}</p>
                                            <p className="product__price text_md font_semibold">{product.price} грн</p>
                                            <p className="product__weight text_sm font_regular">{product.weight}</p>
                                            <p className="product__quantity text_md font_regular">Количество</p>
                                            <input min="1" type="number" value={this.state.inputValue} onChange={this.handleChange} className="product__input text_sm" />
                                            {cartTotal[product.id] !== 0 ?
                                                <button disabled className="btn btn_added text_sm">Добавлено в корзину</button> :
                                                <button onClick={() => {
                                                    addToTotal(product.price, this.state.inputValue, product.id)
                                                    addToCartNumber(product.id)
                                                    addToCartProduct(product.id, product.name, product.price, product.img, this.state.inputValue)
                                                    // addToCartProductNew(product.id, product.name, product.price, product.img, this.state.inputValue)
                                                }} className="btn text_sm">Добавить в корзину</button>
                                            }
                                        </div>
                                        <div className="product__descriptionWrap font_regular">
                                            <p className="product__description text_sm">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit perspiciatis reiciendis excepturi autem deleniti, exercitationem nisi tempora quod architecto quia itaque. Eos cumque, quisquam voluptates quam consectetur sit voluptas neque, illo laudantium et corporis aliquam, magnam necessitatibus laboriosam quidem quos.
            </p>
                                            <p className="product__description text_sm"><span>Энергетическая ценность на 100г продукта: </span>250 ккал</p>
                                            <p className="product__description text_sm"><span>Срок годности: </span>6 месяцев</p>
                                        </div>
                                    </div>

                                </div>
                            </section>
                        )
                    }

                })
                }
            </div>

        )
    }

}

export default Product;
