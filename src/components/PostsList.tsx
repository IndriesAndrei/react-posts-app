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
            
            {posts.length > 0 && (<ul className={classes.posts}>
                {posts.map((post) => 
                    <Post author={post.author}  body={post.body} key={post.body} />
                )}
            </ul>)}
            {posts.length === 0 && <div style={{textAlign: 'center', color: 'white'}}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
            </div>}
            
        </>
    )
}

export default PostsLists;