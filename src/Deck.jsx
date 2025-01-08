import { useState } from "react";
import DeckProgressBar from "./DeckProgress";
import FlashCard from "./FlashCard";

// use keys here to demonstrate animation (at end maybe?)
export default function Deck({}) {
    const [cardIndex, setCardIndex] = useState(0);

    const handleClick = () => {

    }

    return (
        <div className="deck__container">
            <div className="">

            </div>
            
            <FlashCard/>
            <DeckProgressBar progress={10} max={30}/>
            {/* put into own component? */}
            <button
                className="deck__button"
                onClick={handleClick}
                type="button"
            >next card</button>
        </div>
    )
}