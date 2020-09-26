import React from 'react';
import Description from './Description/Description';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.profile}>
            <div className={classes.heroPhoto}>
                <img src="https://www.gornergratbahn.ch/fileadmin/_processed_/8/c/csm_Matterhorn-Besteigung-Gornergrat-Wandern-Routen-Gipfel-H_rnligrat-Gornergrat_Bahn_ae7805f134.jpg" alt="hero" />
            </div>
            <Description />
            <MyPosts />
        </div>
    )
}

export default Profile
