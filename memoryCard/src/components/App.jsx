import '../styles/App.css'
import { useState, useEffect } from "react";
import Navbar from './Navbar.jsx'
import Card from './Card.jsx'

function App() {
  const [score, setScore] = useState(0)
  const [scoreHigh, setScoreHigh] = useState(0)

  const [cards, setCards] = useState([])
  const cardCount = 12

  useEffect(() => {
    const temp = []
    for (let i = 0; i < cardCount; i++) {
      temp.push(<Card score={score} setScore={setScore} scoreHigh={scoreHigh} setScoreHigh={setScoreHigh} />)
    }
    setCards(temp)
  }, [score, scoreHigh])

  useEffect(() => {
    console.log('rendered', score)
  })

  return (
      <div>
        <Navbar score={score} scoreHigh={scoreHigh} />
        <div className="cards container">{cards}</div>
      </div>
  )
}

export default App
