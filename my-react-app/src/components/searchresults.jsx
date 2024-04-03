import React, { useState, useEffect } from 'react'
import BookCard from './bookcard'

const SearchResults = () => {
    const [searchTerm, setSearchTerm] = useState('James Bond')
    const [searchResults, setSearchResults] = useState([])

    const handleSearch = async () => {
        // Sjekk om søketermen har minst tre tegn før du utfører søket
        if (searchTerm.length < 3) {
            console.log("Søket må inneholde minst tre tegn");
            return
        }
    
        try {
            const response = await fetch(`https://openlibrary.org/search.json?q=${searchTerm}`)
            const data = await response.json();
            setSearchResults(data.docs);
        } catch (error) {
            console.error('Error fetching search results:', error)
        }
    }
    

    useEffect(() => {
        handleSearch(); // Utfør søk når komponenten lastes inn første gang
    }, []); // Tom avhengighetsliste for å kjøre effekten kun en gang

    return (
        <div>
            <h2>Search for Books</h2>
            <input
                type="text"
                placeholder="Enter search term"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            
            <div>
                {searchResults.map((book, index) => (
                    <BookCard key={index} book={book} />
                ))}
            </div>
        </div>
    );
};

export default SearchResults
