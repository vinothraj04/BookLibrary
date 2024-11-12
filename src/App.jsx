import React, { useState } from 'react';
import AddBook from './AddBook';
import BookList from './BookList';
import Loginpage from './loginpage';
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [user, setUser] = useState(false); // Track logged-in status with boolean

  // Function to handle book addition locally
  const addBook = (book) => {
    setBooks(prevBooks => [...prevBooks, book]);
  };

  // Handle "login" by updating the user state without checking credentials
  const handleLogin = () => {
    setUser(true); // Sets the user state to logged in without validation
  };

  // Handle "logout"
  const handleLogout = () => {
    setUser(false); // Resets user state to logged out
  };

  // Filter books based on search query
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      {user ? (
        <>
          <h1>Book Library</h1>
          <button onClick={handleLogout}>Logout</button>
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
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
