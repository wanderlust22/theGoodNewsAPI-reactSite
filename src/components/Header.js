import React from 'react'

export default function Header() {
  
    const headerStyle = {
        padding: '10px',
        borderRadius: '10px',
        boxShadow: '0px 5px 20px rgb(71, 71, 71)',
        gridColumn: '1/4',
        gridRow: '1'
        
        }

    return (
        <div style={headerStyle}>
            <h1>The Good News API</h1>
        </div>
    )
}



