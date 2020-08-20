import React, { useState, useEffect } from "react";
import { getPost, deletePost } from "../../services/blogs";
import { useParams, Link } from "react-router-dom";
import Layout from "../../components/Group/Layout/Layout";
import "./PostDetail.css";

const PostDetail = () => {
  const [post, updatePost] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      updatePost(post);
      setLoaded(true);
    };
    fetchPost();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <Layout>
      <div className="post-detail">
        <img className="post-detail-image" src={post.imgURL} alt={post.name} />
        <div className="detail">
          <div className="title">{post.title}</div>
          <div className="content">{post.content}</div>
          <div className="author">{post.author}</div>

          <div className="button-container">
            <button className="edit-button">
              <Link className="edit-link" to={`/posts/${post._id}/edit`}>
                Edit
              </Link>
            </button>
            <button
              className="delete-button"
              onClick={() => deletePost(post._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostDetail;
