import React, { Component } from "react"
import { BrowserRouter as Router, Link } from 'react-router-dom';
import ProductsData from "../products"
import "../styles/style.css"



class ShopItem extends Component {

    render() {
        const { product } = this.props;
        return (
            <Link to={product.link} className="shop__item" >
                <div className="shop__imgWrap">
                    <img src={product.img} alt="logo" className="shop__productImg" />
                    <div className="shop__productWeight font_semibold">
                        <p className="text_sm">{product.weight}</p>
                    </div>
                </div>
                <div className="shop__textWrap">
                    <div>
                        <p className="shop__name text_md font_regular">{product.name}</p>
                        <p className="shop__price text_md font_semibold">{product.price} грн.</p>
                    </div>
                    <div className="item-btn">
                        <Link to={product.link} className="btn text_xs">Купить</Link>
                    </div>
                </div>
            </Link>
        )
    }
}
export default ShopItem
