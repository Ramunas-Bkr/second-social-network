import React from 'react'
import classes from './AddMessage.module.css'

const AddMessage = () => {

    let alertValue = React.createRef()

    const addAlert = () => {
        let text = alertValue.current.value
        alert(text)
    }

    return (
        <div className={classes.addMessage}>
            <textarea ref={alertValue} placeholder="Enter your message"></textarea>
            <button className={classes.button} onClick={addAlert}>Add message</button>
        </div>
    )
}

export default AddMessage
