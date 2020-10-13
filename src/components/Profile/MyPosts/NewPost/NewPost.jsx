import React from 'react'
import classes from './NewPost.module.css'

const NewPost = (props) => {

    let addElement = React.createRef()

    const addPost = () => {
        debugger
        let text = addElement.current.value
        props.addPost(text)
    }

    return (
        <div>
            <h2>New Post</h2>
            <textarea ref={addElement} placeholder="Enter your post" />
            <div>
                <button onClick={addPost} className={classes.button}>Add Post</button>
            </div>
        </div>
    )
}

export default NewPost
