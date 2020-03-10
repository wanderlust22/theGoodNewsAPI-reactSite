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
        gridRow: '3/5',
        gridColumn: '1/4',
        margin: '5px'
        
    }

    const GETGrid = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridGap: '1em'
    }

    const buttonStyle = {
        padding: '4px',
        borderRadius: '5px',
        marginLeft: '20px'
    }

    const firstThird = {
        gridColumn: '1',
        borderRadius: '10px',
        boxShadow: '0px 5px 20px rgb(71, 71, 71)'
    }

    const twoThirds = {
        gridColumn: '2',
        marginLeft: '4em'
    }

    return (
        
            <div style={GETStyle}>
                <div style={GETGrid}>
                    <div style={firstThird}>
                        <h3>Click on the button below to make a call for a random Good News Article</h3>
                        <button style={buttonStyle} onClick={() => setGet(!get)} >GET request</button>
                    </div>
                    <div style={twoThirds}>
                        { random.map(article => <Article key={article.id}
                        title={article.title}
                        />)}
                    </div>
                </div>
            </div>
    )
}
