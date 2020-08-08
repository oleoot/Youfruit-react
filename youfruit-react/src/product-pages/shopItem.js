import React, { Component } from "react"
import { BrowserRouter as Router, Link } from 'react-router-dom';
import ProductsData from "../products"
import "../pages/shop/shop.css"



class ShopItem extends Component {

    render() {
        const { product } = this.props;
        return (
            <Link to={product.link} className="shop-item" >
                <div className="shop-img-wrap">
                    <img src={product.img} alt="logo" className="main-img" />
                    <div className="shop-weight flex-container-center align-center">
                        <p className="text-xs">{product.weight}</p>
                    </div>
                </div>
                <div className="item-wrap">
                    <div>
                        <p className="text-md shop-item-name">{product.name}</p>
                        <p className="text-sm shop-item-price">{product.price} грн.</p>
                    </div>
                    <div className="cart-img-wrap">
                        <img src={require(`../img/icons/shopping-cart.png`)} alt="healthy" className="shop-cart" />
                    </div>
                </div>
            </Link>
        )
    }
}
export default ShopItem
