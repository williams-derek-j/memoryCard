import { useState, useEffect } from 'react'

function Card(props) {
    const [clicked, setClicked] = useState(false)

    return (
        <div className="card container" onClick={() => {
            if (clicked) {
                props.setScore(0)
            } else {
                setClicked(true)

                props.setScore(props.score + 1)

                if (props.score > props.scoreHigh) {
                    props.scoreHigh(props.score)
                }
                setClicked(true)}
            }
        }>
            <img className="card-img" src={props.img} alt={props.alt}/>
            <h2 className="card-title">{props.title}</h2>
        </div>
    )
}

export default Card;