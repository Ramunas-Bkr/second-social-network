import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import User from './User/User';

const Dialogs = (props) => {

    return (
        <div className={classes.dialogs}>
            <div className={classes.users}>
                {props.usersData.map(u =>
                    <User 
                        id={u.id}
                        name={u.name}
                        image={u.avatar}
                    />)
                }
            </div>
            <div className={classes.messages}>
                {props.messageData.map(m =>
                    <Message 
                        message={m.message}
                    />)
                }
            </div>
        </div>
    )
}

export default Dialogs
