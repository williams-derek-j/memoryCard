import '../styles/App.css'
import { useState, useEffect } from "react";
import Navbar from './Navbar.jsx'
import Card from './Card.jsx'

function App() {
  const [score, setScore] = useState(0)
  const [scoreHigh, setScoreHigh] = useState(0)

  const [cards, setCards] = useState([])
  const cardCount = 12

  const [cardData, setCardData] = useState([])

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
        .then(res => {
          if (!res.ok) {
            throw Error('could not fetch card character data!')
          }
          return res.json()
        }).then(data => {
            console.log(data)
            setCardData(data.results.slice(0, cardCount).map((card, index) => ({
                index: index,
                id: card.id,
                name: card.name,
                img: card.image,
            })))
        console.log('cd',cardData)
    })
    const temp = []
    for (let i = 0; i < cardCount; i++) {
      temp.push(<Card data={cardData[i]} score={score} setScore={setScore} scoreHigh={scoreHigh} setScoreHigh={setScoreHigh} />)
    }
    setCards(temp)
  }, [score])

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
