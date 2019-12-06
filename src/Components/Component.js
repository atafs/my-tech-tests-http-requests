import React, {useEffect} from 'react';
import httpGetRequest from '../Services/axiosAPI';
import getEvents from '../Services/endpoints';

const Component = () => {
    // hook
    useEffect(() => {
        // http request
        const events = httpGetRequest(getEvents);

        console.log('====================================');
        console.log("events", events);
        console.log('====================================');

    });

    return (
        <p>I AM HERE</p>
    );
}

export default Component;