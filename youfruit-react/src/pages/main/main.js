import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import TinySlider from "tiny-slider-react";
import "../../styles/style.css"
import mapboxgl from 'mapbox-gl';
import MapboxLanguage from '@mapbox/mapbox-gl-language';
mapboxgl.accessToken = 'pk.eyJ1Ijoib2xlb290IiwiYSI6ImNrYW94NWY5MDA3cTgzMHFueGI3YjFpYXQifQ.O3vQ-bGYRrxazvXGCcnTFQ';
class Main extends Component {
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
        const mainSettings = {
            lazyload: true,
            mouseDrag: true,
            controlsContainer: '.slider-arrows__main',
            navContainer: ".slider-nav_main"
        };
        const bestsellersSettings = {
            items: 3,
            lazyload: true,
            gutter: 30,
            nav: false,
            loop: false,
            controlsContainer: ".slider-arrows_bestsellers",
            edgePadding: 15,
        };
        const reviewsSettings = {
            items: 3,
            lazyload: true,
            gutter: 30,
            nav: false,
            loop: false,
            controlsContainer: ".slider-arrows__reviews",
            edgePadding: 15
        };
        return (
            <div className="front-page">
                <section className="main">
                    <div className="slider-wrap slider-wrap__main">
                        <div className="slider-arrows slider-arrows__main">
                            <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)" className="slider-arrow slider-arrows__main_left">
                                <g>
                                    <rect fill="none" height="52" width="52" y="-1" x="-1" />
                                </g>
                                <g>
                                    <path stroke="null" id="svg_2" d="m13.43859,49.57138c-0.59261,0.00111 -1.07386,-0.47853 -1.07496,-1.07114c-0.0005,-0.28569 0.11297,-0.55981 0.31527,-0.76161l22.84886,-22.84675l-22.84886,-22.84665c-0.41958,-0.41958 -0.41958,-1.09981 0,-1.51939c0.41958,-0.41958 1.09981,-0.41958 1.51939,0l23.60645,23.60645c0.41888,0.41898 0.41888,1.0982 0,1.51728l-23.60645,23.60635c-0.20119,0.2019 -0.47461,0.31547 -0.7597,0.31547z" />
                                </g>
                            </svg>
                            <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" className="slider-arrow slider-arrows__main_right">
                                <g>
                                    <rect fill="none" height="52" width="52" y="-1" x="-1" />
                                </g>
                                <g>
                                    <path stroke="null" id="svg_2" d="m13.43859,49.57138c-0.59261,0.00111 -1.07386,-0.47853 -1.07496,-1.07114c-0.0005,-0.28569 0.11297,-0.55981 0.31527,-0.76161l22.84886,-22.84675l-22.84886,-22.84665c-0.41958,-0.41958 -0.41958,-1.09981 0,-1.51939c0.41958,-0.41958 1.09981,-0.41958 1.51939,0l23.60645,23.60645c0.41888,0.41898 0.41888,1.0982 0,1.51728l-23.60645,23.60635c-0.20119,0.2019 -0.47461,0.31547 -0.7597,0.31547z" />
                                </g>
                            </svg>
                        </div>
                        <div className="slider-nav slider-nav_main">
                            <div className="nav-item"></div>
                            <div className="nav-item"></div>
                        </div>
                        <TinySlider settings={mainSettings}>
                            <div>
                                <div className="main__innerWrap">
                                    <div className="container">
                                        <div className="main__inner">
                                            <div className="main__textWrap">
                                                <h1 className="main__headline text_xl font_regular">Пастила и Фруктовые чипсы</h1>
                                                <p className="main__description text_md font_regular">Новый взгяд на сладости</p>
                                                <Link to="/shop" className="btn text_md">Магазин</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="main__innerWrap">
                                    <div className="container">
                                        <div className="main__inner">
                                            <div className="main__textWrap">
                                                <h1 className="main__headline text_xl font_regular">Конфеты, сделанные правильно</h1>
                                                <p className="main__description text_md font_regular">Без вредных веществ</p>
                                                <Link to="/shop" className="btn text_md">Магазин</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TinySlider>
                    </div>
                </section>
                <section className="production" id="production">
                    <div className="container-xs">
                        <div className="section-headline">
                            <div className="section-headline_underline"></div>
                            <div className="section-headline__textWrap">
                                <p className="section-headline_text text_lg">Продукция</p>
                            </div>
                            <div className="section-headline_underline"></div>
                        </div>
                    </div>
                    <div className="container-xs">
                        <div className="production__wrap">
                            <div>
                                <img src={require(`../../img/products/frips.jpg`)} alt="healthy" className="production__img production__img_topLeft" />
                            </div>
                            <div className="production__pane">
                                <div>
                                    <p className="production__name">Натуральная пастила</p>
                                    <p className="production__price">От <span className="production__price_colored">69грн</span></p>
                                    <Link to="/shop" className="btn text_sm">Купить</Link>
                                    <p className="production__description text_md">Пастила - это высушенное фруктовое пюре.
                                    Благодаря длительной готовке на низкой температуре в ней сохраняются все полезные вещества.
В состав пастилы входят исключительно свежие фрукты.</p>
                                </div>
                            </div>
                            <div className="production__pane">
                                <div>
                                    <p className="production__name">Натуральная пастила</p>
                                    <p className="production__price">От <span className="production__price_colored">69грн</span></p>
                                    <Link to="/shop" className="btn text_sm">Купить</Link>
                                    <p className="production__description text_md">Пастила - это высушенное фруктовое пюре.
                                    Благодаря длительной готовке на низкой температуре в ней сохраняются все полезные вещества.
В состав пастилы входят исключительно свежие фрукты.</p>
                                </div>
                            </div>
                            <div>
                                <img src={require(`../../img/products/pastila.jpg`)} alt="healthy" className="production__img" />
                            </div>
                            <div>
                                <img src={require(`../../img/products/frips.jpg`)} alt="healthy" className="production__img production__img_bottomRight" />
                            </div>
                            <div className="production__pane">
                                <div>
                                    <p className="production__name">Натуральная пастила</p>
                                    <p className="production__price">От <span className="production__price_colored">69грн</span></p>
                                    <Link to="/shop" className="btn text-sm">Купить</Link>
                                    <p className="production__description text_md">Пастила - это высушенное фруктовое пюре.
                                    Благодаря длительной готовке на низкой температуре в ней сохраняются все полезные вещества.
В состав пастилы входят исключительно свежие фрукты.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="advantages" id="advantages">
                    <div className="container-xs">
                        <div className="section-headline">
                            <div className="section-headline_underline"></div>
                            <div className="section-headline__textWrap">
                                <p className="section-headline_text text_lg">Преимущества</p>
                            </div>
                            <div className="section-headline_underline"></div>
                        </div>
                        <div className="advantages__wrap">
                            <div className="advantages__itemWrap">
                                <svg enable-background="new 0 0 512.002 512.002" height="100" viewBox="0 0 512.002 512.002" width="100" fill="#73b4b5" xmlns="http://www.w3.org/2000/svg" className="advantages__img"><g>
                                    <path d="m494.48 250.873h-7.86c-.762-4.609-1.156-8.956-.281-12.178 1.537-5.661 6.594-11.662 11.484-17.465 6.928-8.22 14.091-16.719 14.178-27.087.109-13.05-8.9-22.76-16.85-31.327-4.315-4.651-8.392-9.044-9.971-12.892-1.893-4.615-2.825-10.849-3.727-16.877-1.879-12.568-4.009-26.812-16.003-32.962-12.007-6.147-24.815.444-36.12 6.262-5.416 2.788-11.018 5.67-15.861 6.829-3.615.862-8.993.322-13.751-.253-4.107-.497-7.849 2.434-8.346 6.546-.496 4.112 2.435 7.849 6.547 8.345 6.325.765 13.008 1.389 19.035-.049 6.61-1.581 13.031-4.885 19.24-8.081 8.88-4.57 17.267-8.887 22.414-6.25 5.14 2.635 6.534 11.959 8.01 21.832 1.033 6.911 2.103 14.057 4.684 20.353 2.612 6.364 7.818 11.974 12.854 17.4 6.344 6.838 12.904 13.909 12.845 20.999-.041 4.962-5.434 11.36-10.647 17.547-5.941 7.05-12.084 14.339-14.49 23.2-1.39 5.118-1.162 10.674-.41 16.109h-50.364c-.118-6.587-2.952-12.497-6.806-18.075 5.037-13.958 9.511-28.321 13.302-42.765 1.052-4.006-1.344-8.106-5.35-9.158-4.009-1.051-8.106 1.345-9.158 5.351-2.893 11.021-6.197 21.993-9.851 32.764-4.384-5.302-8.428-10.694-9.838-15.886-1.395-5.133.049-12.515 1.577-20.33 2.189-11.198 4.671-23.89-.85-34.665-5.523-10.778-17.282-16.176-27.657-20.939-7.233-3.321-14.065-6.458-17.414-10.575-4.077-5.027-6.166-13.315-8.186-21.331-2.812-11.163-5.721-22.706-14.588-29.206-11.188-8.192-25.271-6.429-37.694-4.875-6.86.859-13.338 1.671-17.816.601-5.319-1.269-11.412-4.403-17.305-7.435-12.083-6.216-25.774-13.262-38.466-6.755-12.047 6.174-14.709 20.219-16.667 33.126-6.019-2.811-11.419-5.611-14.278-9.126-4.077-5.027-6.166-13.315-8.186-21.331-2.812-11.163-5.721-22.706-14.588-29.206-11.188-8.192-25.271-6.429-37.694-4.875-6.858.859-13.337 1.669-17.816.601-5.319-1.269-11.412-4.403-17.305-7.435-12.082-6.214-25.775-13.258-38.463-6.755-12.691 6.499-14.97 21.729-16.979 35.167-.98 6.555-1.995 13.332-4.072 18.394-1.746 4.26-6.188 9.047-10.892 14.116-8.514 9.176-18.164 19.577-18.049 33.442.093 10.993 7.767 20.098 15.188 28.903 5.327 6.321 10.836 12.857 12.533 19.097 1.39 5.126-.054 12.505-1.582 20.316-2.192 11.203-4.677 23.901.846 34.671 5.521 10.775 17.276 16.173 27.648 20.936 7.236 3.323 14.072 6.462 17.426 10.594 2.594 3.192 4.381 7.713 5.859 12.643h-60.397c-9.892-.055-18.054 8.583-17.491 18.448 1.578 27.65 8.994 54.005 22.041 78.331 1.958 3.651 6.505 5.024 10.154 3.064 3.65-1.958 5.022-6.504 3.064-10.154-12.006-22.387-18.831-46.644-20.285-72.098-.087-1.524.879-2.54 2.517-2.592h476.958c1.654.059 2.603 1.063 2.516 2.593-2.434 42.634-20.444 82.785-50.715 113.059-33.582 33.585-76.377 50.884-123.144 51.008h-134.273c-52.747-.012-101.36-22.848-135.057-64.204-2.616-3.211-7.34-3.695-10.552-1.075-3.211 2.617-3.692 7.341-1.075 10.552 23.496 28.827 54.336 49.646 88.74 60.685v21.41c0 28.728 23.372 52.1 52.1 52.1h145.961c28.728 0 52.1-23.372 52.1-52.1v-21.379c28.279-9.063 54.196-24.786 75.807-46.391 32.878-32.881 52.44-76.495 55.084-122.809.563-9.866-7.653-18.498-17.492-18.448zm-319.16 0c-18.722-28.327-34.69-58.422-47.472-89.525-8.778-21.344-16.217-43.562-22.111-66.04-1.052-4.007-5.151-6.402-9.157-5.353-4.007 1.051-6.403 5.15-5.353 9.157 6.063 23.122 13.717 45.98 22.747 67.939 11.913 28.986 26.507 57.123 43.464 83.822h-63.936c-2.111-7.959-4.7-15.827-9.798-22.1-5.557-6.846-14.327-10.874-22.81-14.769-8.558-3.93-17.406-7.993-20.56-14.147-3.152-6.147-1.282-15.705.526-24.948 1.791-9.155 3.644-18.621 1.337-27.128-2.568-9.441-9.162-17.265-15.54-24.832-5.708-6.773-11.61-13.777-11.657-19.362-.066-7.905 7.107-15.637 14.045-23.114 5.405-5.826 10.995-11.851 13.773-18.625 2.766-6.74 3.916-14.43 5.029-21.868 1.619-10.824 3.148-21.047 8.984-24.036 5.839-2.992 15.027 1.738 24.761 6.745 6.687 3.44 13.602 6.997 20.686 8.687 7.119 1.7 15.275.679 23.161-.307 10.122-1.267 20.591-2.577 26.967 2.091 4.506 3.303 6.743 12.183 8.907 20.77 2.417 9.595 4.917 19.517 11.087 27.123 5.558 6.836 14.323 10.86 22.8 14.751 8.561 3.93 17.412 7.994 20.565 14.147 3.152 6.152 1.284 15.707-.522 24.946-1.791 9.16-3.643 18.631-1.333 27.132 1.025 3.791 2.732 7.312 4.651 10.481-20.188 10.778-33.961 32.053-33.961 56.491 0 7.503 1.319 14.901 3.853 21.873h-13.133zm117.127 0h-87.693c-3.378-6.763-5.154-14.245-5.154-21.873 0-27.019 21.981-49 49-49s49 21.981 49 49c.001 7.629-1.776 15.111-5.153 21.873zm52.4 0h-36.099c2.534-6.972 3.852-14.369 3.852-21.873 0-19.075-8.398-36.216-21.68-47.952 3.28-.684 6.642-1.048 10.08-1.048 27.019 0 49 21.981 49 49 .001 7.629-1.775 15.111-5.153 21.873zm16.301 0c2.534-6.972 3.853-14.369 3.853-21.873 0-35.29-28.71-64-64-64-9.049 0-18.044 1.932-26.24 5.613-7.993-3.595-16.843-5.613-26.16-5.613-5.438 0-10.719.687-15.764 1.969-1.885-2.75-3.62-5.807-4.448-8.866-1.395-5.133.049-12.515 1.577-20.33 2.189-11.198 4.671-23.89-.85-34.665-3.604-7.032-9.865-11.767-16.66-15.536 1.624-10.67 3.085-23.406 9.377-26.629 5.839-2.991 15.027 1.738 24.761 6.745 6.687 3.44 13.602 6.997 20.686 8.687 7.12 1.7 15.274.679 23.161-.307 10.122-1.267 20.591-2.576 26.967 2.091 4.506 3.304 6.743 12.183 8.907 20.77 2.417 9.595 4.917 19.517 11.087 27.123 5.558 6.836 14.323 10.86 22.8 14.751 8.561 3.93 17.412 7.994 20.565 14.147 3.152 6.152 1.284 15.707-.522 24.946-1.791 9.16-3.643 18.631-1.331 27.139 2.564 9.447 9.16 17.274 15.539 24.843 5.587 6.629 11.345 13.477 11.624 18.995zm4.933 209.027c0 20.457-16.643 37.1-37.1 37.1h-145.96c-20.457 0-37.1-16.643-37.1-37.1v-17.275c13.923 3.228 28.312 4.907 42.943 4.907h134.273c14.64 0 29.023-1.663 42.943-4.88v17.248z" /></g>
                                </svg>
                                <p className="advantages__name text_md font_semibold">Вкусно и полезно для организма</p>
                                <p className="advantages__description text_sm font_regular">Альтернатива сладкого для тех, кто следит за здоровьем и любит перекусить</p>
                            </div>
                            <div className="advantages__itemWrap">
                                <svg id="Layer_1" enable-background="new 0 0 480.165 480.165" height="100" viewBox="0 0 480.165 480.165" width="100" fill="#ee5253" xmlns="http://www.w3.org/2000/svg" className="advantages__img">
                                    <path d="m440.082 111.918h-101.593c13.232-11.733 21.593-28.843 21.593-47.876 0-53.468-61.949-83.174-103.637-50.251-3.468 2.738-4.059 7.769-1.32 11.236 2.74 3.469 7.771 4.058 11.236 1.32 31.202-24.64 77.721-2.463 77.721 37.695 0 25.369-19.785 46.19-44.734 47.876h-51.266v-47.877c0-35.29-28.71-64-64-64s-64 28.71-64 64c0 19.034 8.361 36.143 21.593 47.876h-101.593c-22.056 0-40 17.944-40 40v41.237c0 20.017 14.781 36.645 34 39.549v207.461c0 22.056 17.944 40 40 40h332c22.056 0 40-17.944 40-40v-172.123c0-4.418-3.582-8-8-8s-8 3.582-8 8v172.124c0 13.233-10.767 24-24 24h-194v-231.01h56v202.22c0 4.418 3.582 8 8 8s8-3.582 8-8v-202.22h89c4.418 0 8-3.582 8-8s-3.582-8-8-8h-53v-89.237h120c13.233 0 24 10.766 24 24v41.237c0 13.234-10.767 24-24 24h-15.5c-4.418 0-8 3.582-8 8s3.582 8 8 8h15.5c22.056 0 40-17.944 40-40v-41.237c0-22.056-17.944-40-40-40zm-304-47.877c0-26.467 21.532-48 48-48s48 21.533 48 48v47.876h-51.266c-24.948-1.685-44.734-22.507-44.734-47.876zm60 400.124h-122c-13.233 0-24-10.767-24-24v-207.01h146zm108-247.01h-264c-13.233 0-24-10.766-24-24v-41.237c0-13.234 10.767-24 24-24h120v64.124c0 4.418 3.582 8 8 8s8-3.582 8-8v-64.124h128z" /></svg>
                                <p className="advantages__name text_md font_semibold">Вкусно и полезно для организма</p>
                                <p className="advantages__description text_sm font_regular">Альтернатива сладкого для тех, кто следит за здоровьем и любит перекусить</p>
                            </div>
                            <div className="advantages__itemWrap">
                                <svg id="Capa_1" enable-background="new 0 0 512 512" height="100" fill="#3ec97c" viewBox="0 0 512 512" width="100" xmlns="http://www.w3.org/2000/svg" className="advantages__img"><g>
                                    <path d="m252.344 511.907c-37.446-1.758-75.175-14.088-109.332-35.546-33.988-21.401-64.46-51.873-87.421-90.056-2.154-3.572-1.021-8.164 2.551-10.29 3.544-2.154 8.136-.992 10.262 2.551 21.771 36.142 50.514 64.969 82.602 85.124 24.435 15.392 50.797 25.739 77.442 30.501-13.748-10.942-26.504-23.471-38.041-37.361l-12.586-3.345c-3.996-1.077-6.378-5.188-5.301-9.184.624-2.353 2.325-4.167 4.423-5.017-7.739-10.97-14.825-22.621-21.118-34.866-1.475-2.891-2.92-5.783-4.337-8.73l-27.553-7.398c-3.997-1.077-6.378-5.188-5.301-9.185s5.158-6.35 9.155-5.301l16.016 4.309c-4.96-12.415-9.212-25.313-12.643-38.636l-41.896-11.226c-3.997-1.049-6.35-5.159-5.301-9.156 1.077-3.997 5.188-6.378 9.184-5.301l34.187 9.156c-2.353-11.622-4.139-23.527-5.244-35.631l-48.246-13.946c-3.997-1.077-6.378-5.159-5.301-9.156 1.049-3.997 5.159-6.378 9.156-5.301l33.108 8.844-35.206-60.944c-2.041-3.572-.822-8.135 2.778-10.205 3.571-2.041 8.135-.822 10.176 2.75l32.088 55.587c.085-28.517 3.742-56.097 10.432-82.091-12.529-6.095-25.427-10.914-38.466-14.4-13.295-3.572-26.702-5.754-40.025-6.463-14.06 27.694-21.486 59.527-21.77 92.777-.312 34.299 6.944 70.1 22.28 104.484 1.7 3.77 0 8.192-3.771 9.893-3.77 1.672-8.192-.028-9.893-3.798-16.243-36.397-23.896-74.324-23.585-110.693.341-37.388 9.128-73.133 25.711-103.889 1.474-2.721 4.365-4.167 7.257-3.912 15.959.51 31.946 2.919 47.65 7.115 13.124 3.515 26.106 8.305 38.749 14.258 5.471-17.744 12.416-34.667 20.608-50.598 23.159-44.957 56.551-81.921 96.406-106.526 2.522-1.559 5.641-1.417 7.965.085 12.047 7.455 23.442 15.959 34.101 25.427 10.772 9.581 20.863 20.183 30.19 31.748 2.579 3.203 2.069 7.937-1.162 10.516-3.203 2.58-7.938 2.069-10.517-1.134-8.73-10.856-18.256-20.863-28.488-29.934-8.958-7.965-18.369-15.166-28.177-21.487-35.801 23.103-65.849 57.089-87.023 98.164-21.232 41.244-33.477 89.688-33.477 141.533 0 49.011 10.998 97.908 33.477 141.533 18.851 36.595 45.779 69.335 79.54 93.118v-44.814l-42.009-42.009c-2.948-2.92-2.948-7.682 0-10.602 2.919-2.919 7.682-2.919 10.602 0l31.407 31.408v-61.625l-58.847-58.818c-2.92-2.948-2.92-7.682 0-10.602 2.948-2.948 7.682-2.948 10.63 0l48.217 48.217v-61.625l-58.847-58.819c-2.92-2.948-2.92-7.682 0-10.63 2.948-2.919 7.682-2.919 10.63 0l48.217 48.217v-61.597l-42.009-42.009c-2.948-2.948-2.948-7.682 0-10.629 2.919-2.92 7.682-2.92 10.602 0l31.407 31.407v-87.56c0-4.139 3.345-7.512 7.483-7.512 4.139 0 7.512 3.373 7.512 7.512v87.562l31.408-31.407c2.92-2.92 7.653-2.92 10.602 0 2.92 2.947 2.92 7.681 0 10.629l-42.01 42.009v61.597l48.218-48.217c2.92-2.919 7.682-2.919 10.602 0 2.92 2.948 2.92 7.682 0 10.63l-58.819 58.819v61.625l48.218-48.217c2.92-2.948 7.682-2.948 10.602 0 2.92 2.919 2.92 7.653 0 10.602l-58.819 58.818v61.625l31.408-31.408c2.92-2.919 7.653-2.919 10.602 0 2.92 2.92 2.92 7.682 0 10.602l-42.01 42.009v44.815c33.761-23.783 60.69-56.522 79.512-93.118 22.479-43.625 33.478-92.522 33.478-141.533 0-56.692-14.684-113.045-44.702-161.319-2.183-3.515-1.105-8.135 2.409-10.318 3.515-2.183 8.136-1.105 10.318 2.409 13.492 21.685 24.463 45.723 32.399 71.433 12.671-5.953 25.626-10.743 38.75-14.258 15.874-4.252 32.003-6.661 48.132-7.115 2.807-.085 5.443 1.417 6.804 3.912 6.718 12.501 12.189 25.852 16.299 39.798 4.139 13.946 6.917 28.516 8.334 43.54.368 4.11-2.664 7.738-6.774 8.107s-7.738-2.665-8.107-6.775c-1.304-13.946-3.912-27.552-7.795-40.648-3.373-11.424-7.711-22.394-13.012-32.797-13.294.709-26.702 2.891-39.996 6.463-13.068 3.486-25.966 8.305-38.495 14.4 6.719 26.05 10.347 53.603 10.46 82.091l32.061-55.587c2.068-3.572 6.633-4.791 10.204-2.75 3.571 2.069 4.819 6.633 2.75 10.205l-35.179 60.944 33.081-8.872c3.997-1.049 8.107 1.333 9.184 5.33s-1.304 8.079-5.301 9.156l-47.565 12.756c-.85 1.446-4.875 31.549-5.924 36.821l34.185-9.156c3.997-1.077 8.107 1.304 9.156 5.301 1.077 3.997-1.305 8.107-5.301 9.156l-41.868 11.226c-3.43 13.294-7.682 26.22-12.671 38.636l16.016-4.309c3.997-1.049 8.108 1.304 9.185 5.301 1.049 3.997-1.304 8.107-5.301 9.185l-27.581 7.398c-1.389 2.948-2.835 5.839-4.309 8.73-6.321 12.246-13.38 23.896-21.118 34.866 2.098.85 3.77 2.664 4.422 5.017 1.049 3.997-1.304 8.107-5.301 9.184l-12.586 3.345c-11.565 13.89-24.293 26.419-38.041 37.361 27.354-4.875 54.454-15.704 79.483-31.776 51.506-33.165 90-86.116 107.575-144.708 5.925-19.814 9.326-39.77 10.29-59.329.198-4.138 3.685-7.313 7.823-7.115 4.139.17 7.314 3.685 7.115 7.824-1.02 20.806-4.593 41.98-10.886 62.9-18.567 61.935-59.385 118.004-113.839 153.011-34.413 22.138-72.651 34.922-110.608 36.878-3.061.142-5.414.171-8.475.029z" /></g></svg>
                                <p className="advantages__name text_md font_semibold">Вкусно и полезно для организма</p>
                                <p className="advantages__description text_sm font_regular">Альтернатива сладкого для тех, кто следит за здоровьем и любит перекусить</p>
                            </div>
                            <div className="advantages__itemWrap">
                                <svg enable-background="new 0 0 24 24" height="100" viewBox="0 0 24 24" width="100" fill="#ED9F19" xmlns="http://www.w3.org/2000/svg" className="advantages__img"><path d="m11.992 24c-.079 0-.159-.019-.231-.057l-11.492-6c-.165-.086-.269-.257-.269-.443v-11.25c0-.173.09-.334.237-.425s.332-.099.486-.022l11.492 5.75c.169.085.276.258.276.447v11.5c0 .175-.091.337-.241.428-.078.048-.168.072-.258.072zm-10.992-6.803 10.492 5.478v-10.366l-10.492-5.25z" />
                                    <path d="m12.008 24c-.09 0-.18-.024-.259-.072-.149-.091-.241-.253-.241-.428v-11.5c0-.189.107-.362.276-.447l11.492-5.75c.153-.078.339-.07.486.022.148.091.238.252.238.425v11.25c0 .186-.104.357-.269.443l-11.492 6c-.072.038-.152.057-.231.057zm.5-11.691v10.366l10.492-5.478v-10.138zm10.992 5.191h.01z" />
                                    <path d="m.5 6.75c-.184 0-.36-.101-.448-.276-.124-.247-.023-.547.224-.671l11.508-5.75c.141-.07.307-.07.447 0l11.492 5.75c.247.124.347.424.224.671-.124.247-.423.346-.671.224l-11.268-5.639-11.284 5.638c-.072.036-.148.053-.224.053z" />
                                    <path d="m18 15c-.276 0-.5-.224-.5-.5v-5.191l-11.216-5.612c-.247-.123-.347-.424-.223-.671s.424-.346.671-.224l11.492 5.75c.169.086.276.259.276.448v5.5c0 .276-.224.5-.5.5z" />
                                </svg>
                                <p className="advantages__name text_md font_semibold">Вкусно и полезно для организма</p>
                                <p className="advantages__description text_sm font_regular">Альтернатива сладкого для тех, кто следит за здоровьем и любит перекусить</p>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="bestsellers" id="bestsellers">
                    <div className="container-xs">
                        <div className="section-headline">
                            <div className="section-headline_underline"></div>
                            <div className="section-headline__textWrap">
                                <p className="section-headline_text text_lg">Бестселлеры</p>
                            </div>
                            <div className="section-headline_underline"></div>
                        </div>
                    </div>
                    <div className="container-xs">
                        <div className="slider-wrap slider-wrap__bestsellers">
                            <div className="slider-arrows slider-arrows_bestsellers">
                                <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)" className="slider-arrow slider-arrows__bestsellers_left">

                                    <g>
                                        <title>background</title>
                                        <rect fill="none" id="canvas_background" height="52" width="52" y="-1" x="-1" />
                                    </g>
                                    <g>
                                        <title>Layer 1</title>
                                        <path stroke="null" id="svg_2" d="m13.43859,49.57138c-0.59261,0.00111 -1.07386,-0.47853 -1.07496,-1.07114c-0.0005,-0.28569 0.11297,-0.55981 0.31527,-0.76161l22.84886,-22.84675l-22.84886,-22.84665c-0.41958,-0.41958 -0.41958,-1.09981 0,-1.51939c0.41958,-0.41958 1.09981,-0.41958 1.51939,0l23.60645,23.60645c0.41888,0.41898 0.41888,1.0982 0,1.51728l-23.60645,23.60635c-0.20119,0.2019 -0.47461,0.31547 -0.7597,0.31547z" />
                                    </g>
                                </svg>
                                <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" className="slider-arrow slider-arrows__bestsellers_right">

                                    <g>
                                        <title>background</title>
                                        <rect fill="none" id="canvas_background" height="52" width="52" y="-1" x="-1" />
                                    </g>
                                    <g>
                                        <title>Layer 1</title>
                                        <path stroke="null" id="svg_2" d="m13.43859,49.57138c-0.59261,0.00111 -1.07386,-0.47853 -1.07496,-1.07114c-0.0005,-0.28569 0.11297,-0.55981 0.31527,-0.76161l22.84886,-22.84675l-22.84886,-22.84665c-0.41958,-0.41958 -0.41958,-1.09981 0,-1.51939c0.41958,-0.41958 1.09981,-0.41958 1.51939,0l23.60645,23.60645c0.41888,0.41898 0.41888,1.0982 0,1.51728l-23.60645,23.60635c-0.20119,0.2019 -0.47461,0.31547 -0.7597,0.31547z" />
                                    </g>
                                </svg>
                            </div>
                            <TinySlider settings={bestsellersSettings} className="bestsellers__sliderWrap">
                                <div>
                                    <div className="bestseller__inner">
                                        <img src={require(`../../img/products/apple.jpg`)} alt="healthy" id="img-bottom-right" className="bestsellers__img" />
                                        <div className="bestsellers__textWrap">
                                            <div>
                                                <p className="bestseller__name text_md font_regular">Чипсы - яблоко</p>
                                                <p className="bestseller__price text_md font_semibold">69 грн.</p>
                                            </div>
                                            <div className="bestsellers__btnWrap">
                                                <Link to="/shop/apple" className="btn text_xs">Купить</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="bestseller__inner">
                                        <img src={require(`../../img/products/sharon.jpg`)} alt="healthy" id="img-bottom-right" className="bestsellers__img" />
                                        <div className="bestsellers__textWrap">
                                            <div>
                                                <p className="bestseller__name text_md font_regular">Чипсы - шарон</p>
                                                <p className="bestseller__price text_md font_semibold">89 грн.</p>
                                            </div>
                                            <div className="bestsellers__btnWrap">
                                                <Link to="/shop/sharon" className="btn">Купить</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="bestseller__inner">
                                        <img src={require(`../../img/products/pear.jpg`)} alt="healthy" className="bestsellers__img" />
                                        <div className="bestsellers__textWrap">
                                            <div>
                                                <p className="bestseller__name text_md font_regular">Чипсы - груша</p>
                                                <p className="bestseller__price text_md font_semibold">89 грн.</p>
                                            </div>
                                            <div className="bestsellers__btnWrap">
                                                <Link to="/shop/pear" className="btn">Купить</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="bestseller__inner">
                                        <img src={require(`../../img/products/banana.jpg`)} alt="healthy" className="bestsellers__img" />
                                        <div className="bestsellers__textWrap">
                                            <div>
                                                <p className="bestseller__name text_md font_regular">Чипсы - банан</p>
                                                <p className="bestseller__price text_md font_semibold">89 грн.</p>
                                            </div>
                                            <div className="bestsellers__btnWrap">
                                                <Link to="/shop/banana" className="btn">Купить</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TinySlider>
                        </div>
                    </div>
                </section>
                <section className="stats" id="stats">
                    <div className="container-xs">
                        <div className="section-headline">
                            <div className="section-headline_underline"></div>
                            <div className="section-headline__textWrap">
                                <p className="section-headline_text text_lg">Статистика</p>
                            </div>
                            <div className="section-headline_underline"></div>
                        </div>
                        <div className="stats__innerWrap">
                            <div className="stats__item">
                                <p className="stats__number text_xl font_bold">1</p>
                                <p className="stats__desc text_md font_semibold">Лет на рынке</p>
                            </div>
                            <div className="stats__item">
                                <p className="stats__number text_xl font_bold">100+</p>
                                <p className="stats__desc text_md font_semibold">Выполненных заказов</p>
                            </div>
                            <div className="stats__item">
                                <p className="stats__number text_xl font_bold">300+</p>
                                <p className="stats__desc text_md font_semibold">Довольных клиентов</p>
                            </div>
                            <div className="stats__item">
                                <p className="stats__number text_xl font_bold">40+</p>
                                <p className="stats__desc text_md font_semibold">Чего-то там</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="reviews">
                    <div className="container-xs">
                        <div className="section-headline">
                            <div className="section-headline_underline"></div>
                            <div className="section-headline__textWrap">
                                <p className="section-headline_text text_lg">Отзывы</p>
                            </div>
                            <div className="section-headline_underline"></div>
                        </div>
                    </div>

                    <div className="container-xs">
                        <div className="slider-wrap slider__wrap_reviews">
                            <div className="slider-arrows slider-arrows__reviews">
                                <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)" className="slider-arrow slider-arrows__reviews_left">

                                    <g>
                                        <title>background</title>
                                        <rect fill="none" id="canvas_background" height="52" width="52" y="-1" x="-1" />
                                    </g>
                                    <g>
                                        <title>Layer 1</title>
                                        <path stroke="null" id="svg_2" d="m13.43859,49.57138c-0.59261,0.00111 -1.07386,-0.47853 -1.07496,-1.07114c-0.0005,-0.28569 0.11297,-0.55981 0.31527,-0.76161l22.84886,-22.84675l-22.84886,-22.84665c-0.41958,-0.41958 -0.41958,-1.09981 0,-1.51939c0.41958,-0.41958 1.09981,-0.41958 1.51939,0l23.60645,23.60645c0.41888,0.41898 0.41888,1.0982 0,1.51728l-23.60645,23.60635c-0.20119,0.2019 -0.47461,0.31547 -0.7597,0.31547z" />
                                    </g>
                                </svg>
                                <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" className="slider-arrow slider-arrows__reviews_right">

                                    <g>
                                        <title>background</title>
                                        <rect fill="none" id="canvas_background" height="52" width="52" y="-1" x="-1" />
                                    </g>
                                    <g>
                                        <title>Layer 1</title>
                                        <path stroke="null" id="svg_2" d="m13.43859,49.57138c-0.59261,0.00111 -1.07386,-0.47853 -1.07496,-1.07114c-0.0005,-0.28569 0.11297,-0.55981 0.31527,-0.76161l22.84886,-22.84675l-22.84886,-22.84665c-0.41958,-0.41958 -0.41958,-1.09981 0,-1.51939c0.41958,-0.41958 1.09981,-0.41958 1.51939,0l23.60645,23.60645c0.41888,0.41898 0.41888,1.0982 0,1.51728l-23.60645,23.60635c-0.20119,0.2019 -0.47461,0.31547 -0.7597,0.31547z" />
                                    </g>
                                </svg>
                            </div>

                            <TinySlider settings={reviewsSettings}>
                                <div>
                                    <div className="reviews__item">
                                        <svg id="Capa_1" enable-background="new 0 0 512.2 512.2" height="80" viewBox="0 0 512.2 512.2" width="80" xmlns="http://www.w3.org/2000/svg" className="reviews__img"><path d="m80.362 328.788c43.568 103.716 191.005 103.859 234.633 0 5.067-12.063-3.882-25.388-16.938-25.388h-200.757c-13.085-.001-21.995 13.348-16.938 25.388zm16.938-10.389h200.758c2.336 0 4.031 2.38 3.107 4.579-38.432 91.493-168.487 91.62-206.973 0-.925-2.203.776-4.579 3.108-4.579z" /><path d="m105.017 236.49c0-14.869 12.098-26.966 26.967-26.966s26.966 12.097 26.966 26.966c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5c0-23.14-18.826-41.966-41.966-41.966-23.141 0-41.967 18.826-41.967 41.966 0 4.142 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5z" /><path d="m236.408 236.49c0-14.869 12.098-26.966 26.967-26.966s26.966 12.097 26.966 26.966c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5c0-23.14-18.826-41.966-41.966-41.966-23.141 0-41.967 18.826-41.967 41.966 0 4.142 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5z" /><path d="m222.524 41.317c3.521-2.181 4.608-6.803 2.427-10.325-2.18-3.521-6.801-4.607-10.325-2.427-26.82 16.611-49.178 39.732-64.874 66.986-80.261 20.645-141.955 93.531-142.109 183.668-.106 61.174 29.098 118.18 78.171 153.97 2.201 1.605 2.874 4.515 1.563 6.769-9.979 17.17-22.604 32.761-37.521 46.339-11.007 10.019-2.003 28.283 12.666 25.646 27.806-4.996 68.543-16.339 104.71-42.005 2.051-1.455 4.667-2.074 7.372-1.746 34.415 4.186 69.52-.922 101.796-15.63 3.769-1.718 5.432-6.166 3.715-9.935-1.718-3.769-6.164-5.432-9.936-3.715-29.926 13.637-62.292 18.217-93.765 14.389-6.419-.778-12.762.784-17.863 4.404-33.705 23.919-71.915 34.619-98.282 39.397 15.915-14.544 29.396-31.231 40.077-49.606 5.184-8.917 2.736-20.278-5.693-26.426-45.187-32.955-72.105-85.974-72.01-141.825.165-96.347 78.687-174.73 175.038-174.729 96.515 0 175.035 78.521 175.035 175.036 0 56.437-27.465 109.733-73.47 142.569-3.371 2.406-4.153 7.09-1.747 10.461 2.406 3.372 7.089 4.154 10.462 1.748 18.366-13.109 33.998-29.231 46.438-47.414 33.779 21.329 70.102 31.177 95.278 35.7 14.657 2.633 23.684-15.617 12.666-25.646-14.919-13.58-27.543-29.171-37.521-46.34-1.311-2.253-.638-5.163 1.563-6.768 48.951-35.7 78.278-92.618 78.172-153.97-.229-133.605-133.595-224.12-257.112-177.496-3.875 1.462-5.831 5.79-4.368 9.665 1.464 3.875 5.793 5.831 9.665 4.368 114.498-43.217 236.606 41.973 236.814 163.488.096 55.851-26.823 108.87-72.01 141.825-8.43 6.147-10.877 17.508-5.693 26.425 10.667 18.353 24.13 35.023 40.076 49.612-23.829-4.317-57.984-13.621-89.558-33.57 16.351-28.458 25.344-61.04 25.344-94.658 0-114.742-101.8-204.773-217.733-188.053 13.779-20.114 31.704-37.276 52.542-50.181z" /></svg>
                                        <p className="reviews__name text_md font_bold">Олег</p>
                                        <p className="reviews__description text_sm font_regular">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae pariatur, veniam provident veritatis voluptatem est ut fuga magni explicabo consequatur?</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="reviews__item">
                                        <svg id="Capa_1" enable-background="new 0 0 512.2 512.2" height="80" viewBox="0 0 512.2 512.2" width="80" xmlns="http://www.w3.org/2000/svg" className="reviews__img"><path d="m80.362 328.788c43.568 103.716 191.005 103.859 234.633 0 5.067-12.063-3.882-25.388-16.938-25.388h-200.757c-13.085-.001-21.995 13.348-16.938 25.388zm16.938-10.389h200.758c2.336 0 4.031 2.38 3.107 4.579-38.432 91.493-168.487 91.62-206.973 0-.925-2.203.776-4.579 3.108-4.579z" /><path d="m105.017 236.49c0-14.869 12.098-26.966 26.967-26.966s26.966 12.097 26.966 26.966c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5c0-23.14-18.826-41.966-41.966-41.966-23.141 0-41.967 18.826-41.967 41.966 0 4.142 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5z" /><path d="m236.408 236.49c0-14.869 12.098-26.966 26.967-26.966s26.966 12.097 26.966 26.966c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5c0-23.14-18.826-41.966-41.966-41.966-23.141 0-41.967 18.826-41.967 41.966 0 4.142 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5z" /><path d="m222.524 41.317c3.521-2.181 4.608-6.803 2.427-10.325-2.18-3.521-6.801-4.607-10.325-2.427-26.82 16.611-49.178 39.732-64.874 66.986-80.261 20.645-141.955 93.531-142.109 183.668-.106 61.174 29.098 118.18 78.171 153.97 2.201 1.605 2.874 4.515 1.563 6.769-9.979 17.17-22.604 32.761-37.521 46.339-11.007 10.019-2.003 28.283 12.666 25.646 27.806-4.996 68.543-16.339 104.71-42.005 2.051-1.455 4.667-2.074 7.372-1.746 34.415 4.186 69.52-.922 101.796-15.63 3.769-1.718 5.432-6.166 3.715-9.935-1.718-3.769-6.164-5.432-9.936-3.715-29.926 13.637-62.292 18.217-93.765 14.389-6.419-.778-12.762.784-17.863 4.404-33.705 23.919-71.915 34.619-98.282 39.397 15.915-14.544 29.396-31.231 40.077-49.606 5.184-8.917 2.736-20.278-5.693-26.426-45.187-32.955-72.105-85.974-72.01-141.825.165-96.347 78.687-174.73 175.038-174.729 96.515 0 175.035 78.521 175.035 175.036 0 56.437-27.465 109.733-73.47 142.569-3.371 2.406-4.153 7.09-1.747 10.461 2.406 3.372 7.089 4.154 10.462 1.748 18.366-13.109 33.998-29.231 46.438-47.414 33.779 21.329 70.102 31.177 95.278 35.7 14.657 2.633 23.684-15.617 12.666-25.646-14.919-13.58-27.543-29.171-37.521-46.34-1.311-2.253-.638-5.163 1.563-6.768 48.951-35.7 78.278-92.618 78.172-153.97-.229-133.605-133.595-224.12-257.112-177.496-3.875 1.462-5.831 5.79-4.368 9.665 1.464 3.875 5.793 5.831 9.665 4.368 114.498-43.217 236.606 41.973 236.814 163.488.096 55.851-26.823 108.87-72.01 141.825-8.43 6.147-10.877 17.508-5.693 26.425 10.667 18.353 24.13 35.023 40.076 49.612-23.829-4.317-57.984-13.621-89.558-33.57 16.351-28.458 25.344-61.04 25.344-94.658 0-114.742-101.8-204.773-217.733-188.053 13.779-20.114 31.704-37.276 52.542-50.181z" /></svg>
                                        <p className="reviews__name text_md font_bold">Дарья</p>
                                        <p className="reviews__description text_sm font_regular">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae pariatur, veniam provident veritatis voluptatem est ut fuga magni explicabo consequatur?</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="reviews__item">
                                        <svg id="Capa_1" enable-background="new 0 0 512.2 512.2" height="80" viewBox="0 0 512.2 512.2" width="80" xmlns="http://www.w3.org/2000/svg" className="reviews__img"><path d="m80.362 328.788c43.568 103.716 191.005 103.859 234.633 0 5.067-12.063-3.882-25.388-16.938-25.388h-200.757c-13.085-.001-21.995 13.348-16.938 25.388zm16.938-10.389h200.758c2.336 0 4.031 2.38 3.107 4.579-38.432 91.493-168.487 91.62-206.973 0-.925-2.203.776-4.579 3.108-4.579z" /><path d="m105.017 236.49c0-14.869 12.098-26.966 26.967-26.966s26.966 12.097 26.966 26.966c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5c0-23.14-18.826-41.966-41.966-41.966-23.141 0-41.967 18.826-41.967 41.966 0 4.142 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5z" /><path d="m236.408 236.49c0-14.869 12.098-26.966 26.967-26.966s26.966 12.097 26.966 26.966c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5c0-23.14-18.826-41.966-41.966-41.966-23.141 0-41.967 18.826-41.967 41.966 0 4.142 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5z" /><path d="m222.524 41.317c3.521-2.181 4.608-6.803 2.427-10.325-2.18-3.521-6.801-4.607-10.325-2.427-26.82 16.611-49.178 39.732-64.874 66.986-80.261 20.645-141.955 93.531-142.109 183.668-.106 61.174 29.098 118.18 78.171 153.97 2.201 1.605 2.874 4.515 1.563 6.769-9.979 17.17-22.604 32.761-37.521 46.339-11.007 10.019-2.003 28.283 12.666 25.646 27.806-4.996 68.543-16.339 104.71-42.005 2.051-1.455 4.667-2.074 7.372-1.746 34.415 4.186 69.52-.922 101.796-15.63 3.769-1.718 5.432-6.166 3.715-9.935-1.718-3.769-6.164-5.432-9.936-3.715-29.926 13.637-62.292 18.217-93.765 14.389-6.419-.778-12.762.784-17.863 4.404-33.705 23.919-71.915 34.619-98.282 39.397 15.915-14.544 29.396-31.231 40.077-49.606 5.184-8.917 2.736-20.278-5.693-26.426-45.187-32.955-72.105-85.974-72.01-141.825.165-96.347 78.687-174.73 175.038-174.729 96.515 0 175.035 78.521 175.035 175.036 0 56.437-27.465 109.733-73.47 142.569-3.371 2.406-4.153 7.09-1.747 10.461 2.406 3.372 7.089 4.154 10.462 1.748 18.366-13.109 33.998-29.231 46.438-47.414 33.779 21.329 70.102 31.177 95.278 35.7 14.657 2.633 23.684-15.617 12.666-25.646-14.919-13.58-27.543-29.171-37.521-46.34-1.311-2.253-.638-5.163 1.563-6.768 48.951-35.7 78.278-92.618 78.172-153.97-.229-133.605-133.595-224.12-257.112-177.496-3.875 1.462-5.831 5.79-4.368 9.665 1.464 3.875 5.793 5.831 9.665 4.368 114.498-43.217 236.606 41.973 236.814 163.488.096 55.851-26.823 108.87-72.01 141.825-8.43 6.147-10.877 17.508-5.693 26.425 10.667 18.353 24.13 35.023 40.076 49.612-23.829-4.317-57.984-13.621-89.558-33.57 16.351-28.458 25.344-61.04 25.344-94.658 0-114.742-101.8-204.773-217.733-188.053 13.779-20.114 31.704-37.276 52.542-50.181z" /></svg>
                                        <p className="reviews__name text_md font_bold">Юля</p>
                                        <p className="reviews__description text_sm font_regular">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae pariatur, veniam provident veritatis voluptatem est ut fuga magni explicabo consequatur?</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="reviews__item">
                                        <svg id="Capa_1" enable-background="new 0 0 512.2 512.2" height="80" viewBox="0 0 512.2 512.2" width="80" xmlns="http://www.w3.org/2000/svg" className="reviews__img"><path d="m80.362 328.788c43.568 103.716 191.005 103.859 234.633 0 5.067-12.063-3.882-25.388-16.938-25.388h-200.757c-13.085-.001-21.995 13.348-16.938 25.388zm16.938-10.389h200.758c2.336 0 4.031 2.38 3.107 4.579-38.432 91.493-168.487 91.62-206.973 0-.925-2.203.776-4.579 3.108-4.579z" /><path d="m105.017 236.49c0-14.869 12.098-26.966 26.967-26.966s26.966 12.097 26.966 26.966c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5c0-23.14-18.826-41.966-41.966-41.966-23.141 0-41.967 18.826-41.967 41.966 0 4.142 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5z" /><path d="m236.408 236.49c0-14.869 12.098-26.966 26.967-26.966s26.966 12.097 26.966 26.966c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5c0-23.14-18.826-41.966-41.966-41.966-23.141 0-41.967 18.826-41.967 41.966 0 4.142 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5z" /><path d="m222.524 41.317c3.521-2.181 4.608-6.803 2.427-10.325-2.18-3.521-6.801-4.607-10.325-2.427-26.82 16.611-49.178 39.732-64.874 66.986-80.261 20.645-141.955 93.531-142.109 183.668-.106 61.174 29.098 118.18 78.171 153.97 2.201 1.605 2.874 4.515 1.563 6.769-9.979 17.17-22.604 32.761-37.521 46.339-11.007 10.019-2.003 28.283 12.666 25.646 27.806-4.996 68.543-16.339 104.71-42.005 2.051-1.455 4.667-2.074 7.372-1.746 34.415 4.186 69.52-.922 101.796-15.63 3.769-1.718 5.432-6.166 3.715-9.935-1.718-3.769-6.164-5.432-9.936-3.715-29.926 13.637-62.292 18.217-93.765 14.389-6.419-.778-12.762.784-17.863 4.404-33.705 23.919-71.915 34.619-98.282 39.397 15.915-14.544 29.396-31.231 40.077-49.606 5.184-8.917 2.736-20.278-5.693-26.426-45.187-32.955-72.105-85.974-72.01-141.825.165-96.347 78.687-174.73 175.038-174.729 96.515 0 175.035 78.521 175.035 175.036 0 56.437-27.465 109.733-73.47 142.569-3.371 2.406-4.153 7.09-1.747 10.461 2.406 3.372 7.089 4.154 10.462 1.748 18.366-13.109 33.998-29.231 46.438-47.414 33.779 21.329 70.102 31.177 95.278 35.7 14.657 2.633 23.684-15.617 12.666-25.646-14.919-13.58-27.543-29.171-37.521-46.34-1.311-2.253-.638-5.163 1.563-6.768 48.951-35.7 78.278-92.618 78.172-153.97-.229-133.605-133.595-224.12-257.112-177.496-3.875 1.462-5.831 5.79-4.368 9.665 1.464 3.875 5.793 5.831 9.665 4.368 114.498-43.217 236.606 41.973 236.814 163.488.096 55.851-26.823 108.87-72.01 141.825-8.43 6.147-10.877 17.508-5.693 26.425 10.667 18.353 24.13 35.023 40.076 49.612-23.829-4.317-57.984-13.621-89.558-33.57 16.351-28.458 25.344-61.04 25.344-94.658 0-114.742-101.8-204.773-217.733-188.053 13.779-20.114 31.704-37.276 52.542-50.181z" /></svg>
                                        <p className="reviews__name text_md font_bold">Саша</p>
                                        <p className="reviews__description text_sm font_regular">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae pariatur, veniam provident veritatis voluptatem est ut fuga magni explicabo consequatur?</p>
                                    </div>
                                </div>
                            </TinySlider>
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
export default Main;
