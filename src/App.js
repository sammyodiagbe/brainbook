import { useState } from "react";
import IconArrowDown from "./icons/iconArrowDown";
import Logo from "./icons/logo";
import MoonIcon from "./icons/moonIcon";
import SearchIcon from "./icons/searchIcon";
import { endpointUrl } from "./variables";

function App() {
  const [wordToSearch, setWordToSearch] = useState("");
  const [font, setFont] = useState("serif");
  const [darkTheme, useDarkTheme] = useState(false);

  // later can save the old word the user has searched for before
  // then prepopulate the data based on that

  const getWordData = async (event) => {
    event.preventDefault();
    // do validation later
    if (!wordToSearch || wordToSearch === null) return;

    const response = await fetch(endpointUrl(wordToSearch));
    const data = await response.json();

    console.log(data);
  };

  return (
    <div
      className={`brainbook-${font} ${
        darkTheme ? "dark-theme" : "light-theme"
      }`}
    >
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
            <form onSubmit={getWordData}>
              <input
                type="text"
                placeholder="Search here"
                value={wordToSearch}
                onChange={(event) => setWordToSearch(event.target.value)}
              />
            </form>

            <SearchIcon />
          </div>
        </div>
        <main className="content"></main>
      </div>
    </div>
  );
}

export default App;
