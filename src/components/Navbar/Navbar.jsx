import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = (props) => {
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
            <div className={classes.frends}>
                {props.navbarState.frends.map(f =>
                    <div key={f.id} className={classes.frend}>
                        <div className={classes.avatar}>
                            <img src={f.avatar} alt="avatar" />
                        </div>
                        <p>{f.name}</p>
                    </div>)}
            </div>
        </nav>
    )
}

export default Navbar
