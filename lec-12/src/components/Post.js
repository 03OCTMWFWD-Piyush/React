import { useRef } from "react";

function Post(){
    const countRef = useRef(0);

    const handleDate=()=>{
        countRef.current ++ ;
        console.log(`you clicked $ {countRef.current}times`);
    };

    console.log("you rendered me !!");
    return(
        <button onClick={handleDate}>clicke me !!</button>

    );
} 

export default Post; 