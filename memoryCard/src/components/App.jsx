import '../styles/App.css'
import { useState, useEffect } from "react";
import Navbar from './Navbar'
import Card from './Card'

function App() {
  const [score, setScore] = useState(0)
  const [scoreHigh, setScoreHigh] = useState(0)

  const cards = []
  const cardCount = 12

  useEffect(() => {
    for (let i = 0; i < cardCount; i++) {
      cards.push(<Card score={score} setScore={setScore} setScoreHigh={setScoreHigh} />)
    }
  }, [])

  return (
      <div>
        <Navbar score={score} scoreHigh={scoreHigh} />
        {cards}
      </div>
  )
}

export default App
