import { useState } from "react";
import IconArrowDown from "./icons/iconArrowDown";
import Logo from "./icons/logo";
import MoonIcon from "./icons/moonIcon";
import NewWindowIcon from "./icons/newWindowIcon";
import PlayIcon from "./icons/playIcon";
import SearchIcon from "./icons/searchIcon";
import { endpointUrl } from "./variables";

function App() {
  const [wordToSearch, setWordToSearch] = useState("Keyboard");
  const [font, setFont] = useState("serif");
  const [darkTheme, setUseDarkTheme] = useState(false);
  const [responseData, setResponseData] = useState({});
  const [audiourl, canPlayAudio] = useState(null);
  const [showDrop, setShowDrop] = useState(false);
  // later can save the old word the user has searched for before
  // then prepopulate the data based on that

  const getWordData = async (event) => {
    event.preventDefault();
    // do validation later
    if (!wordToSearch || wordToSearch === null) return;
    try {
      const response = await fetch(endpointUrl(wordToSearch));
      const data = await response.json();
      const { resolution } = data;
      if (resolution) {
        // an error occured
        console.log("An error has occured");
        return;
      }
      const { phonetics } = data[0];

      const audio = phonetics.find(
        (phon) =>
          phon.audio != null && phon.audio !== undefined && phon.audio !== ""
      );
      if (audio) {
        canPlayAudio(audio.audio);
      } else {
        canPlayAudio(null);
      }
      setResponseData(data[0]);
    } catch (error) {}
  };

  const { word, meanings, phonetic, sourceUrls } = responseData;

  const toggleDarkTheme = (event) => {
    // useDarkTheme(event.target.checked);
    console.log(event.target.checked);
    setUseDarkTheme(event.target.checked);
  };

  const meaningStructure =
    meanings && meanings.length
      ? meanings.map((meaning, index) => {
          const { partOfSpeech, definitions, antonyms, synonyms } = meaning;
          return (
            <div className="meaning" key={index}>
              <h3 className="part-of-speech">{partOfSpeech}</h3>
              <p className="meaning">Meaning</p>

              <ul>
                {definitions.map((definition, index) => {
                  const { example, definition: def } = definition;

                  return (
                    <li>
                      <span className="definition">{def}</span>
                      {example && <p className="example">"{example}"</p>}
                    </li>
                  );
                })}
              </ul>
              <div className="syn-an">
                {synonyms && synonyms.length ? (
                  <div className="syn">
                    <span>Synonyms </span>{" "}
                    <b className="s">
                      {synonyms.reduce((a, b) => a + ", " + b)}
                    </b>
                  </div>
                ) : null}
                {antonyms && antonyms.length ? (
                  <div className="syn">
                    <span>Antonyms </span>{" "}
                    <b className="s">
                      {antonyms.reduce((a, b) => a + ", " + b)}
                    </b>
                  </div>
                ) : null}
              </div>
            </div>
          );
        })
      : null;

  const playAudioSound = () => {
    if (audiourl == null) return;
    const audio = new Audio(audiourl);
    audio.play();
  };

  const switchFont = (event) => {
    const { font } = event.target.dataset;
    setFont(font);
  };
  return (
    <div
      className={`brainbook ${font} ${
        darkTheme ? "dark-theme" : "light-theme"
      }`}
    >
      <div className="container">
        <nav className="nav">
          <Logo />
          <div className="nav-side">
            <button
              className={`custom-drop-down ${darkTheme && "dark"}`}
              onClick={() => setShowDrop(!showDrop)}
            >
              {showDrop && (
                <span className="drop-list">
                  <button
                    className="drop-trigger"
                    data-font="serif"
                    onClick={switchFont}
                  >
                    Serif
                  </button>
                  <button
                    className="drop-trigger"
                    data-font="san-serif"
                    onClick={switchFont}
                  >
                    Sans-Serif
                  </button>
                  <button
                    className="drop-trigger"
                    data-font="monospace"
                    onClick={switchFont}
                  >
                    Monospace
                  </button>
                </span>
              )}
              <span className="current-font">{font}</span>
              <IconArrowDown />
            </button>
            <div className="theme-toggle">
              <button className="toggle-container">
                <input
                  type={"checkbox"}
                  id="toggle"
                  name="toggle"
                  hidden
                  onChange={toggleDarkTheme}
                />
                <label htmlFor="toggle" className="toggle"></label>
              </button>
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
                className="input"
                value={wordToSearch}
                checked
                onChange={(event) => setWordToSearch(event.target.value)}
              />
            </form>

            <SearchIcon />
          </div>
        </div>
        <main className="content">
          <div className="content-top">
            <div className="left">
              <h1>{word}</h1>
              <p className="phonetic">{phonetic}</p>
            </div>

            <button
              className="audio"
              onClick={playAudioSound}
              disabled={audiourl === null}
            >
              <PlayIcon />
            </button>
          </div>
          <div className="meaning-container">{meaningStructure}</div>
        </main>
        <div className="sources">
          <p className="source">Source</p>
          {sourceUrls &&
            sourceUrls.map((source, index) => {
              return (
                <span key={index}>
                  <a href={source} target="_blank">
                    {source} <NewWindowIcon />
                  </a>
                </span>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
