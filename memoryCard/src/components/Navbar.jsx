import { useState } from 'react'

function Navbar(props) {
    return (
        <div className="primary-header container">
            <h1>Memory Game</h1>
            <h2>Click an image and get a point, but if you've already clicked on that image before, your score resets to zero!</h2>

            <div className="scoreboard">
                <span className="score">Score: {props.score}</span>
                <span className="scoreHigh">Highscore: {props.scoreHigh}</span>
            </div>
        </div>
    )
}

export default Navbar;