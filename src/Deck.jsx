import { useState } from "react";
import DeckProgressBar from "./DeckProgress";
import FlashCard from "./FlashCard";

export default function Deck({ deck }) {
    const [cardIndex, setCardIndex] = useState(1);

    const handleClick = () => {
        // Reached the end of the deck so reset
        if(cardIndex === deck.length) {
            setCardIndex(1);
            
        } else {
            setCardIndex(cardIndex + 1); 
        }
    }

    return (
        <div className="deck__container">
            {deck.length ? (
                <>
                    <FlashCard 
                        // The key prop ensures the answer is not shown
                        // when navigating between cards that are flipped
                        // as it forces a re-render of the card component
                        key={deck[cardIndex - 1].question}
                        question={deck[cardIndex - 1].question} 
                        answer={deck[cardIndex - 1].answer} 
                    />
                    <DeckProgressBar progress={cardIndex} max={deck.length}/>
                    <button className="deck__button" onClick={handleClick}>
                        {cardIndex === deck.length ? "restart" : "next card"}
                    </button>
                </>
            ) : (
                <p className="deck__empty">Deck empty</p>
            )}
        </div>
    )
}