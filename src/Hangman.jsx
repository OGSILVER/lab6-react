import {stages} from "./constants/stages";
import "./Hangman.css"

export default function Hangman({ stage, handleStage }) {
    return (
        <>
            <div className="hangman" onClick={handleStage}>
                <img src={stages[stage]} alt="Hangman" />
            </div>
        </>
    )
}