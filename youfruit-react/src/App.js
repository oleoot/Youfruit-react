import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import Shop from './pages/shop'
import Main from './pages/main'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <section id="header">
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
          </section>
          <Route exact path="/" component={Main}>
          </Route>




          <Route path="/shop" component={Shop}>
          </Route>


        </div>
      </Router>
    );
  }
}
export default App;
