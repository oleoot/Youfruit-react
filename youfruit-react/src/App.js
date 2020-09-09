import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Shop from './pages/shop/shop';
import Blog from './pages/blog/blog';
import About from './pages/about/about';
import Delivery from './pages/delivery/delivery';
import Apple from './product-pages/apple/apple';
import AppleCinnamon from './product-pages/apple-cinnamon/apple-cinnamon';
import Pear from './product-pages/pear/pear';
import Banana from './product-pages/banana/banana';
import Orange from './product-pages/orange/orange';
import Kiwi from './product-pages/kiwi/kiwi';
import Sharon from './product-pages/sharon/sharon';
import Mango from './product-pages/mango/mango';
import Pineapple from './product-pages/pineapple/pineapple';
import Mix from './product-pages/mix/mix';
import Post from './pages/blog/blog-posts/post'

import Main from './pages/main/main';
import Cart from './pages/cart/cart';
import productData, { productsData } from './products'
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      products: productsData,
      cartQuantity: [],
      cartInside: [],
      cartTotal: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      menuOpen: false
    }
  }

  addToCartNumber = (products) => {
    const updateAddToCart = [...this.state.cartQuantity];
    updateAddToCart.push(products);
    this.setState({
      cartQuantity: updateAddToCart
    })
  }

  removeFromCartNumber = (products) => {
    const updateCartNumber = this.state.cartQuantity.filter(function (item) {
      return (
        item !== products
      )
    })
    this.setState({
      cartQuantity: updateCartNumber
    })
  }

  addToCartProduct = (id, name, price, img, inputState) => {
    const addToCartProduct = [...this.state.cartInside];
    addToCartProduct.push({ id, name, price, img, inputState });
    this.setState({
      cartInside: addToCartProduct
    })
  }

  removeFromCartProduct = (products) => {
    const updateCartInside = this.state.cartInside.filter(function (item) {
      return (
        item.id !== products.id
      )
    })
    this.setState({
      cartInside: updateCartInside
    })
  }

  addToTotal = (price, quantity, id) => {
    let total = +price * quantity
    const addToArr = [...this.state.cartTotal];
    addToArr.splice(id, 1, total)
    this.setState({
      cartTotal: addToArr
    });
  }

  removeFromTotal = (price, quantity, id) => {
    const addToArr = [...this.state.cartTotal];
    addToArr.splice(id, 1, 0)
    this.setState({
      cartTotal: addToArr
    });
  }


  openMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
    console.log(this.state.menuOpen)
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {

    return (
      <Router>
        <div className="App">
          <header className="header">
            <div className="container">
              <nav className="header__nav">
                <div className="header__left">
                  <img src={require(`./img/logo.png`)} alt="logo" className="header__logo" />
                  <p className="header__logoName main-font_regular text_md"><span>You</span>fruit</p>
                  <div className="burger-menu" onClick={this.openMenu}>
                    <div className="menu-line line1"></div>
                    <div className="menu-line line2"></div>
                    <div className="menu-line line3"></div>
                  </div>
                  {this.state.menuOpen === true ?
                    <div className="hidden-menu">
                      <ul className="hidden-menu__list">
                        <li className="hidden-menu__listItem"><NavLink exact to="/" activeClassName="nav-active" className="text-xl nav-a" onClick={this.openMenu}>Главная</NavLink></li>
                        <li className="hidden-menu__listItem"><NavLink to="/shop" activeClassName="nav-active" className="text-xl nav-a" onClick={this.openMenu}>Магазин</NavLink></li>
                        <li className="hidden-menu__listItem"><NavLink to="/blog" activeClassName="nav-active" className="text-xl nav-a" onClick={this.openMenu}>Блог</NavLink></li>
                        <li className="hidden-menu__listItem"><NavLink to="/about" activeClassName="nav-active" className="text-xl nav-a" onClick={this.openMenu}>О нас</NavLink></li>
                        <li className="hidden-menu__listItem"><NavLink to="/delivery" activeClassName="nav-active" className="text-xl nav-a" onClick={this.openMenu}>Доставка</NavLink></li>
                      </ul>
                    </div> :
                    <div >

                    </div>
                  }
                </div>

                <div className="header__middle">
                  {/* <img src={require(`./img/logo.png`)} alt="logo" className="nav-center-hidden" id="logo" />
                  <p className="text-md nav-center-hidden"><span>You</span>fruit</p> */}
                  <ul className="header__list">
                    <li className="header__listItem"><NavLink exact to="/" activeClassName="header__link_active" className="header__link text_md">Главная</NavLink></li>
                    <li className="header__listItem"><NavLink to="/shop" activeClassName="header__link_active" className="header__link text_md">Магазин</NavLink></li>
                    <li className="header__listItem"><NavLink to="/blog" activeClassName="header__link_active" className="header__link text_md">Блог</NavLink></li>
                    <li className="header__listItem"><NavLink to="/about" activeClassName="header__link_active" className="header__link text_md">О нас</NavLink></li>
                    <li className="header__listItem"><NavLink to="/delivery" activeClassName="header__link_active" className="header__link text_md">Доставка</NavLink></li>
                  </ul>
                </div>
                <div>
                  <NavLink to="/cart" className="header__cartWrap">
                    <img src={require(`./img/icons/shopping-cart.svg`)} alt="cart" className="header__cartImg" />
                    <div className="header__cartAmount">
                      <p className="header__cartAmount_number text_sm">{this.state.cartQuantity.length}</p>
                    </div>
                  </NavLink>
                </div>
              </nav>
            </div>
          </header>
          <div className="cart">
            <div className="cart-header grid-container align-center">
              <div className="flex-container cart-cross">
                <div className="cart-line" id="line1"></div>
                <div className="cart-line" id="line2"></div>
              </div>
              <div>
                <p className="text-md">Корзина</p>
              </div>
              <div></div>
            </div>
          </div>
          <Switch>
            <Route exact path="/" component={Main}>
            </Route>

            <Route exact path="/shop" component={Shop}>
            </Route>

            <Route path="/shop/apple" render={(props) => <Apple {...props} addToCartNumber={this.addToCartNumber} addToCartProduct={this.addToCartProduct} info={this.state.products} addToTotal={this.addToTotal} cartTotal={this.state.cartTotal} />}>
            </Route>

            <Route path="/shop/apple-cinnamon" render={(props) => < AppleCinnamon {...props} addToCartNumber={this.addToCartNumber} addToCartProduct={this.addToCartProduct} info={this.state.products} addToTotal={this.addToTotal} cartTotal={this.state.cartTotal} />}>
            </Route>

            <Route path="/shop/pear" render={(props) => <Pear {...props} addToCartNumber={this.addToCartNumber} addToCartProduct={this.addToCartProduct} info={this.state.products} addToTotal={this.addToTotal} cartTotal={this.state.cartTotal} />}>
            </Route>

            <Route path="/shop/banana" render={(props) => <Banana {...props} addToCartNumber={this.addToCartNumber} addToCartProduct={this.addToCartProduct} info={this.state.products} addToTotal={this.addToTotal} cartTotal={this.state.cartTotal} />}>
            </Route>


            <Route path="/shop/orange" render={(props) => <Orange {...props} addToCartNumber={this.addToCartNumber} addToCartProduct={this.addToCartProduct} info={this.state.products} addToTotal={this.addToTotal} cartTotal={this.state.cartTotal} />}>
            </Route>

            <Route path="/shop/kiwi" render={(props) => <Kiwi {...props} addToCartNumber={this.addToCartNumber} addToCartProduct={this.addToCartProduct} info={this.state.products} addToTotal={this.addToTotal} cartTotal={this.state.cartTotal} />}>
            </Route>

            <Route path="/shop/sharon" render={(props) => <Sharon {...props} addToCartNumber={this.addToCartNumber} addToCartProduct={this.addToCartProduct} info={this.state.products} addToTotal={this.addToTotal} cartTotal={this.state.cartTotal} />}>
            </Route>

            <Route path="/shop/mango" render={(props) => <Mango {...props} addToCartNumber={this.addToCartNumber} addToCartProduct={this.addToCartProduct} info={this.state.products} addToTotal={this.addToTotal} cartTotal={this.state.cartTotal} />}>
            </Route>

            <Route path="/shop/pineapple" render={(props) => <Pineapple {...props} addToCartNumber={this.addToCartNumber} addToCartProduct={this.addToCartProduct} info={this.state.products} addToTotal={this.addToTotal} cartTotal={this.state.cartTotal} />}>
            </Route>

            <Route path="/shop/mix" render={(props) => <Mix {...props} addToCartNumber={this.addToCartNumber} addToCartProduct={this.addToCartProduct} info={this.state.products} addToTotal={this.addToTotal} cartTotal={this.state.cartTotal} />}>
            </Route>

            <Route path="/blog" component={Blog}>
            </Route>
            <Route path="/delivery" component={Delivery}>
            </Route>
            <Route path="/about" component={About}>
            </Route>

            <Route path="/cart" render={(props) => <Cart {...props} cartInside={this.state.cartInside} removeFromCartProduct={this.removeFromCartProduct} removeFromCartNumber={this.removeFromCartNumber} cartTotal={this.state.cartTotal} removeFromTotal={this.removeFromTotal} />} >
            </Route>

            <Route path="/blog/pancakes" component={Post}></Route>


          </Switch>

          <footer id="footer" className="footer">

            <div className="container">
              <div className="footer__wrap">
                <div className="footer__left">
                  <div className="footer__numberWrap">
                    <img src={require(`./img/icons/lifecell.png`)} alt="lifecell" />
                    <a href="tel:+380667338900" className="text_sm footer__number">+380674591254</a>
                  </div>
                  <div className="footer__numberWrap flex-container align-center footer-call-margin">
                    <img src={require(`./img/icons/vodafone.png`)} alt="vodafone" />
                    <a href="tel:+380508373513" className="text_sm footer__number">+380508373513</a>
                  </div>
                </div>

                <div className="footer__middle">
                  <input type="tel" placeholder="Ваш телефон" className="footer__input" />
                  <button type="submit" className="footer__button text_xs">Задать вопрос</button>

                </div>



                <div className="footer__right">
                  <a href="https://www.instagram.com/youfruit_shop/" target="_blank" className="footer__right_imgWrap"><img src={require(`./img/icons/instagram.png`)} alt="instagram" /></a>
                  <a href="https://www.facebook.com/youfruit.shop/" target="_blank" className="footer__right_imgWrap"><img src={require(`./img/icons/facebook.png`)} alt="facebook" /></a>
                  <a href="viber://add?number=380508373513" className="footer__right_imgWrap"><img src={require(`./img/icons/viber.png`)} alt="viber" /></a>
                  <a href="tg://resolve?domain=d_zavgorodnia" className="footer__right_imgWrap"><img src={require(`./img/icons/telegram.png`)} alt="telegram" /></a>
                </div>
              </div>



            </div>
            <div className="footer__copyWrap"><p className="text_xs footer__copy">&copy; Youfruit 2020</p></div>
          </footer>
        </div>
      </Router>
    );
  }
}
export default App;
