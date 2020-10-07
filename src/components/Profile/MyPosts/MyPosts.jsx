import React from 'react'
import NewPost from './NewPost/NewPost'
import Post from './Post/Post'

const MyPosts = (props) => {

    return (
        <div>
            <NewPost />
            {props.postsData.map(p => (
                <Post
                    message={p.message} 
                    likeCount={p.likeCount}
                    lolCount={p.lolCount}
                    heartCount={p.heartCount}
                    sadCount={p.sadCount}
                    angryCount={p.angryCount}
                />))
            }
        </div>
    )
}

export default MyPosts
