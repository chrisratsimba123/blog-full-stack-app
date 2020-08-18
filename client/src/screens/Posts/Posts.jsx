import React, { useState, useEffect } from 'react'
import { getPosts } from '../../services/blogs'

const Posts = (props) => {
    const [allPosts, updateAllPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const posts = await getPosts()
            updateAllPosts(posts)
        }
        fetchPosts()
    }, [])

    const postsJSX = allPosts.map(() => 
    // Call Post component
    )

    return (
        <>
        {postsJSX}
        </>
    )
}