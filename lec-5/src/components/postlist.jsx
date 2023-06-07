import Post from "./post";
import classes from './Postlist.module.css';
function PostList(){
return ( <div>
    <ul className={classes.Posts}>
        <Post author ="sonu singh" body="React js is awesome"/>
        <Post author = "monu singh" body="vue js is awesome"/>
    </ul>
    </div>
);
}

export default PostList;