import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import { blogData } from '../../blog-info'
import "./blog.css"
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

            <section className="blog">
                <div className="container">
                    <div className="back-btn">
                        <NavLink exact to="/" activeClassName="nav-active" className="text_lg breadcrumbs-link">
                            <img src={require(`../../img/icons/arrow-left.png`)} alt="arrow-left" className="arrow-left" />Главная</NavLink>
                    </div>
                    <div className="blog-wrap grid-container">
                        {this.state.blogPosts.map((post) => (
                            <div className="grid-container blog-item">

                                <img src={post.img} alt="porrige" className="main-img" />
                                <div>
                                    <p className="text_lg blog-post__name">{post.name}</p>
                                    <p className="text_md blog-post__description">{post.description}</p>
                                    <Link to={post.link} className="btn text_sm" >Читать</Link>
                                </div>
                            </div>
                        ))}

                    </div>


                </div>

            </section>






        )
    }
}
export default Blog;
