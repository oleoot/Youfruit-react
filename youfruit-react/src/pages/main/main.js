import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import "./main.css"
class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="grid-container" id="header-main">
                    <div className="flex-container-center align-center">
                        <div>
                            <h1 className="text-xl">Пастила и Фруктовые чипсы</h1>
                            <p className="text-lg">Новый взгяд на сладости</p>
                            <a href="#" className="btn text-lg">Магазин</a>
                        </div>
                    </div>

                    <div className="flex-container-center align-center">
                        <img src={require(`../../img/pineapple.png`)} alt="pineapple" />
                    </div>
                </div>




                <div id="adv">
                    <p className="text-llg section-headline">Преимущества</p>
                    <div className="underline"></div>
                    <div className="adv-wrap grid-container">
                        <div>
                            <img src={require(`../../img/icons/healthy.png`)} alt="healthy" />
                            <p className="text-sm">Вкусно и полезно для организма</p>
                            <p className="text-xs">Альтернатива сладкого для тех, кто следит за здоровьем и любит перекусить</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Main;
