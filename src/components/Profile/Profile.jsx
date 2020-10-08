import React from 'react';
import Description from './Description/Description';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = (props) => {

    return (
        <div className={classes.profile}>
            <Description />
            <MyPosts postsData={props.profileState.postsData} />
        </div>
    )
}

export default Profile
