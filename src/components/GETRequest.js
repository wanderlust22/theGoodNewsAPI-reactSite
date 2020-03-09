import React, { useEffect, useState } from 'react'

export default function GETRequest() {

    const [get, setGet] = useState(false);

    const getFrom = 'https://z756etr2ha.execute-api.us-east-2.amazonaws.com/production/item';

    const getRequest = async() => {
        const response = await fetch(getFrom);
        const data = await response.json();
        console.log(data);
        console.log(get);
    }

    useEffect( () => {
       getRequest();
    }, [get === true])

    const GETStyle = {
        position: 'absolute',
        margin: '8rem'
    }

    return (
        <div style={GETStyle}>
            <button onClick={() => setGet(!get)} >GET request</button>
        </div>
    )
}
