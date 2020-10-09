import React from 'react';
import classes from './Message.module.css';

const Message = (props) => {

    return (
        <div className={classes.message + ' ' + (props.isOwnerMessage ? classes.owner : classes.frend)}>
            <div className={classes.imageBlock}>
                <img src={props.image} alt="avatar" className={classes.avatarImage} />
            </div>
            <p>{props.message}</p>
        </div>
    )
}

export default Message
