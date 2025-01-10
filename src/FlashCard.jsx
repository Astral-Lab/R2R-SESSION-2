import { useState } from "react";

export default function FlashCard({ question, answer }) {
    const [count, setCount] = useState(0);

    const classes = `
        card__container
        ${count === 0 ? "" : count % 2 === 0 ? "flip__forward" : "flip_backward"}
    `

    const handleClick = () => {
        setCount(count + 1);
    }

    // swap to input element! to avoid needing to use useRef/useEffect
    
    return (
        <button className={classes} onClick={handleClick}>
            <div className="card__front">
                <p className="card__text">{question}</p>
            </div>
            <div className="card__back">
                <p className="card__text">{answer}</p>
            </div>
        </button>
    )
}