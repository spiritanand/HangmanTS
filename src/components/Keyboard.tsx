import React from "react";

interface PROPS {
  correctLetters: string[];
  incorrectLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled: boolean;
}

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const Keyboard = ({
					correctLetters,
					incorrectLetters,
					addGuessedLetter,
					disabled
				  }: PROPS) => {
  return (
	<div className = "keyboard">
	  {KEYS.map(key => {
		const isCorrect = correctLetters.includes(key);
		const isIncorrect = incorrectLetters.includes(key);
		
		return (
		  <button key = {key}
				  className = {`key ${isCorrect
									  ? "correct"
									  : ""}
									  ${isIncorrect
										? "incorrect"
										: ""}`}
                  disabled={disabled}
				  onClick = {() => addGuessedLetter(key)}
		  >
			{key}
		  </button>
		);
	  })}
	</div>
  );
};

export default Keyboard;
