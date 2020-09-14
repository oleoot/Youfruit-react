import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import { blogData } from '../../blog-info'
import "../../styles/style.css"

class Post extends Component {
    constructor() {
        super();

        this.state = {
            currentLink: window.location.href,
            blogInfo: blogData
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="blogpost-page">
                {this.state.blogInfo.map((blogPost) => {
                    if ('http://localhost:3000/blog/' + blogPost.componentName === this.state.currentLink) {
                        return (
                            <section className="post">
                                <div className="container-xs">
                                    <div className="breadcrumbs-btn">
                                        <NavLink exact to="/" activeClassName="nav-active" className="breadcrumbs-btn__link text_lg font_regular">
                                            <img src={require(`../../img/icons/arrow-left.png`)} alt="arrow-left" className="breadcrumbs-btn__img" />Главная</NavLink>
                                    </div>
                                    <div className="section-headline">
                                        <div className="section-headline_underline"></div>
                                        <div className="section-headline__textWrap">
                                            <p className="section-headline_text text_lg">{blogPost.name}</p>
                                        </div>
                                        <div className="section-headline_underline"></div>
                                    </div>
                                    <img src={blogPost.blogImg} alt="" className="post__mainImg" />
                                    <p className="post__mainText text_md font_regular">
                                        {blogPost.text}
                                    </p>
                                </div>
                            </section>
                        )
                    }
                })}
            </div>
        )
    }

}

export default Post;
