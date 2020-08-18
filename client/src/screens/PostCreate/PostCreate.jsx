import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const PostCreate = (props) => {
  const [post, updatePost] = useState({
    title: "",
    imgURL: "",
    content: "",
    author: "",
  });

  const [isCreated, updateCreated] = useState(false);

  if (isCreated) {
    return <Redirect to={`/posts`} />;
  }
  return (
    <Layout>
      <form>
          
      </form>
    </Layout>
  );
};
