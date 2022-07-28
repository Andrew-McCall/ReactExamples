import {useContext} from 'react';
import MyContext from "../context"

const Child = () =>{
    const value = useContext(MyContext);
    return(<>
        
        <div>The answer is {value}.</div>
    
    </>)
}

export default Child;