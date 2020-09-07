import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import TinySlider from "tiny-slider-react";
import "./main.css"
class Main extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        const mainSettings = {
            lazyload: true,
            mouseDrag: true,
            controls: false,
            navContainer: ".main__sliderNav"
        };
        const bestsellersSettings = {
            items: 2,
            lazyload: true,
            nav: false,
            mouseDrag: true
        };
        return (
            <>
                <div className="slider-wrap main__slider-wrap">
                    <div className="main__sliderNav">
                        <div className="nav-item"></div>
                        <div className="nav-item"></div>
                    </div>
                    <div className="main__sliderControls">
                        {/* <svg width="407.436" height="407.436" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <title>Layer 1</title>
                                <polygon fill="#fff" width="50" points="315.869,21.178 294.621,0 91.566,203.718 294.621,407.436 315.869,386.258 133.924,203.718 " />
                            </g>
                        </svg> */}

                    </div>
                    <TinySlider settings={mainSettings}>
                        <section className="main">
                            <div className="container">
                                <div className="main__inner">
                                    <div className="main__textWrap">
                                        <h1 className="main__headline">Пастила и Фруктовые чипсы</h1>
                                        <p className="main__description">Новый взгяд на сладости</p>
                                        <Link to="/shop" className="btn">Магазин</Link>
                                    </div>
                                    <div className="flex-container-center align-center">
                                        <img src={require(`../../img/pineapple.png`)} alt="pineapple" />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="main">
                            <div className="container">
                                <div className="main__inner">
                                    <div className="main__textWrap">
                                        <h1>Пастила и Фруктовые чипсы</h1>
                                        <p>Новый взгяд на сладости</p>
                                        <Link to="/shop" className="btn">Магазин</Link>
                                    </div>
                                    <div className="flex-container-center align-center">
                                        <img src={require(`../../img/pineapple.png`)} alt="pineapple" />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </TinySlider>
                </div>
                <section class='products' id="products">
                    <div className="container-xs">
                        <div className="headline-outer">
                            <div className="underline"></div>
                            <div className="headline-wrap">
                                <p className="text-xl">Продукция</p>
                            </div>
                            <div className="underline"></div>
                        </div>
                    </div>
                    <div className="container-xs">
                        <div className="products__wrap grid-container">
                            <div>
                                <img src={require(`../../img/products/frips.jpg`)} alt="healthy" id="img-top-left" className="products__img" />
                            </div>
                            <div className="products__pane">
                                <div>
                                    <p className="products__name">Натуральная пастила</p>
                                    <p className="products__price">От <span className="products__price_colored">69грн</span></p>
                                    <Link to="/shop" className="btn text-sm">Купить</Link>
                                    <p className="text-sm products__description">Пастила - это высушенное фруктовое пюре.
                                    Благодаря длительной готовке на низкой температуре в ней сохраняются все полезные вещества.
В состав пастилы входят исключительно свежие фрукты.</p>
                                </div>
                            </div>
                            <div className="products__pane">
                                <div>
                                    <p className="products__name">Натуральная пастила</p>
                                    <p className="products__price">От <span className="products__price_colored">69грн</span></p>
                                    <Link to="/shop" className="btn text-sm">Купить</Link>
                                    <p className="text-sm products__description">Пастила - это высушенное фруктовое пюре.
                                    Благодаря длительной готовке на низкой температуре в ней сохраняются все полезные вещества.
В состав пастилы входят исключительно свежие фрукты.</p>
                                </div>
                            </div>
                            <div>
                                <img src={require(`../../img/products/pastila.jpg`)} alt="healthy" id="img-bottom-right" className="products__img" />
                            </div>
                            <div>
                                <img src={require(`../../img/products/frips.jpg`)} alt="healthy" id="img-top-left" className="products__img" />
                            </div>
                            <div className="products__pane">
                                <div>
                                    <p className="products__name">Натуральная пастила</p>
                                    <p className="products__price">От <span className="products__price_colored">69грн</span></p>
                                    <Link to="/shop" className="btn text-sm">Купить</Link>
                                    <p className="text-sm products__description">Пастила - это высушенное фруктовое пюре.
                                    Благодаря длительной готовке на низкой температуре в ней сохраняются все полезные вещества.
В состав пастилы входят исключительно свежие фрукты.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="advantages">
                    <div className="container-xs">
                        <div className="headline-outer">
                            <div className="underline"></div>
                            <div className="headline-wrap">
                                <p className="text-xl">Преимущества</p>
                            </div>
                            <div className="underline"></div>
                        </div>
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
                    <div className="container-xs">
                        <div className="headline-outer">
                            <div className="underline"></div>
                            <div className="headline-wrap">
                                <p className="text-xl">Бестселлеры</p>
                            </div>
                            <div className="underline"></div>
                        </div>
                    </div>
                    <div className="container-xs">
                        <TinySlider settings={bestsellersSettings}>
                            <Link to="/shop/apple">
                                <img src={require(`../../img/products/sharon.jpg`)} alt="healthy" id="img-bottom-right" className="bestsellers__img" />
                                <div className="item-wrap">
                                    <div>
                                        <p className="text-md shop-item-name">Чипсы - шарон</p>
                                        <p className="text-sm shop-item-price">89 грн.</p>
                                    </div>
                                    <div className="item-btn">
                                        <div className="btn">Купить</div>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/shop/mix">
                                <img src={require(`../../img/products/sharon.jpg`)} alt="healthy" id="img-bottom-right" className="bestsellers__img" />
                                <div className="item-wrap">
                                    <div>
                                        <p className="text-md shop-item-name">Чипсы - шарон</p>
                                        <p className="text-sm shop-item-price">89 грн.</p>
                                    </div>
                                    <div className="item-btn">
                                        <div className="btn">Купить</div>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/shop/sharon">
                                <img src={require(`../../img/products/sharon.jpg`)} alt="healthy" id="img-bottom-right" className="bestsellers__img" />
                                <p className="text-md shop-item-name">Чипсы - шарон</p>
                                <div className="item-wrap">
                                    <div>
                                        <p className="text-sm shop-item-price">89 грн.</p>
                                    </div>
                                    <div>
                                        <div className="btn">Купить</div>
                                    </div>
                                </div>
                            </Link>
                            {/* <Link to="/shop/banana">
                                <img src={require(`../../img/products/banana.jpg`)} alt="healthy" id="img-bottom-right" />
                                <p className="text-md shop-item-name">Чипсы - банан</p>
                                <p className="text-sm shop-item-price">79 грн.</p>
                            </Link> */}
                        </TinySlider>
                    </div>
                </section>
                <section id="reviews">
                    <div className="container-xs">
                        <div className="review">
                            <p className="review__number">1</p>
                            <p className="review__desc">Лет на рынке</p>
                        </div>
                        <div className="review">
                            <p className="review__number">100+</p>
                            <p className="review__desc">Выполненных заказов</p>
                        </div>
                        <div className="review">
                            <p className="review__number">300+</p>
                            <p className="review__desc">Довольных клиентов</p>
                        </div>
                        <div className="review">
                            <p className="review__number">40+</p>
                            <p className="review__desc">Чего-то там</p>
                        </div>
                    </div>
                </section>

                <section className="reviews">
                    <div className="container-xs">
                        <div className="headline-outer">
                            <div className="underline"></div>
                            <div className="headline-wrap review-headline">
                                <p className="text-xl">Отзывы</p>
                            </div>
                            <div className="underline"></div>
                        </div>
                    </div>

                    <div className="container-xs">
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

                    </div>
                </section>



            </>
        )
    }
}
export default Main;
