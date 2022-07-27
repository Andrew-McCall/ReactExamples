import { useEffect, useState } from "react";
import axios from "axios";

const NotDog = () => {

    const [fact, setFact] = useState([]);

    const newFact = () =>{
        axios.get("https://catfact.ninja/facts?limit=10").then((result) => {
            setFact(result.data.data)
        }).catch((err) => {
            console.log(err)
        });
    }

    useEffect(newFact, [])

    return(<>
        <h1>^ Not Cat ^</h1>
        {fact.map((f,index) => <p key={index}>{f.fact}</p>)}
        <button onClick={newFact}>Gimmie Dog</button>
    </>)
    
}

export default NotDog;