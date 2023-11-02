import { postExamples } from "./mockData";
import Post from "./Post";
import { useState, useEffect } from "react";

export default function Postlist() {
  const [comments, setComments] = useState([postExamples]);

  async function fetchPosts() {
    setComments(postExamples);
  }
  useEffect(() => {
    fetchPosts();
    console.log(comments);
  }, []);
  return (
    <>
      <div>Postlist component</div>
      <section>
        comments
        {comments &&
          comments.map((comment) => {
            return <Post key={comment.id} comment={comment} />;
          })}
      </section>
    </>
  );
}
