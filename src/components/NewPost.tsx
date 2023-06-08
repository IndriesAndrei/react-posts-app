import { useState } from 'react';
import classes from './NewPost.module.css';

const NewPost = ({onCancel, onAddPost}: {onCancel: any, onAddPost: any}) => {
    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');


    const textChangeHandler = (e: any) => {
        setText(e.target.value);
    }

    const authorChangeHandler = (e: any) => {
        setAuthor(e.target.value);
    }

    const submitHandler = (e: any) => {
        e.preventDefault();
        const postData = {
            body: text,
            author: author
        };
        onAddPost(postData);
        onCancel();
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <h3>Add a new Post</h3>
            <p>
                <label htmlFor='body'>Text</label>
                <textarea id='body' required rows={3} onChange={textChangeHandler} />
            </p>
            <p>
                <label htmlFor='name'>Your name</label>
                <input type='text' id='name' required onChange={authorChangeHandler} />
            </p>
            <p className={classes.actions}>
                <button type='button' onClick={onCancel}>Cancel</button>
                <button>Submit</button>
            </p>
        </form>
    )
}

export default NewPost;