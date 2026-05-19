import { useRef, useEffect } from "react";
import BookCard from "./BookCard";

function FavoritesList({ favorites, onSeeMore, setFavorites, onClose }) {
  const bookRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (bookRef.current && !bookRef.current.contains(e.target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      className="modal fade show"
      style={{ display: "block" }}
      id="exampleModalLong"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-scrollable modal-xl"
        role="document"
      >
        <div className="modal-content" ref={bookRef}>
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              <strong>My Bookshelf</strong>
            </h5>
            <button
              type="button"
              className="close ms-auto btn-close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            />
          </div>
          <div className="modal-body">
            <div className="row">
              {favorites.map((book) => (
                <BookCard
                  key={book.id}
                  favorites={favorites}
                  book={book}
                  onSeeMore={onSeeMore}
                  setFavorites={setFavorites}
                  colSize="col-4"
                />
              ))}
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavoritesList;
