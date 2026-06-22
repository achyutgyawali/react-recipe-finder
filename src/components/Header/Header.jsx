import "./Header.css";

export function Header({ onSearch, onNav }) {
  return (
    <header className="header">
      <button className="nav-link" onClick={() => onNav("home")}>
        <div className="app-name">
          <img className="app-icon" src="/hamburger.svg" alt="logo" />
          <strong className="app-title">Vok Laagyo!!</strong>
        </div>
      </button>
      <div className="search-box">
        <img className="search-icon" src="/search-icon.svg" alt="search" />
        <input
          className="search-input"
          placeholder="Search Recipe"
          onChange={(e) => onSearch(e.target.value)}
          onClick={() => onNav("search")}
        />
      </div>
      <nav className="nav-links">
        <button className="nav-link" onClick={() => onNav("about")}>About</button>
        <button className="nav-link" onClick={() => onNav("team")}>Team</button>
        <button className="nav-link" onClick={() => onNav("signup")}>SignUp</button>
      </nav>
    </header>
  );
}