import Book from "./Book";
import { bookExamples } from "./mockData";
import { useState, useEffect } from "react";

export default function Booklist() {
  const [currentBooks, setCurrentBooks] = useState([]);

  async function fetchCurrentBooks() {
    setCurrentBooks(bookExamples);
  }
  useEffect(() => {
    fetchCurrentBooks();
    console.log(currentBooks);
  }, []);
  return (
    <>
      <div>Booklist component</div>
      <section>
        currentBooks
        {bookExamples &&
          bookExamples.map((book) => {
            return <Book key={book.id} book={book} />;
          })}
      </section>
    </>
  );
}
