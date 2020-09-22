import React from 'react'
import classes from './NewPost.module.css'

const NewPost = () => {
    return (
        <div>
            <h2>New Post</h2>
            <textarea placeholder="Enter your post" />
            <div>
                <button className={classes.button}>Post</button>
            </div>
        </div>
    )
}

export default NewPost
