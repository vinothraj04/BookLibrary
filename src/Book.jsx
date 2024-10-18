// src/components/Book.jsx
import React from 'react';

const Book = ({ book }) => {
  return (
    <div className="book">
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Category: {book.category}</p>
      <p>Details: {book.details}</p>
    </div>
  );
};

export default Book;
