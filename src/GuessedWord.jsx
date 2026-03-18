export default function GuessedWord({ word, guessedLettersBool }) {
    return (
        <>  
            <div className="guessed-word">
                {word.split("").map((letter, index) => (
                    <div className="guessed-letter" key={index}>
                        {guessedLettersBool[index] ? letter : "_"}
                    </div>
                ))}
            </div>
        </>
    )
}