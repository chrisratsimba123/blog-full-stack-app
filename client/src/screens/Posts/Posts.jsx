import React, { useState, useEffect } from 'react'
import './Posts.css'

import Post from "../../components/Post/Post"
import Layout from "../../components/Shared/Layout/Layout"
import { getPosts } from '../../services/blogs'

const Posts = () => {
    const [allPosts, updateAllPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const posts = await getPosts()
            updateAllPosts(posts)
        }
        fetchPosts()
    }, [])

    const postsJSX = allPosts.map((post, index) => 
        <Post 
            id={post._id} 
            title={post.title} 
            imgURL={post.imgURL} 
            content={post.content} 
            author={post.author} 
            key={index}
        />
    )

    return (
        <>
        <Layout>
            <div className="posts">
                {postsJSX}
            </div>
        </Layout>
        </>
    )
}

export default Posts