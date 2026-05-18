import SearchBar from "./SearchBar";

function NavBar({ onSearch }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          BookShelf
        </a>
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
}

export default NavBar;
