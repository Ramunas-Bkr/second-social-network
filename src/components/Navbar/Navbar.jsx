import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.sidebar}>
            <div className={classes.link}>
                <NavLink to='/profile' activeClassName={classes.active}> Profile </NavLink>
            </div>
            <div className={classes.link}>
                <NavLink to='/dialogs' activeClassName={classes.active}> Messages </NavLink>
            </div>
            <div className={classes.link}>
                <NavLink to='/news' activeClassName={classes.active}>News</NavLink>
            </div>
            <div className={classes.link}>
                <NavLink to='/music' activeClassName={classes.active}>Music</NavLink>
            </div>
            <div className={classes.link}>
                <NavLink to='/settings' activeClassName={classes.active}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar
