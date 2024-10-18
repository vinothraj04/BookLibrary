// src/App.jsx
import React, { useState } from 'react';
import AddBook from './AddBook';
import BookList from './BookList';
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const addBook = (book) => {
    setBooks((prevBooks) => [...prevBooks, book]);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Book Library</h1>
      <AddBook onAdd={addBook} />
      <div className="search-input">
        <input
          type="text"
          placeholder="Search by title or author"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <BookList books={filteredBooks} />
    </div>
  );
};

export default App;
