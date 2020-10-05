import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './User.module.css';

const User = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={classes.user}>
            <div className={classes.avatar}>
                <img src={props.image} alt="avatar" />
            </div>
            <NavLink to={path} activeClassName={classes.active}> {props.name} </NavLink>
        </div>
    )
}

export default User
