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
      <form></form>
    </Layout>
  );
};

export default PostCreate;
