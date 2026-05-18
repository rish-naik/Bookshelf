import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BookList from "./components/BookList";
import useBooks from "./services/useBooks";
import BookDetail from "./components/BookDetail";
import { useState } from "react";

function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const { books, isLoading, setSearchTerm } = useBooks("Bread");

  function handleSearch(query) {
    setSearchTerm(query);
  }

  function handleSeeMore(book) {
    setSelectedBook(book);
  }

  function handleClosePopUp() {
    setSelectedBook(null);
  }

  return (
    <div>
      <NavBar onSearch={handleSearch} />
      {isLoading ? (
        <p className="placeholder-glow display-3 text-body-secondary">
          <span className="placeholder col-12">Loading...</span>
        </p>
      ) : (
        <BookList books={books} onSeeMore={handleSeeMore} />
      )}
      <Footer />
      {selectedBook && (
        <BookDetail book={selectedBook} onClose={handleClosePopUp} />
      )}
    </div>
  );
}

export default App;
