import { useState, useEffect } from 'react'

function Card(props) {
    const [clicked, setClicked] = useState(false)

    return (
        <div className="card container" onClick={() => setClicked(true)}>
            <img className="card-img" src={props.img} alt={props.alt}/>
            <h2 className="card-title">{props.title}</h2>
        </div>
    )
}