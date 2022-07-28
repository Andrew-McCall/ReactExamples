import { useEffect, useState } from "react"
import Fact from "./fact"

const Mapper = () => {
    
    const [getCatFacts, setCatFacts] = useState([])

    useEffect(()=> {
        fetch("https://catfact.ninja/facts?limit=10").then(r => {

            r.json().then(body => {
                setCatFacts(body.data)
            })
    
        }).catch(err => {
            console.log(err)
        })
    }, [])

    if (getCatFacts.length === 0){
        return(<>
            <h1>Mapper</h1>
            <p>Loading</p>
        </>)
    }else{
        return(<>
            <h1>Mapper</h1>
            {getCatFacts.map((el, i) => <Fact key={i} fact={el.fact}/>)}
        </>)
    }
    

}

export default Mapper;