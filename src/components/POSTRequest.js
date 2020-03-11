import React, { useState } from 'react'

export default function POSTRequest() {

    const [theTitle, setTitle] = useState("");

    const postTo = 'https://z756etr2ha.execute-api.us-east-2.amazonaws.com/production/add';

    const setTheTitle = (e) => {
        let newTitle = e.target.value
        setTitle(newTitle);
    }

    const submitHandler = e => {
        e.preventDefault();
        makePOST();
    }

    const makePOST = () => {
        let data = {title: theTitle};
        fetch(postTo, {
            method: 'POST',
            headers:{
                "Accept" : "application/json",
                "Content-type" : "application/json"
            },
            body : JSON.stringify(data),
        }).then((response) => {
             response = response.json();
        })
            .then((response) =>{
                console.log(response);
            }).catch(error => {
                console.log(error);
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
