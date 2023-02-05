import { useState } from "react";
import Logo from "./icons/logo";

function App() {
  const [wordToSearch, setWordToSearch] = useState("");

  // later can save the old word the user has searched for before
  // then prepopulate the data based on that

  return (
    <div className="brainbook">
      <div className="container">
        <nav className="nav">
          <Logo />
        </nav>
      </div>
    </div>
  );
}

export default App;
