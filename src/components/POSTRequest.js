import React, { useState } from 'react'

export default function POSTRequest() {

    const [title, setTitle] = useState("");

    const setTheTitle = (e) => {
        let newTitle = e.target.value
        setTitle(newTitle);
    }

    // const submitHandler = e => {
    //     e.preventDefault();
    //     console.log(title);
    // }

    return (
        <div>
            <form>
                <div>
                    <input type="text" name="title" onChange={(e) => setTheTitle(e)}/>
                </div>
                <button type="submit">POST article</button>
            </form>
        </div>
    )
}
