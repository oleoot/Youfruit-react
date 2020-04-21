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
      cartTotal: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  }

  addToCartNumber = (products) => {

    const updateAddToCart = [...this.state.cartQuantity];
    console.log(updateAddToCart)
    updateAddToCart.push(products);
    console.log(updateAddToCart)
    this.setState({
      cartQuantity: updateAddToCart

    })



  }


  removeFromCartNumber = (products) => {
    console.log(this.state.cartQuantity);
    const updateCartNumber = this.state.cartQuantity.filter(function (item) {
      console.log(item);
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
    console.log(addToCartProduct);
    this.setState({
      cartInside: addToCartProduct
    })
    console.log(this.state)


  }


  removeFromCartProduct = (products) => {
    const updateCartInside = this.state.cartInside.filter(function (item) {
      console.log(products.id)
      console.log(item.id)
      return (

        item.id !== products.id
      )
    })
    this.setState({
      cartInside: updateCartInside
    })
    console.log(this.cartInside)
  }



  addToTotal = (price, quantity, id) => {

    let total = +price * quantity
    const addToArr = [...this.state.cartTotal];
    console.log(id)
    addToArr.splice(id, 1, total)
    console.log(total)
    console.log(addToArr)
    this.setState({

      cartTotal: addToArr
    });
    console.log(this.state.cartTotal)
  }



  removeFromTotal = (price, quantity, id) => {
    let updTotal = +price * quantity
    console.log(price);
    const addToArr = [...this.state.cartTotal];
    console.log(id)
    addToArr.splice(id, 1, 0)
    this.setState({

      cartTotal: addToArr
    });
  }


  input = (input) => {
    console.log(input)

  }




  render() {
    console.log(this.state)
    return (
      <Router>
        <div className="App">
          <header id="header">
            <div className="container">
              <nav className="nav grid-container align-center">

                <div className="flex-container-start align-center" id="nav-left">
                  <img src={require(`./img/logo.png`)} alt="logo" />
                  <p className="text-md"><span>You</span>fruit</p>
                </div>

                <div className="flex-container-center">
                  <ul className="flex-container">
                    <li><NavLink exact to="/" activeClassName="nav-active" className="text-sm nav-a">Главная</NavLink></li>
                    <li><NavLink to="/shop" activeClassName="nav-active" className="text-sm nav-a">Магазин</NavLink></li>
                    <li><NavLink to="/blog" activeClassName="nav-active" className="text-sm nav-a">Блог</NavLink></li>
                    <li><NavLink to="/about" activeClassName="nav-active" className="text-sm nav-a">О нас</NavLink></li>
                    <li><NavLink to="/delivery" activeClassName="nav-active" className="text-sm nav-a">Доставка</NavLink></li>
                  </ul>
                </div>
                <div>
                  <NavLink to="/cart" className="cart-wrap">
                    <img src={require(`./img/cart.png`)} alt="cart" id="cart" />
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

            <Route path="/shop/apple" render={(props) => <Apple {...props} price="69" name="Чипсы - яблоко" state={this.state} addToCartNumber={this.addToCartNumber} addToCartProduct={this.addToCartProduct} info={this.state.products} removeFromCartProduct={this.removeFromCartProduct} addToTotal={this.addToTotal} inputValue={this.state.inputValue} handleChange={this.handleChange} input={this.input} />}>
            </Route>

            <Route path="/shop/apple-cinnamon" render={(props) => < AppleCinnamon {...props} price="69" name="Чипсы - яблоко" state={this.state} addToCartNumber={this.addToCartNumber} addToCartProduct={this.addToCartProduct} info={this.state.products} addToTotal={this.addToTotal} />}>
            </Route>

            <Route path="/shop/pear" render={(props) => <Pear {...props} price="69" name="Чипсы - яблоко" state={this.state} addToCartNumber={this.addToCartNumber} addToCartProduct={this.addToCartProduct} info={this.state.products} removeFromCartProduct={this.removeFromCartProduct} addToTotal={this.addToTotal} inputValue={this.state.inputValue} handleChange={this.handleChange} input={this.input} />}>
            </Route>

            <Route path="/shop/banana" component={Banana}>
            </Route>

            <Route path="/shop/orange" component={Orange}>
            </Route>

            <Route path="/blog" component={Blog}>
            </Route>
            <Route path="/delivery" component={Delivery}>
            </Route>
            <Route path="/about" component={About}>
            </Route>

            <Route path="/cart" render={(props) => <Cart {...props} cartInside={this.state.cartInside} products={productsData} removeFromCartProduct={this.removeFromCartProduct} removeFromCartNumber={this.removeFromCartNumber} cartTotal={this.state.cartTotal} removeFromTotal={this.removeFromTotal} inputValue={this.state.inputValue} />} >
            </Route>


          </Switch>

          <footer id="footer">

            <div className="container">
              <div className="footer-wrap grid-container">
                <div className="flex-container-start">
                  <div className="call-item flex-container align-center">
                    <img src={require(`./img/icons/lifecell.png`)} alt="lifecell" />
                    <p className="text-xs">+380674591254</p>
                  </div>
                  <div className="call-item flex-container align-center">
                    <img src={require(`./img/icons/vodafone.png`)} alt="vodafone" />
                    <p className="text-xs">+380674591254</p>
                  </div>
                </div>

                <div className="call-item flex-container question-item">
                  <input type="tel" placeholder="Ваш телефон" />
                  <button type="submit" className="text-xs">Задать вопрос</button>

                </div>



                <div className="footer-social flex-container-center align-center">
                  <a href="#" className="flex-container-center align-center"><img src={require(`./img/icons/instagram.png`)} alt="instagram" /></a>
                  <a href="#" className="flex-container-center align-center"><img src={require(`./img/icons/facebook.png`)} alt="facebook" /></a>
                  <a href="#" className="flex-container-center align-center"><img src={require(`./img/icons/viber.png`)} alt="viber" /></a>
                  <a href="#" className="flex-container-center align-center"><img src={require(`./img/icons/telegram.png`)} alt="telegram" /></a>
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
