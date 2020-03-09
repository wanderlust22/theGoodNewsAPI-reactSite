import React, { useEffect, useState } from 'react';
import Article from './Article';

export default function GETRequest() {

    const [get, setGet] = useState(false);
    const [random, setRandom] = useState([]);

    const getFrom = 'https://z756etr2ha.execute-api.us-east-2.amazonaws.com/production/item';

    const getRequest = async() => {
        const response = await fetch(getFrom);
        const data = await response.json();
        setRandom(data);
        setGet(false);
    }

    useEffect( () => {
        if (get === true) {
            getRequest();
        }
    }, [get])

    const GETStyle = {
        position: 'absolute',
        margin: '8rem'
    }

    return (
        <div style={GETStyle}>
            <button onClick={() => setGet(!get)} >GET request</button>
            {console.log(random)}
            { random.map(article => <Article key={article.id}
            title={article.title}
            />)}
        </div>
    )
}
