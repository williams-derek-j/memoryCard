import "../styles/Card.css"
import { useState, useEffect } from 'react'

function Card(props) {
    const [clicked, setClicked] = useState(false)

    return (
        <div className="card container" onClick={() => {
            if (clicked) {
                props.setScore(0)
            } else {
                if (props.score >= props.scoreHigh) {
                    props.setScoreHigh(props.score + 1)
                }
                props.setScore(props.score + 1) // this will cause App to rerender bc score is state on App, wherein we can reshuffle cards

                setClicked(true)}
            }
        }>
            {/*<img className="card-img" src={props.img} alt={props.alt}/>*/}
            <h2 className="card-title">title</h2>
        </div>
    )
}

export default Card;