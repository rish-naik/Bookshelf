import { useState, useEffect } from "react";

function BookCard({
  book,
  onSeeMore,
  favorites,
  setFavorites,
  colSize = "col-md-4",
}) {
  const favorite = favorites.some((item) => item.id === book.id);

  const {
    title = "No Title Available",
    authors = ["Unknown Authors"],
    imageLinks = {},
  } = book.volumeInfo;
  const thumbnail = imageLinks.thumbnail || "https://placehold.co/180x280";

  function handleFavorite() {
    if (!favorite) {
      setFavorites((prevFavorites) => [...prevFavorites, book]);
    } else {
      setFavorites((prevFavorites) =>
        prevFavorites.filter((item) => item !== book),
      );
    }
  }

  return (
    <div className={`${colSize} mb-3`}>
      <div className="card">
        <img
          className="card-img-top"
          src={thumbnail}
          alt={`Picture of ${title}`}
          onClick={() => onSeeMore(book)}
          style={{ cursor: "pointer" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p>
            Favorite:{" "}
            <i
              onClick={handleFavorite}
              style={{ cursor: "pointer" }}
              className={favorite ? "bi bi-star-fill" : "bi bi-star"}
            />
          </p>
          <p className="card-text">{authors.join(", ")}</p>
          <button onClick={() => onSeeMore(book)} className="btn btn-primary">
            See More
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
