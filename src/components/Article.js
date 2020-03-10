import React from 'react'

export default function Article(props) {

    const articleStyle = {
        padding: '10px',
        borderRadius: '10px',
        boxShadow: '0px 5px 20px rgb(71, 71, 71)',
        gridColumn: '2/4',
        gridRow: '3/5'
        
    }
    return (
        <div style={articleStyle}>
            {console.log(props.title)}
            <h3>{props.title}</h3>
        </div>
    )
}
