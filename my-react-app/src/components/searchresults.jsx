import React, { useState, useEffect } from 'react'
import BookCard from './bookcard'

const SearchResults = () => {
    //sjekker at James Bond er det første som kommer opp når siden lastes.
    const [searchTerm, setSearchTerm] = useState('James Bond')
    const [searchResults, setSearchResults] = useState([])

    const handleSearch = async () => {
        // sjekker søket om det er over 3 tegn.
        if (searchTerm.length < 3) {
            console.log("Søket må inneholde minst tre tegn");
            return
        }
    
        try {
            //her hentes api'et inn og begrenses til 20 treff slik at det ikke tar så lang tid å laste inn data.
            const response = await fetch(`https://openlibrary.org/search.json?q=${searchTerm}&limit=20`)
            const data = await response.json()
            setSearchResults(data.docs)
        } catch (error) {
            console.error('Error fetching search results:', error)
        }
    }
    

    useEffect(() => {
        // Søker så fort komponetene lastes inn.
        handleSearch() 
    }, []) 

    return (
        <div id="search">
            <h2>We got books</h2>
            <p>It might take a second for the search to load</p>
            <input id="input"type="text"placeholder="Enter search here"
            value={searchTerm}onChange={(e) => setSearchTerm(e.target.value)}/>
            <button onClick={handleSearch}>Search</button>
            
                {searchResults.map((book, index) => (
                    <BookCard key={index} book={book} />
                ))}
        </div>
    )
}

export default SearchResults
