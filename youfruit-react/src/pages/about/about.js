import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import "./about.css"
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
        // const marker = new mapboxgl.Marker()
        //     .setLngLat([30.616444, 50.401744])
        //     .addTo(map);
        // const geocoder = new MapboxGeocoder({
        //     accessToken: mapboxgl.accessToken,
        //     language: 'ru-RU',
        //     mapboxgl: mapboxgl
        // });
        // map.addControl(geocoder);

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

            <section className="about">
                <div className="container-xs">
                    <div className="back-btn">
                        <NavLink exact to="/" activeClassName="nav-active" className="text-lg"><img src={require(`../../img/icons/arrow-left.png`)} alt="arrow-left" className="arrow-left" />Главная</NavLink>
                    </div>
                    <div className="section-headline">
                        <div className="section-headline_underline"></div>
                        <div className="section-headline__textWrap">
                            <p className="section-headline_text text_lg">О нас</p>
                        </div>
                        <div className="section-headline_underline"></div>
                    </div>
                </div>
                <div className="container-xs">
                    <div className="about-wrap">
                        <div className="about-item" id="about-company">
                            <img src={require(`../../img/about/logo.png`)} alt="muffins" className="about-logo-img" />
                            <p className="text_sm  about__description about-logo-text">Есть над чем задуматься: предприниматели в сети интернет будут заблокированы в рамках своих собственных рациональных ограничений. С учётом сложившейся международной обстановки, высококачественный прототип будущего проекта предоставляет широкие возможности для глубокомысленных рассуждений.</p>
                        </div>

                        <div className="about-item">
                            <img src={require(`../../img/about/daria.png`)} alt="muffins" />
                            <p className="text_lg about__name">Дарья</p>
                            <p className="text_sm about__description ">Как уже неоднократно упомянуто, акционеры крупнейших компаний, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут объединены в целые кластеры себе подобных.</p>
                        </div>
                        <div className="about-item">
                            <img src={require(`../../img/about/oleg.png`)} alt="muffins" />
                            <p className="text_lg about__name">Олег</p>
                            <p className="text_sm about__description ">С учётом сложившейся международной обстановки, сплочённость команды профессионалов напрямую зависит от системы массового участия.</p>
                        </div>
                    </div>
                </div>
                <section className="about__info">
                    <div className="container-xs">
                        <div className="section-headline">
                            <div className="section-headline_underline"></div>
                            <div className="section-headline__textWrap">
                                <p className="section-headline_text text_lg">Контакты</p>
                            </div>
                            <div className="section-headline_underline"></div>
                        </div>

                        <div className="about__info_inner">
                            <div className="about__info_phone">
                                <ul>
                                    <li>youfruit.shop@gmail.com</li>
                                    <li>+380667395800</li>
                                    <li>+380667395800</li>
                                    <li>м.Осокорки</li>
                                    <li>Княжий Затон 14Б</li>
                                </ul>
                            </div>
                            <div className="about__info_call">
                                <p className="about__info_headline">Свяжитесь с нами</p>
                                <form>
                                    <div className="form__top">
                                        <div>
                                            <label htmlFor="" >Имя</label>
                                            <input type="text" placeholder="Имя..." />
                                        </div>
                                        <div>
                                            <label htmlFor="" >Телефон</label>
                                            <input type="text" placeholder="Телефон..." />
                                        </div>
                                    </div>
                                    <div className="form__bottom">
                                        <label htmlFor="">Сообщение</label>
                                        <textarea placeholder="Сообщение..."></textarea>
                                    </div>
                                    <button className="btn">Отправить сообщение</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="map">
                    <div className="container-xs">
                        <div className="section-headline">
                            <div className="section-headline_underline"></div>
                            <div className="section-headline__textWrap">
                                <p className="section-headline_text text_lg">Мы на карте</p>
                            </div>
                            <div className="section-headline_underline"></div>
                        </div>
                    </div>
                    <div className="mapContainer__wrap">
                        <div ref={el => this.mapContainer = el} className="mapContainer" />
                    </div>
                </section>

            </section>





        )
    }
}
export default About;
