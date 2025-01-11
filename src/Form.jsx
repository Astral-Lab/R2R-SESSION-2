import { useState } from "react";
import { TiDelete } from "react-icons/ti";

export default function Form({ deck, setDeck }) {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const isValid = question !== "" && answer !== "";

    const handleQuestionChange = (e) => {
        setQuestion(e.target.value);
    }

    const handleAnswerChange = (e) => {
        setAnswer(e.target.value)
    }

    const handleAddCard = () => {
        setDeck([...deck, { question, answer }]);
        
        // Reset form state
        setQuestion("");
        setAnswer("");
    }
    
    // Assumes unique question for a card
    const handleDeleteCard = (question) => {
        setDeck(deck.filter(card => card.question !== question));
    }

    const renderedCards = deck.map(card => (
        <li key={card.question} className="card__mini">
            <div>
                <p>{card.question}</p>
                <p>{card.answer}</p>
            </div>
            <button onClick={() => handleDeleteCard(card.question)}>
                <TiDelete size={"32px"}/>
            </button>
        </li>
    ));

    return (
        <div>
            <form>
                <div>
                    <label id="question">Question</label>
                    <input  
                        name="question"
                        type="text"
                        onChange={handleQuestionChange}
                        value={question}
                    />
                </div>
                <div>
                    <label id="answer">Answer</label>
                    <input  
                        name="answer"
                        type="text"
                        onChange={handleAnswerChange}
                        value={answer}
                    />
                </div>
                <button
                    className={`form__button ${!isValid && "form__button__disabled"}`}
                    onClick={handleAddCard}
                    type="button"
                    disabled={!isValid}
                >add card</button>
            </form>
            <div className="cards__container">
                <h2>Deck</h2>
                <ul className="cards__list">{renderedCards}</ul>
            </div>
        </div>
    )
}