import { useState } from 'react'
import Header from './Header'
import Deck from './Deck';
import Form from './Form';

// Code done and github for session 1/2 (today)
// Button component?
// sandboxes created and slides finished (tomorrow)
function App() {
  const [deck, setDeck] = useState([]);
  const [showDeck, setShowDeck] = useState(true);

  return (
    <>
      <Header showDeck={showDeck} setShowDeck={setShowDeck}/>
      {showDeck ? (
        <Deck deck={deck}/>
      ) : (
        <Form deck={deck} setDeck={setDeck}/>
      )}
    </>
  )
}

export default App
