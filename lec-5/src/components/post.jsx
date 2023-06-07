// function Post (props){
//     return (
//         <div style = {{backgroundColor:"red"}}>
//             <p>{props.author}</p>
//             <p>{props.body}</p>

//         </div>
//     )
// }
// export default Post;

// -> How to apply css in React jsx :- 

// import classes  from './Post.module.css';
// function Post(props) {
//     return (
//         <div className={classes.Post}>
//         <p className={classes.author}>{props.author}</p>
//         <p className={classes.text}>{props.body}</p>    
//         </div>
//     )
// }
// export default Post;   

import classes from './Post.module.css';
function Post(props){ 
    return (
        <div className={classes.Post}>
            <p className={classes.author}>{props.author}</p>
            <p className={classes.text}>{props.body}</p>
     </div>  
    )
} 
export default Post;   



