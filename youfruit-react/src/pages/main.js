import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
class Main extends Component {
    render() {
        return (
            <div className="page">
                <div className="header-main grid-container">
                    <div className="flex-container-center align-center">
                        <div>
                            <h1 className="text-xl">Пастила и Фруктовые чипсы</h1>
                            <p className="text-lg">Новый взгяд на сладости</p>
                            <a href="#" className="btn text-lg">Магазин</a>
                        </div>
                    </div>

                    <div className="flex-container-center align-center">
                        <img src={require(`../img/pineapple.png`)} alt="pineapple" />
                    </div>
                </div>
            </div>
        )
    }
}
export default Main;
