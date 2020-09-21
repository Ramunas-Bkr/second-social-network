import React from 'react';
import classes from '../App.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div className={classes.heroPhoto}>
                <img src="https://www.gornergratbahn.ch/fileadmin/_processed_/8/c/csm_Matterhorn-Besteigung-Gornergrat-Wandern-Routen-Gipfel-H_rnligrat-Gornergrat_Bahn_ae7805f134.jpg" alt="hero" />
            </div>
            <div className={classes.avatar}>
                Avatar + description
        </div>
            <div className={classes.myPosts}>
                My Posts
        </div>
            <div className={classes.newPost}>
                New Post
        </div>
            <div className={classes.post1}>
                Post1
        </div>
        </div>
    )
}

export default Profile
