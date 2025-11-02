import { useState } from 'react'

function Navbar(props) {
    const [score, setScore] = useState(0)
    const [scoreHigh, setScoreHigh] = useState(0)

    return (
        <div className="primary-header container">
            <h1>Memory Game</h1>
            <h2>Click an image and get a point, but if you've already clicked on that image before, your score resets to zero!</h2>

            <div className="scoreboard">
                <span className="score">Score: {score}</span>
                <span className="scoreHigh">Best score: {scoreHigh}</span>
            </div>
        </div>
    )
}