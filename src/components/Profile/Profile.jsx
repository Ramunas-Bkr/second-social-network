import React from 'react';
import Description from './Description/Description';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.profile}>
            <Description />
            <MyPosts />
        </div>
    )
}

export default Profile
