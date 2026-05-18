function BookDetail({ book, onClose }) {
  const {
    title = "No Title Available",
    authors = ["Unkown Authors"],
    imageLinks = {},
    publishedDate = "No Date Available",
    description = "No Description Available",
    pageCount = "Unkown",
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
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              {title}
            </h5>
            <button
              type="button"
              className="close ms-auto"
              data-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
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
              <a href={previewLink} target="_blank">
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
