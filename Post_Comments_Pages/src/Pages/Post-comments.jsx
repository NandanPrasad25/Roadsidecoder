/* eslint-disable react-hooks/exhaustive-deps */

import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const PostComments = () => {
  const [comments, setComments] = useState(null);
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);

  const { postId } = useParams();

  const fetchData = async () => {
    setLoading(true);
    try {
      const [postResponse, commentResponse] = Promise.all([
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`), //Object
        axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`  //Array of objects
        ),
      ]);

      setPosts(postResponse);
      setComments(commentResponse.data);
  

    } catch (error) {
      console.log("Error Fetching data", error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchData();
  }, [postId])

  return (
    <div>
      {loading ? <p>Loading...</p> : (
        <div>
          {/* {posts?.map((post) => {
            return <div key={post.id} className="post-card">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          })} */}
          <h2>Comments</h2>
          {comments?.map((comment) => {
            return <li key={comment.id}>
              <strong>{comment.name}</strong> : {comment.body}
            </li>
          })}
        </div>
      )}
    </div>
  )
};

export default PostComments;
