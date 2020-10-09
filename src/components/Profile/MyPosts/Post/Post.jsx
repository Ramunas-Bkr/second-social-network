import React from 'react'
import classes from './Post.module.css'
import avatar from '../../../../img/115909.jpg'

const Post = (props) => {
    return (
        <div className={classes.postBox}>
            <div>
                <img src={avatar} alt="avatar" className={classes.avatarImage} />
                <div className={classes.postText}>
                    {props.message}
                </div>
                <div className={classes.icons}>
                    <i className="fas fa-thumbs-up"></i>
                    <span>{props.likeCount}</span>
                    <i className="fas fa-laugh"></i>
                    <span>{props.lolCount}</span>
                    <i className="fas fa-heart"></i>
                    <span>{props.heartCount}</span>
                    <i className="fas fa-sad-tear"></i>
                    <span>{props.sadCount}</span>
                    <i className="fas fa-angry"></i>
                    <span>{props.angryCount}</span>
                </div>
            </div>
        </div>
    )
}

export default Post
