import { useState, useEffect } from 'react';
import endpoints from '../services/endpoints';
import get from '../services/axiosAPI';

const useGetReq = () => {
    const [events, setEvents] = useState(undefined);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        get(endpoints.events).then(event => {
            setEvents(event);
            setLoading(false);
        });
    }, []);

    return { events, loading };
};

export default useGetReq;