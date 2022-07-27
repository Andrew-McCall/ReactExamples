import { useState, useEffect, Fragment } from 'react';

let var2 = 0;
const Example = () => {
    const [data, setData] = useState( 0 );
    
    useEffect(()=>{
        console.log(var2)
    }, [var2])

    const addOne = () => {
        if (data>500){
            setData(0)
        }else{
            setData(data+52) 
        }
        var2+=1
    }

    return(
        <Fragment>
            <h3> Count is: {data} </h3>
            <button onClick={addOne}> Add </button>
        </Fragment>
    );
};

export default Example;