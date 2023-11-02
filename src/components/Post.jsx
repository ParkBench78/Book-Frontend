export default function Post({ comment }) {
  return (
    <>
      <div>
        <div>{comment.comment}</div>
        <div>{comment.author}</div>
      </div>
    </>
  );
}
