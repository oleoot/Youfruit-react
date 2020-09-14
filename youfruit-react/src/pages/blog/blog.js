import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import { blogData } from '../../blog-info'
import "../../styles/style.css"
class Blog extends Component {
    constructor() {
        super()

        this.state = {
            blogPosts: blogData
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="blog-page">
                <section className="blog">
                    <div className="container">
                        <div className="breadcrumbs-btn">
                            <NavLink exact to="/" activeClassName="nav-active" className="breadcrumbs-btn__link text_lg font_regular">
                                <img src={require(`../../img/icons/arrow-left.png`)} alt="arrow-left" className="breadcrumbs-btn__img" />Главная</NavLink>
                        </div>
                        <div className="blog__innerWrap">
                            {this.state.blogPosts.map((post) => (
                                <div className="blog__item">
                                    <img src={post.img} alt="porrige" className="blog__img" />
                                    <div>
                                        <p className="blog__name text_lg font_semibold">{post.name}</p>
                                        <p className="blog__description text_md font_regular">{post.description}</p>
                                        <Link to={post.link} className="btn text_sm" >Читать</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Blog;
