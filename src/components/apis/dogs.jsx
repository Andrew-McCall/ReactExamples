import { useEffect, useState } from "react";
import axios from "axios";

const NotDog = () => {

    const [fact, setFact] = useState("Loading");

    const newFact = () =>{
        axios
        .get("https://catfact.ninja/fact").then((result) => {
            setFact(result.data.fact)
        }).catch((err) => {
            console.log(err)
        });
    }

    useEffect(newFact, [])

    return(<>
        <h1>^ Not Dog ^</h1>
        <p>{fact}</p>
        <button onClick={newFact}>Gimmie Dog</button>
    </>)
    
}

export default NotDog;