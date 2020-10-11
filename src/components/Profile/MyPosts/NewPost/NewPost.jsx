import React from 'react'
import classes from './NewPost.module.css'

const NewPost = () => {

    let addElemnet = React.createRef()

    const addAlert = () => {
        let text = addElemnet.current.value
        alert(text)
    }

    return (
        <div>
            <h2>New Post</h2>
            <textarea ref={addElemnet} placeholder="Enter your post" />
            <div>
                <button onClick={addAlert} className={classes.button}>Add Post</button>
            </div>
        </div>
    )
}

export default NewPost
