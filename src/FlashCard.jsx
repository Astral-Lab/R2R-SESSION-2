export default function FlashCard({ question, answer }) {
    return (
        <button className="card__container">
            <input type="checkbox"/>
            <div className="card__front">
                <p className="card__text">{question}</p>
            </div>
            <div className="card__back">
                <p className="card__text">{answer}</p>
            </div>
        </button>
    )
}