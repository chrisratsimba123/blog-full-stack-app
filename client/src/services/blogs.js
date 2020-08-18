import api from './apiConfig'

export const getPosts = async () => {
    try {
        const response = await api.get('/posts')
        return response.data
    } catch (error) {
        throw error
    }
  }
  
  export const getPost = async id => {
    try {
        const response = await api.get(`/posts/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
  }
  
  export const createPost = async Post => {
    try {
        const response = await api.post('/posts', Post)
        return response.data
    } catch (error) {
        throw error
    }
  }
  
  export const updatePost = async (id, Post) => {
    try {
        const response = await api.put(`/posts/${id}`, Post)
        return response.data
    } catch (error) {
        throw error
    }
  }
  
  export const deletePost = async id => {
    try {
        const response = await api.delete(`/posts/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
  }