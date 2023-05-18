import { useState } from "react";
import "./App.css";
import { GameBoard } from "./Components/GameBoard";
import { ScoreBoard } from "./Components/ScoreBoard";
import "./Components/styles/final-score.css";
import { FinalScore } from "./Components/FinalScore";

function App() {
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [answersLeft, setAnswersLeft] = useState([
    "trout",
    "salmon",
    "shark",
    "tuna",
  ]);
  const [page, setPage] = useState(1);
  const totalCount = 4;
  const getRidOfCorrectOption = (value) => {
    const updatedAnswersLeft = answersLeft.filter((answer) => answer !== value);
    setAnswersLeft(updatedAnswersLeft);
  };

  const goToResultsScreen = () => {
    setPage(2);
  };

  return (
    <div className="App">
      <header>
        {page === 1 ? (
          <>
            <ScoreBoard
              answersLeft={answersLeft}
              correctCount={correctCount}
              incorrectCount={incorrectCount}
            />
            <GameBoard
              getRidOfCorrectOption={getRidOfCorrectOption}
              setCorrectCount={setCorrectCount}
              correctCount={correctCount}
              setIncorrectCount={setIncorrectCount}
              incorrectCount={incorrectCount}
              goToResultsScreen={goToResultsScreen}
            />
          </>
        ) : (
          <FinalScore correctCount={correctCount} totalCount={totalCount} />
        )}
      </header>
    </div>
  );
}

export default App;
