import Post from "./Post";
import classes from './PostsLists.module.css';

const PostsLists = () => {
    return (
        <ul className={classes.posts}>
            <Post author="Andrew" body="React is awesome" />
            <Post author="Milan" body="React is really awesome" />
        </ul>
    )
}

export default PostsLists;