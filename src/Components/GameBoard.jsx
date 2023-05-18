import "./styles/game-board.css";
import { Images } from "../assets/images";
import { useState } from "react";
import { FinalScore } from "./FinalScore";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export const GameBoard = ({
  getRidOfCorrectOption,
  setCorrectCount,
  correctCount,
  setIncorrectCount,
  incorrectCount,
  goToResultsScreen,
}) => {
  const [fishToNameIndex, setFishToNameIndex] = useState(0);
  const [guessInput, setGuessInput] = useState("");
  const fishToName = initialFishes[fishToNameIndex];

  const increaseFishIndex = () => {
    setFishToNameIndex(fishToNameIndex + 1);
  };

  const makeAGuess = ({ target: { value } }) => {
    setGuessInput(value);
  };

  const validateAnswer = () => {
    fishToName.name === guessInput
      ? setCorrectCount(correctCount + 1)
      : setIncorrectCount(incorrectCount + 1);
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={fishToName.url} alt={fishToName.name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          e.preventDefault();
          validateAnswer();
          setGuessInput("");
          if (fishToNameIndex === 3) {
            goToResultsScreen();
          }
          increaseFishIndex();
          getRidOfCorrectOption(fishToName.name);
        }}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          onChange={makeAGuess}
          value={guessInput}
        />
        <input type="submit" />
      </form>
    </div>
  );
};
