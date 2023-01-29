import React, {
  useCallback,
  useEffect,
  useState
} from "react";
import words from "./wordList.json";
import Hangman from "./components/Hangman";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";

const App = () => {
  const [wordToGuess, setWordToGuess] = useState(() =>
	words[Math.floor(Math.random() * words.length)]);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(letter =>
	!wordToGuess.includes(letter));
  const isWinner: boolean = wordToGuess.split("")
									   .every(letter => guessedLetters.includes(letter));
  const isLoser: boolean = incorrectLetters.length >= 6;
  
  const addGuessedLetter = useCallback((letter: string) => {
	  if (guessedLetters.includes(letter) || isWinner || isLoser) return;
	  
	  setGuessedLetters(prevState => [
		...prevState,
		letter
	  ]);
	}
	, [
	  guessedLetters,
	  isWinner,
	  isLoser
	]);
  
  useEffect(() => {
	function handler(e: KeyboardEvent) {
	  if (!e.key.match(/^[a-z]$/)) return;
	  addGuessedLetter(e.key);
	}
	
	document.addEventListener("keypress", handler);
	
	return () => {
	  document.removeEventListener("keypress", handler);
	};
  }, [guessedLetters]);
  
  return (
	<div className = "app">
	  <div>
		{isWinner
		 ? "Winner! "
		 : ""}
		{isLoser
		 ? "Nice try! "
		 : ""}
		{isLoser || isLoser
		 ? "Refresh to restart"
		 : ""}
	  </div>
	  <Hangman numberOfGuesses = {incorrectLetters.length}/>
	  <Word wordToGuess = {wordToGuess}
			guessedLetters = {guessedLetters}
			reveal={isLoser}
	  />
	  <Keyboard correctLetters = {guessedLetters.filter(
		letter => wordToGuess.includes(letter))}
				incorrectLetters = {incorrectLetters}
				addGuessedLetter = {addGuessedLetter}
				disabled = {isLoser || isWinner}
	  />
	</div>
  );
};

export default App;
