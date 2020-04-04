import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
import Shop from './pages/shop/shop';
import Apple from './product-pages/apple/apple';
import Main from './pages/main/main';
import Blog from './pages/blog/blog';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header id="header">
            <div className="container">
              <nav className="nav flex-container align-center">

                <div className="flex-container-center align-center" id="nav-left">
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

                <a href="#"><img src={require(`./img/cart.png`)} alt="cart" id="cart" /></a>
              </nav>
            </div>
          </header>

          <Switch>
            <Route exact path="/" component={Main}>
            </Route>

            <Route exact path="/shop" component={Shop}>
            </Route>

            <Route path="/shop:apple" component={Apple}>
            </Route>

            <Route path="/blog" component={Blog}>
            </Route>
          </Switch>

          <footer id="footer">

            <div className="container">
              <div className="footer-wrap grid-container">
                <div className="footer-call flex-container-center">
                  <div className="call-item flex-container align-center">
                    <img src={require(`./img/icons/lifecell.png`)} alt="lifecell" />
                    <p className="text-xs">+380674591254</p>
                  </div>
                  <div className="call-item flex-container align-center">
                    <img src={require(`./img/icons/vodafone.png`)} alt="vodafone" />
                    <p className="text-xs">+380674591254</p>
                  </div>
                </div>


                <div className="footer-question flex-container-center align-center">
                  <input type="phone" placeholder="Ваш телефон" />
                  <button type="submit">Задать вопрос</button>
                </div>



                <div className="footer-social flex-container-center align-center">
                  <a href="#"><img src={require(`./img/icons/instagram.png`)} alt="instagram" /></a>
                  <a href="#"><img src={require(`./img/icons/facebook.png`)} alt="facebook" /></a>
                  <a href="#"><img src={require(`./img/icons/viber.png`)} alt="viber" /></a>
                  <a href="#"><img src={require(`./img/icons/telegram.png`)} alt="telegram" /></a>
                </div>
              </div>


              <p className="text-xs">&copy; Youfruit 2020</p>
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}
export default App;
