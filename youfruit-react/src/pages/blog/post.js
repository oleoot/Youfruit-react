import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import { blogData } from '../../blog-info'

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
        console.log('localhost:3000/shop/' + this.state.currentLink)
        return (
            <div className="post-page">
                {this.state.blogInfo.map((blogPost) => {
                    if ('http://localhost:3000/blog/' + blogPost.componentName === this.state.currentLink) {
                        return (
                            <>
                                <div className="container-xs">
                                    <div className="section-headline">
                                        <div className="section-headline_underline"></div>
                                        <div className="section-headline__textWrap">
                                            <p className="section-headline_text text_lg">{blogPost.name}</p>
                                        </div>
                                        <div className="section-headline_underline"></div>
                                    </div>
                                </div>
                                <div className="container">
                                    <img src={blogPost.blogImg} alt="" className="post-page__mainImg" />
                                    <p className="post-page__mainText text_md">
                                        {blogPost.text}
                                    </p>
                                </div>
                            </>
                        )
                    }
                })}
            </div>
        )
    }

}

export default Post;
