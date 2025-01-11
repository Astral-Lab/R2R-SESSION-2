import { useState } from 'react'
import Header from './Header'
import Deck from './Deck';
import Form from './Form';

// create button component

function App() {
  const [deck, setDeck] = useState([
    {
      question: "What is the best language?",
      answer: "CSS!"
    },
    {
      question: "What is the the powerhouse of the cell?",
      answer: "Mitochondira?"
    }
  ]);
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
