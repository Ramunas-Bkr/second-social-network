import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.sidebar}>
            <div className={`${classes.link} ${classes.active}`}>
                <a href='/profile'> Profile </a>
            </div>
            <div className={classes.link}>
                <a href='/dialogs'> Messages </a>
            </div>
            <div className={classes.link}>
                <a href='/news'>News</a>
            </div>
            <div className={classes.link}>
                <a href='/music'>Music</a>
            </div>
            <div className={classes.link}>
                <a href='/settings'>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar
