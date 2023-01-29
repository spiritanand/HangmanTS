import React from "react";

interface Props {
  wordToGuess: string;
  guessedLetters: string[];
  reveal: boolean;
}

const Word = ({
				wordToGuess,
				guessedLetters,
				reveal
			  }: Props) => {
  return (
	<div className = "word">
	  {wordToGuess.split("")
				  .map((letter, index) => (
					<span key = {index}
						  className = "letterWrapper"
					>
                <span className = "letter"
					  style = {{
						// @ts-ignore
						visibility: guessedLetters.includes(letter) || reveal
									? ""
									: "hidden",
						color     : !guessedLetters.includes(letter) && reveal
									? "red"
									: "black"
					  }}
				>{letter}</span>
                </span>
				  ))}
	</div>
  );
};

export default Word;
