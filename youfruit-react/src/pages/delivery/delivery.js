import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import "./delivery.css"
class Delivery extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (

            <section className="delivery">
                <div className="headline-wrap">
                    <p className="text-xl">Доставка</p>

                </div>
                <div className="underline"></div>
                <div className="container-xs">
                    <div className="back-btn">
                        <NavLink exact to="/" activeClassName="nav-active" className="text-lg nav-a  align-center flex-container"><img src={require(`../../img/icons/arrow-left.png`)} alt="arrow-left" className="arrow-left" />Главная</NavLink>
                    </div>
                    <div className="delivery-wrap grid-container">
                        <div className="grid-container delivery-item">
                            <img src={require(`../../img/icons/np.png`)} alt="novaposhta" />
                            <div>
                                <p className="text-md">Новая Почта</p>
                                <p className="text-sm">Доставка в течении 1-2 дней</p>
                                <p className="text-xs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur expedita unde, earum ipsum hic fugit eaque delectus sunt. Itaque, perferendis!</p>
                            </div>
                        </div>
                        <div className="grid-container delivery-item">
                            <img src={require(`../../img/icons/up.png`)} alt="novaposhta" />
                            <div>
                                <p className="text-md">Укрпочта</p>
                                <p className="text-sm">Доставка в течении 1-2 дней</p>
                                <p className="text-xs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur expedita unde, earum ipsum hic fugit eaque delectus sunt. Itaque, perferendis!</p>
                            </div>
                        </div>
                        <div className="grid-container delivery-item">
                            <img src={require(`../../img/icons/truck.png`)} alt="novaposhta" />
                            <div>
                                <p className="text-md">Самовывоз</p>
                                <p className="text-sm">Доставка в течении 1-2 дней</p>
                                <p className="text-xs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur expedita unde, earum ipsum hic fugit eaque delectus sunt. Itaque, perferendis!</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>






        )
    }
}
export default Delivery;
