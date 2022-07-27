import {useState} from "react"
import LovelyForm from "./form"
import LovelyOutput from "./output"

const DatabaseAccess = () => {

    const [data, setData] = useState( ["amdrew", "me", "not me", "jorden", "gorden","andrew mccall"])
    
    return(
        <>
            <LovelyForm setData={setData}/>
            <LovelyOutput data={data}/>
        </>
    )

}

export default DatabaseAccess;