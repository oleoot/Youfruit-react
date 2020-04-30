import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import "./main.css"
class Main extends Component {
    render() {
        return (
            <div className="main">
                <section className="grid-container" id="header-main">
                    <div className="flex-container-center align-center">
                        <div>
                            <h1 className="text-xxl">Пастила и Фруктовые чипсы</h1>
                            <p className="text-lg">Новый взгяд на сладости</p>
                            <Link to="/shop" className="btn text-lg" id="btn-main">Магазин</Link>
                        </div>
                    </div>

                    <div className="flex-container-center align-center">
                        {/* <img src={require(`../../img/pineapple.png`)} alt="pineapple" /> */}
                    </div>
                </section>

                <section id="products">
                    <div className="headline-wrap">
                        <p className="text-xl">Продукция</p>
                    </div>
                    <div className="underline"></div>
                    <div className="container-sm" id="products-border">
                        <div className="products-wrap grid-container">
                            <div>
                                <img src={require(`../../img/products/frips.jpg`)} alt="healthy" id="img-top-left" />
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
                            <div id="products-grid-4">
                                <img src={require(`../../img/products/pastila.jpg`)} alt="healthy" id="img-bottom-right" />
                            </div>
                        </div>
                    </div>
                </section>


                <section id="advantages">
                    <div className="container-sm">
                        <div className="headline-wrap">
                            <p className="text-xl">Преимущества</p>
                        </div>
                        <div className="underline"></div>
                        <div className="advantages-wrap grid-container">
                            <div>
                                <img src={require(`../../img/icons/healthy.png`)} alt="healthy" />
                                <p className="text-sm">Вкусно и полезно для организма</p>
                                <p className="text-xs">Альтернатива сладкого для тех, кто следит за здоровьем и любит перекусить</p>
                            </div>
                            <div>
                                <img src={require(`../../img/icons/present.png`)} alt="healthy" />
                                <p className="text-sm">Вкусно и полезно для организма</p>
                                <p className="text-xs">Альтернатива сладкого для тех, кто следит за здоровьем и любит перекусить</p>
                            </div>
                            <div>
                                <img src={require(`../../img/icons/natural.png`)} alt="healthy" />
                                <p className="text-sm">Вкусно и полезно для организма</p>
                                <p className="text-xs">Альтернатива сладкого для тех, кто следит за здоровьем и любит перекусить</p>
                            </div>
                            <div>
                                <img src={require(`../../img/icons/packaging.png`)} alt="healthy" />
                                <p className="text-sm">Вкусно и полезно для организма</p>
                                <p className="text-xs">Альтернатива сладкого для тех, кто следит за здоровьем и любит перекусить</p>
                            </div>

                        </div>
                    </div>
                </section>



                <section id="bestsellers">
                    <div className="headline-wrap">
                        <p className="text-xl">Бестселлеры</p>
                    </div>
                    <div className="underline"></div>
                    <div className="container-sm">
                        <div className="bestsellers grid-container">
                            <Link to="/shop/apple">
                                <img src={require(`../../img/products/apple.jpg`)} alt="healthy" id="img-bottom-right" />
                                <p className="text-md shop-item-name">Чипсы - яблоко</p>
                                <p className="text-sm shop-item-price">69 грн.</p>
                            </Link>
                            <Link to="/shop/mix">
                                <img src={require(`../../img/products/mix.jpg`)} alt="healthy" id="img-bottom-right" />
                                <p className="text-md shop-item-name">Чипсы - микс</p>
                                <p className="text-sm shop-item-price">99 грн.</p>
                            </Link>
                            <Link to="/shop/sharon">
                                <img src={require(`../../img/products/sharon.jpg`)} alt="healthy" id="img-bottom-right" />
                                <p className="text-md shop-item-name">Чипсы - шарон</p>
                                <p className="text-sm shop-item-price">89 грн.</p>
                            </Link>
                            <Link to="/shop/banana">
                                <img src={require(`../../img/products/banana.jpg`)} alt="healthy" id="img-bottom-right" />
                                <p className="text-md shop-item-name">Чипсы - банан</p>
                                <p className="text-sm shop-item-price">79 грн.</p>
                            </Link>
                        </div>





                        <div className="headline-wrap review-headline">
                            <p className="text-xl">Отзывы</p>
                        </div>
                        <div className="underline"></div>
                        {/* <div className="container-sm"> */}
                        <div className="review-wrap grid-container">
                            <div className="review-item">
                                <img src={require(`../../img/icons/thumb.png`)} alt="healthy" className="review-img" />
                                <p className="text-md">Олег</p>
                                <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae pariatur, veniam provident veritatis voluptatem est ut fuga magni explicabo consequatur?</p>
                            </div>
                            <div className="review-item">
                                <img src={require(`../../img/icons/thumb.png`)} alt="healthy" className="review-img" />
                                <p className="text-md">Дарья</p>
                                <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae pariatur, veniam provident veritatis voluptatem est ut fuga magni explicabo consequatur?</p>
                            </div>
                            <div className="review-item">
                                <img src={require(`../../img/icons/thumb.png`)} alt="healthy" className="review-img" />
                                <p className="text-md">Юля</p>
                                <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae pariatur, veniam provident veritatis voluptatem est ut fuga magni explicabo consequatur?</p>
                            </div>
                        </div>

                        {/* </div> */}
                    </div>
                </section>



            </div >
        )
    }
}
export default Main;
