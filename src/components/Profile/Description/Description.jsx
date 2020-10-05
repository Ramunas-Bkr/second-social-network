import React from 'react'
import classes from './Description.module.css'
import avatar from '../../../img/115909.jpg'

const Description = () => {
    return (
        <div className={classes.mainProfile}>
            <div className={classes.heroPhoto}>
                <img src="https://www.gornergratbahn.ch/fileadmin/_processed_/8/c/csm_Matterhorn-Besteigung-Gornergrat-Wandern-Routen-Gipfel-H_rnligrat-Gornergrat_Bahn_ae7805f134.jpg" alt="hero" />
            </div>
            <div className={classes.avatar}>
                <img src={avatar} alt="avatar" />
            </div>
            <div className={classes.description}>
                <div className={classes.name}>
                    Ramunas
                </div>
                <div className={classes.location}>
                    <span>City:</span> Vilnius
                </div>
                <div className={classes.skils}>
                    <span>Skils:</span> JS, React, CSS
                </div>
            </div>
        </div>
    )
}

export default Description
