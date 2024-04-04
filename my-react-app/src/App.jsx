import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SearchResults from './components/searchresults'
import BookCard from './components/bookcard'


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SearchResults />} />
                <Route path="/book/:id" element={<BookCard />} />
            </Routes>
        </Router>
    )
}

export default App
