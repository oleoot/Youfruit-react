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
          <header id="header">
            <div className="container">
              <nav className="nav grid-container align-center">

                <div className="flex-container-start align-center" id="nav-left">
                  <img src={require(`./img/logo.png`)} alt="logo" className="nav-left-hidden" id="logo" />
                  <p className="text-md nav-left-hidden"><span>You</span>fruit</p>
                  <div className="burger-menu flex-container" id="hidden-menu-btn" onClick={this.openMenu}>
                    <div className="menu-line line1"></div>
                    <div className="menu-line line2"></div>
                    <div className="menu-line line3"></div>
                  </div>
                  {this.state.menuOpen === true ?
                    <div className="nav-mobile">
                      <ul className="flex-container" id="nav-mobile-ul">
                        <li><NavLink exact to="/" activeClassName="nav-active" className="text-xl nav-a" onClick={this.openMenu}>Главная</NavLink></li>
                        <li><NavLink to="/shop" activeClassName="nav-active" className="text-xl nav-a" onClick={this.openMenu}>Магазин</NavLink></li>
                        <li><NavLink to="/blog" activeClassName="nav-active" className="text-xl nav-a" onClick={this.openMenu}>Блог</NavLink></li>
                        <li><NavLink to="/about" activeClassName="nav-active" className="text-xl nav-a" onClick={this.openMenu}>О нас</NavLink></li>
                        <li><NavLink to="/delivery" activeClassName="nav-active" className="text-xl nav-a" onClick={this.openMenu}>Доставка</NavLink></li>
                      </ul>
                    </div> :
                    <div >

                    </div>
                  }
                </div>

                <div className="flex-container-center align-center">
                  <img src={require(`./img/logo.png`)} alt="logo" className="nav-center-hidden" id="logo" />
                  <p className="text-md nav-center-hidden"><span>You</span>fruit</p>
                  <ul className="flex-container" id="nav-center-ul">
                    <li><NavLink exact to="/" activeClassName="nav-active" className="text-sm nav-a">Главная</NavLink></li>
                    <li><NavLink to="/shop" activeClassName="nav-active" className="text-sm nav-a">Магазин</NavLink></li>
                    <li><NavLink to="/blog" activeClassName="nav-active" className="text-sm nav-a">Блог</NavLink></li>
                    <li><NavLink to="/about" activeClassName="nav-active" className="text-sm nav-a">О нас</NavLink></li>
                    <li><NavLink to="/delivery" activeClassName="nav-active" className="text-sm nav-a">Доставка</NavLink></li>
                  </ul>
                </div>
                <div>
                  <NavLink to="/cart" className="cart-wrap">
                    <img src={require(`./img/icons/shopping-cart.svg`)} alt="cart" id="cart" />
                    <div className="cart-amount flex-container-center align-center">
                      <p id="amount" className="cart-amount-number text-xs">{this.state.cartQuantity.length}</p>
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

          <footer id="footer">

            <div className="container">
              <div className="footer-wrap grid-container">
                <div className="flex-container-start">
                  <div className="call-item flex-container align-center footer-call-margin">
                    <img src={require(`./img/icons/lifecell.png`)} alt="lifecell" />
                    <a href="tel:+380667338900" className="text-xs">+380674591254</a>
                  </div>
                  <div className="call-item flex-container align-center footer-call-margin">
                    <img src={require(`./img/icons/vodafone.png`)} alt="vodafone" />
                    <a href="tel:+380508373513" className="text-xs">+380508373513</a>
                  </div>
                </div>

                <div className="call-item flex-container question-item">
                  <input type="tel" placeholder="Ваш телефон" />
                  <button type="submit" className="text-xs">Задать вопрос</button>

                </div>



                <div className="footer-social flex-container-center align-center">
                  <a href="https://www.instagram.com/youfruit_shop/" target="_blank" className="flex-container-center align-center"><img src={require(`./img/icons/instagram.png`)} alt="instagram" /></a>
                  <a href="https://www.facebook.com/youfruit.shop/" target="_blank" className="flex-container-center align-center"><img src={require(`./img/icons/facebook.png`)} alt="facebook" /></a>
                  <a href="viber://add?number=380508373513" className="flex-container-center align-center"><img src={require(`./img/icons/viber.png`)} alt="viber" /></a>
                  <a href="tg://resolve?domain=d_zavgorodnia" className="flex-container-center align-center"><img src={require(`./img/icons/telegram.png`)} alt="telegram" /></a>
                </div>
              </div>



            </div>
            <div className="call-item flex-container-center align-center copy"><p className="text-xs">&copy; Youfruit 2020</p></div>
          </footer>
        </div>
      </Router>
    );
  }
}
export default App;
