export default function Header({ showDeck, setShowDeck }) {
    return (
        <header className="">
            <h1>React Flash</h1>
            <button
                className="header__toggle"
                onClick={() => setShowDeck(!showDeck)}
            >create</button>
        </header>
    )
}