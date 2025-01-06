import { useState } from 'react'
import Header from './Header'
import Deck from './Deck';

function App() {
  const [deck, setDeck] = useState([]);
  const [showDeck, setShowDeck] = useState(true);

  return (
    <>
      <Deck/>
    </>
  )
}

export default App
