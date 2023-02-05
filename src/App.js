import { useState } from "react";
import IconArrowDown from "./icons/iconArrowDown";
import Logo from "./icons/logo";
import MoonIcon from "./icons/moonIcon";
import SearchIcon from "./icons/searchIcon";

function App() {
  const [wordToSearch, setWordToSearch] = useState("");
  const [font, setFont] = useState("serif");

  // later can save the old word the user has searched for before
  // then prepopulate the data based on that

  return (
    <div className={`brainbook-${font}`}>
      <div className="container">
        <nav className="nav">
          <Logo />
          <div className="nav-side">
            <div className="custom-drop-down">
              <span className="current-font">{font}</span>
              <IconArrowDown />
            </div>
            <div className="theme-toggle">
              <div className="toggle-container"></div>
              <MoonIcon />
            </div>
          </div>
        </nav>
        <div className="input-container">
          <div className="input">
            <input
              type="text"
              placeholder="Search here"
              value={wordToSearch}
              onChange={(event) => setWordToSearch(event.target.value)}
            />
            <SearchIcon />
          </div>
        </div>
        <main className="content"></main>
      </div>
    </div>
  );
}

export default App;
