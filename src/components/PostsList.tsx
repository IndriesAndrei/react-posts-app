// parent component of NewPost so we are sending down state
import Post from "./Post";
import NewPost from "./NewPost";
import classes from './PostsLists.module.css';
import { useState } from "react";
import Modal from "./Modal";

const PostsLists = ({isPosting, onStopPosting}: {isPosting: any, onStopPosting: any}) => {
    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');


    const textChangeHandler = (e: any) => {
        setText(e.target.value);
    }

    const authorChangeHandler = (e: any) => {
        setAuthor(e.target.value);
    }

    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost 
                        onTextChange={textChangeHandler} 
                        onAuthorChange={authorChangeHandler} 
                    />
                </Modal>
            )}
            
            <ul className={classes.posts}>
                <Post author={author} body={text} />
                <Post author={author} body={text} />
            </ul>
        </>
    )
}

export default PostsLists;