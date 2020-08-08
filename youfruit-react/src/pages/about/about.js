import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import "./about.css"
class About extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (

            <section className="about">
                <div className="container">
                    <div className="headline-outer">
                        <div className="underline"></div>
                        <div className="headline-wrap">
                            <p className="text-xl">О нас</p>

                        </div>
                        <div className="underline"></div>
                    </div>
                </div>
                <div className="container">
                    <div className="back-btn">
                        <NavLink exact to="/" activeClassName="nav-active" className="text-lg nav-a  align-center flex-container"><img src={require(`../../img/icons/arrow-left.png`)} alt="arrow-left" className="arrow-left" />Главная</NavLink>
                    </div>
                    <div className="about-wrap grid-container">
                        <div className="about-item" id="about-company">
                            <img src={require(`../../img/about/logo.png`)} alt="muffins" className="about-logo-img" />
                            <p className="text-sm about-logo-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat tenetur ipsa autem maxime dolorem sapiente cupiditate dignissimos architecto voluptatem provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ea incidunt eum placeat repellendus, perspiciatis commodi consequatur consequuntur doloremque debitis.</p>
                        </div>
                        <div className="about-item">
                            <img src={require(`../../img/about/daria.png`)} alt="muffins" />
                            <p className="text-lg">Дарья</p>
                            <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat tenetur ipsa autem maxime dolorem sapiente cupiditate dignissimos architecto voluptatem provident!</p>
                        </div>
                        <div className="about-item">
                            <img src={require(`../../img/about/oleg.png`)} alt="muffins" />
                            <p className="text-lg">Олег</p>
                            <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat tenetur ipsa autem maxime dolorem sapiente cupiditate dignissimos architecto voluptatem provident!</p>
                        </div>
                    </div>
                </div>
            </section>






        )
    }
}
export default About;
