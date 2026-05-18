import { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onSearch(searchTerm);
    setSearchTerm("");
  }

  return (
    <form className="d-flex" onSubmit={handleSubmit}>
      <input
        className="form-control me-2"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for Books"
      />
      <button className="btn btn-primary" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
