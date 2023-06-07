import classes from './NewPost.module.css';

const NewPost = ({onTextChange, onAuthorChange}: {onTextChange: any, onAuthorChange: any}) => {
    return (
        <form className={classes.form}>
            <h3>Add a new Post</h3>
            <p>
                <label htmlFor='body'>Text</label>
                <textarea id='body' required rows={3} onChange={onTextChange} />
            </p>
            <p>
                <label htmlFor='name'>Your name</label>
                <input type='text' id='name' required onChange={onAuthorChange} />
            </p>
        </form>
    )
}

export default NewPost;