import React from 'react';
import './Post.css';
import { useParams, Link } from 'react-router-dom';

const Post = (props) => {
    const {_id, title, imgURL, content, author } = props
    // console.log(`${_id}`)
    
    return (
        <>
            <Link to={`/posts/${props.id}`} className="post">
                <div className="post-title">{props.title}</div>
                <img className="post-image" src={props.imgURL} alt="nature-scene"/>
                <div className="post-content">{props.content}</div>
                <div className="post-author">{props.author}</div>
            </Link>
        </>
    )
}

export default Post
