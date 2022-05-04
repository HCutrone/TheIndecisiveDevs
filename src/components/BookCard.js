import React from 'react'
import '../Library.css'

const BookCard = (props) => {
  return (
    <div className = "bookcard">
        <div className="coverwrapper">
                <img alt ={props.title} src = {props.image}/>
        </div>
        <div className="desc">
            <h2>{props.title}</h2>
            <h3>{props.author}</h3>
            <p>{props.published}</p>
        </div>
    </div>
  )
}

export default BookCard;