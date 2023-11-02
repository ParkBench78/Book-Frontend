import Book from "./Book";
import { bookExamples } from "./mockData";
import { useState, useEffect } from "react";
import Postlist from "./Postlist";

export default function Home() {
  const [currentBooks, setCurrentBooks] = useState([bookExamples]);

  async function fetchCurrentBooks() {
    setCurrentBooks(bookExamples);
  }
  useEffect(() => {
    fetchCurrentBooks();
    console.log(currentBooks);
  }, []);
  return (
    <>
      <div>Home component</div>
      <Book book={currentBooks[0]} />
      <section id="comments">
        <Postlist />
      </section>
    </>
  );
}
