 {/* <div className="container-xs container-products">
                    <div className="back-btn back-btn-product">
                        <NavLink exact to="/shop" activeClassName="nav-active" className="text_lg breadcrumbs-link">
                            <img src={require(`../../img/icons/arrow-left.png`)} alt="arrow-left" className="arrow-left" />Магазин</NavLink>
                    </div>
                    <div className="product-wrap grid-container">
                        <div>
                            {<img src={require(`../../img/products/apple.jpg`)} alt="apple" />}
                        </div>

                        <div id="item-apple">
                            <p className="text_lg product__name">Фруктовые чипсы - яблоко</p>
                            <p className="text_md product__price">69.00 грн.</p>
                            <p className="text_sm product__weight">70 г</p>
                            <p className="text_md product__quantity">Количество</p>
                            <input min="1" type="number" value={this.state.inputValue} onChange={this.handleChange} className="text-sm" />
                            {cartTotal[info[0].id] !== 0 ?
                                <button disabled className="btn btn-added text-sm">Добавлено в корзину</button> :
                                <button onClick={() => {
                                    addToTotal(info[0].price, this.state.inputValue, info[0].id)
                                    addToCartNumber(info[0].id)
                                    addToCartProduct(info[0].id, info[0].name, info[0].price, info[0].img, this.state.inputValue)
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
            </div> */}
