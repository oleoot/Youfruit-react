import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import "./delivery.css"
class Delivery extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (

            <section className="delivery">
                <div className="container-xs">
                    <div className="back-btn">
                        <NavLink exact to="/" activeClassName="nav-active" className="text_lg breadcrumbs-link">
                            <img src={require(`../../img/icons/arrow-left.png`)} alt="arrow-left" className="arrow-left" />Главная</NavLink>
                    </div>
                    <div className="section-headline">
                        <div className="section-headline_underline"></div>
                        <div className="section-headline__textWrap">
                            <p className="section-headline_text text_lg">Способы доставки</p>
                        </div>
                        <div className="section-headline_underline"></div>
                    </div>
                </div>
                <div className="container-xs">

                    <div className="delivery-wrap grid-container">
                        <div className="grid-container delivery-item">
                            <img src={require(`../../img/icons/np.png`)} alt="novaposhta" />
                            <div>
                                <p className="text_md delivery__name">Новая Почта</p>
                                <p className="text_sm delivery__info">Доставка в течении 1-2 дней</p>
                                <p className="text_sm delivery__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur expedita unde, earum ipsum hic fugit eaque delectus sunt. Itaque, perferendis!</p>
                            </div>
                        </div>
                        <div className="grid-container delivery-item">
                            <img src={require(`../../img/icons/up.png`)} alt="novaposhta" />
                            <div>
                                <p className="text_md delivery__name">Укрпочта</p>
                                <p className="text_sm delivery__info">Доставка в течении 1-2 дней</p>
                                <p className="text_sm delivery__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur expedita unde, earum ipsum hic fugit eaque delectus sunt. Itaque, perferendis!</p>
                            </div>
                        </div>
                        <div className="grid-container delivery-item">
                            <img src={require(`../../img/icons/meest.png`)} alt="novaposhta" />
                            <div>
                                <p className="text_md delivery__name">MeestExpress</p>
                                <p className="text_sm delivery__info">Доставка в течении 1-2 дней</p>
                                <p className="text_sm delivery__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur expedita unde, earum ipsum hic fugit eaque delectus sunt. Itaque, perferendis!</p>
                            </div>
                        </div>
                        <div className="grid-container delivery-item">
                            <img src={require(`../../img/icons/justin.jpg`)} alt="novaposhta" />
                            <div>
                                <p className="text_md delivery__name">Justin</p>
                                <p className="text_sm delivery__info">Доставка в течении 1-2 дней</p>
                                <p className="text_sm delivery__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur expedita unde, earum ipsum hic fugit eaque delectus sunt. Itaque, perferendis!</p>
                            </div>
                        </div>
                        <div className="grid-container delivery-item">
                            <img src={require(`../../img/icons/truck.png`)} alt="novaposhta" />
                            <div>
                                <p className="text_md delivery__name">Самовывоз</p>
                                <p className="text_sm delivery__info">Доставка в течении 1-2 дней</p>
                                <p className="text_sm delivery__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur expedita unde, earum ipsum hic fugit eaque delectus sunt. Itaque, perferendis!</p>
                            </div>
                        </div>
                    </div>
                    <div className="section-headline">
                        <div className="section-headline_underline"></div>
                        <div className="section-headline__textWrap">
                            <p className="section-headline_text text_lg">Способы оплаты</p>
                        </div>
                        <div className="section-headline_underline"></div>
                    </div>
                    <div className="delivery__payment_inner">
                        <div className="delivery__payment_type">
                            <svg id="Layer_1" enable-background="new 0 0 480 480" height="100" viewBox="0 0 480 480" width="100" xmlns="http://www.w3.org/2000/svg" className="delivery__paymentMethodImg"><path d="m480 103v274c0 22.056-17.944 40-40 40h-400c-22.056 0-40-17.944-40-40v-120c0-4.418 3.582-8 8-8s8 3.582 8 8v120c0 13.233 10.767 24 24 24h400c13.233 0 24-10.767 24-24v-274c0-13.233-10.767-24-24-24h-400c-13.233 0-24 10.767-24 24v32h410c4.418 0 8 3.582 8 8s-3.582 8-8 8h-410v52h410c4.418 0 8 3.582 8 8s-3.582 8-8 8h-418c-4.418 0-8-3.582-8-8v-108c0-22.056 17.944-40 40-40h400c22.056 0 40 17.944 40 40zm-64 208c0-20.537-22.83-32.992-40.125-21.817 16.971 27.8-3.117 63.817-35.875 63.817-23.159 0-42-18.841-42-42 0-34.467 39.438-54.21 67-33.726 27.685-20.479 67-.677 67 33.726 0 23.159-18.841 42-42 42-4.418 0-8-3.582-8-8s3.582-8 8-8c14.337 0 26-11.663 26-26zm-50 0c0-14.337-11.663-26-26-26s-26 11.663-26 26 11.663 26 26 26 26-11.663 26-26zm-293-17h67c4.418 0 8-3.582 8-8s-3.582-8-8-8h-67c-4.418 0-8 3.582-8 8s3.582 8 8 8zm0 50h67c4.418 0 8-3.582 8-8s-3.582-8-8-8h-67c-4.418 0-8 3.582-8 8s3.582 8 8 8z" /></svg>
                            <p className="text_md payment__text">Картой</p>
                        </div>
                        <div className="delivery__payment_type">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 512 512" width="100" height="100" className="delivery__paymentMethodImg"><path d="M160,395.963V488a8,8,0,0,0,8,8H440a8,8,0,0,0,8-8V296a40.132,40.132,0,0,0-4.706-18.823L384,166V24a8,8,0,0,0-8-8H168a8,8,0,0,0-8,8V52.072L69.61,80.365A8,8,0,0,0,64.365,90.39ZM149.805,122.331l-4.781-15.276L160,102.367V235.245l-30.706-98.11,15.267-4.78A8,8,0,0,0,149.805,122.331ZM432,296V480H384a72.085,72.085,0,0,1-71.984-70.485,8,8,0,0,0-1.227-5.994L258.9,326.716a24,24,0,1,1,39.771-26.872c.047.069.1.138.145.206l46.705,64.636A8,8,0,0,0,352,368h24a8,8,0,0,0,8-8V200l45.177,84.706A24.1,24.1,0,0,1,432,296ZM224,424H208V88h16a8,8,0,0,0,8-8V64h80V80a8,8,0,0,0,8,8h16V324.2l-24.15-33.423a40.352,40.352,0,0,0-3.078-3.948,47.99,47.99,0,1,0-65.36,7.729,40.118,40.118,0,0,0,2.225,41.117l50.391,74.58A87.4,87.4,0,0,0,305.639,448H232V432A8,8,0,0,0,224,424Zm32.387-143.864c-.956.646-1.872,1.335-2.76,2.051a32,32,0,1,1,42.347-5A40.013,40.013,0,0,0,256.387,280.136ZM176,32H368V352H356.089L352,346.341V80a8,8,0,0,0-8-8H328V56a8,8,0,0,0-8-8H224a8,8,0,0,0-8,8V72H200a8,8,0,0,0-8,8V432a8,8,0,0,0,8,8h16v16a8,8,0,0,0,8,8h92.189a88.722,88.722,0,0,0,17.305,16H176ZM160,68.837V85.6l-27.39,8.574a8,8,0,0,0-5.245,10.024l4.781,15.277-15.267,4.779a8,8,0,0,0-5.244,10.025L160,288.812v53.582L82.024,93.245Z" /></svg>
                            <p className="text_md payment__text">Наличными при самовывозе</p>
                        </div>
                        <div className="delivery__payment_type">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="100" height="100" className="delivery__paymentMethodImg"><g id="Buy"><path d="M61,2H55a1,1,0,0,0-1,1v.382L51.869,2.316A3.014,3.014,0,0,0,50.528,2H35.872A3,3,0,0,0,34,2.658L29.819,6H13a1,1,0,0,0-1,1V23a1,1,0,0,0,1,1H43a1,1,0,0,0,1-1V15.448a9.026,9.026,0,0,0,7.943-.648L53.28,14l.72,0V15a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V3A1,1,0,0,0,61,2ZM14,22V8H37.929L36.808,9.122a3,3,0,0,0,4.242,4.242l.95-.95V22ZM52.994,12a.993.993,0,0,0-.509.143l-1.571.942a7.03,7.03,0,0,1-6.24.482L44,13.293V10.414l1.27-1.27.516.172a7.044,7.044,0,0,0,4.428,0l1.1-.367a1,1,0,0,0-.632-1.9l-1.1.368a5.029,5.029,0,0,1-3.162,0l-1.1-.368a1,1,0,0,0-1.023.242l-2,2h0L39.636,11.95a1,1,0,0,1-1.414,0,1,1,0,0,1,0-1.414l3.886-3.887a1,1,0,0,0-1.414-1.414L39.929,6H33.021l2.226-1.781A1,1,0,0,1,35.872,4H50.528a1.019,1.019,0,0,1,.447.105L54,5.618v6.375ZM60,14H56V4h4Z" /><path d="M28,12a1,1,0,0,1,1,1h2a3,3,0,0,0-2-2.816V9H27v1.184A2.993,2.993,0,0,0,28,16a1,1,0,1,1-1,1H25a3,3,0,0,0,2,2.816V21h2V19.816A2.993,2.993,0,0,0,28,14a1,1,0,0,1,0-2Z" /><path d="M22,14H20a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z" /><path d="M36,14H34a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z" /><path d="M43.458,49.773a2.989,2.989,0,0,0-4.1-1.1l-6.427,3.7A3,3,0,0,0,30,50H22.3l-.2-.134A10.968,10.968,0,0,0,10,49.8V49a1,1,0,0,0-1-1H3a1,1,0,0,0-1,1V61a1,1,0,0,0,1,1H9a1,1,0,0,0,1-1v-.136l.934.62A2.98,2.98,0,0,0,12.61,62H27.46a2.922,2.922,0,0,0,1.5-.4l13.4-7.73a3.017,3.017,0,0,0,1.5-2.606A2.97,2.97,0,0,0,43.458,49.773ZM8,60H4V50H8Zm33.36-7.866L27.945,59.873A.931.931,0,0,1,27.46,60H12.61a.977.977,0,0,1-.557-.173L10,58.464V52a1,1,0,0,0,.554-.167l.454-.3a8.976,8.976,0,0,1,9.985,0l.453.3A1,1,0,0,0,22,52h8a1,1,0,0,1,0,2H24a1,1,0,0,0,0,2h6a2.976,2.976,0,0,0,1.981-.764L40.368,50.4a.968.968,0,0,1,.746-.1.994.994,0,0,1,.611.472.966.966,0,0,1,.135.488A1.011,1.011,0,0,1,41.36,52.134Z" /><path d="M41,28H15a1,1,0,0,0-1,1V47a1,1,0,0,0,1,1H41a1,1,0,0,0,1-1V29A1,1,0,0,0,41,28ZM29,30v4H27V30ZM40,46H16V30h9v5a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V30h9Z" /><path d="M22,40H18a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Z" /><path d="M26,40H25a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Z" /><path d="M22,43H18a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Z" /><path d="M26,43H25a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Z" /></g></svg>
                            <p className="text_md payment__text">Наложенный платеж</p>
                        </div>
                    </div>
                </div>
            </section>






        )
    }
}
export default Delivery;
