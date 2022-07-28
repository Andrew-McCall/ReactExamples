const Fact = ({fact}) => {

    if (fact.length > 100){
        return (<p>{fact.split(" ").splice(5).join(" ")}</p>)
    }else{
        return (<p>{fact}</p>)
    }

    

}

export default Fact;