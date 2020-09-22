import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.sidebar}>
            <div className={classes.active}>
                Profile
            </div>
            <div>
                Messages
            </div>
            <div>
                News
            </div>
            <div>
                Music
            </div>
            <div>
                Settings
            </div>
        </nav>
    )
}

export default Navbar
