import '../styles/App.css'
import { useState, useEffect } from "react";
import Navbar from './Navbar.jsx'
import Card from './Card.jsx'

function App() {
    const [score, setScore] = useState(0)
    const [scoreHigh, setScoreHigh] = useState(0)

    // const [cards, setCards] = useState([])
    const cardCount = 12;

    const [cardData, setCardData] = useState([])

    const [cardsClicked, setCardsClicked] = useState([])

    function handleClick(id) {
        console.log('cc',cardsClicked)

        if (cardsClicked.includes(id)) {
            setScore(0)

            setCardsClicked([])
        } else {
            if (score >= scoreHigh) {
                setScoreHigh(score + 1)
            }
            setScore(score + 1)

            setCardsClicked([...cardsClicked, id])
        }
    }

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
        .then(res => {
            if (!res.ok) {
            throw Error('could not fetch card character data!')
            }
            return res.json()
        }).then(data => {
        const formatted = data.results.slice(0, cardCount).map((card, index) => ({
            index: index,
            id: card.id,
            name: card.name,
            img: card.image,
        }))
        setCardData(formatted)
            })
    }, [])

    return (
        <div>
        <Navbar score={score} scoreHigh={scoreHigh} />
        <div className="cards container">{cardData.map(card => (
            <Card key={card.id} img={card.img} name={card.name} handleClick={handleClick} cardsClicked={cardsClicked} setScore={setScore} setScoreHigh={setScoreHigh} score={score} scoreHigh={scoreHigh}/>
        ))}</div>
        </div>
    )
}

export default App
