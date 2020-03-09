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
        margin: '3rem',
        padding: '10px',
        marginTop: '10%',
        borderRadius: '10px',
        boxShadow: '0px 5px 20px rgb(71, 71, 71)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '90%'
    }

    const buttonStyle = {
        padding: '4px',
        borderRadius: '5px',
        marginLeft: '20px'
    }

    const returnStyle = {
        position: 'absolute',
        margin: '3rem',
        padding: '10px',
        marginTop: '20%',
        borderRadius: '10px',
        boxShadow: '0px 5px 20px rgb(71, 71, 71)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '90%'
        
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
