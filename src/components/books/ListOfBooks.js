import React from 'react';
import usePostReqPagination from '../../hooks/usePostReqPagination';

import Book from './Book';
import './ListOfBooks.css';

const ListOfBooks = () => {
    const { books, currentPage, loading } = usePostReqPagination(3);
    console.log("books, currentPage, loading", books, currentPage, loading);

    if (loading) {
        // TODO we could add a spinner, content loader or something
        return <h2>Loading...</h2>
    }

    return (
        <div>
            {books.map(book => (
                <Book key={book.id} book={book}/>
            ))}
        </div>
    )    
};

export default ListOfBooks;