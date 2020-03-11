import React, { useState } from 'react'

export default function POSTRequest() {

    const [title, setTitle] = useState("");

    const setTheTitle = (e) => {
        let newTitle = e.target.value
        setTitle(newTitle);
        console.log(title);
    }

    const submitHandler = e => {
        e.preventDefault();
        console.log(title);
        makePOST();
    }

    const makePOST = (title) => {
        const postTo = 'https://z756etr2ha.execute-api.us-east-2.amazonaws.com/production/add';
        let data = title;
        fetch(postTo, {
            method: 'POST',
            headers:{
                "Content-type" : "application/json",
                "Accept" : "application/json"
            },
            body : JSON.stringify(data)
        }).then((response) => {
            response.json().then((res) =>{
                console.log(res);
            })
        })

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
                    <input type="text" name="title" onChange={(e) => setTheTitle(e)}/>
                </div>
                <button type="submit">POST article</button>
            </form>
        </div>
    )
}
