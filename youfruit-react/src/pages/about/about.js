import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
// import "./about.css"
import "../../styles/style.css"
import mapboxgl from 'mapbox-gl';
import MapboxLanguage from '@mapbox/mapbox-gl-language';
mapboxgl.accessToken = 'pk.eyJ1Ijoib2xlb290IiwiYSI6ImNrYW94NWY5MDA3cTgzMHFueGI3YjFpYXQifQ.O3vQ-bGYRrxazvXGCcnTFQ';




class About extends Component {
    constructor() {
        super()

        this.state = {
            lng: 30.616444,
            lat: 50.401744,
            zoom: 16
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/oleoot/ckewk6z0f0g8r19r1jkgezmzm/draft',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });
        map.addControl(new MapboxLanguage({
            defaultLanguage: 'ru'
        }));
        const geojson = [
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [30.616444, 50.401744]
                }
            }
        ]
        geojson.forEach(function (marker) {
            var el = document.createElement('div');
            el.className = 'marker';

            new mapboxgl.Marker(el)
                .setLngLat(marker.geometry.coordinates)
                .addTo(map)
        })
    }

    render() {
        return (
            <div className="about">
                <section className="info">
                    <div className="container-xs">
                        <div className="breadcrumbs-btn">
                            <NavLink exact to="/" activeClassName="nav-active" className="breadcrumbs-btn__link text_lg font_regular">
                                <img src={require(`../../img/icons/arrow-left.png`)} alt="arrow-left" className="breadcrumbs-btn__img" />Главная</NavLink>
                        </div>
                        <div className="section-headline">
                            <div className="section-headline_underline"></div>
                            <div className="section-headline__textWrap">
                                <p className="section-headline_text text_lg">О нас</p>
                            </div>
                            <div className="section-headline_underline"></div>
                        </div>
                        <div className="info__innerWrap">
                            <div className="info__item">
                                <img src={require(`../../img/about/logo.png`)} alt="muffins" className="info__img" />
                                <p className="info__description text_sm font_regular">Есть над чем задуматься: предприниматели в сети интернет будут заблокированы в рамках своих собственных рациональных ограничений. С учётом сложившейся международной обстановки, высококачественный прототип будущего проекта предоставляет широкие возможности для глубокомысленных рассуждений.</p>
                            </div>

                            <div className="info__item">
                                <img src={require(`../../img/about/daria.png`)} alt="muffins" className="info__img" />
                                <p className="info__name text_lg font_semibold">Дарья</p>
                                <p className="info__description text_sm font_regular">Как уже неоднократно упомянуто, акционеры крупнейших компаний, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут объединены в целые кластеры себе подобных.</p>
                            </div>
                            <div className="info__item">
                                <img src={require(`../../img/about/oleg.png`)} alt="muffins" className="info__img" />
                                <p className="info__name text_lg font_semibold">Олег</p>
                                <p className="info__description text_sm font_regular">С учётом сложившейся международной обстановки, сплочённость команды профессионалов напрямую зависит от системы массового участия.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contact">
                    <div className="container-xs">
                        <div className="section-headline">
                            <div className="section-headline_underline"></div>
                            <div className="section-headline__textWrap">
                                <p className="section-headline_text text_lg">Контакты</p>
                            </div>
                            <div className="section-headline_underline"></div>
                        </div>

                        <div className="contact__innerWrap">
                            <div className="contact__infoPane">
                                <ul>
                                    <li className="contact__listItem">youfruit.shop@gmail.com</li>
                                    <li className="contact__listItem">+380667395800</li>
                                    <li className="contact__listItem">+380667395800</li>
                                    <li className="contact__listItem">м.Осокорки</li>
                                    <li className="contact__listItem">Княжий Затон 14Б</li>
                                </ul>
                            </div>
                            <div className="contact__formPane">
                                <p className="contact__headline">Свяжитесь с нами</p>
                                <form className="contact-form">
                                    <div className="contact-form__top">
                                        <div>
                                            <label htmlFor="" className="contact-form__label">Имя</label>
                                            <input type="text" placeholder="Имя..." className="contact-form__input" />
                                        </div>
                                        <div>
                                            <label htmlFor="" className="contact-form__label">Телефон</label>
                                            <input type="text" placeholder="Телефон..." className="contact-form__input" />
                                        </div>
                                    </div>
                                    <div className="contact-form__bottom">
                                        <label htmlFor="" className="contact-form__label">Сообщение</label>
                                        <textarea placeholder="Сообщение..." className="contact-form__textarea"></textarea>
                                    </div>
                                    <button className="btn">Отправить сообщение</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="map">
                    <div className="container">
                        <div className="section-headline">
                            <div className="section-headline_underline"></div>
                            <div className="section-headline__textWrap">
                                <p className="section-headline_text text_lg">Мы на карте</p>
                            </div>
                            <div className="section-headline_underline"></div>
                        </div>
                    </div>
                    <div className="mapContainer__wrap">
                        <div className="mapContainer__info">
                            <ul>
                                <li className="mapContainer__listItem text_sm font_semibold">youfruit.shop@gmail.com</li>
                                <li className="mapContainer__listItem text_sm font_semibold">+380667395800</li>
                                <li className="mapContainer__listItem text_sm font_semibold">м.Осокорки</li>
                                <li className="mapContainer__listItem text_sm font_semibold">Княжий Затон 14Б</li>

                            </ul>
                        </div>
                        <div ref={el => this.mapContainer = el} className="mapContainer" />
                    </div>
                </section>
            </div>
        )
    }
}
export default About;
