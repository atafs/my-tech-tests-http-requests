import { useState, useEffect } from 'react';
import endpoints from '../services/endpoints';
import { post } from '../services/axiosAPI';

const usePostReqPagination = (page) => {
    const [books, setBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const config = {
            page
        };

        post(endpoints.books, config).then(data => {
            console.log('data', data);
            setBooks(data.books);
            setCurrentPage(page);
            setLoading(false);
        });
    }, [page]);

    return { books, currentPage, loading };
};

export default usePostReqPagination;