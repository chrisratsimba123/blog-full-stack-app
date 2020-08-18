import React, { useState, useEffect } from 'react'
import { getPost, deletePost } from '../../services/blogs'
import { useParams, Link } from 'react-router-dom'

const PostDetail = (props) => {
    const [post, updatePost] = useState(null)
    const [isLoaded, setLoaded] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        const fetchPost = async () => {
            const post = await getPost(id)
            updatePost(post)
            setLoaded(true)
        }
        fetchPost()
    }, [id])

    if (!isLoaded) {
        return <h1>Loading...</h1>
    }

    return (
        <Layout>
            <>
            </>
        </Layout>
    )
}

export default PostDetail