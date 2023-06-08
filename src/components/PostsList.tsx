// parent component of NewPost so we are sending down state
import Post from "./Post";
import NewPost from "./NewPost";
import classes from './PostsLists.module.css';
import Modal from "./Modal";
import { useState } from "react";

const PostsLists = ({isPosting, onStopPosting}: {isPosting: any, onStopPosting: any}) => {
    const [posts, setPosts] = useState<any[]>([]);

    const addPostHandler = (postData: any) => {
        // add the new post the existing posts
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost 
                        onAddPost={addPostHandler}
                        onCancel={onStopPosting}
                    />
                </Modal>
            )}
            
            <ul className={classes.posts}>
                {posts.map((post) => 
                    <Post author={post.author}  body={post.body} />
                )}
            </ul>
        </>
    )
}

export default PostsLists;