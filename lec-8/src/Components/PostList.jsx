import { useState } from "react"; 
import NewPost from "./NewPost";
import Post from "./Post"; 

function PostList(){
    const[enteredBody,setEnteredBody]=useState('');
    const[enteredAuthor,setEnteredAuthor]=useState(''); 

    function bodyChangeHandler(event){
        setEnteredBody(event.target.value);
    }
    function authorChangeHandler(event){
        setEnteredAuthor(event.target.value);
    }
    return(
        <> 
        <NewPost onBodyChange={bodyChangeHandler} onAuthorChange ={authorChangeHandler}/> 
        <ul>
            <Post author={enteredAuthor} body={enteredBody}/>
            <Post author="Parth" body="Welcome to React js"></Post>
        </ul>
        </>
    );

    }

export default PostList;