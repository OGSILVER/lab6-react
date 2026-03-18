import {letters} from "./constants/letters";
import {words} from "./constants/words";
import Letters from "./Letters";
import Hangman from "./Hangman";
import GuessedWord from "./GuessedWord";
import "./App.css"
import { useState } from "react";

export default function App() {
    const [stage, setStage] = useState(0);
    const [word, setWord] = useState(words[Math.floor(Math.random() * words.length)]);
    const [guessedLettersBool, setGuessedLettersBool] = useState(Array(word.length).fill(false));
    const [guessedLetters, setGuessedLetters] = useState([]);
    const maxStage = 6;
    console.log("Selected word:", word);
    console.log("Guessed letters (bool):", guessedLettersBool);
    console.log("Guessed letters:", guessedLetters);
    console.log("Current stage:", stage);

    if(stage > maxStage) {
            alert("Game over! The word was: " + word);
            setStage(0);
            const newWord = words[Math.floor(Math.random() * words.length)];
            setWord(newWord);
            setGuessedLettersBool(Array(newWord.length).fill(false));
            setGuessedLetters([]);
    }

    if(guessedLettersBool.every(bool => bool)) {
        alert("Congratulations! You guessed the word: " + word);
        restartGame();
    }
    


    function handleStage() {
        if(stage <= maxStage){
            setStage(stage + 1);
            console.log("Stage increased to:", stage + 1);
        }
            
        
        
    }

    function handleLetter(letter) {
        setGuessedLetters([...guessedLetters, letter]);
        console.log("Letter clicked:", letter);
        if(!word.includes(letter)) {
            handleStage();
        } else {
            const newGuessedLettersBool = [...guessedLettersBool];
            for(let i = 0; i < word.length; i++) {
                if(word[i] === letter) {
                    newGuessedLettersBool[i] = true;
                }
            }
            setGuessedLettersBool(newGuessedLettersBool);

        }
        if(guessedLettersBool.every(bool => bool)) {
            alert("Congratulations! You guessed the word: " + word);
            restartGame();
        }
    }


    function restartGame() {
        setStage(0);
        const newWord = words[Math.floor(Math.random() * words.length)];
        setWord(newWord);
        setGuessedLettersBool(Array(newWord.length).fill(false));
        setGuessedLetters([]);
    }





    return <>
        <h1>Hangman</h1>

        <Hangman stage={stage} />

        <button onClick={restartGame}>
            Restart Game
        </button>

        <div className="guessed-word">
            <GuessedWord word={word} guessedLettersBool={guessedLettersBool} />
        </div>

        <div className="keyboard">
            {letters.map((letter, index) => (
                <Letters letter={letter} key={index} handleLetter={handleLetter} guessedLetters={guessedLetters} />
            ))}
        </div>
    
        
    
    
    </>;
}