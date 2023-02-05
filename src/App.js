import { useState } from "react";
import IconArrowDown from "./icons/iconArrowDown";
import Logo from "./icons/logo";

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
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;
