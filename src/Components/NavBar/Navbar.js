import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar({setSubject}) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim()) {
      setSubject(searchTerm.trim());
    }
    setIsSearchOpen(false);
  };


  return (
    <div className="nav-container">
      <div className="nav-wraper">
        <div className="logo">
          <h1>Gallery</h1>
        </div>
        <div className="right-nav-wraper">
          {!isSearchOpen ? (
            <div className="nav-search-icon">
              <img
                src="./assets/icon-search.png"
                alt="search icon"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              />
            </div>
          ) : (
            <div className="search-container">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    handleSearch();
                  }
                }}
              />
              <div className="search-btns">
                <div
                  className="search-cancel-btn"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                >
                  <img src="./assets/icons8-cancel-100.png" alt="cancel icon" />
                </div>
                <div className="search-enter-btn" onClick={handleSearch}>
                  <img src="./assets/icons8-arrow-100.png" alt="arrow icon" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
