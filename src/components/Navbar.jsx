import React from 'react';
import classes from '../App.module.css';

const Navbar = () => {
    return (
        <nav className={classes.sidebar}>
            <div>
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
