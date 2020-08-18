import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { getPost, updatePost } from '../../services/blogs'

const PostEdit = (props) => {
  const [post, updatePost] = useState({
    title: "",
    imgURL: "",
    content: "",
    author: "",
  });

  const [isUpdated, updateUpdated] = useState(false);
  let { id } = useParams()

  useEffect(() => {
      const fetchPost = async () => {
          const post = await getPost(id)
          updatePost(post)
      }
      fetchPost
  }, [id])

  if (isUpdated) {
    return <Redirect to={`/posts/${props.match.params.id}`} />;
  }
  return (
    <Layout>
      <>
      </>
    </Layout>
  );
};

export default PostEdit