export default function Book({ book }) {
  return (
    <>
      <div>
        <div>{book.title}</div>
        <div>{book.author}</div>
        <img className="bookImage" src={book.imageUrl}></img>
      </div>
    </>
  );
}
