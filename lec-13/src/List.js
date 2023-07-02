import { useEffect, useState } from "react";


function List({getItems}){
    const [items,setItems]=useState([]);

    useEffect(()=>{
        setItems(getItems(5));
        console.log("updatting Items");
    },[getItems]);

    return items.map(item=><div key={item}>{item}</div>)
    }

    export default List;  