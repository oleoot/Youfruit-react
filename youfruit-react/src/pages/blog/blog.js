import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import "./blog.css"
class Blog extends Component {
    render() {
        return (

            <section className="blog">
                <div className="container">
                    <p className="text-llg section-headline">Блог</p>
                    <div className="underline"></div>

                    <div className="blog-wrap grid-container">
                        <div className="grid-container blog-item">

                            <img src={require(`../../img/blog/muffins.png`)} alt="muffins" />
                            <div>
                                <p className="text-lg">Кексы из какой-то там муки</p>
                                <p className="text-md">Превью слова превью слова превью слова  превью слова  превью слова  превью слова  превью слова  превью слова  превью слова  превью слова </p>
                                <a href="#" className="btn text-md">Читать</a>
                            </div>
                        </div>
                        <div className="grid-container blog-item">

                            <img src={require(`../../img/blog/porrige.png`)} alt="porrige" />
                            <div>
                                <p className="text-lg">Какая-то вкусная овсянка</p>
                                <p className="text-md">Превью слова превью слова превью слова  превью слова  превью слова  превью слова  превью слова  превью слова  превью слова  превью слова </p>
                                <a href="#" className="btn text-md">Читать</a>
                            </div>
                        </div>
                        <div className="grid-container blog-item">

                            <img src={require(`../../img/blog/porrige-1.jpg`)} alt="porrige" />
                            <div>
                                <p className="text-lg">Какая-то вкусная овсянка</p>
                                <p className="text-md">Превью слова превью слова превью слова  превью слова  превью слова  превью слова  превью слова  превью слова  превью слова  превью слова </p>
                                <a href="#" className="btn text-md">Читать</a>
                            </div>
                        </div>
                        <div className="grid-container blog-item">

                            <img src={require(`../../img/blog/pears.jpg`)} alt="porrige" />
                            <div>
                                <p className="text-lg">Какая-то вкусная овсянка</p>
                                <p className="text-md">Превью слова превью слова превью слова  превью слова  превью слова  превью слова  превью слова  превью слова  превью слова  превью слова </p>
                                <a href="#" className="btn text-md">Читать</a>
                            </div>
                        </div>
                        <div className="grid-container blog-item">

                            <img src={require(`../../img/blog/croissant.jpg`)} alt="porrige" />
                            <div>
                                <p className="text-lg">Какая-то вкусная овсянка</p>
                                <p className="text-md">Превью слова превью слова превью слова  превью слова  превью слова  превью слова  превью слова  превью слова  превью слова  превью слова </p>
                                <a href="#" className="btn text-md">Читать</a>
                            </div>
                        </div>
                        <div className="grid-container blog-item">

                            <img src={require(`../../img/blog/daria.jpg`)} alt="porrige" />
                            <div>
                                <p className="text-lg">Какая-то вкусная овсянка</p>
                                <p className="text-md">Превью слова превью слова превью слова  превью слова  превью слова  превью слова  превью слова  превью слова  превью слова  превью слова </p>
                                <a href="#" className="btn text-md">Читать</a>
                            </div>
                        </div>


                    </div>


                </div>

            </section>






        )
    }
}
export default Blog;
