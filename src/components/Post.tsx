// using modules.css so every css class should be unique in the app
import classes from './Post.module.css';

const Post = ({author, body}: {author: string, body: any}) => {
    return (
        <li className={classes.post}>
            <p className={classes.author}>{author}</p>
            <p className={classes.post_text}>{body}</p>
        </li>
    )
}

export default Post;