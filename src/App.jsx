import { useState } from 'react'
import Header from './Header'
import Deck from './Deck';
import Form from './Form';

function App() {
  const [deck, setDeck] = useState([]);
  const [showDeck, setShowDeck] = useState(true);

  return (
    <>
      <Form deck={deck} setDeck={setDeck}/>
    </>
  )
}

export default App
