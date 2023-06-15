
function NewPost(props){
    return(
        <form>
            <p>
                <label htmlFor="body">Text</label>
                <textarea name="" id="body" required rows={5} onChange={props.onBodyChange} ></textarea>

            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" name="name" required onChange={props.onAuthorChange} />
            </p>

        </form>
    ) 
} 
 export default NewPost;  
