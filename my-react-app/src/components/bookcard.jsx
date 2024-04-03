import React from 'react'

const BookCard = ({ book }) => {
    // Hjelpefunksjon for å generere lenken til Amazon-søk
    const amazonUrl = `https://www.amazon.com/s?k=${book.isbn? book.isbn[0] : false}`

    console.log(book)

    return (
        <>
            {book.cover_i && <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={book.title} />}
            <h3>{book.title}</h3>
            <p>Author: {book.author_name}</p>
            <p>Published: {book.first_publish_year}</p>
            <p>Average Rating: {book.ratings_average || 'N/A'}</p> {/* Bruk ratings_average hvis tilgjengelig */}
            <a href={amazonUrl} >
                Search on Amazon
            </a>
        </>
    )
}

export default BookCard
