import React, { useState } from 'react'

export default function POSTRequest() {

    const [title, setTitle] = useState("");

    const setTheTitle = (e) => {
        let newTitle = e.target.value
        setTitle(newTitle);
    }

    const submitHandler = e => {
        e.preventDefault();
        console.log(title);
    }

    const POSTStyle = {
        borderRadius: '10px',
        boxShadow: '0px 5px 20px rgb(71, 71, 71)',
        padding: '10px',
        gridRow: '5/7',
        gridColumn: '1/4',
        margin: '5px'
    }

    return (
        <div style={POSTStyle}>
            <form onSubmit={(e) => submitHandler(e)}>
                <div>
                    <input type="text" name="title" value={title} onChange={(e) => setTheTitle(e)}/>
                </div>
                <button type="submit">POST article</button>
            </form>
        </div>
    )
}
