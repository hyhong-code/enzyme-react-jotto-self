import React from "react";

import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords
        guessedWords={[
          { guessedWord: "hello", letterMatchCount: 3 },
          { guessedWord: "goodbye", letterMatchCount: 2 },
          { guessedWord: "letsgo", letterMatchCount: 4 },
        ]}
      />
    </div>
  );
}

export default App;
