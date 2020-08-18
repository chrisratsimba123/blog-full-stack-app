import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import { createPost } from "../../services/blogs";

const PostCreate = (props) => {
  const [post, updatePost] = useState({
    title: "",
    imgURL: "",
    content: "",
    author: "",
  });

  const [isCreated, updateCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    updatePost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const created = await createPost(post);
    updateCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/posts`} />;
  }
  return (
    <Layout>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          className="input-name"
          placeholder="Blog Title"
          value={post.title}
          name="name"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-price"
          placeholder="Author"
          value={post.author}
          name="price"
          required
          onChange={handleChange}
        />
        <textarea
          className="textarea-description"
          rows={10}
          placeholder="Content"
          value={post.content}
          name="description"
          required
          onChange={handleChange}
        />
        <input
          className="input-image-link"
          placeholder="Image Link"
          value={post.imgURL}
          name="imgURL"
          required
          onChange={handleChange}
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default PostCreate;
