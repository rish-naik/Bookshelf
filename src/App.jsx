import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BookList from "./components/BookList";
import useBooks from "./services/useBooks";
import BookDetail from "./components/BookDetail";
import FavoritesList from "./components/FavoritesList";
import { useState } from "react";

function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const { books, isLoading, setSearchTerm } = useBooks("Bread");
  const [seeFavorites, setSeeFavorites] = useState(false);
  const [favorites, setFavorites] = useState([]);

  function handleSearch(query) {
    setSearchTerm(query);
  }

  function handleSeeMore(book) {
    setSelectedBook(book);
  }

  function handleCloseSelectedBook() {
    setSelectedBook(null);
  }

  function handleSeeFavorites() {
    setSeeFavorites(true);
  }

  function closeSeeFavorites() {
    setSeeFavorites(false);
  }

  return (
    <div>
      <NavBar onSearch={handleSearch} openFavorites={handleSeeFavorites} />
      {isLoading ? (
        <p className="placeholder-glow display-3 text-body-secondary">
          <span className="placeholder col-12">Loading...</span>
        </p>
      ) : (
        <BookList
          books={books}
          onSeeMore={handleSeeMore}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      )}
      <Footer />
      {selectedBook && (
        <BookDetail book={selectedBook} onClose={handleCloseSelectedBook} />
      )}
      {seeFavorites && (
        <FavoritesList
          favorites={favorites}
          onSeeMore={handleSeeMore}
          onClose={closeSeeFavorites}
          setFavorites={setFavorites}
        />
      )}
    </div>
  );
}

export default App;
