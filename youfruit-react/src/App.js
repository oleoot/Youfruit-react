import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Shop from './pages/shop/shop';
import Blog from './pages/blog/blog';
import About from './pages/about/about';
import Delivery from './pages/delivery/delivery';
import Post from './pages/blog/post'
import Product from './product-pages/product'
import Main from './pages/main/main';
import Cart from './pages/cart/cart';
import { productsData } from './products'
import { blogData } from './blog-info'
import './styles/style.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      products: productsData,
      blogPosts: blogData,
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
    console.log(this.state.products)
    return (
      <Router>
        <div className="App">
          <header className="header">
            <div className="container">
              <div className="header__left">
                <img src={require(`./img/logo.png`)} alt="logo" className="header__logo" />
                <p className="header__logoName text_md font_regular"><span>You</span>fruit</p>
                <div className="burger-menu" onClick={this.openMenu}>
                  <div className="burger-menu__line"></div>
                  <div className="burger-menu__line"></div>
                  <div className="burger-menu__line"></div>
                </div>
                {this.state.menuOpen === true ?
                  <div className="hidden-menu">
                    <ul className="hidden-menu__list">
                      <li className="hidden-menu__listItem"><NavLink exact to="/" activeClassName="header__link_active" className="text_md" onClick={this.openMenu}>Главная</NavLink></li>
                      <li className="hidden-menu__listItem"><NavLink to="/shop" activeClassName="header__link_active" className="text_md" onClick={this.openMenu}>Магазин</NavLink></li>
                      <li className="hidden-menu__listItem"><NavLink to="/blog" activeClassName="header__link_active" className="text_md" onClick={this.openMenu}>Блог</NavLink></li>
                      <li className="hidden-menu__listItem"><NavLink to="/about" activeClassName="header__link_active" className="text_md" onClick={this.openMenu}>О нас</NavLink></li>
                      <li className="hidden-menu__listItem"><NavLink to="/delivery" activeClassName="header__link_active" className="text_md" onClick={this.openMenu}>Доставка/Оплата</NavLink></li>
                    </ul>
                  </div> :
                  <div ></div>
                }
              </div>

              <div className="header__middle">
                <ul className="header__list">
                  <li className="header__listItem"><NavLink exact to="/" activeClassName="header__link_active" className="header__link text_md font_regular">Главная</NavLink></li>
                  <li className="header__listItem"><NavLink to="/shop" activeClassName="header__link_active" className="header__link text_md font_regular">Магазин</NavLink></li>
                  <li className="header__listItem"><NavLink to="/blog" activeClassName="header__link_active" className="header__link text_md font_regular">Блог</NavLink></li>
                  <li className="header__listItem"><NavLink to="/about" activeClassName="header__link_active" className="header__link text_md font_regular">Контакты</NavLink></li>
                  <li className="header__listItem"><NavLink to="/delivery" activeClassName="header__link_active" className="header__link text_md font_regular">Доставка/Оплата</NavLink></li>
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
            {this.state.products.map(product => (
              <Route path={product.link} render={(props) =>
                <Product {...props} addToCartNumber={this.addToCartNumber} addToCartProduct={this.addToCartProduct} addToTotal={this.addToTotal} cartTotal={this.state.cartTotal} />}>
              </Route>
            ))
            }

            {this.state.blogPosts.map(post => (
              <Route path={post.link} component={Post}>
              </Route>
            ))
            }

            <Route path="/blog" component={Blog}>
            </Route>
            <Route path="/delivery" component={Delivery}>
            </Route>
            <Route path="/about" component={About}>
            </Route>

            <Route path="/cart" render={(props) => <Cart {...props} cartInside={this.state.cartInside} removeFromCartProduct={this.removeFromCartProduct} removeFromCartNumber={this.removeFromCartNumber} cartTotal={this.state.cartTotal} removeFromTotal={this.removeFromTotal} />} >
            </Route>

            {/* <Route path="/blog/pancakes" component={Post}></Route> */}


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
                  <p className="text_xs footer__copy">&copy; Youfruit 2020</p>
                  {/* <input type="tel" placeholder="Ваш телефон" className="footer__input" />
                  <button type="submit" className="footer__button text_xs">Задать вопрос</button> */}

                </div>



                <div className="footer__right">
                  <a href="https://www.instagram.com/youfruit_shop/" target="_blank" className="footer__right_imgWrap">
                    <svg viewBox="0 0 512.00096 512.00096" width="30" height="30" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="m373.40625 0h-234.8125c-76.421875 0-138.59375 62.171875-138.59375 138.59375v234.816406c0 76.417969 62.171875 138.589844 138.59375 138.589844h234.816406c76.417969 0 138.589844-62.171875 138.589844-138.589844v-234.816406c0-76.421875-62.171875-138.59375-138.59375-138.59375zm108.578125 373.410156c0 59.867188-48.707031 108.574219-108.578125 108.574219h-234.8125c-59.871094 0-108.578125-48.707031-108.578125-108.574219v-234.816406c0-59.871094 48.707031-108.578125 108.578125-108.578125h234.816406c59.867188 0 108.574219 48.707031 108.574219 108.578125zm0 0" /><path d="m256 116.003906c-77.195312 0-139.996094 62.800782-139.996094 139.996094s62.800782 139.996094 139.996094 139.996094 139.996094-62.800782 139.996094-139.996094-62.800782-139.996094-139.996094-139.996094zm0 249.976563c-60.640625 0-109.980469-49.335938-109.980469-109.980469 0-60.640625 49.339844-109.980469 109.980469-109.980469 60.644531 0 109.980469 49.339844 109.980469 109.980469 0 60.644531-49.335938 109.980469-109.980469 109.980469zm0 0" /><path d="m399.34375 66.285156c-22.8125 0-41.367188 18.558594-41.367188 41.367188 0 22.8125 18.554688 41.371094 41.367188 41.371094s41.371094-18.558594 41.371094-41.371094-18.558594-41.367188-41.371094-41.367188zm0 52.71875c-6.257812 0-11.351562-5.09375-11.351562-11.351562 0-6.261719 5.09375-11.351563 11.351562-11.351563 6.261719 0 11.355469 5.089844 11.355469 11.351563 0 6.257812-5.09375 11.351562-11.355469 11.351562zm0 0" /></svg>
                  </a>
                  <a href="https://www.facebook.com/youfruit.shop/" target="_blank" className="footer__right_imgWrap">
                    <svg viewBox="-110 1 511 511.99996" fill="#fff" width="30" height="30" xmlns="http://www.w3.org/2000/svg"><path d="m180 512h-81.992188c-13.695312 0-24.835937-11.140625-24.835937-24.835938v-184.9375h-47.835937c-13.695313 0-24.835938-11.144531-24.835938-24.835937v-79.246094c0-13.695312 11.140625-24.835937 24.835938-24.835937h47.835937v-39.683594c0-39.347656 12.355469-72.824219 35.726563-96.804688 23.476562-24.089843 56.285156-36.820312 94.878906-36.820312l62.53125.101562c13.671875.023438 24.792968 11.164063 24.792968 24.835938v73.578125c0 13.695313-11.136718 24.835937-24.828124 24.835937l-42.101563.015626c-12.839844 0-16.109375 2.574218-16.808594 3.363281-1.152343 1.308593-2.523437 5.007812-2.523437 15.222656v31.351563h58.269531c4.386719 0 8.636719 1.082031 12.289063 3.121093 7.878906 4.402344 12.777343 12.726563 12.777343 21.722657l-.03125 79.246093c0 13.6875-11.140625 24.828125-24.835937 24.828125h-58.46875v184.941406c0 13.695313-11.144532 24.835938-24.839844 24.835938zm-76.8125-30.015625h71.632812v-193.195313c0-9.144531 7.441407-16.582031 16.582032-16.582031h66.726562l.027344-68.882812h-66.757812c-9.140626 0-16.578126-7.4375-16.578126-16.582031v-44.789063c0-11.726563 1.191407-25.0625 10.042969-35.085937 10.695313-12.117188 27.550781-13.515626 39.300781-13.515626l36.921876-.015624v-63.226563l-57.332032-.09375c-62.023437 0-100.566406 39.703125-100.566406 103.609375v53.117188c0 9.140624-7.4375 16.582031-16.578125 16.582031h-56.09375v68.882812h56.09375c9.140625 0 16.578125 7.4375 16.578125 16.582031zm163.0625-451.867187h.003906zm0 0" /></svg>
                  </a>
                  <a href="viber://add?number=380508373513" className="footer__right_imgWrap">
                    <svg height="30" viewBox="-22 0 512 512" width="30" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="m468.484375 180.707031c.003906-48.085937-18.84375-93.414062-53.066406-127.636719-34.222657-34.222656-79.550781-53.070312-127.640625-53.070312h-107.070313c-.003906 0-.003906 0-.003906 0-48.082031 0-93.414063 18.847656-127.632813 53.066406-34.222656 34.226563-53.070312 79.554688-53.070312 127.640625v84.164063c0 37.242187 11.359375 73.0625 32.851562 103.597656 18.960938 26.9375 44.460938 47.980469 74.191407 61.320312v48.34375c0 24.996094 13.996093 33.867188 25.980469 33.867188 8.5625 0 17.125-4.226562 25.460937-12.558594l53.859375-53.859375 75.4375-.003906c48.085938 0 93.414062-18.847656 127.636719-53.066406 34.222656-34.222657 53.070312-79.554688 53.070312-127.640625zm-180.703125 234.871094-81.648438.003906c-3.980468 0-7.792968 1.578125-10.605468 4.390625l-58.253906 58.253906c-.074219.078126-.152344.152344-.230469.226563 0-.105469 0-.214844 0-.320313v-58.355468c0-6.222656-3.839844-11.796875-9.652344-14.015625-58.25-22.226563-97.386719-78.847657-97.386719-140.890625v-84.164063c0-40.074219 15.726563-77.871093 44.28125-106.429687 28.554688-28.550782 66.347656-44.277344 106.421875-44.277344h107.070313c40.074218 0 77.871094 15.726562 106.425781 44.28125 28.558594 28.558594 44.285156 66.355469 44.28125 106.425781l.003906 84.164063c-.003906 83.101562-67.609375 150.707031-150.707031 150.707031zm0 0" /><path d="m274.132812 245.335938c-5.855468-5.859376-15.351562-5.859376-21.210937 0l-12.117187 12.113281-46.953126-46.949219 12.117188-12.113281c2.8125-2.8125 4.394531-6.628907 4.394531-10.609375 0-3.976563-1.582031-7.792969-4.394531-10.605469l-56.804688-56.804687c-2.8125-2.8125-6.625-4.394532-10.605468-4.394532-3.976563 0-7.792969 1.582032-10.605469 4.394532l-39.765625 39.765624c-21.503906 21.503907-21.503906 56.5.003906 78.015626l124.964844 124.972656c10.390625 10.386718 24.246094 16.105468 39.007812 16.105468 14.765626 0 28.621094-5.71875 39.011719-16.105468l39.765625-39.761719c2.8125-2.816406 4.394532-6.628906 4.394532-10.609375 0-3.976562-1.582032-7.792969-4.394532-10.605469zm-4.171874 96.566406c-4.722657 4.722656-11.042969 7.324218-17.796876 7.324218-6.753906 0-13.074218-2.601562-17.796874-7.324218l-124.960938-124.96875c-9.8125-9.8125-9.816406-25.78125-.003906-35.589844l29.15625-29.160156 35.589844 35.59375-12.117188 12.113281c-2.8125 2.8125-4.394531 6.628906-4.394531 10.605469 0 3.980468 1.582031 7.792968 4.394531 10.609375l68.164062 68.164062c5.859376 5.855469 15.355469 5.859375 21.214844 0l12.117188-12.113281 35.589844 35.589844zm0 0" /><path d="m237.882812 66.355469c-8.285156 0-15 6.714843-15 15 0 8.28125 6.714844 15 15 15 34.328126 0 66.605469 13.367187 90.878907 37.644531 24.277343 24.273438 37.644531 56.546875 37.644531 90.878906 0 8.28125 6.714844 15 15 15 8.28125 0 15-6.714844 15-15 0-42.34375-16.488281-82.152344-46.429688-112.09375-29.941406-29.941406-69.75-46.429687-112.09375-46.429687zm0 0" /><path d="m302.140625 224.875c0 8.28125 6.71875 15 15 15 8.285156 0 15-6.71875 15-15 0-51.972656-42.285156-94.253906-94.257813-94.253906-8.285156 0-15 6.714844-15 15s6.714844 15 15 15c35.433594 0 64.257813 28.824218 64.257813 64.253906zm0 0" /></svg>
                  </a>
                  <a href="tg://resolve?domain=d_zavgorodnia" className="footer__right_imgWrap">
                    <svg id="regular" enable-background="new 0 0 24 24" height="30" viewBox="0 0 24 24" width="30" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="m.415 11.196 5.869 2.925c.227.112.495.104.712-.023l5.224-3.037-3.162 2.802c-.161.143-.253.347-.253.562v6.825c0 .72.919 1.023 1.35.451l2.537-3.373 6.274 3.573c.44.253 1.004-.001 1.106-.504l3.913-19.5c.117-.586-.466-1.064-1.008-.846l-22.5 8.775c-.604.236-.643 1.081-.062 1.37zm21.83-8.249-3.439 17.137-5.945-3.386c-.324-.185-.741-.103-.971.201l-1.585 2.107v-4.244l8.551-7.576c.677-.599-.101-1.664-.874-1.21l-11.39 6.622-3.992-1.989z" /></svg>
                  </a>
                </div>
              </div>



            </div>
          </footer>
        </div>
      </Router >
    );
  }
}
export default App;
