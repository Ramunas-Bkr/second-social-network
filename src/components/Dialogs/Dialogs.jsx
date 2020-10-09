import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import User from './User/User';

const Dialogs = (props) => {

    return (
        <div className={classes.dialogs}>
            <div className={classes.users}>
                {props.messagesState.usersData.map(u =>
                    <User 
                        key={u.id}
                        name={u.name}
                        image={u.avatar}
                        id={u.id}
                    />)
                }
            </div>
            <div className={classes.messages}>
                {props.messagesState.messageData.map(m =>
                    <Message
                        key={m.id}    
                        message={m.message}
                        isOwnerMessage={m.isOwnerMessage}
                        image={m.avatar}
                    />)
                }
            </div>
        </div>
    )
}

export default Dialogs
