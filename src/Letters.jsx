import "./Letters.css"


export default function Letters({letter, handleLetter, guessedLetters}) {
    

    return (
        <>
        {guessedLetters.includes(letter) ?
            <div className="letter guessed">{letter}</div> :
            <div className="letter" onClick={() => handleLetter(letter)}>{letter}</div>
        }
        </>
    )
}