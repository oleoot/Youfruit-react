import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import "./main.css"
class Main extends Component {
    render() {
        return (
            <div className="main">
                <section className="grid-container" id="header-main">
                    <div className="flex-container-center align-center">
                        <div>
                            <h1 className="text-xl">Пастила и Фруктовые чипсы</h1>
                            <p className="text-lg">Новый взгяд на сладости</p>
                            <Link to="/shop" className="btn text-lg">Магазин</Link>
                        </div>
                    </div>

                    <div className="flex-container-center align-center">
                        <img src={require(`../../img/pineapple.png`)} alt="pineapple" />
                    </div>
                </section>




                <section id="advantages">
                    <div className="container-sm">
                        <p className="text-llg section-headline">Преимущества</p>
                        <div className="underline"></div>
                        <div className="advantages-wrap grid-container">
                            <div>
                                <img src={require(`../../img/icons/healthy.png`)} alt="healthy" />
                                <p className="text-sm">Вкусно и полезно для организма</p>
                                <p className="text-xs">Альтернатива сладкого для тех, кто следит за здоровьем и любит перекусить</p>
                            </div>
                            <div>
                                <img src={require(`../../img/icons/percent.png`)} alt="healthy" />
                                <p className="text-sm">Вкусно и полезно для организма</p>
                                <p className="text-xs">Альтернатива сладкого для тех, кто следит за здоровьем и любит перекусить</p>
                            </div>
                            <div>
                                <img src={require(`../../img/icons/packaging.png`)} alt="healthy" />
                                <p className="text-sm">Вкусно и полезно для организма</p>
                                <p className="text-xs">Альтернатива сладкого для тех, кто следит за здоровьем и любит перекусить</p>
                            </div>
                            <div>
                                <img src={require(`../../img/icons/present.png`)} alt="healthy" />
                                <p className="text-sm">Вкусно и полезно для организма</p>
                                <p className="text-xs">Альтернатива сладкого для тех, кто следит за здоровьем и любит перекусить</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="products">
                    <p className="text-llg section-headline">Продукция</p>
                    <div className="underline"></div>
                    <div className="container-sm">
                        <div className="products-wrap grid-container">
                            <div>
                                <img src={require(`../../img/products/frips.jpg`)} alt="healthy" />
                            </div>
                            <div id="pr-pd-1" className="flex-container-center align-center">
                                <div>
                                    <p className="text-md">Фруктовые чипсы яблоко</p>
                                    <p className="text-sm products-price">От <span>69грн</span></p>
                                    <Link to="/shop" className="btn text-sm">Купить</Link>
                                    <p className="text-sm">Пастила - это высушенное фруктовое пюре.
                                    Благодаря длительной готовке на низкой температуре в ней сохраняются все полезные вещества.
В состав пастилы входят исключительно свежие фрукты.</p>
                                </div>
                            </div>
                            <div id="pr-pd-2" className="flex-container-center align-center">
                                <div>
                                    <p className="text-md">Фруктовые чипсы яблоко</p>
                                    <p className="text-sm products-price">От <span>69грн</span></p>
                                    <Link to="/shop" className="btn text-sm">Купить</Link>
                                    <p className="text-sm">Пастила - это высушенное фруктовое пюре.
                                    Благодаря длительной готовке на низкой температуре в ней сохраняются все полезные вещества.
В состав пастилы входят исключительно свежие фрукты.</p>
                                </div>
                            </div>
                            <div>
                                <img src={require(`../../img/products/pastila.jpg`)} alt="healthy" />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="social">
                    <p className="text-llg section-headline">Мы в социальных сетях</p>
                    <div className="underline"></div>
                    <div className="container-sm">
                        <div className="social-wrap grid-container">
                            <a href="#" className="social-item">
                                <div className="social-overlay"></div>
                                <img src={require(`../../img/social-1.jpg`)} alt="healthy" />
                                <img src={require(`../../img/icons/facebook-white.svg`)} alt="healthy" className="social-icon" />
                            </a>
                            <a href="#" className="social-item">
                                <div className="social-overlay"></div>
                                <img src={require(`../../img/social-2.jpg`)} alt="healthy" />
                                <img src={require(`../../img/icons/instagram-white.svg`)} alt="healthy" className="social-icon" />
                            </a>
                            <a href="#" className="social-item">
                                <div className="social-overlay"></div>
                                <img src={require(`../../img/social-3.jpg`)} alt="healthy" />
                                <img src={require(`../../img/icons/viber-white.svg`)} alt="healthy" className="social-icon" />
                            </a>
                            <a href="#" className="social-item">
                                <div className="social-overlay"></div>
                                <img src={require(`../../img/social-4.jpg`)} alt="healthy" />
                                <img src={require(`../../img/icons/telegram-white.svg`)} alt="healthy" className="social-icon" />
                            </a>
                        </div>

                    </div>
                </section>



            </div>
        )
    }
}
export default Main;
