import React from 'react'
import '../Library.css'
import BookCard from './BookCard'

function BooksList(props) {
  return (
    <div className = "booklist">
        {
            props.books.map((book, i) =>{
                return <BookCard 
                    key = {i}
                    image = {book.volumeInfo.imageLinks.thumbnail}
                    title = {book.volumeInfo.title}
                    author = {book.volumeInfo.authors}
                />
            })
        }
    </div>
  )
}

export default BooksList