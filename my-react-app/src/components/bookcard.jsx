import React from 'react'

const BookCard = ({ book }) => {
    // lager lenken til amazon-søket
    const amazonUrl = `https://www.amazon.com/s?k=${book.isbn? book.isbn[0] : false}`

    console.log(book)

    return (
        <main>
            <article id="card">
                {/*Her listes de ulike delene av bookcardet*/ }
                {book.cover_i && <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={book.title} />}
                <h3>{book.title}</h3>
                <p>Author: {book.author_name}</p>
                <p>Published: {book.first_publish_year}</p>
                <p>Average Rating: {book.ratings_average || 'N/A'}</p>
                <a id="amazon" href={amazonUrl} >Search on Amazon</a>
            </article>
        </main>
    )
}

export default BookCard
