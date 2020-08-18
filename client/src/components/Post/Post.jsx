import React from 'react';
// import './Product.css';
import { Link } from 'react-router-dom'

const Post = (props) => {
    const {_id, title, imgURL, content, author } = props
    return (
        <>
            <Link to={`/posts/${_id}`} className="post">
                <div className="post-title">{title}</div>
                <img className="post-image" src={imgURL} alt="nature-scene"/>
                <div className="post-content">{content}</div>
                <div className="post-author">{author}</div>
            </Link>
        </>
    )
}

export default Post
