import React from 'react'

export default function Article(props) {

    return (
        <div>
            {console.log(props.title)}
            <h3>{props.title}</h3>
        </div>
    )
}
