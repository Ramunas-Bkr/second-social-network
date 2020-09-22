import React from 'react'
import classes from './Post.module.css'
import avatar from '../../../../img/115909.jpg'

const Post = () => {
    return (
        <div className={classes.postBox}>
            <div>
                <img src={avatar} alt={avatar} className={classes.avatarImage} />
                <div className={classes.postText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate mi orci, sed pulvinar ex venenatis convallis. Duis pellentesque dui non lacus rutrum, vel vehicula lectus placerat. Integer maximus.
                </div>
                <div className={classes.icons}>
                    <i className="fas fa-thumbs-up"></i>
                    <i className="fas fa-laugh"></i>
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-sad-tear"></i>
                    <i className="fas fa-angry"></i>
                    <span>58</span>
                </div>
            </div>
        </div>
    )
}

export default Post
