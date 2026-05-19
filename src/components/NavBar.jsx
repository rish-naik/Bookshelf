import SearchBar from "./SearchBar";

function NavBar({ onSearch, openFavorites }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
      <div className="container-fluid">
        <a onClick={() => openFavorites()} className="navbar-brand" href="#">
          My Bookshelf
        </a>
        <a></a>
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
}

export default NavBar;
