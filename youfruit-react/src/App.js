import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
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
                  <li><a href="#" className="text-sm">Главная</a></li>
                  <li><a href="#" className="text-sm">Магазин</a></li>
                  <li><a href="#" className="text-sm">Блог</a></li>
                  <li><a href="#" className="text-sm">О нас</a></li>
                  <li><a href="#" className="text-sm">Доставка</a></li>
                </ul>
              </div>

              <a href="#"><img src={require(`./img/cart.png`)} alt="cart" id="cart" /></a>
            </nav>
          </div>
          <div className="header grid-container">
            <div className="flex-container-center align-center">
              <div>
                <h1 className="text-xl">Пастила и Фруктовые чипсы</h1>
                <p className="text-lg">Новый взгяд на сладости</p>
                <a href="#" className="btn text-lg">Магазин</a>
              </div>
            </div>

            <div className="flex-container-center align-center">
              <img src={require(`./img/pineapple.png`)} alt="pineapple" />
            </div>
          </div>
        </section>

      </div>
    );
  }
}
export default App;
