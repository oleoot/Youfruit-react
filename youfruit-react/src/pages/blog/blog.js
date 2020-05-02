import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import "./blog.css"
class Blog extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (

            <section className="blog">
                <div className="container">
                    <div className="headline-wrap">
                        <p className="text-xl">Блог</p>
                    </div>
                    <div className="underline"></div>

                    <div className="blog-wrap grid-container">

                        <Link className="grid-container blog-item">
                            <img src={require(`../../img/blog/muffins.png`)} alt="muffins" className="main-img" />
                            <div>
                                <p className="text-lg">Кексы из какой-то там муки</p>
                                <p className="text-md">Превью слова превью слова превью слова  превью слова  превью слова  превью слова  превью слова  превью слова  превью слова  превью слова </p>
                                <a href="#" className="btn text-md">Читать</a>
                            </div>
                        </Link>

                        <Link className="grid-container blog-item">

                            <img src={require(`../../img/blog/porrige.png`)} alt="porrige" className="main-img" />
                            <div>
                                <p className="text-lg">Кексы из какой-то там муки</p>
                                <p className="text-md">Превью слова превью слова превью слова  превью слова  превью слова  превью слова  превью слова  превью слова  превью слова  превью слова </p>
                                <a href="#" className="btn text-md">Читать</a>
                            </div>
                        </Link>

                        <Link className="grid-container blog-item">

                            <img src={require(`../../img/blog/porrige-1.jpg`)} alt="porrige" className="main-img" />
                            <div>
                                <p className="text-lg">Кексы из какой-то там муки</p>
                                <p className="text-md">Превью слова превью слова превью слова  превью слова  превью слова  превью слова  превью слова  превью слова  превью слова  превью слова </p>
                                <a href="#" className="btn text-md">Читать</a>
                            </div>
                        </Link>

                        <Link className="grid-container blog-item">

                            <img src={require(`../../img/blog/pears.jpg`)} alt="porrige" className="main-img" />
                            <div>
                                <p className="text-lg">Кексы из какой-то там муки</p>
                                <p className="text-md">Превью слова превью слова превью слова  превью слова  превью слова  превью слова  превью слова  превью слова  превью слова  превью слова </p>
                                <a href="#" className="btn text-md">Читать</a>
                            </div>
                        </Link>

                        <Link className="grid-container blog-item">

                            <img src={require(`../../img/blog/croissant.jpg`)} alt="porrige" className="main-img" />
                            <div>
                                <p className="text-lg">Кексы из какой-то там муки</p>
                                <p className="text-md">Превью слова превью слова превью слова  превью слова  превью слова  превью слова  превью слова  превью слова  превью слова  превью слова </p>
                                <a href="#" className="btn text-md">Читать</a>
                            </div>
                        </Link>

                        <Link className="grid-container blog-item">

                            <img src={require(`../../img/blog/daria.jpg`)} alt="porrige" className="main-img" />
                            <div>
                                <p className="text-lg">Кексы из какой-то там муки</p>
                                <p className="text-md">Превью слова превью слова превью слова  превью слова  превью слова  превью слова  превью слова  превью слова  превью слова  превью слова </p>
                                <a href="#" className="btn text-md">Читать</a>
                            </div>
                        </Link>


                    </div>


                </div>

            </section>






        )
    }
}
export default Blog;
