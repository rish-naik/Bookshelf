import BookCard from "./BookCard";

function BookList({ books, onSeeMore, setFavorites, favorites }) {
  return (
    <div className="row">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onSeeMore={onSeeMore}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      ))}
    </div>
  );
}

export default BookList;
