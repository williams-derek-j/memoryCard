import "../styles/Card.css"
import { useState, useEffect } from 'react'

function Card(props) {

    return (
        <div className="card container" onClick={() => {
            props.handleClick(props.name)
        }}>
            <img className="card-img" src={props.img} alt={props.alt}/>
            <h2 className="card-title">{props.name}</h2>
        </div>
    )
}

export default Card;