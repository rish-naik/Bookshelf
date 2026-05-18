import { useEffect, useRef } from "react";

function BookDetail({ book, onClose }) {
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

  const {
    title = "No Title Available",
    authors = ["Unknown Authors"],
    imageLinks = {},
    publishedDate = "No Date Available",
    description = "No Description Available",
    pageCount = "Unknown",
    previewLink = "www.google.com",
  } = book.volumeInfo;
  const thumbnail = imageLinks.thumbnail || "https://placehold.co/180x280";

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
      <div className="modal-dialog modal-dialog-scrollable" role="document">
        <div className="modal-content" ref={bookRef}>
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              {title}
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
            <img
              src={thumbnail}
              alt={`Picture of ${title}'s cover`}
              className="img-fluid mb-3"
            />
            <p>
              <strong>Authors:</strong> {authors.join(", ")}
            </p>
            <p>
              <strong>Published Date:</strong> {publishedDate}
            </p>
            <p>
              <strong>Page Count:</strong> {pageCount}
            </p>
            <p>
              <strong>Preview Link: </strong>
              <a href={previewLink} target="_blank" rel="noreferrer">
                Click Here
              </a>
            </p>
            <p>
              <strong>Description: </strong> {description}
            </p>
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

export default BookDetail;
