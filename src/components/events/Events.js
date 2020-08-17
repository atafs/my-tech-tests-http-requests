import React from 'react';
import useGetReq from '../../hooks/useGetReq';


const Events = () => {
    const { events, loading } = useGetReq();
    console.log("events", events);

    if (loading) {
        // TODO we could add a spinner, content loader or something
        return <h2>Loading...</h2>
    }
    
    return (
        <>
            {
                events !== undefined && Object.keys(events).map(key => {
                    const { id, title, type } = events[key];
                    return <p key={id}>{title} = {type}</p>
                })
            }
        </>
    );
}


export default Events;