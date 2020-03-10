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
        padding: '10px',
        borderRadius: '10px',
        boxShadow: '0px 5px 20px rgb(71, 71, 71)',
        gridColumn: '1/4',
        gridRow: '4'
        
    }

    const buttonStyle = {
        padding: '4px',
        borderRadius: '5px',
        marginLeft: '20px'
    }

    const returnStyle = {
        padding: '10px',
        borderRadius: '10px',
        boxShadow: '0px 5px 20px rgb(71, 71, 71)',
        gridColumn: '1/4',
        gridRow: '5'
        
    }

    return (
        <div>
            <div style={GETStyle}>
                <h3>Click on the button below to make a call for a random Good News Article</h3>
                <button style={buttonStyle} onClick={() => setGet(!get)} >GET request</button>
            </div>
            <div style={returnStyle}>
                { random.map(article => <Article key={article.id}
                title={article.title}
                />)}
            </div>
        </div>
    )
}
