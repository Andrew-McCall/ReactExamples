import { useEffect, useState } from "react";
import axios from "axios";

const NotDog = () => {

    const [fact, setFact] = useState([]);

//s?limit=10

    const newFact = () =>{
        axios.get("https://catfact.ninja/facts?limit=20").then((result) => {
            setFact(result.data.data)
        }).catch((err) => {
            console.log(err)
        });
    }

    useEffect(newFact, [])

    return(<>
        <h1>^ Not Cat ^</h1>
        <ol>{fact.map(f => <li>{f.fact}</li>)}</ol>
        <button onClick={newFact}>Gimmie Dog</button>
    </>)
    
}

export default NotDog;