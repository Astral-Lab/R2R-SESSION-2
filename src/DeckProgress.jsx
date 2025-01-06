export default function DeckProgressBar({ progress, max }) {
    return (
        <div>
            <div className="progress__bar">
                <div className="progress__bar__inside" style={{ width: `${Math.floor((progress / max) * 100)}%`}}></div>
            </div>
            <p className="progress__text">{progress} / {max}</p>
        </div>
    )
}