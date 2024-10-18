// src/components/BookList.jsx
import React from 'react';
import Book from './Book';

const BookList = ({ books }) => {
  return (
    <div>
      {books.map((book, index) => (
        <Book key={index} book={book} />
      ))}
    </div>
  );
};

export default BookList;